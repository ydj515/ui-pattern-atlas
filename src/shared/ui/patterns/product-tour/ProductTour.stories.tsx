import type { Meta, StoryObj } from "@storybook/react-vite";
import { TourStop } from "@/shared/ui/patterns/product-tour/ProductTour";

const meta = {
  title: "Patterns/Onboarding/Product Tour",
  component: TourStop,
  decorators: [(Story) => <div className="h-56 overflow-hidden p-4">{Story()}</div>],
  args: {
    active: true,
    step: 1,
    total: 3,
    title: "검색",
    body: "이름이나 태그로 찾아요",
    onNext: () => {},
    onPrev: () => {},
    onSkip: () => {},
    children: <span className="rounded-lg border px-3 py-1">검색</span>,
  },
} satisfies Meta<typeof TourStop>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LastStop: Story = { args: { step: 3 } };
