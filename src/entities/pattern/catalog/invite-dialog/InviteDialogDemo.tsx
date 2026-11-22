import { useState } from "react";
import { InviteDialog } from "@/shared/ui/patterns/invite-dialog/InviteDialog";

export function InviteDialogDemo() {
  const [open, setOpen] = useState(true);
  const [result, setResult] = useState("");
  return (
    <section className="grid w-80 gap-3">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <h3 className="text-sm font-bold text-slate-900">디자인 팀</h3>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
        >
          초대하기
        </button>
      </div>
      {open ? (
        <InviteDialog
          title="팀에 초대하기"
          placeholder="name@example.com"
          inviteLabel={(count) => `${count}명 초대하기`}
          closeLabel="닫기"
          emailLabel="이메일"
          invalidLabel="이메일 주소 형식을 확인해 주세요"
          onClose={() => setOpen(false)}
          onInvite={(emails) => {
            setOpen(false);
            setResult(`${emails.length}명에게 초대를 보냈어요`);
          }}
        />
      ) : null}
      <p role="status" className="h-4 text-xs text-emerald-700">
        {result}
      </p>
    </section>
  );
}
