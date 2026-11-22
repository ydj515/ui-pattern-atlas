import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttachmentTray } from "@/shared/ui/patterns/file-attachment/AttachmentTray";

const meta = {
  title: "Patterns/AI/File Attachment",
  component: AttachmentTray,
  args: {
    onRemove: () => {},
    files: [{ id: "a", name: "회의록.pdf", size: "1.2MB", progress: 0.4 }],
  },
} satisfies Meta<typeof AttachmentTray>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = {
  args: {
    files: [{ id: "b", name: "사진.png", size: "14MB", progress: 0, error: "10MB를 넘어요" }],
  },
};
