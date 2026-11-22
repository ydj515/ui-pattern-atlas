import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatInterface } from "@/shared/ui/patterns/chat-interface/ChatInterface";

const meta = {
  title: "Patterns/AI/Chat Interface",
  component: ChatInterface,
  args: {
    label: "대화",
    composer: <input aria-label="메시지" className="w-full rounded border px-2 py-1" />,
    messages: [
      { id: "1", role: "user", content: "주말 브런치 추천해 줘" },
      { id: "2", role: "assistant", content: "서울숲 근처 세 곳을 골라 봤어요." },
    ],
  },
} satisfies Meta<typeof ChatInterface>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { messages: [] } };
