export interface PermissionDeniedProps {
  /** e.g. "이 문서를 볼 권한이 없어요". */
  readonly title: string;
  /** Who can grant access, e.g. "소유자 김하늘 님에게 권한을 요청할 수 있어요." */
  readonly description: string;
  /** Signed-in account, so people notice when they use the wrong one. */
  readonly account?: string;
  readonly requested: boolean;
  readonly onRequest: () => void;
  readonly requestLabel?: string;
  readonly requestedLabel?: string;
  /** What happens after the request, e.g. "승인되면 메일로 알려 드려요." */
  readonly requestedMessage?: string;
}

/**
 * Says why something cannot be opened and how to get access, instead of a bare 403.
 * After a request the button turns into a confirmation in a status region.
 */
export function PermissionDenied({
  title,
  description,
  account,
  requested,
  onRequest,
  requestLabel = "권한 요청",
  requestedLabel = "요청함",
  requestedMessage = "승인되면 메일로 알려 드려요.",
}: PermissionDeniedProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <span
        aria-hidden="true"
        className="mx-auto grid size-10 place-items-center rounded-full bg-slate-100 text-slate-500"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path d="M6 8V6a4 4 0 1 1 8 0v2h.5A1.5 1.5 0 0 1 16 9.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-7A1.5 1.5 0 0 1 5.5 8H6Zm2 0h4V6a2 2 0 1 0-4 0v2Z" />
        </svg>
      </span>
      <p className="mt-3 text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
      {account ? <p className="mt-1 text-xs text-slate-400">{account}</p> : null}
      <button
        type="button"
        onClick={onRequest}
        disabled={requested}
        className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:bg-slate-200 disabled:text-slate-500"
      >
        {requested ? requestedLabel : requestLabel}
      </button>
      <p role="status" className="mt-2 min-h-4 text-xs text-emerald-700">
        {requested ? requestedMessage : ""}
      </p>
    </div>
  );
}
