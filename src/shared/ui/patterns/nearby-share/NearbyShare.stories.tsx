import type { Meta, StoryObj } from "@storybook/react-vite";
import { NearbyShare } from "@/shared/ui/patterns/nearby-share/NearbyShare";

const meta = {
  title: "Patterns/Reaction and Share/Nearby Share",
  component: NearbyShare,
  args: {
    title: "근처 공유",
    searching: true,
    target: null,
    status: "idle",
    onPick: () => {},
    devices: [{ id: "tab", name: "하늘의 태블릿", kind: "tablet" }],
  },
} satisfies Meta<typeof NearbyShare>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Waiting: Story = { args: { searching: false, target: "tab", status: "waiting" } };
