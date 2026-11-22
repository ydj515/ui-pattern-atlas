import type { Meta, StoryObj } from "@storybook/react-vite";
import { PullToRefresh } from "./PullToRefresh";

const meta = {
  title: "Patterns/Gestures/Pull to Refresh",
  component: PullToRefresh,
  args: {
    onRefresh: async () => {},
    children: <p className="p-3 text-sm">배송 일정 안내</p>,
  },
} satisfies Meta<typeof PullToRefresh>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = {};
export const FailedRequest: Story = {
  args: {
    onRefresh: async () => {
      throw new Error("Request failed");
    },
  },
};
