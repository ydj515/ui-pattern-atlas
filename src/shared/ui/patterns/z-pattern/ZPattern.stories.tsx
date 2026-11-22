import type { Meta, StoryObj } from "@storybook/react-vite";

import { ZPattern } from "@/shared/ui/patterns/z-pattern/ZPattern";

const meta = {
  title: "Patterns/Layout/Z-pattern",
  component: ZPattern,
  args: {
    brand: <b>모아</b>,
    topAction: <span className="text-sm underline">로그인</span>,
    message: <p className="text-center text-lg font-bold">팀 일정, 한 화면에서</p>,
    visual: <div className="h-12 w-20 rounded bg-sky-200" />,
    mainAction: (
      <button type="button" className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">
        시작하기
      </button>
    ),
  },
  argTypes: {
    brand: { control: false },
    topAction: { control: false },
    message: { control: false },
    visual: { control: false },
    mainAction: { control: false },
  },
  decorators: [(Story) => <div className="h-56 w-96 border">{Story()}</div>],
} satisfies Meta<typeof ZPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landing: Story = {};
export const Tall: Story = {
  decorators: [(Story) => <div className="h-80 w-96 border">{Story()}</div>],
};
