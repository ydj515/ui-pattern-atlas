import type { Meta, StoryObj } from "@storybook/react-vite";

import { EmptiedState } from "@/shared/ui/patterns/emptied-state/EmptiedState";

const meta = {
  title: "Patterns/Status/Emptied State",
  component: EmptiedState,
  args: {
    title: "장바구니가 비었어요",
    description: "방금 ‘무선 이어폰’을 뺐어요.",
    onUndo: () => {},
    nextAction: { label: "쇼핑 계속하기", href: "#shop" },
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof EmptiedState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cart: Story = {};
export const Folder: Story = {
  args: {
    title: "폴더가 비었어요",
    description: "방금 ‘회의록.pdf’를 휴지통으로 옮겼어요.",
    nextAction: { label: "파일 올리기", href: "#upload" },
  },
};
