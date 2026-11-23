import { useEffect, useState } from "react";
import {
  AutosaveIndicator,
  type AutosaveStatus,
} from "@/shared/ui/patterns/autosave-indicator/AutosaveIndicator";

export function AutosaveIndicatorDemo() {
  const [text, setText] = useState("토요일 오후 서울숲 산책");
  const [offline, setOffline] = useState(false);
  const [status, setStatus] = useState<AutosaveStatus>("saved");

  useEffect(() => {
    if (status !== "saving") return;
    const timer = window.setTimeout(() => setStatus(offline ? "offline" : "saved"), 600);
    return () => window.clearTimeout(timer);
  }, [status, offline, text]);

  return (
    <section className="grid w-80 gap-2 rounded-3xl border border-slate-200 bg-white p-5 text-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">주말 계획</h3>
        <AutosaveIndicator
          status={status}
          labels={{
            idle: "",
            saving: "저장 중…",
            saved: "방금 저장됨",
            offline: "연결이 끊겨 이 기기에만 저장했어요",
          }}
        />
      </div>
      <label className="sr-only" htmlFor="autosave-note">
        메모
      </label>
      <textarea
        id="autosave-note"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setStatus("saving");
        }}
        rows={3}
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
      />
      <label className="flex items-center gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={offline}
          onChange={(event) => setOffline(event.target.checked)}
        />
        인터넷 연결 끊어 보기
      </label>
    </section>
  );
}
