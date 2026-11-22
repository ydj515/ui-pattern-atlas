import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScrollProgress } from "@/shared/ui/patterns/scroll-progress/ScrollProgress";

const meta = {
  title: "Patterns/Indicator/Scroll Progress",
  component: ScrollProgress,
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof ScrollProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Follows the page scroll; scroll the story canvas to see it fill. */
export const Page: Story = {};
export const Tall: Story = { args: { className: "h-2" } };
