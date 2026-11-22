import { useState } from "react";
import { SystemPermissionDialog } from "@/shared/ui/patterns/system-permission-dialog/SystemPermissionDialog";

const RESULT = {
  allow: "모든 사진에 접근할 수 있어요",
  limited: "고른 사진만 쓸 수 있어요",
  deny: "사진 없이 후기를 쓸 수 있어요",
};

export function SystemPermissionDialogDemo() {
  const [asking, setAsking] = useState(false);
  const [result, setResult] = useState<keyof typeof RESULT | null>(null);

  return (
    <div className="relative grid h-72 w-72 content-start gap-3 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">후기 쓰기</h3>
      <span className="h-16 rounded-xl border border-dashed border-slate-300" />
      <button
        type="button"
        onClick={() => setAsking(true)}
        className="justify-self-start rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
      >
        사진 올리기
      </button>
      <p role="status" className="text-xs text-slate-600">
        {result ? RESULT[result] : ""}
      </p>
      {asking ? (
        <div className="absolute inset-0 grid place-items-center bg-slate-900/40">
          <SystemPermissionDialog
            title="‘동네가게’에서 사진에 접근하려고 합니다"
            message="후기에 사진을 붙이려면 필요해요"
            limitedLabel="사진 선택"
            allowLabel="모든 사진 허용"
            denyLabel="허용 안 함"
            onDecide={(decision) => {
              setAsking(false);
              setResult(decision);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
