import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContextMenu } from "@/shared/ui/patterns/context-menu/ContextMenu";

const meta = {
  title: "Patterns/Overlay/Context Menu",
  component: ContextMenu,
  args: {
    label: "사진.png 메뉴",
    onSelect: () => {},
    items: [
      { id: "open", label: "열기" },
      { id: "download", label: "다운로드" },
      { id: "delete", label: "삭제", tone: "danger", separatorBefore: true },
    ],
    children: (
      <button type="button" className="rounded-xl border border-slate-200 px-6 py-8 text-sm">
        사진.png 우클릭
      </button>
    ),
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const File: Story = {};
