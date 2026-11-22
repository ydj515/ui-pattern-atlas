import { useState } from "react";

import { CommandPalette, type Command } from "@/shared/ui/patterns/command-palette/CommandPalette";

const COMMANDS: readonly Command[] = [
  { id: "new-doc", label: "새 문서 만들기", group: "문서", shortcut: "⌘N" },
  { id: "search-doc", label: "문서 검색", group: "문서", keywords: ["찾기"] },
  { id: "invite", label: "팀원 초대", group: "팀", keywords: ["멤버", "invite"] },
  { id: "members", label: "멤버 관리", group: "팀" },
  { id: "theme", label: "다크 모드로 전환", group: "설정", keywords: ["테마"] },
  { id: "settings", label: "설정 열기", group: "설정", shortcut: "⌘," },
];

const RESULTS: Record<string, string> = {
  "new-doc": "새 문서를 만들었어요",
  "search-doc": "문서 검색을 열었어요",
  invite: "팀원 초대 창을 열었어요",
  members: "멤버 관리 화면을 열었어요",
  theme: "다크 모드로 바꿨어요",
  settings: "설정을 열었어요",
};

export function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
      >
        명령 열기
      </button>
      {/* In an app, wire ⌘K with useCommandShortcut(() => setOpen((value) => !value)). */}
      <p className="text-xs text-slate-500">앱에서는 ⌘K로 열어요</p>
      <p role="status" className="min-h-5 text-xs text-slate-700">
        {result}
      </p>

      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={COMMANDS}
        onRun={(id) => setResult(RESULTS[id] ?? "")}
        placeholder="무엇을 할까요?"
      />
    </div>
  );
}
