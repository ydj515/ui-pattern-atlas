import type { Meta, StoryObj } from "@storybook/react-vite";
import { CompletionStamp } from "@/shared/ui/patterns/completion-stamp/CompletionStamp";

const meta = {
  title: "Patterns/Completion/Completion Stamp",
  component: CompletionStamp,
  decorators: [(Story) => <div className="relative h-48 w-64 rounded-xl border">{Story()}</div>],
  args: { show: true, text: "완료" },
} satisfies Meta<typeof CompletionStamp>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hidden: Story = { args: { show: false } };
