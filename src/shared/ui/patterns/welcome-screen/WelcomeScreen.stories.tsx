import type { Meta, StoryObj } from "@storybook/react-vite";
import { WelcomeScreen } from "@/shared/ui/patterns/welcome-screen/WelcomeScreen";

const meta = {
  title: "Patterns/Onboarding/Welcome Screen",
  component: WelcomeScreen,
  args: {
    open: true,
    title: "환영해요",
    body: "할 일을 한곳에서 정리해요",
    startLabel: "시작하기",
    onStart: () => {},
    onExplore: () => {},
  },
} satisfies Meta<typeof WelcomeScreen>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithArt: Story = {
  args: { art: <span className="mx-auto block size-14 rounded-2xl bg-sky-200" /> },
};
