import type { Meta, StoryObj } from "@storybook/react-vite";

import { Navbar } from "@/shared/ui/patterns/navbar/Navbar";

const meta = {
  title: "Patterns/Navigation/Navbar",
  component: Navbar,
  args: {
    brand: "모아",
    items: [
      { href: "#home", label: "홈" },
      { href: "#product", label: "제품" },
      { href: "#pricing", label: "가격" },
    ],
    current: "#home",
  },
  argTypes: { brand: { control: false }, action: { control: false } },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
export const WithAction: Story = {
  args: {
    current: "#pricing",
    action: (
      <button
        type="button"
        className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
      >
        시작하기
      </button>
    ),
  },
};
