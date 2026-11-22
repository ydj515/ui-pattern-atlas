import type { Meta, StoryObj } from "@storybook/react-vite";

import { MobileMenu } from "@/shared/ui/patterns/mobile-menu/MobileMenu";

const meta = {
  title: "Patterns/Navigation/Mobile Menu",
  component: MobileMenu,
  args: {
    links: [
      { href: "#home", label: "홈" },
      { href: "#pricing", label: "가격" },
    ],
    current: "#home",
    onNavigate: () => {},
  },
  decorators: [(Story) => <div className="flex h-56 justify-end">{Story()}</div>],
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OtherPage: Story = { args: { current: "#pricing" } };
