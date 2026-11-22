import type { Meta, StoryObj } from "@storybook/react-vite";
import { SplashScreen } from "@/shared/ui/patterns/splash-screen/SplashScreen";

const meta = {
  title: "Patterns/Onboarding/Splash Screen",
  component: SplashScreen,
  decorators: [(Story) => <div className="h-64 w-48">{Story()}</div>],
  args: {
    ready: false,
    label: "앱을 준비하는 중",
    logo: <span className="text-2xl font-bold">동네가게</span>,
    children: <p className="p-4">홈</p>,
  },
} satisfies Meta<typeof SplashScreen>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Ready: Story = { args: { ready: true, minMs: 0 } };
