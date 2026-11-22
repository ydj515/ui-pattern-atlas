import type { Meta, StoryObj } from "@storybook/react-vite";
import { PermissionPriming } from "@/shared/ui/patterns/permission-priming/PermissionPriming";

const meta = {
  title: "Patterns/Onboarding/Permission Priming",
  component: PermissionPriming,
  args: {
    icon: "!",
    title: "배송 알림을 받아 보세요",
    reasons: ["출발과 도착을 바로 알려 드려요", "광고는 보내지 않아요"],
    allowLabel: "알림 켜기",
    onAllow: () => {},
    onLater: () => {},
  },
} satisfies Meta<typeof PermissionPriming>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLater: Story = { args: { laterLabel: "괜찮아요" } };
