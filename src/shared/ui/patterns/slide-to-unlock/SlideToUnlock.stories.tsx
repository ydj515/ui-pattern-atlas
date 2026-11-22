import type { Meta, StoryObj } from "@storybook/react-vite";
import { SlideToUnlock } from "@/shared/ui/patterns/slide-to-unlock/SlideToUnlock";

const meta = {
  title: "Patterns/Gestures/Slide to Unlock",
  component: SlideToUnlock,
  args: { label: "잠금 해제", onUnlock: () => {} },
} satisfies Meta<typeof SlideToUnlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ConfirmPayment: Story = { args: { label: "결제 확인", hint: "밀어서 결제" } };
