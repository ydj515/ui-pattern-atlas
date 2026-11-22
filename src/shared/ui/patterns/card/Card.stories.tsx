import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "@/shared/ui/patterns/card/Card";

const meta = {
  title: "Patterns/Cards and Gallery/Card",
  component: Card,
  args: {
    href: "#article",
    title: "색 정리부터 시작하기",
    summary: "작은 팀이 디자인 시스템을 만들 때 가장 먼저 할 일",
    meta: "가이드 · 5분",
    media: <div className="size-full bg-gradient-to-br from-amber-200 to-rose-300" />,
  },
  argTypes: { media: { control: false }, action: { control: false } },
  decorators: [(Story) => <div className="w-56">{Story()}</div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {};
export const NoMeta: Story = { args: { meta: undefined } };
