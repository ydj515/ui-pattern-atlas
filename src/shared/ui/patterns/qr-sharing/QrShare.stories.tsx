import type { Meta, StoryObj } from "@storybook/react-vite";
import { QrShare } from "@/shared/ui/patterns/qr-sharing/QrShare";

const meta = {
  title: "Patterns/Reaction and Share/QR Sharing",
  component: QrShare,
  args: { url: "https://atlas.example/i/7KQ2", label: "초대 링크 QR 코드" },
} satisfies Meta<typeof QrShare>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: 96 } };
