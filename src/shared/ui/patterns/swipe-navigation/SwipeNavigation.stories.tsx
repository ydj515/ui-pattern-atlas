import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwipeNavigation } from "@/shared/ui/patterns/swipe-navigation/SwipeNavigation";

const meta = {
  title: "Patterns/Gestures/Swipe Navigation",
  component: SwipeNavigation,
  args: {
    label: "날씨",
    pages: [
      { id: "today", title: "오늘", content: <p className="p-4 text-sm">맑음 18°</p> },
      { id: "tomorrow", title: "내일", content: <p className="p-4 text-sm">비 14°</p> },
    ],
  },
} satisfies Meta<typeof SwipeNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SinglePage: Story = {
  args: {
    pages: [{ id: "today", title: "오늘", content: <p className="p-4 text-sm">맑음 18°</p> }],
  },
};
