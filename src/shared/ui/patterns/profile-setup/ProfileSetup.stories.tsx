import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProfileSetup } from "@/shared/ui/patterns/profile-setup/ProfileSetup";

const meta = {
  title: "Patterns/Onboarding/Profile Setup",
  component: ProfileSetup,
  args: { onDone: () => {}, onSkip: () => {} },
} satisfies Meta<typeof ProfileSetup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LongerName: Story = { args: { maxLength: 20 } };
