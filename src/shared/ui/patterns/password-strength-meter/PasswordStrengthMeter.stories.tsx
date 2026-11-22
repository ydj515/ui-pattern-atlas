import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordStrengthMeter } from "@/shared/ui/patterns/password-strength-meter/PasswordStrengthMeter";

const meta = {
  title: "Patterns/Indicator/Password Strength Meter",
  component: PasswordStrengthMeter,
  args: {
    score: 2,
    labels: ["약함", "보통", "강함", "아주 강함"],
    hint: "숫자나 기호를 섞어 보세요",
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof PasswordStrengthMeter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fair: Story = {};
export const VeryStrong: Story = { args: { score: 4, hint: undefined } };
