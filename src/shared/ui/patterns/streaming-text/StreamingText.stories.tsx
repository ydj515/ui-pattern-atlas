import type { Meta, StoryObj } from "@storybook/react-vite";
import { StreamingText } from "@/shared/ui/patterns/streaming-text/StreamingText";

const meta = {
  title: "Patterns/AI/Streaming Text",
  component: StreamingText,
  args: { text: "서울숲 근처 세 곳을 골라 봤어요.", running: false, onDone: () => {} },
} satisfies Meta<typeof StreamingText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Streaming: Story = { args: { running: true } };
