import type { Meta, StoryObj } from "@storybook/react-vite";

import { TopLoadingBar } from "@/shared/ui/patterns/top-loading-bar/TopLoadingBar";

const meta = {
  title: "Patterns/Loading/Top Loading Bar",
  component: TopLoadingBar,
  args: { loading: true, delayMs: 0 },
  decorators: [(Story) => <div className="relative h-24 w-80 rounded-xl border">{Story()}</div>],
} satisfies Meta<typeof TopLoadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Toggle `loading` to see it finish and fade out. */
export const Loading: Story = {};
export const Idle: Story = { args: { loading: false } };
