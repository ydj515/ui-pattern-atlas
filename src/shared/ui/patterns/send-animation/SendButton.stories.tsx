import type { Meta, StoryObj } from "@storybook/react-vite";
import { SendButton } from "@/shared/ui/patterns/send-animation/SendButton";

const meta = {
  title: "Patterns/Completion/Send Animation",
  component: SendButton,
  args: { label: "보내기" },
} satisfies Meta<typeof SendButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
