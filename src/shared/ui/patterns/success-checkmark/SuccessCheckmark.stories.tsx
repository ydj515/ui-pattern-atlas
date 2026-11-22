import type { Meta, StoryObj } from "@storybook/react-vite";
import { SuccessCheckmark } from "@/shared/ui/patterns/success-checkmark/SuccessCheckmark";

const meta = {
  title: "Patterns/Completion/Success Checkmark",
  component: SuccessCheckmark,
  args: { label: "보냈어요" },
} satisfies Meta<typeof SuccessCheckmark>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Large: Story = { args: { size: 96 } };
