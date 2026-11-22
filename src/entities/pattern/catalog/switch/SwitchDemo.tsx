import { useState } from "react";

import { Switch } from "@/shared/ui/patterns/switch/Switch";

export function SwitchDemo() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  return (
    <div className="w-full max-w-sm divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white px-4">
      <div className="py-3.5">
        <Switch
          label="푸시 알림"
          description="주문과 배송 소식을 알려드려요."
          checked={pushEnabled}
          onCheckedChange={setPushEnabled}
        />
      </div>
      <div className="py-3.5">
        <Switch
          label="혜택 알림"
          description={pushEnabled ? "쿠폰과 이벤트 소식을 받아요." : "푸시 알림을 먼저 켜 주세요."}
          checked={pushEnabled && marketingEnabled}
          onCheckedChange={setMarketingEnabled}
          disabled={!pushEnabled}
        />
      </div>
    </div>
  );
}
