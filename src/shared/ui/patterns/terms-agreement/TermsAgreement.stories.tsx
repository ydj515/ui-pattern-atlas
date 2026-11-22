import type { Meta, StoryObj } from "@storybook/react-vite";
import { TermsAgreement } from "@/shared/ui/patterns/terms-agreement/TermsAgreement";

const meta = {
  title: "Patterns/Onboarding/Terms Agreement",
  component: TermsAgreement,
  args: {
    onChange: () => {},
    onView: () => {},
    checked: new Set(["terms"]),
    items: [
      { id: "terms", label: "이용약관", required: true },
      { id: "marketing", label: "마케팅 정보 수신", required: false },
    ],
  },
} satisfies Meta<typeof TermsAgreement>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllChecked: Story = { args: { checked: new Set(["terms", "marketing"]) } };
