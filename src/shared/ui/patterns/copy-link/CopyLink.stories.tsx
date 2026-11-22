import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyLink } from "@/shared/ui/patterns/copy-link/CopyLink";

const meta = {
  title: "Patterns/Reaction and Share/Copy Link",
  component: CopyLink,
  args: { label: "초대 링크", url: "https://atlas.example/i/7KQ2" },
} satisfies Meta<typeof CopyLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLabels: Story = { args: { copyLabel: "링크 복사", copiedLabel: "복사됐어요" } };
