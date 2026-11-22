import type { Meta, StoryObj } from "@storybook/react-vite";
import { PermissionRecovery } from "@/shared/ui/patterns/permission-recovery/PermissionRecovery";

const meta = {
  title: "Patterns/Onboarding/Permission Recovery",
  component: PermissionRecovery,
  args: {
    title: "위치 권한이 꺼져 있어요",
    body: "내 주변 가게를 찾으려면 위치가 필요해요",
    mode: "retry",
    onRetry: () => {},
    onOpenSettings: () => {},
    fallback: (
      <button type="button" className="text-xs underline">
        주소 직접 입력
      </button>
    ),
  },
} satisfies Meta<typeof PermissionRecovery>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Settings: Story = { args: { mode: "settings" } };
