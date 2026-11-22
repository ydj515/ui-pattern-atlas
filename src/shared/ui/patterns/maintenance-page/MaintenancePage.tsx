export interface MaintenancePageProps {
  readonly start: Date;
  readonly end: Date;
  /** Defaults to the current time. */
  readonly now?: Date;
  readonly notified: boolean;
  readonly onNotify: () => void;
  readonly title?: string;
  /** Builds the "time left" line from whole minutes. */
  readonly formatRemaining?: (minutes: number) => string;
  /** Date line above the time window, e.g. "11월 23일". */
  readonly formatDay?: (date: Date) => string;
  readonly notifyLabel?: string;
  readonly notifiedLabel?: string;
}

const time = new Intl.DateTimeFormat("ko-KR", {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});
const day = new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric" });

function defaultRemaining(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `약 ${rest}분 남았어요`;
  return rest === 0 ? `약 ${hours}시간 남았어요` : `약 ${hours}시간 ${rest}분 남았어요`;
}

/**
 * Planned-downtime page: when it started, when it ends (in the reader's time zone),
 * how long is left, and a way to hear when it is over.
 */
export function MaintenancePage({
  start,
  end,
  now = new Date(),
  notified,
  onNotify,
  title = "서비스 점검 중이에요",
  formatRemaining = defaultRemaining,
  formatDay = (date) => day.format(date),
  notifyLabel = "끝나면 알림 받기",
  notifiedLabel = "끝나면 메일로 알려 드릴게요",
}: MaintenancePageProps) {
  const total = end.getTime() - start.getTime();
  const elapsed = Math.min(Math.max(now.getTime() - start.getTime(), 0), total);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <h1 className="text-base font-semibold text-slate-900">{title}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {formatDay(start)} <time dateTime={start.toISOString()}>{time.format(start)}</time>–
        <time dateTime={end.toISOString()}>{time.format(end)}</time>
      </p>
      <div
        role="progressbar"
        aria-label="점검 진행"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round((elapsed / total) * 100)}
        className="mx-auto mt-4 h-1.5 max-w-56 overflow-hidden rounded-full bg-slate-100"
      >
        <div
          className="h-full origin-left bg-amber-500"
          style={{ transform: `scaleX(${elapsed / total})` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {formatRemaining(Math.max(0, Math.ceil((total - elapsed) / 60_000)))}
      </p>
      <button
        type="button"
        onClick={onNotify}
        disabled={notified}
        className="mt-4 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:border-transparent disabled:text-emerald-700"
      >
        {notified ? notifiedLabel : notifyLabel}
      </button>
    </section>
  );
}
