import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stagger } from "@/shared/ui/patterns/stagger/Stagger";

const meta = {
  title: "Patterns/Motion/Stagger",
  component: Stagger,
  args: {
    label: "알림",
    children: ["택배가 도착했어요", "새 댓글이 달렸어요", "결제가 완료됐어요"].map((text) => (
      <p key={text} className="rounded-lg bg-white p-2 text-sm shadow-sm">
        {text}
      </p>
    )),
  },
} satisfies Meta<typeof Stagger>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WideGap: Story = { args: { gap: 120 } };
