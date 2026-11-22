import type { Meta, StoryObj } from "@storybook/react-vite";
import { ForwardDialog } from "@/shared/ui/patterns/send-forward/ForwardDialog";

const meta = {
  title: "Patterns/Reaction and Share/Send / Forward",
  component: ForwardDialog,
  args: {
    title: "사진 전달",
    onSend: () => {},
    onClose: () => {},
    contacts: [
      { id: "a", name: "하늘" },
      { id: "b", name: "도윤" },
    ],
  },
} satisfies Meta<typeof ForwardDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OneContact: Story = { args: { contacts: [{ id: "a", name: "하늘" }] } };
