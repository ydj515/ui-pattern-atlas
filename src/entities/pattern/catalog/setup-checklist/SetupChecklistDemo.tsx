import { useState } from "react";
import { SetupChecklist } from "@/shared/ui/patterns/setup-checklist/SetupChecklist";

const TASKS = [
  { id: "photo", label: "프로필 사진 올리기", action: "올리기" },
  { id: "invite", label: "팀원 초대하기", action: "초대" },
  { id: "project", label: "첫 프로젝트 만들기", action: "만들기" },
  { id: "alert", label: "알림 설정하기", action: "설정" },
];

export function SetupChecklistDemo() {
  const [done, setDone] = useState<ReadonlySet<string>>(new Set(["photo"]));
  return (
    <div className="w-full max-w-xs">
      <SetupChecklist
        title="시작하기"
        doneLabel="완료"
        tasks={TASKS.map((task) => ({ ...task, done: done.has(task.id) }))}
        onAction={(id) => setDone((current) => new Set([...current, id]))}
      />
      <p role="status" className="mt-2 h-4 text-xs text-emerald-700">
        {done.size === TASKS.length ? "준비를 마쳤어요" : ""}
      </p>
    </div>
  );
}
