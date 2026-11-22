// QR encoder for short links: byte mode, error correction level M, versions 1–3
// (up to 42 bytes). Kept here so the component stays copy-paste ready.
const CAPACITY = [
  { version: 1, data: 16, ec: 10, align: [] as number[] },
  { version: 2, data: 28, ec: 16, align: [6, 18] },
  { version: 3, data: 44, ec: 26, align: [6, 22] },
];

function multiply(x: number, y: number) {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z;
}

function errorCorrection(data: readonly number[], degree: number) {
  const divisor = new Array<number>(degree).fill(0);
  divisor[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < degree; j++) {
      divisor[j] = multiply(divisor[j]!, root);
      if (j + 1 < degree) divisor[j] = divisor[j]! ^ divisor[j + 1]!;
    }
    root = multiply(root, 0x02);
  }
  const result = new Array<number>(degree).fill(0);
  for (const byte of data) {
    const factor = byte ^ result.shift()!;
    result.push(0);
    divisor.forEach((coefficient, i) => {
      result[i] = result[i]! ^ multiply(coefficient, factor);
    });
  }
  return result;
}

/** Returns the module matrix (true = dark) for `text`. Throws when it is too long. */
export function encodeQr(text: string): boolean[][] {
  const bytes = Array.from(new TextEncoder().encode(text));
  const spec = CAPACITY.find((item) => bytes.length <= (item.data * 8 - 12) / 8);
  if (!spec) throw new Error("QR text is too long for versions 1-3");

  const bits: number[] = [];
  const push = (value: number, length: number) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1);
  };
  push(0b0100, 4);
  push(bytes.length, 8);
  bytes.forEach((byte) => push(byte, 8));
  push(0, Math.min(4, spec.data * 8 - bits.length));
  while (bits.length % 8) bits.push(0);
  const data: number[] = [];
  for (let i = 0; i < bits.length; i += 8)
    data.push(bits.slice(i, i + 8).reduce((byte, bit) => (byte << 1) | bit, 0));
  for (let pad = 0xec; data.length < spec.data; pad ^= 0xec ^ 0x11) data.push(pad);
  const codewords = [...data, ...errorCorrection(data, spec.ec)];

  const size = spec.version * 4 + 17;
  const modules = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
  const fixed = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
  const set = (x: number, y: number, dark: boolean) => {
    modules[y]![x] = dark;
    fixed[y]![x] = true;
  };

  for (let i = 0; i < size; i++) {
    set(6, i, i % 2 === 0);
    set(i, 6, i % 2 === 0);
  }
  for (const [cx, cy] of [
    [3, 3],
    [size - 4, 3],
    [3, size - 4],
  ] as const) {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        const distance = Math.max(Math.abs(dx), Math.abs(dy));
        if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, distance !== 2 && distance !== 4);
      }
    }
  }
  const last = spec.align.length - 1;
  spec.align.forEach((ax, i) =>
    spec.align.forEach((ay, j) => {
      if ((i === 0 && j === 0) || (i === 0 && j === last) || (i === last && j === 0)) return;
      for (let dy = -2; dy <= 2; dy++)
        for (let dx = -2; dx <= 2; dx++)
          set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }),
  );

  // Format information for level M (00) with mask 0.
  const format = 0;
  let remainder = format;
  for (let i = 0; i < 10; i++) remainder = (remainder << 1) ^ ((remainder >>> 9) * 0x537);
  const formatBits = ((format << 10) | remainder) ^ 0x5412;
  const bit = (i: number) => ((formatBits >>> i) & 1) === 1;
  for (let i = 0; i <= 5; i++) set(8, i, bit(i));
  set(8, 7, bit(6));
  set(8, 8, bit(7));
  set(7, 8, bit(8));
  for (let i = 9; i < 15; i++) set(14 - i, 8, bit(i));
  for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(i));
  for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(i));
  set(8, size - 8, true);

  let index = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vertical = 0; vertical < size; vertical++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? size - 1 - vertical : vertical;
        if (fixed[y]![x]) continue;
        const dark =
          index < codewords.length * 8 &&
          ((codewords[index >>> 3]! >>> (7 - (index & 7))) & 1) === 1;
        index++;
        modules[y]![x] = dark !== ((x + y) % 2 === 0);
      }
    }
  }
  return modules;
}

export interface QrShareProps {
  readonly url: string;
  /** Spoken name, e.g. "초대 링크 QR 코드". */
  readonly label: string;
  readonly size?: number;
}

/**
 * QR code for a short link, drawn as one SVG path with the required quiet zone. Show
 * the link as text next to it too, for people who cannot scan.
 */
export function QrShare({ url, label, size = 160 }: QrShareProps) {
  const modules = encodeQr(url);
  const count = modules.length + 8;
  const path = modules
    .flatMap((row, y) => row.map((dark, x) => (dark ? `M${x + 4} ${y + 4}h1v1h-1z` : "")))
    .join("");
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${count} ${count}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className="rounded-lg bg-white"
    >
      <path d={path} fill="#0f172a" />
    </svg>
  );
}
