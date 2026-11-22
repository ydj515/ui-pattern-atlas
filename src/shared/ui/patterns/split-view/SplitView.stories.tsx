import type { Meta, StoryObj } from "@storybook/react-vite";

import { SplitView } from "@/shared/ui/patterns/split-view/SplitView";

const meta = {
  title: "Patterns/Layout/Split View",
  component: SplitView,
  args: {
    list: <p className="p-3 text-sm">목록</p>,
    detail: <p className="p-3 text-sm">상세</p>,
    showDetail: true,
    onBack: () => {},
  },
  argTypes: { list: { control: false }, detail: { control: false } },
  decorators: [(Story) => <div className="h-48 w-[26rem] border">{Story()}</div>],
} satisfies Meta<typeof SplitView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wide: Story = {};
export const Narrow: Story = {
  decorators: [(Story) => <div className="h-48 w-64 border">{Story()}</div>],
};
