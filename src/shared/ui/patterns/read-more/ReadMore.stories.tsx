import type { Meta, StoryObj } from "@storybook/react-vite";

import { ReadMore } from "@/shared/ui/patterns/read-more/ReadMore";

const meta = {
  title: "Patterns/Disclosure/Read More",
  component: ReadMore,
  args: {
    lines: 2,
    children:
      "바다가 보이는 2층 독채예요. 거실 통창으로 해 뜨는 모습을 볼 수 있고, 걸어서 3분이면 해변에 닿아요. 주방에는 기본 양념과 커피 머신이 있어요.",
  },
  argTypes: { children: { control: "text" } },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoLines: Story = {};
export const Short: Story = { args: { children: "짧은 소개는 버튼 없이 다 보여요." } };
