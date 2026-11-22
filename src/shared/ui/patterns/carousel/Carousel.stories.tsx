import type { Meta, StoryObj } from "@storybook/react-vite";

import { Carousel } from "@/shared/ui/patterns/carousel/Carousel";

const slides = ["겨울 세일", "새로 나온 상품", "무료 배송"].map((label, index) => ({
  id: String(index),
  label,
  content: (
    <div className="grid aspect-[16/9] place-items-center bg-slate-700 text-lg font-bold text-white">
      {label}
    </div>
  ),
}));

const meta = {
  title: "Patterns/Cards and Gallery/Carousel",
  component: Carousel,
  args: { label: "이벤트 배너", slides },
  argTypes: { slides: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manual: Story = {};
export const AutoPlay: Story = { args: { interval: 3000 } };
