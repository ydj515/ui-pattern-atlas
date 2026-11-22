import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fade } from "@/shared/ui/patterns/fade/Fade";

const meta = {
  title: "Patterns/Motion/Fade",
  component: Fade,
  args: {
    show: true,
    children: <p className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">저장했어요</p>,
  },
} satisfies Meta<typeof Fade>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Shown: Story = {};
export const LongMessage: Story = {
  args: {
    children: (
      <p className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">
        저장했어요. 다른 기기에서도 볼 수 있어요.
      </p>
    ),
  },
};
