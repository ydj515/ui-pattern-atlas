import type { Meta, StoryObj } from "@storybook/react-vite";

import { StickyActionBar } from "@/shared/ui/patterns/sticky-action-bar/StickyActionBar";

const meta = {
  title: "Patterns/Layout/Sticky Action Bar",
  component: StickyActionBar,
  args: {
    summary: <b>39,000원</b>,
    action: (
      <button
        type="button"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      >
        장바구니 담기
      </button>
    ),
  },
  argTypes: { summary: { control: false }, action: { control: false } },
  decorators: [(Story) => <div className="w-72 border">{Story()}</div>],
} satisfies Meta<typeof StickyActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purchase: Story = {};
export const Booking: Story = {
  args: {
    action: (
      <button
        type="button"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
      >
        예약하기
      </button>
    ),
  },
};
