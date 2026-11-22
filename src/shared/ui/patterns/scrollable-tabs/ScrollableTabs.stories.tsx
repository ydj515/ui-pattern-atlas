import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScrollableTabs } from "@/shared/ui/patterns/scrollable-tabs/ScrollableTabs";

const meta = {
  title: "Patterns/Disclosure/Scrollable Tabs",
  component: ScrollableTabs,
  args: {
    label: "상품 분류",
    tabs: ["전체", "상의", "하의", "아우터", "원피스", "신발", "가방", "모자"],
    selected: 0,
    onSelect: () => {},
    children: <p className="text-sm">상품 목록</p>,
  },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
} satisfies Meta<typeof ScrollableTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {};
export const Later: Story = { args: { selected: 6 } };
