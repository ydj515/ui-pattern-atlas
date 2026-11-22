import type { Meta, StoryObj } from "@storybook/react-vite";

import { BottomTabBar } from "@/shared/ui/patterns/bottom-tab-bar/BottomTabBar";

const dot = <span className="block size-6 rounded-full border-2 border-current" />;

const meta = {
  title: "Patterns/Navigation/Bottom Tab Bar",
  component: BottomTabBar,
  args: {
    tabs: [
      { href: "#home", label: "홈", icon: dot },
      { href: "#search", label: "검색", icon: dot },
      { href: "#alerts", label: "알림", icon: dot, badge: 3 },
      { href: "#me", label: "내 정보", icon: dot },
    ],
    current: "#home",
    onNavigate: () => {},
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof BottomTabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
export const Alerts: Story = { args: { current: "#alerts" } };
