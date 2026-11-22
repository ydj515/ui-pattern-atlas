import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SIZE = 21;

// Illustration only: finder squares plus a fixed scatter of modules.
function module(x: number, y: number) {
  const finder = (fx: number, fy: number) => {
    const dx = x - fx;
    const dy = y - fy;
    if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return null;
    const ring = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
    return ring !== 2;
  };
  const inFinder = finder(0, 0) ?? finder(SIZE - 7, 0) ?? finder(0, SIZE - 7);
  if (inFinder !== null) return inFinder;
  if ((x < 8 && y < 8) || (x > SIZE - 9 && y < 8) || (x < 8 && y > SIZE - 9)) return false;
  return (x * 7 + y * 13 + x * y) % 5 < 2;
}

const PATH = Array.from({ length: SIZE * SIZE }, (_, index) => {
  const x = index % SIZE;
  const y = Math.floor(index / SIZE);
  return module(x, y) ? `M${x + 2} ${y + 2}h1v1h-1z` : "";
}).join("");

/** Same invite as QrShareDemo: QR 코드로 초대하기 → the code with the link spelled out. */
export function QrShareThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-center text-[5px]">
        <p className="text-[7.5px] font-bold">토요일 독서 모임</p>
        <span
          className="thumb-anim thumb-qr-ask absolute inset-x-[16px] top-[42px] rounded bg-slate-900 py-[3px] text-[6.5px] font-semibold text-white"
          style={{ opacity: 0 }}
        >
          QR 코드로 초대하기
        </span>
        <div className="thumb-anim thumb-qr-open">
          <svg
            viewBox={`0 0 ${SIZE + 4} ${SIZE + 4}`}
            className="mx-auto mt-[4px] size-[44px]"
            shapeRendering="crispEdges"
          >
            <path d={PATH} fill="#0f172a" />
          </svg>
          <p className="mt-[3px] text-slate-600">카메라로 찍으면 초대 페이지가 열려요</p>
          <p className="text-slate-500">https://atlas.example/i/7KQ2</p>
          <span className="mt-[3px] inline-block rounded border border-slate-200 px-[4px] text-[5.5px]">
            닫기
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-qr-cursor" />
    </ThumbStage>
  );
}
