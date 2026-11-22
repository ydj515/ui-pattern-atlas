import type { Meta, StoryObj } from "@storybook/react-vite";
import { ZoomTransition } from "@/shared/ui/patterns/zoom-transition/ZoomTransition";

const meta = {
  title: "Patterns/Motion/Zoom Transition",
  component: ZoomTransition,
  decorators: [
    (Story) => (
      <div className="relative h-64 w-48 overflow-hidden rounded-2xl bg-slate-200">{Story()}</div>
    ),
  ],
  args: {
    open: true,
    label: "메모",
    origin: { x: 40, y: 40 },
    children: <div className="h-full bg-amber-50 p-4 text-sm">메모</div>,
  },
} satisfies Meta<typeof ZoomTransition>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
export const FromCorner: Story = { args: { origin: { x: 180, y: 240 } } };
