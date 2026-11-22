import type { Meta, StoryObj } from "@storybook/react-vite";

import { LockedContent } from "@/shared/ui/patterns/locked-content/LockedContent";

const meta = {
  title: "Patterns/Status/Locked Content",
  component: LockedContent,
  args: {
    preview: (
      <p>
        작은 팀일수록 색과 글꼴부터 정리하는 편이 빠릅니다. 버튼을 만들 때마다 같은 질문을 반복하지
        않게 되니까요.
      </p>
    ),
    description: "월 4,900원으로 모든 글을 읽을 수 있어요.",
    actionLabel: "멤버십 시작하기",
    onUnlock: () => {},
  },
  argTypes: { preview: { control: false } },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof LockedContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Membership: Story = {};
export const SignInToRead: Story = {
  args: {
    title: "로그인하면 이어서 읽을 수 있어요",
    description: "무료 회원도 볼 수 있는 글이에요.",
    actionLabel: "로그인",
  },
};
