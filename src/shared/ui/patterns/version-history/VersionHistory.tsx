import { useId } from "react";

export interface Version {
  readonly id: string;
  /** When it was saved, already formatted. */
  readonly time: string;
  readonly author: string;
  readonly summary: string;
  readonly body: string;
}

export interface VersionHistoryProps {
  /** Newest first; the first one is the current version. */
  readonly versions: readonly Version[];
  readonly value: string;
  readonly onSelect: (id: string) => void;
  readonly onRestore: (id: string) => void;
  readonly labels?: {
    readonly title: string;
    readonly current: string;
    readonly restore: string;
    readonly note: string;
  };
}

const DEFAULT_LABELS = {
  title: "버전 기록",
  current: "지금 버전",
  restore: "이 버전으로 되돌리기",
  note: "되돌려도 지금 내용은 기록에 남아요",
};

/**
 * Saved versions, newest first, with who changed what. Picking one previews it; restoring
 * adds a new version on top instead of erasing the ones after it.
 */
export function VersionHistory({
  versions,
  value,
  onSelect,
  onRestore,
  labels = DEFAULT_LABELS,
}: VersionHistoryProps) {
  const name = useId();
  const chosen = versions.find((version) => version.id === value) ?? versions[0];
  const isCurrent = chosen?.id === versions[0]?.id;
  return (
    <div className="grid gap-3 text-sm">
      <fieldset className="grid gap-1">
        <legend className="mb-1 font-semibold text-slate-900">{labels.title}</legend>
        {versions.map((version, index) => (
          <label
            key={version.id}
            className="flex cursor-pointer gap-2 rounded-lg border border-transparent px-2 py-1.5 has-checked:border-slate-300 has-checked:bg-slate-50"
          >
            <input
              type="radio"
              name={name}
              value={version.id}
              checked={version.id === chosen?.id}
              onChange={() => onSelect(version.id)}
              className="mt-1"
            />
            <span className="grid flex-1">
              <span className="text-slate-900">
                {version.time}
                {index === 0 ? (
                  <span className="ml-1.5 rounded bg-slate-900 px-1 text-[10px] text-white">
                    {labels.current}
                  </span>
                ) : null}
              </span>
              <span className="text-xs text-slate-500">
                {version.author} · {version.summary}
              </span>
            </span>
          </label>
        ))}
      </fieldset>
      {chosen ? (
        <div className="grid gap-2 rounded-xl border border-slate-200 p-3">
          <p className="whitespace-pre-line text-slate-700">{chosen.body}</p>
          {isCurrent ? null : (
            <>
              <button
                type="button"
                onClick={() => onRestore(chosen.id)}
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white"
              >
                {labels.restore}
              </button>
              <p className="text-xs text-slate-500">{labels.note}</p>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
