import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertBanner } from "./AlertBanner";

const meta = {
  title: "Patterns/Feedback/Alert Banner",
  component: AlertBanner,
  parameters: { layout: "padded" },
  args: {
    tone: "warning",
    title: "쿠폰 마감이 3일 남았어요",
    children: "11월 25일 자정까지 사용할 수 있어요.",
    dismissLabel: "배너 닫기",
    onDismiss: () => {},
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {};
export const Info: Story = {
  args: {
    tone: "info",
    title: "새 기능이 추가됐어요",
    children: "이제 폴더별로 정리할 수 있어요.",
  },
};
export const Success: Story = {
  args: { tone: "success", title: "결제 수단을 등록했어요", children: undefined },
};
export const Error: Story = {
  args: { tone: "error", title: "결제에 실패했어요", children: "카드 한도를 확인해 주세요." },
};
export const NotDismissible: Story = { args: { onDismiss: undefined } };
