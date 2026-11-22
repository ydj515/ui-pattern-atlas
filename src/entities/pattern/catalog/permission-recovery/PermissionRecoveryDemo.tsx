import { useState } from "react";
import { PermissionRecovery } from "@/shared/ui/patterns/permission-recovery/PermissionRecovery";

export function PermissionRecoveryDemo() {
  const [denied, setDenied] = useState(0);
  const [manual, setManual] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <section className="grid w-72 content-start gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">내 주변 가게</h3>
      {denied === 0 ? (
        <button
          type="button"
          onClick={() => setDenied(1)}
          className="justify-self-start rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
        >
          내 위치로 찾기
        </button>
      ) : (
        <PermissionRecovery
          title="위치 권한이 꺼져 있어요"
          body="내 주변 가게를 찾으려면 위치가 필요해요"
          mode={denied === 1 ? "retry" : "settings"}
          retryLabel="다시 허용하기"
          settingsLabel="설정 열기"
          onRetry={() => setDenied(2)}
          onOpenSettings={() => setMessage("기기 설정으로 이동해요")}
          fallback={
            <button
              type="button"
              aria-expanded={manual}
              onClick={() => setManual(true)}
              className="text-xs text-slate-700 underline underline-offset-2"
            >
              주소 직접 입력
            </button>
          }
        />
      )}
      {manual ? (
        <input
          aria-label="주소"
          placeholder="성수동"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      ) : null}
      <p role="status" className="h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
