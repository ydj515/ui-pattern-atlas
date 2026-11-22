import type { Meta, StoryObj } from "@storybook/react-vite";

import { OptimisticLikeButton } from "@/shared/ui/patterns/optimistic-ui/OptimisticLikeButton";

const wait = () => new Promise<void>((resolve) => window.setTimeout(resolve, 1000));

const meta = {
  title: "Patterns/Loading/Optimistic UI",
  component: OptimisticLikeButton,
  args: { liked: false, count: 12, onChange: wait },
  argTypes: { onChange: { control: false } },
} satisfies Meta<typeof OptimisticLikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The server never confirms here, so the button settles back after a second. */
export const Pending: Story = {};
export const Failing: Story = {
  args: {
    onChange: async () => {
      await wait();
      throw new Error("network");
    },
  },
};
export const Liked: Story = { args: { liked: true, count: 13 } };
