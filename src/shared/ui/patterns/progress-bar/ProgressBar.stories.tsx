import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "@/shared/ui/patterns/progress-bar/ProgressBar";

const meta = {
  title: "Patterns/Loading/Progress Bar",
  component: ProgressBar,
  args: { label: "포트폴리오 파일", percent: 60 },
} satisfies Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Uploading: Story = {};
export const Complete: Story = { args: { percent: 100 } };
