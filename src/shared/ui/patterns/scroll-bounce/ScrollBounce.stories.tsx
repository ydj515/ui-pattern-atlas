import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollBounce } from "@/shared/ui/patterns/scroll-bounce/ScrollBounce";

const ROWS = Array.from({ length: 12 }, (_, index) => `알림 ${index + 1}`);

const meta = {
  title: "Patterns/Gestures/Scroll Bounce",
  component: ScrollBounce,
  args: {
    label: "알림",
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
} satisfies Meta<typeof ScrollBounce>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShortList: Story = { args: { children: <p className="p-3 text-sm">알림 1</p> } };
