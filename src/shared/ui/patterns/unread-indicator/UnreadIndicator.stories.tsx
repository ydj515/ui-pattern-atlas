import type { Meta, StoryObj } from "@storybook/react-vite";

import { UnreadIndicator } from "@/shared/ui/patterns/unread-indicator/UnreadIndicator";

const meta = {
  title: "Patterns/Indicator/Unread Indicator",
  component: UnreadIndicator,
  args: { unread: true },
  decorators: [
    (Story) => <p className="flex items-center gap-2 text-sm">{Story()}시안 확인 부탁드려요</p>,
  ],
} satisfies Meta<typeof UnreadIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unread: Story = {};
export const Read: Story = { args: { unread: false } };
