import type { Meta, StoryObj } from "@storybook/react-vite";
import { LongPress } from "@/shared/ui/patterns/long-press/LongPress";

const meta = {
  title: "Patterns/Gestures/Long Press",
  component: LongPress,
  args: {
    label: "메시지, 길게 눌러 반응 달기",
    onLongPress: () => {},
    children: (
      <span className="block rounded-2xl bg-slate-100 px-3 py-2 text-sm">내일 몇 시에 만나요?</span>
    ),
  },
} satisfies Meta<typeof LongPress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShortDelay: Story = { args: { delayMs: 300 } };
