import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageIndicator } from "@/shared/ui/patterns/page-indicator/PageIndicator";

const meta = {
  title: "Patterns/Indicator/Page Indicator",
  component: PageIndicator,
  args: { count: 4, current: 1 },
} satisfies Meta<typeof PageIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {};
export const Clickable: Story = { args: { onSelect: () => {} } };
