import type { Meta, StoryObj } from "@storybook/react-vite";

import { SettingsList } from "@/shared/ui/patterns/settings-list/SettingsList";

const meta = {
  title: "Patterns/Settings/Settings List",
  component: SettingsList,
  args: {
    sections: [
      { title: "알림", rows: [{ id: "push", label: "앱 푸시", kind: "switch", checked: true }] },
      {
        title: "화면",
        rows: [{ id: "theme", label: "화면 모드", kind: "value", value: "시스템 설정" }],
      },
      { title: "계정", rows: [{ id: "logout", label: "로그아웃", kind: "action" }] },
    ],
    onToggle: () => undefined,
    onOpen: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof SettingsList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Danger: Story = {
  args: {
    sections: [
      {
        title: "계정",
        rows: [{ id: "delete", label: "회원 탈퇴", kind: "action", tone: "danger" }],
      },
    ],
  },
};
