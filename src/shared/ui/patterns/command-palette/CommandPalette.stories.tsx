import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { CommandPalette, type Command } from "@/shared/ui/patterns/command-palette/CommandPalette";

const COMMANDS: readonly Command[] = [
  { id: "new-doc", label: "새 문서 만들기", group: "문서", shortcut: "⌘N" },
  { id: "invite", label: "팀원 초대", group: "팀", keywords: ["멤버"] },
  { id: "settings", label: "설정 열기", group: "설정", shortcut: "⌘," },
];

function CommandPaletteStory() {
  const [open, setOpen] = useState(false);
  const [ran, setRan] = useState("");
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
      >
        명령 열기
      </button>
      <p className="text-xs text-slate-500">{ran}</p>
      <CommandPalette open={open} onOpenChange={setOpen} commands={COMMANDS} onRun={setRan} />
    </div>
  );
}

const meta = {
  title: "Patterns/Overlay/Command Palette",
  component: CommandPalette,
  args: { open: false, onOpenChange: () => {}, commands: COMMANDS, onRun: () => {} },
  render: () => <CommandPaletteStory />,
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grouped: Story = {};
