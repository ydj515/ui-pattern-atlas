import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tag } from "@/shared/ui/patterns/tag/Tag";

const meta = {
  title: "Patterns/Indicator/Tag",
  component: Tag,
  args: { children: "디자인", tone: "blue" },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {};
export const Removable: Story = { args: { onRemove: () => {} } };
