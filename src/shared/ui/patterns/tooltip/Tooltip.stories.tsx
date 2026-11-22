import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tooltip } from "@/shared/ui/patterns/tooltip/Tooltip";

const meta = {
  title: "Patterns/Overlay/Tooltip",
  component: Tooltip,
  args: {
    content: "세금 15.4%를 떼기 전 금액 기준이에요",
    children: (triggerProps) => (
      <button
        type="button"
        aria-label="연 이자율 안내"
        {...triggerProps}
        className="grid size-7 place-items-center rounded-full border border-slate-300 text-xs font-bold text-slate-500"
      >
        i
      </button>
    ),
  },
  decorators: [(Story) => <div className="pt-12">{Story()}</div>],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
