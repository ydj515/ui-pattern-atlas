import { useEffect, useState } from "react";

import { AlertDialog } from "@/shared/ui/patterns/alert-dialog/AlertDialog";

const WARNING_SECONDS = 15;

type Session = "active" | "warning" | "loggedOut";

export function AlertDialogDemo() {
  const [session, setSession] = useState<Session>("active");
  const [secondsLeft, setSecondsLeft] = useState(WARNING_SECONDS);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (session !== "warning") return;
    const timer = window.setInterval(() => setSecondsLeft((seconds) => seconds - 1), 1000);
    return () => window.clearInterval(timer);
  }, [session]);

  // Time ran out while the warning was open: log out without waiting for a click.
  if (session === "warning" && secondsLeft <= 0) {
    setSession("loggedOut");
    setMessage("자동으로 로그아웃됐어요");
  }

  function showWarning() {
    setSecondsLeft(WARNING_SECONDS);
    setMessage("");
    setSession("warning");
  }

  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">내 계정</p>
        <p className="mt-1 text-xs text-slate-500">
          {session === "loggedOut" ? "로그아웃 상태예요" : "김하늘 님으로 로그인 중"}
        </p>
        <button
          type="button"
          onClick={session === "loggedOut" ? () => setSession("active") : showWarning}
          className="mt-3 w-full rounded-lg border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          {session === "loggedOut" ? "다시 로그인" : "자리 비움 보기"}
        </button>
      </div>
      <p role="status" className="min-h-5 text-center text-xs text-slate-500">
        {message}
      </p>

      <AlertDialog
        open={session === "warning"}
        title="곧 로그아웃돼요"
        description="한동안 아무 동작이 없어서 개인정보 보호를 위해 로그아웃할 예정이에요."
        actionLabel="로그인 유지"
        onAction={() => {
          setSession("active");
          setMessage("로그인을 유지했어요");
        }}
        cancelLabel="로그아웃"
        onCancel={() => {
          setSession("loggedOut");
          setMessage("로그아웃했어요");
        }}
      >
        {/* role="timer" is not announced every second; the description says what happens. */}
        <p role="timer" className="text-sm font-semibold text-amber-700 tabular-nums">
          남은 시간 {secondsLeft}초
        </p>
      </AlertDialog>
    </div>
  );
}
