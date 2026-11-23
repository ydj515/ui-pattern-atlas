import type { Meta, StoryObj } from "@storybook/react-vite";

import { Treemap } from "@/shared/ui/patterns/treemap/Treemap";

const meta = {
  title: "Patterns/Data Viz/Treemap",
  component: Treemap,
  args: {
    title: "저장 공간",
    data: [
      { label: "사진", value: 42 },
      { label: "동영상", value: 28 },
      { label: "앱", value: 18 },
      { label: "문서", value: 6 },
      { label: "기타", value: 6 },
    ],
    format: (value: number) => `${value}GB`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Treemap>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Even: Story = {
  args: {
    data: [
      { label: "사진", value: 25 },
      { label: "동영상", value: 25 },
      { label: "앱", value: 25 },
      { label: "문서", value: 25 },
    ],
  },
};
