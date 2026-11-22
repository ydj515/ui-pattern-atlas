import type { Meta, StoryObj } from "@storybook/react-vite";

import { HorizontalScroll } from "@/shared/ui/patterns/horizontal-scroll/HorizontalScroll";

const cards = Array.from({ length: 6 }, (_, index) => (
  <div key={index} className="h-24 w-32 shrink-0 snap-start rounded-xl bg-slate-100 p-2 text-sm">
    상품 {index + 1}
  </div>
));

const meta = {
  title: "Patterns/Navigation/Horizontal Scroll",
  component: HorizontalScroll,
  args: { label: "오늘의 추천", children: cards },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof HorizontalScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Products: Story = {};
export const Renamed: Story = { args: { label: "최근 본 상품" } };
