import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardGrid } from "@/shared/ui/patterns/card-grid/CardGrid";

const cards = ["머그컵", "두껍고 따뜻한 겨울용 니트 머플러", "노트"].map((name) => (
  <li key={name} className="rounded-xl border p-3 text-sm">
    {name}
    <button type="button" className="mt-auto rounded border py-1 text-xs">
      담기
    </button>
  </li>
));

const meta = {
  title: "Patterns/Layout/Card Grid",
  component: CardGrid,
  args: { label: "추천 상품", children: cards },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-[28rem]">{Story()}</div>],
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {};
export const TwoColumns: Story = { args: { columns: 2 } };
