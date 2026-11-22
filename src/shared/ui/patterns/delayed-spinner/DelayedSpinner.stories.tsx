import type { Meta, StoryObj } from "@storybook/react-vite";

import { DelayedSpinner } from "@/shared/ui/patterns/delayed-spinner/DelayedSpinner";

const meta = {
  title: "Patterns/Loading/Delayed Spinner",
  component: DelayedSpinner,
  args: { loading: true, delayMs: 400, minDurationMs: 600, children: "주문 내역을 불러왔어요" },
  argTypes: { children: { control: "text" } },
  decorators: [
    (Story) => (
      <div className="grid h-20 w-72 place-items-center rounded-xl border border-slate-200 text-sm">
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof DelayedSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Toggle `loading` to see the delay and the minimum display time. */
export const Loading: Story = {};
export const Loaded: Story = { args: { loading: false } };
