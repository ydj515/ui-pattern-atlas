import type { Meta, StoryObj } from "@storybook/react-vite";

import { SidebarLayout } from "@/shared/ui/patterns/sidebar-layout/SidebarLayout";

const meta = {
  title: "Patterns/Layout/Sidebar Layout",
  component: SidebarLayout,
  args: { sidebar: <p className="text-sm">메뉴</p>, children: <p className="text-sm">본문</p> },
  argTypes: { sidebar: { control: false }, children: { control: false } },
  decorators: [(Story) => <div className="h-48 w-[26rem] border">{Story()}</div>],
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wide: Story = {};
export const Narrow: Story = {
  decorators: [(Story) => <div className="h-48 w-64 border">{Story()}</div>],
};
