import type { Meta, StoryObj } from "@storybook/react-vite";

import { SplitButton } from "@/shared/ui/patterns/split-button/SplitButton";

const meta = {
  title: "Patterns/Buttons/Split Button",
  component: SplitButton,
  args: {
    primary: { id: "save", label: "저장" },
    actions: [
      { id: "save-as", label: "사본으로 저장" },
      { id: "pdf", label: "PDF로 내보내기" },
    ],
    menuLabel: "저장 옵션",
    onAction: () => {},
  },
  decorators: [(Story) => <div className="h-40">{Story()}</div>],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Save: Story = {};
export const Send: Story = {
  args: {
    primary: { id: "send", label: "보내기" },
    actions: [{ id: "schedule", label: "예약 보내기" }],
    menuLabel: "보내기 옵션",
  },
};
