import type { Meta, StoryObj } from "@storybook/react-vite";
import { EdgeSwipe } from "@/shared/ui/patterns/edge-swipe/EdgeSwipe";

const meta = {
  title: "Patterns/Gestures/Edge Swipe",
  component: EdgeSwipe,
  args: {
    panelLabel: "메뉴",
    open: false,
    onOpenChange: () => {},
    panel: <p className="p-3 text-sm">받은 편지함</p>,
    children: <div className="h-48 p-3 text-sm">메일 목록</div>,
  },
} satisfies Meta<typeof EdgeSwipe>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};
export const Open: Story = { args: { open: true } };
