import type { Meta, StoryObj } from "@storybook/react-vite";
import { PinchToZoom } from "@/shared/ui/patterns/pinch-to-zoom/PinchToZoom";

const meta = {
  title: "Patterns/Gestures/Pinch to Zoom",
  component: PinchToZoom,
  args: {
    label: "매장 위치 지도",
    children: <div className="h-48 bg-gradient-to-br from-emerald-200 to-sky-200" />,
  },
} satisfies Meta<typeof PinchToZoom>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MaxTwoTimes: Story = { args: { max: 2 } };
