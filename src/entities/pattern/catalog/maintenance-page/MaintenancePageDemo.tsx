import { useState } from "react";

import { MaintenancePage } from "@/shared/ui/patterns/maintenance-page/MaintenancePage";

// Fixed schedule so the demo always reads the same; in a real page `now` is left out.
const START = new Date(2026, 10, 23, 2, 0);
const END = new Date(2026, 10, 23, 6, 0);
const NOW = new Date(2026, 10, 23, 4, 30);

export function MaintenancePageDemo() {
  const [notified, setNotified] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <MaintenancePage
        title="서비스 점검 중이에요"
        start={START}
        end={END}
        now={NOW}
        formatDay={(date) => `${date.getMonth() + 1}월 ${date.getDate()}일`}
        formatRemaining={(minutes) =>
          `약 ${Math.floor(minutes / 60)}시간 ${minutes % 60}분 남았어요`
        }
        notified={notified}
        onNotify={() => setNotified(true)}
        notifyLabel="끝나면 알림 받기"
        notifiedLabel="끝나면 메일로 알려 드릴게요"
      />
    </div>
  );
}
