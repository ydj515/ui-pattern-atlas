import type { Meta, StoryObj } from "@storybook/react-vite";

import { PermissionDenied } from "@/shared/ui/patterns/permission-denied/PermissionDenied";

const meta = {
  title: "Patterns/Status/Permission Denied",
  component: PermissionDenied,
  args: {
    title: "이 문서를 볼 권한이 없어요",
    description: "소유자 김하늘 님에게 권한을 요청할 수 있어요.",
    account: "sky@example.com 계정으로 로그인 중",
    requested: false,
    onRequest: () => {},
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof PermissionDenied>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotRequested: Story = {};
export const Requested: Story = { args: { requested: true } };
