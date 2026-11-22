export interface NearbyDevice {
  readonly id: string;
  readonly name: string;
  readonly kind: "phone" | "tablet" | "laptop";
}

export type NearbyStatus = "idle" | "waiting" | "sent" | "declined";

export interface NearbyShareProps {
  readonly title: string;
  readonly devices: readonly NearbyDevice[];
  readonly searching: boolean;
  readonly target: string | null;
  readonly status: NearbyStatus;
  readonly onPick: (id: string) => void;
  readonly labels?: {
    readonly searching: string;
    readonly waiting: string;
    readonly sent: string;
    readonly declined: string;
  };
}

const DEFAULT_LABELS = {
  searching: "주변 기기를 찾는 중",
  waiting: "수락을 기다리는 중",
  sent: "보냈어요",
  declined: "상대가 거절했어요",
};

function DeviceIcon({ kind }: { readonly kind: NearbyDevice["kind"] }) {
  const shape =
    kind === "phone"
      ? "M8 3h8v18H8z"
      : kind === "tablet"
        ? "M5 4h14v16H5z"
        : "M5 5h14v10H5zM3 18h18";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-none stroke-current stroke-2"
    >
      <path d={shape} strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Send to a nearby device: found devices appear as they are discovered, picking one
 * waits for the other side to accept, and the result (sent or declined) is announced.
 * Discovery itself comes from the platform; this is the surface around it.
 */
export function NearbyShare({
  title,
  devices,
  searching,
  target,
  status,
  onPick,
  labels = DEFAULT_LABELS,
}: NearbyShareProps) {
  const statusText = (id: string) =>
    id !== target
      ? ""
      : status === "waiting"
        ? labels.waiting
        : status === "sent"
          ? labels.sent
          : status === "declined"
            ? labels.declined
            : "";
  return (
    <section aria-label={title} className="grid gap-3">
      <p aria-live="polite" className="flex items-center gap-2 text-xs text-slate-600">
        {searching ? (
          <span
            aria-hidden="true"
            className="size-2 animate-ping rounded-full bg-blue-500 motion-reduce:animate-none"
          />
        ) : null}
        {searching ? labels.searching : ""}
      </p>
      <ul className="grid grid-cols-3 gap-2">
        {devices.map((device) => (
          <li
            key={device.id}
            className="transition duration-300 motion-reduce:transition-none starting:scale-90 starting:opacity-0"
          >
            <button
              type="button"
              disabled={status === "waiting"}
              onClick={() => onPick(device.id)}
              aria-describedby={device.id === target ? `${device.id}-status` : undefined}
              className={`grid w-full justify-items-center gap-1 rounded-xl p-2 text-xs text-slate-800 hover:bg-slate-100 disabled:cursor-wait ${device.id === target && status === "sent" ? "bg-emerald-50" : ""}`}
            >
              <span
                className={`grid size-11 place-items-center rounded-full ${device.id === target && status === "waiting" ? "bg-blue-100 text-blue-700 ring-2 ring-blue-400" : "bg-slate-100 text-slate-600"}`}
              >
                <DeviceIcon kind={device.kind} />
              </span>
              {device.name}
              <span
                id={`${device.id}-status`}
                role={device.id === target ? "status" : undefined}
                className="h-4 text-[11px] text-slate-500"
              >
                {statusText(device.id)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
