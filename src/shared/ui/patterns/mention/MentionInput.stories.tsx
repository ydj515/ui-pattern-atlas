import type { Meta, StoryObj } from "@storybook/react-vite";
import { MentionInput } from "@/shared/ui/patterns/mention/MentionInput";

const meta = {
  title: "Patterns/Reaction and Share/Mention",
  component: MentionInput,
  args: {
    label: "댓글",
    value: "",
    onChange: () => {},
    people: [
      { id: "a", name: "하늘" },
      { id: "b", name: "도윤" },
    ],
  },
} satisfies Meta<typeof MentionInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithText: Story = { args: { value: "자료 확인 부탁해요 " } };
