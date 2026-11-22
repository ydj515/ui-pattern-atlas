import type { Meta, StoryObj } from "@storybook/react-vite";
import { InviteDialog } from "@/shared/ui/patterns/invite-dialog/InviteDialog";

const meta = {
  title: "Patterns/Reaction and Share/Invite Dialog",
  component: InviteDialog,
  args: { title: "팀에 초대하기", onInvite: () => {}, onClose: () => {} },
} satisfies Meta<typeof InviteDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomPlaceholder: Story = { args: { placeholder: "team@example.com" } };
