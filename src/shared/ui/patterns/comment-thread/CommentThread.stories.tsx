import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommentThread } from "@/shared/ui/patterns/comment-thread/CommentThread";

const meta = {
  title: "Patterns/Reaction and Share/Comment Thread",
  component: CommentThread,
  args: {
    onReply: () => {},
    comments: [
      {
        id: "1",
        author: "하늘",
        time: "2시간 전",
        body: "사진 좋네요",
        replies: [{ id: "1-1", author: "도윤", time: "1시간 전", body: "고마워요" }],
      },
    ],
  },
} satisfies Meta<typeof CommentThread>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoReplies: Story = {
  args: { comments: [{ id: "1", author: "하늘", time: "2시간 전", body: "사진 좋네요" }] },
};
