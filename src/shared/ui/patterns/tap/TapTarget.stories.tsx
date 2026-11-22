import type { Meta, StoryObj } from "@storybook/react-vite";
import { TapTarget } from "@/shared/ui/patterns/tap/TapTarget";

const meta = {
  title: "Patterns/Gestures/Tap",
  component: TapTarget,
  args: { "aria-label": "닫기", children: <span aria-hidden="true">×</span> },
} satisfies Meta<typeof TapTarget>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShowHitArea: Story = { args: { showArea: true } };
