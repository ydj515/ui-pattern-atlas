import type { Meta, StoryObj } from "@storybook/react-vite";
import { WhatsNew } from "@/shared/ui/patterns/whats-new/WhatsNew";

const meta = {
  title: "Patterns/Onboarding/What's New",
  component: WhatsNew,
  args: {
    version: "버전 3.2",
    onClose: () => {},
    items: [
      { title: "사진으로 검색", body: "찍은 사진과 비슷한 상품을 찾아요" },
      { title: "더 빠른 결제", body: "저장한 카드로 한 번에 결제해요" },
    ],
  },
} satisfies Meta<typeof WhatsNew>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OneItem: Story = {
  args: { items: [{ title: "사진으로 검색", body: "찍은 사진과 비슷한 상품을 찾아요" }] },
};
