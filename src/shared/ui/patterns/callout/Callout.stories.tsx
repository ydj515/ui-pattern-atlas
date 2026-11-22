import type { Meta, StoryObj } from "@storybook/react-vite";

import { Callout } from "@/shared/ui/patterns/callout/Callout";

const meta = {
  title: "Patterns/Feedback/Callout",
  component: Callout,
  args: { tone: "note", children: "링크는 30분 동안만 열 수 있어요." },
  argTypes: { children: { control: "text" } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Note: Story = {};
export const Tip: Story = {
  args: { tone: "tip", children: "메일이 안 보이면 스팸함을 확인해 보세요." },
};
export const Warning: Story = {
  args: { tone: "warning", children: "링크를 다른 사람과 공유하지 마세요." },
};
export const CustomTitle: Story = { args: { tone: "warning", title: "되돌릴 수 없어요" } };
