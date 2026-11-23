import type { Meta, StoryObj } from "@storybook/react-vite";

import { PrivacySettings } from "@/shared/ui/patterns/privacy-settings/PrivacySettings";

const meta = {
  title: "Patterns/Settings/Privacy Settings",
  component: PrivacySettings,
  args: {
    visibility: [
      { id: "public", label: "전체 공개", description: "누구나 프로필과 후기를 볼 수 있어요" },
      { id: "private", label: "나만 보기", description: "다른 사람에게 보이지 않아요" },
    ],
    value: "public",
    onVisibilityChange: () => undefined,
    toggles: [{ id: "search", label: "검색에 내 프로필 보이기", checked: true }],
    onToggle: () => undefined,
    onRequestData: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof PrivacySettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Private: Story = { args: { value: "private" } };
