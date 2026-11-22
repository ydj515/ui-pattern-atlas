import { useId, useState, type KeyboardEvent } from "react";

export interface InviteDialogProps {
  readonly title: string;
  readonly onInvite: (emails: readonly string[]) => void;
  readonly onClose: () => void;
  readonly placeholder?: string;
  readonly inviteLabel?: (count: number) => string;
  readonly closeLabel?: string;
  readonly emailLabel?: string;
  readonly invalidLabel?: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Invite form that turns each address into a removable chip on Enter, comma or
 * space. Invalid addresses stay in the field with an error instead of becoming chips,
 * and the send button says how many people it will invite.
 */
export function InviteDialog({
  title,
  onInvite,
  onClose,
  placeholder = "name@example.com",
  inviteLabel = (count) => `${count}명 초대하기`,
  closeLabel = "닫기",
  emailLabel = "이메일",
  invalidLabel = "이메일 주소 형식을 확인해 주세요",
}: InviteDialogProps) {
  const id = useId();
  const [emails, setEmails] = useState<readonly string[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");

  function commit() {
    const value = draft.trim().replace(/,$/, "");
    if (!value) return;
    if (!EMAIL.test(value)) {
      setError(invalidLabel);
      return;
    }
    if (!emails.includes(value)) setEmails([...emails, value]);
    setDraft("");
    setError("");
  }

  function handleKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === "," || event.key === " ") {
      event.preventDefault();
      commit();
    } else if (event.key === "Backspace" && !draft && emails.length) {
      setEmails(emails.slice(0, -1));
    }
  }

  return (
    <section
      role="dialog"
      aria-labelledby={id}
      className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200"
    >
      <h2 id={id} className="text-base font-bold text-slate-900">
        {title}
      </h2>
      <label htmlFor={`${id}-input`} className="mt-3 block text-xs text-slate-600">
        {emailLabel}
      </label>
      <div className="mt-1 flex flex-wrap gap-1 rounded-lg border border-slate-300 p-1.5 focus-within:ring-2 focus-within:ring-blue-600">
        {emails.map((email) => (
          <span
            key={email}
            className="inline-flex items-center gap-1 rounded-full bg-slate-100 py-0.5 pr-1 pl-2 text-xs text-slate-800"
          >
            {email}
            <button
              type="button"
              aria-label={`${email} 빼기`}
              onClick={() => setEmails(emails.filter((item) => item !== email))}
              className="grid size-4 place-items-center rounded-full hover:bg-slate-200"
            >
              <span aria-hidden="true">×</span>
            </button>
          </span>
        ))}
        <input
          id={`${id}-input`}
          value={draft}
          placeholder={emails.length ? "" : placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={`${id}-error`}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKey}
          onBlur={commit}
          className="min-w-24 flex-1 px-1 text-sm outline-none"
        />
      </div>
      <p id={`${id}-error`} className="mt-1 h-4 text-xs text-rose-600">
        {error}
      </p>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
        >
          {closeLabel}
        </button>
        <button
          type="button"
          disabled={!emails.length}
          onClick={() => onInvite(emails)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white disabled:bg-slate-300"
        >
          {inviteLabel(emails.length)}
        </button>
      </div>
    </section>
  );
}
