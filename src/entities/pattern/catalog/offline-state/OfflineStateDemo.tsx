import { useState } from "react";

import { OfflineState, useOnlineStatus } from "@/shared/ui/patterns/offline-state/OfflineState";

const NEWS = [
  "점심 메뉴 투표가 열렸어요",
  "새 디자인 가이드가 올라왔어요",
  "회의실 예약이 바뀌었어요",
] as const;

export function OfflineStateDemo() {
  const browserOnline = useOnlineStatus();
  // The demo cannot cut your network, so it can pretend to be offline.
  const [simulatedOffline, setSimulatedOffline] = useState(true);
  const [message, setMessage] = useState("");
  const online = browserOnline && !simulatedOffline;

  return (
    <div className="w-full max-w-xs space-y-3">
      <label className="flex items-center justify-end gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={simulatedOffline}
          onChange={(event) => {
            setSimulatedOffline(event.target.checked);
            setMessage("");
          }}
        />
        연결 끊김 흉내
      </label>
      {online ? (
        <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm">
          {NEWS.map((item) => (
            <li key={item} className="px-4 py-2.5">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <OfflineState
            title="인터넷 연결이 끊겼어요"
            description="연결되면 자동으로 다시 불러와요."
            retryLabel="다시 시도"
            onRetry={() => setMessage("아직 연결되지 않았어요")}
          />
          <p className="text-center text-xs text-slate-500">{message}</p>
        </>
      )}
    </div>
  );
}
