import type { Meta, StoryObj } from "@storybook/react-vite";

import { MasonryGrid } from "@/shared/ui/patterns/masonry-grid/MasonryGrid";

const items = [96, 64, 80, 112, 56].map((height, index) => (
  <li key={index} className="rounded-lg bg-slate-200" style={{ height }} />
));

const meta = {
  title: "Patterns/Cards and Gallery/Masonry Grid",
  component: MasonryGrid,
  args: { label: "인테리어 아이디어", columns: 3, children: items },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof MasonryGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {};
export const TwoColumns: Story = { args: { columns: 2 } };
