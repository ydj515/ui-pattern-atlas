import type { Meta, StoryObj } from "@storybook/react-vite";

import { ResumePrompt } from "@/shared/ui/patterns/resume-prompt/ResumePrompt";

const meta = {
  title: "Patterns/Leaving and returning/Resume Prompt",
  component: ResumePrompt,
  args: {
    title: "서울 야경 사진 강의",
    position: "3강 12:40",
    progress: 0.4,
    onResume: () => undefined,
    onRestart: () => undefined,
    onDismiss: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ResumePrompt>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AlmostDone: Story = { args: { position: "8강 02:10", progress: 0.92 } };
