import type { Meta, StoryObj } from "@storybook/react-vite";
import { SuccessScreen } from "@/shared/ui/patterns/success-screen/SuccessScreen";

const meta = {
  title: "Patterns/Completion/Success Screen",
  component: SuccessScreen,
  args: {
    title: "결제를 마쳤어요",
    details: [
      { label: "주문 번호", value: "2481" },
      { label: "결제 금액", value: "39,000원" },
    ],
    primary: (
      <button type="button" className="rounded-lg bg-slate-900 py-2 text-white">
        주문 내역 보기
      </button>
    ),
  },
} satisfies Meta<typeof SuccessScreen>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithSecondary: Story = {
  args: {
    secondary: (
      <button type="button" className="py-2">
        쇼핑 계속하기
      </button>
    ),
  },
};
