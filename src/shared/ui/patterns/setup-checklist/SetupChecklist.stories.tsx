import type { Meta, StoryObj } from "@storybook/react-vite";
import { SetupChecklist } from "@/shared/ui/patterns/setup-checklist/SetupChecklist";

const meta = {
  title: "Patterns/Onboarding/Setup Checklist",
  component: SetupChecklist,
  args: {
    title: "시작하기",
    onAction: () => {},
    tasks: [
      { id: "photo", label: "프로필 사진 올리기", done: true, action: "올리기" },
      { id: "invite", label: "팀원 초대하기", done: false, action: "초대" },
    ],
  },
} satisfies Meta<typeof SetupChecklist>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllDone: Story = {
  args: { tasks: [{ id: "photo", label: "프로필 사진 올리기", done: true, action: "올리기" }] },
};
