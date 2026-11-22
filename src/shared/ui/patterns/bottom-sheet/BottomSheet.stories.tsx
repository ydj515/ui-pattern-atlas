import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheet } from "@/shared/ui/patterns/bottom-sheet/BottomSheet";

const meta = {
  title: "Patterns/Overlay/Bottom Sheet",
  component: BottomSheet,
  args: {
    title: "정렬 기준",
    open: true,
    onClose: () => {},
    children: <button type="button">낮은 가격순</button>,
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
export const Closed: Story = { args: { open: false } };
