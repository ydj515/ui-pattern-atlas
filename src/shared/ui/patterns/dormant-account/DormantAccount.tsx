export interface DormantAccountProps {
  /** The sign-in shown so the person knows which account this is. */
  readonly account: string;
  /** When it became dormant, already formatted. */
  readonly since: string;
  /** What was kept while dormant, one line each. */
  readonly kept: readonly string[];
  readonly onReactivate: () => void;
  readonly labels?: {
    readonly title: string;
    readonly body: (since: string) => string;
    readonly keptTitle: string;
    readonly reactivate: string;
  };
}

const DEFAULT_LABELS = {
  title: "휴면 계정이에요",
  body: (since: string) => `1년 동안 로그인하지 않아 ${since}에 휴면 계정으로 바꿨어요`,
  keptTitle: "따로 보관해 둔 정보",
  reactivate: "휴면 풀고 이어서 쓰기",
};

/**
 * Shown on sign-in to an account put to sleep for inactivity: which account, since when,
 * what was kept, and one step back in.
 */
export function DormantAccount({
  account,
  since,
  kept,
  onReactivate,
  labels = DEFAULT_LABELS,
}: DormantAccountProps) {
  return (
    <section className="grid gap-3 text-sm">
      <h3 className="font-semibold text-slate-900">{labels.title}</h3>
      <p className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-800">{account}</p>
      <p className="text-slate-600">{labels.body(since)}</p>
      <div className="grid gap-1">
        <h4 className="text-xs text-slate-500">{labels.keptTitle}</h4>
        <ul className="grid gap-1">
          {kept.map((line) => (
            <li key={line} className="flex gap-2 text-slate-700">
              <span aria-hidden="true" className="text-emerald-600">
                ✓
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={onReactivate}
        className="rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
      >
        {labels.reactivate}
      </button>
    </section>
  );
}
