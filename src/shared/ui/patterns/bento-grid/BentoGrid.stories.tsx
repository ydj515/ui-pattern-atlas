import type { Meta, StoryObj } from "@storybook/react-vite";

import { BentoGrid } from "@/shared/ui/patterns/bento-grid/BentoGrid";

const tile = (text: string, tone: string) => (
  <div className={`grid size-full place-items-center text-sm ${tone}`}>{text}</div>
);

const meta = {
  title: "Patterns/Layout/Bento Grid",
  component: BentoGrid,
  args: {
    items: [
      { id: "a", cols: 2, rows: 2, content: tile("어디서나 이어서", "bg-slate-900 text-white") },
      { id: "b", cols: 2, content: tile("오프라인 저장", "bg-amber-100") },
      { id: "c", content: tile("공유", "bg-sky-100") },
      { id: "d", content: tile("다크 모드", "bg-emerald-100") },
    ],
  },
  argTypes: { items: { control: false } },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof BentoGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Features: Story = {};
export const Tall: Story = { args: { rowHeight: 96 } };
