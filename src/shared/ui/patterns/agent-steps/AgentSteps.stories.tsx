import type { Meta, StoryObj } from "@storybook/react-vite";
import { AgentSteps } from "@/shared/ui/patterns/agent-steps/AgentSteps";

const meta = {
  title: "Patterns/AI/Agent Steps",
  component: AgentSteps,
  args: {
    label: "작업 단계",
    steps: [
      { id: "1", title: "자료 찾기", status: "done", detail: "문서 3개" },
      { id: "2", title: "표로 정리", status: "running" },
      { id: "3", title: "요약 쓰기", status: "waiting" },
    ],
  },
} satisfies Meta<typeof AgentSteps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Failed: Story = {
  args: { steps: [{ id: "1", title: "자료 찾기", status: "failed", detail: "권한이 없어요" }] },
};
