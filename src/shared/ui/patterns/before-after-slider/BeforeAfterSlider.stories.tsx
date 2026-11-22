import type { Meta, StoryObj } from "@storybook/react-vite";

import { BeforeAfterSlider } from "@/shared/ui/patterns/before-after-slider/BeforeAfterSlider";

const meta = {
  title: "Patterns/Cards and Gallery/Before After Slider",
  component: BeforeAfterSlider,
  args: {
    label: "보정 전후 비교",
    before: <div className="size-full bg-slate-400" />,
    after: <div className="size-full bg-amber-200" />,
  },
  argTypes: { before: { control: false }, after: { control: false } },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof BeforeAfterSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Half: Story = {};
export const MostlyBefore: Story = { args: { initial: 80 } };
