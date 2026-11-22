import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeroSection } from "@/shared/ui/patterns/hero-section/HeroSection";

const meta = {
  title: "Patterns/Layout/Hero Section",
  component: HeroSection,
  args: {
    title: "회의록은 회의가 끝나기 전에",
    description: "말하는 동안 요점과 할 일을 정리해 드려요.",
    primary: (
      <button
        type="button"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      >
        무료로 시작하기
      </button>
    ),
  },
  argTypes: {
    primary: { control: false },
    secondary: { control: false },
    visual: { control: false },
  },
  decorators: [(Story) => <div className="w-[28rem] border">{Story()}</div>],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {};
export const WithVisual: Story = {
  args: { visual: <div className="aspect-[4/3] rounded-xl bg-indigo-200" /> },
};
