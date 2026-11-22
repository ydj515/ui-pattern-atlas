import type { Meta, StoryObj } from "@storybook/react-vite";
import { LimitedAccess } from "@/shared/ui/patterns/limited-access/LimitedAccess";

const meta = {
  title: "Patterns/Onboarding/Limited Access",
  component: LimitedAccess,
  args: {
    summary: "사진 3장만 볼 수 있어요",
    onManage: () => {},
    children: (
      <div className="grid grid-cols-3 gap-1">
        <span className="h-16 bg-sky-200" />
        <span className="h-16 bg-amber-200" />
        <span className="h-16 bg-rose-200" />
      </div>
    ),
  },
} satisfies Meta<typeof LimitedAccess>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLabel: Story = { args: { manageLabel: "사진 더 고르기" } };
