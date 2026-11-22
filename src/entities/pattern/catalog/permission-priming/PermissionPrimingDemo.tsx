import { useState } from "react";
import { PermissionPriming } from "@/shared/ui/patterns/permission-priming/PermissionPriming";

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current stroke-2">
      <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2ZM10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function PermissionPrimingDemo() {
  const [result, setResult] = useState<"ask" | "allow" | "later">("ask");
  return (
    <div className="w-64 rounded-3xl border border-slate-200 bg-slate-50 p-3">
      <p className="mb-2 text-center text-xs text-slate-600">주문 완료</p>
      {result === "ask" ? (
        <PermissionPriming
          icon={<BellIcon />}
          title="배송 알림을 받아 보세요"
          reasons={["출발과 도착을 바로 알려 드려요", "광고는 보내지 않아요"]}
          allowLabel="알림 켜기"
          laterLabel="나중에"
          onAllow={() => setResult("allow")}
          onLater={() => setResult("later")}
        />
      ) : (
        <div role="status" className="grid gap-3 rounded-2xl bg-white p-5 text-center">
          <p className="text-sm text-slate-800">
            {result === "allow"
              ? "시스템 알림 요청으로 이어져요"
              : "내 정보에서 언제든 켤 수 있어요"}
          </p>
          <button
            type="button"
            onClick={() => setResult("ask")}
            className="justify-self-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            다시 보기
          </button>
        </div>
      )}
    </div>
  );
}
