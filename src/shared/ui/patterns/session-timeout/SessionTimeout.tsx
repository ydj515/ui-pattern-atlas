import { useEffect, useId, useRef } from "react";

export interface SessionTimeoutProps {
  /** Seconds left before signing out; 0 means it already happened. */
  readonly remaining: number;
  readonly onExtend: () => void;
  readonly onSignOut: () => void;
  readonly onSignIn: () => void;
  readonly labels?: {
    readonly title: string;
    readonly body: (time: string) => string;
    readonly extend: string;
    readonly signOut: string;
    readonly expiredTitle: string;
    readonly expiredBody: string;
    readonly signIn: string;
  };
}

const DEFAULT_LABELS = {
  title: "곧 자동으로 로그아웃돼요",
  body: (time: string) => `${time} 뒤 로그아웃돼요. 계속 쓰려면 아래 버튼을 눌러 주세요`,
  extend: "계속 이용하기",
  signOut: "지금 로그아웃",
  expiredTitle: "오래 쉬어 로그아웃했어요",
  expiredBody: "쓰던 내용은 저장해 두었어요. 다시 로그인하면 이어서 쓸 수 있어요",
  signIn: "다시 로그인",
};

function format(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

/**
 * Warns before a session ends for inactivity, with the time left and one button to stay.
 * After it ends, says what was kept and how to get back.
 */
export function SessionTimeout({
  remaining,
  onExtend,
  onSignOut,
  onSignIn,
  labels = DEFAULT_LABELS,
}: SessionTimeoutProps) {
  const id = useId();
  const expired = remaining <= 0;
  const primary = useRef<HTMLButtonElement>(null);
  const shown = useRef(false);

  // Move focus when the state flips (warning -> signed out); mount it where the
  // warning should take focus, e.g. only once the idle timer fires.
  useEffect(() => {
    if (shown.current) primary.current?.focus();
    shown.current = true;
  }, [expired]);

  return (
    <div
      role="alertdialog"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-body`}
      className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-lg"
    >
      <h3 id={`${id}-title`} className="font-semibold text-slate-900">
        {expired ? labels.expiredTitle : labels.title}
      </h3>
      <p id={`${id}-body`} className="text-slate-600">
        {expired ? labels.expiredBody : labels.body(format(remaining))}
      </p>
      {expired ? (
        <button
          ref={primary}
          type="button"
          onClick={onSignIn}
          className="rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
        >
          {labels.signIn}
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onSignOut}
            className="rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700"
          >
            {labels.signOut}
          </button>
          <button
            ref={primary}
            type="button"
            onClick={onExtend}
            className="rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
          >
            {labels.extend}
          </button>
        </div>
      )}
    </div>
  );
}
