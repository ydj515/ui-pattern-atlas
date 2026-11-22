import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditPrompt } from "@/shared/ui/patterns/edit-prompt/EditPrompt";

const meta = {
  title: "Patterns/AI/Edit Prompt",
  component: EditPrompt,
  args: { text: "주말 브런치 추천해 줘", onSubmit: () => {} },
} satisfies Meta<typeof EditPrompt>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LongText: Story = {
  args: { text: "서울숲 근처에서 아이와 갈 만한 주말 브런치 가게를 추천해 줘" },
};
