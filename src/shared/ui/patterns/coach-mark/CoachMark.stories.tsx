import type { Meta, StoryObj } from "@storybook/react-vite";
import { CoachMark } from "@/shared/ui/patterns/coach-mark/CoachMark";

const meta = {
  title: "Patterns/Onboarding/Coach Mark",
  component: CoachMark,
  decorators: [
    (Story) => <div className="flex h-48 justify-end overflow-hidden p-4">{Story()}</div>,
  ],
  args: {
    open: true,
    message: "여기서 새 메모를 만들 수 있어요",
    onClose: () => {},
    children: (
      <button type="button" className="rounded-full bg-slate-900 px-3 py-1 text-white">
        +
      </button>
    ),
  },
} satisfies Meta<typeof CoachMark>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
