import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "@/shared/ui/patterns/avatar/Avatar";

const meta = {
  title: "Patterns/Indicator/Avatar",
  component: Avatar,
  args: { name: "김하늘", size: 48 },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {};
export const BrokenImage: Story = { args: { src: "/missing.png" } };
