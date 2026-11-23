import { useId, useState } from "react";

export interface AccountDeletionLabels {
  readonly title: string;
  readonly lose: string;
  readonly reason: string;
  readonly noReason: string;
  readonly confirm: (word: string) => string;
  readonly submit: string;
  readonly done: (days: number) => string;
}

export interface AccountDeletionProps {
  /** What disappears with the account, e.g. "적립금 2,300원". */
  readonly losses: readonly string[];
  readonly reasons: readonly string[];
  /** Word to type before the button works. */
  readonly confirmWord: string;
  /** Days during which signing in again cancels the deletion. */
  readonly graceDays: number;
  readonly onDelete: (reason: string) => void;
  readonly labels?: AccountDeletionLabels;
}

const DEFAULT_LABELS: AccountDeletionLabels = {
  title: "회원 탈퇴",
  lose: "탈퇴하면 함께 사라져요",
  reason: "떠나는 이유(선택)",
  noReason: "고르지 않음",
  confirm: (word) => `계속하려면 '${word}'를 입력해 주세요`,
  submit: "탈퇴하기",
  done: (days) => `탈퇴를 접수했어요. ${days}일 안에 다시 로그인하면 취소돼요.`,
};

/**
 * Leaving for good: lists what is lost, asks for an optional reason, and only enables
 * the button after a typed confirmation. The result says how to change one's mind.
 */
export function AccountDeletion({
  losses,
  reasons,
  confirmWord,
  graceDays,
  onDelete,
  labels = DEFAULT_LABELS,
}: AccountDeletionProps) {
  const id = useId();
  const [reason, setReason] = useState("");
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p role="status" className="text-sm text-slate-700">
        {labels.done(graceDays)}
      </p>
    );
  }

  return (
    <section aria-labelledby={`${id}-title`} className="grid gap-3 text-sm text-slate-700">
      <h2 id={`${id}-title`} className="text-lg font-bold text-slate-900">
        {labels.title}
      </h2>
      <div className="rounded-lg bg-rose-50 p-3">
        <p className="font-medium text-rose-900">{labels.lose}</p>
        <ul className="mt-1 list-disc pl-5 text-rose-900">
          {losses.map((loss) => (
            <li key={loss}>{loss}</li>
          ))}
        </ul>
      </div>
      <label className="font-medium text-slate-800">
        {labels.reason}
        <select
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"
        >
          <option value="">{labels.noReason}</option>
          {reasons.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="font-medium text-slate-800">
        {labels.confirm(confirmWord)}
        <input
          value={typed}
          onChange={(event) => setTyped(event.target.value)}
          autoComplete="off"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"
        />
      </label>
      <button
        type="button"
        disabled={typed.trim() !== confirmWord}
        onClick={() => {
          onDelete(reason);
          setDone(true);
        }}
        className="rounded-lg bg-rose-600 py-2 font-semibold text-white disabled:opacity-40"
      >
        {labels.submit}
      </button>
    </section>
  );
}
