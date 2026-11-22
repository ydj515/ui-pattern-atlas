import type { Meta, StoryObj } from "@storybook/react-vite";
import { MomentumScroll } from "@/shared/ui/patterns/momentum-scrolling/MomentumScroll";

const ROWS = Array.from({ length: 30 }, (_, index) => `${index + 1}번째 곡`);

const meta = {
  title: "Patterns/Gestures/Momentum Scrolling",
  component: MomentumScroll,
  args: {
    label: "재생 목록",
    children: (
      <ul className="divide-y divide-slate-100 text-sm">
        {ROWS.map((row) => (
          <li key={row} className="px-3 py-2">
            {row}
          </li>
        ))}
      </ul>
    ),
  },
} satisfies Meta<typeof MomentumScroll>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HighFriction: Story = { args: { friction: 0.85 } };
