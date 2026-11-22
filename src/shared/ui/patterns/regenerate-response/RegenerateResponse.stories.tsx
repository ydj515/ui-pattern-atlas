import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegenerateResponse } from "@/shared/ui/patterns/regenerate-response/RegenerateResponse";

const meta = {
  title: "Patterns/AI/Regenerate Response",
  component: RegenerateResponse,
  args: {
    versions: ["첫 번째 답변", "두 번째 답변"],
    current: 1,
    onCurrentChange: () => {},
    onRegenerate: () => {},
    generating: false,
  },
} satisfies Meta<typeof RegenerateResponse>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Generating: Story = { args: { generating: true } };
