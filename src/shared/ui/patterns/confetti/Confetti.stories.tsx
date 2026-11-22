import type { Meta, StoryObj } from "@storybook/react-vite";
import { Confetti } from "@/shared/ui/patterns/confetti/Confetti";

const meta = {
  title: "Patterns/Completion/Confetti",
  component: Confetti,
  decorators: [(Story) => <div className="relative h-48 w-64 rounded-xl border">{Story()}</div>],
  args: { trigger: 0 },
} satisfies Meta<typeof Confetti>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Burst: Story = { args: { trigger: 1 } };
