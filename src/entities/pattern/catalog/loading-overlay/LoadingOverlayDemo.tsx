import { useEffect, useRef, useState, type FormEvent } from "react";

import { LoadingOverlay } from "@/shared/ui/patterns/loading-overlay/LoadingOverlay";

const SAVE_MS = 1500;

export function LoadingOverlayDemo() {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    timerRef.current = window.setTimeout(() => {
      setSaving(false);
      setMessage("저장했어요");
    }, SAVE_MS);
  }

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="rounded-xl border border-slate-200 bg-white">
        <LoadingOverlay loading={saving} label="저장하는 중">
          <form onSubmit={handleSubmit} className="space-y-3 p-4">
            <p className="text-sm font-semibold text-slate-900">프로필</p>
            <label className="block text-xs text-slate-600">
              이름
              <input
                defaultValue="김하늘"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-900"
              />
            </label>
            <label className="block text-xs text-slate-600">
              소개
              <input
                defaultValue="프로덕트 디자이너"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-900"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              저장
            </button>
          </form>
        </LoadingOverlay>
      </div>
      <p role="status" className="min-h-4 text-center text-xs text-emerald-700">
        {message}
      </p>
    </div>
  );
}
