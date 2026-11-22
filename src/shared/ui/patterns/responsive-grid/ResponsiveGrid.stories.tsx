import type { Meta, StoryObj } from "@storybook/react-vite";

import { ResponsiveGrid } from "@/shared/ui/patterns/responsive-grid/ResponsiveGrid";

const items = ["커피", "차", "주스", "케이크"].map((item) => (
  <li key={item} className="grid h-14 place-items-center rounded-lg bg-slate-100 text-sm">
    {item}
  </li>
));

const meta = {
  title: "Patterns/Layout/Responsive Grid",
  component: ResponsiveGrid,
  args: { label: "메뉴", children: items, minColumn: 96 },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ResponsiveGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WideColumns: Story = { args: { minColumn: 140 } };
