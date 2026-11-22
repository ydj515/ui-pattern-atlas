import type { Meta, StoryObj } from "@storybook/react-vite";
import { SystemPermissionDialog } from "@/shared/ui/patterns/system-permission-dialog/SystemPermissionDialog";

const meta = {
  title: "Patterns/Onboarding/System Permission Dialog",
  component: SystemPermissionDialog,
  args: {
    title: "‘동네가게’에서 사진에 접근하려고 합니다",
    message: "후기에 사진을 붙이려면 필요해요",
    allowLabel: "모든 사진 허용",
    denyLabel: "허용 안 함",
    onDecide: () => {},
  },
} satisfies Meta<typeof SystemPermissionDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLimited: Story = { args: { limitedLabel: "사진 선택" } };
