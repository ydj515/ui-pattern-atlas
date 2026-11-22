import type { Meta, StoryObj } from "@storybook/react-vite";

import { SafeArea } from "@/shared/ui/patterns/safe-area/SafeArea";

const meta = {
  title: "Patterns/Layout/Safe Area",
  component: SafeArea,
  args: { children: <p className="bg-white text-sm">메시지</p>, edges: ["top", "bottom"] },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-60 bg-slate-100">{Story()}</div>],
} satisfies Meta<typeof SafeArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopAndBottom: Story = {};
export const AllEdges: Story = { args: { edges: ["top", "bottom", "left", "right"] } };
