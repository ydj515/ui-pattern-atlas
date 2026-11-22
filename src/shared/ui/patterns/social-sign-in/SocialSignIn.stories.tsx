import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialSignIn } from "@/shared/ui/patterns/social-sign-in/SocialSignIn";

const meta = {
  title: "Patterns/Onboarding/Social Sign-in",
  component: SocialSignIn,
  args: {
    onSelect: () => {},
    providers: [
      {
        id: "google",
        label: "Google로 계속하기",
        mark: "G",
        className: "border border-slate-300 bg-white text-slate-900",
      },
      { id: "email", label: "이메일로 계속하기", mark: "@", className: "bg-slate-900 text-white" },
    ],
  },
} satisfies Meta<typeof SocialSignIn>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Pending: Story = { args: { pending: "google" } };
