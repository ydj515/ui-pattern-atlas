import type { Meta, StoryObj } from "@storybook/react-vite";
import { OnboardingCarousel } from "@/shared/ui/patterns/onboarding-carousel/OnboardingCarousel";

const meta = {
  title: "Patterns/Onboarding/Onboarding Carousel",
  component: OnboardingCarousel,
  args: {
    onFinish: () => {},
    slides: [
      {
        title: "지출을 한곳에",
        body: "카드와 계좌 내역을 자동으로 모아요",
        art: <span className="block size-16 rounded-2xl bg-emerald-200" />,
      },
      {
        title: "예산 알림",
        body: "정한 금액을 넘기 전에 알려 드려요",
        art: <span className="block size-16 rounded-2xl bg-amber-200" />,
      },
    ],
  },
} satisfies Meta<typeof OnboardingCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SingleSlide: Story = {
  args: {
    slides: [{ title: "지출을 한곳에", body: "카드와 계좌 내역을 자동으로 모아요", art: null }],
  },
};
