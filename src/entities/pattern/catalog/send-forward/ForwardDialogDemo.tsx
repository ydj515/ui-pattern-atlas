import { useState } from "react";
import { ForwardDialog } from "@/shared/ui/patterns/send-forward/ForwardDialog";

const CONTACTS = [
  { id: "sky", name: "하늘" },
  { id: "doyun", name: "도윤" },
  { id: "seoyeon", name: "서연" },
  { id: "team", name: "디자인 팀" },
];

export function ForwardDialogDemo() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  return (
    <section className="grid w-80 gap-3">
      <div className="flex items-end justify-between rounded-2xl border border-slate-200 bg-white p-3">
        <span className="h-20 w-32 rounded-xl bg-gradient-to-br from-emerald-200 to-sky-300" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
        >
          전달
        </button>
      </div>
      {open ? (
        <ForwardDialog
          title="사진 전달"
          contacts={CONTACTS}
          searchLabel="이름 검색"
          noteLabel="메시지 덧붙이기"
          sendLabel={(count) => `${count}명에게 보내기`}
          closeLabel="닫기"
          onClose={() => setOpen(false)}
          onSend={(ids) => {
            setOpen(false);
            setResult(`${ids.length}명에게 보냈어요`);
          }}
        />
      ) : null}
      <p role="status" className="h-4 text-xs text-emerald-700">
        {result}
      </p>
    </section>
  );
}
