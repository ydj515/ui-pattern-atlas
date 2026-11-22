import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/shared/ui/patterns/checkbox/Checkbox";

const meta = {
  title: "Patterns/Selection/Checkbox",
  component: Checkbox,
  args: { label: "전체 선택", checked: false, onCheckedChange: () => {} },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Mixed: Story = { args: { mixed: true } };
