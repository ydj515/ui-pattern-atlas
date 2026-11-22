import type { Meta, StoryObj } from "@storybook/react-vite";
import { Citation } from "@/shared/ui/patterns/citation/Citation";

const meta = {
  title: "Patterns/AI/Citation",
  component: Citation,
  decorators: [(Story) => <div className="h-56 p-2">{Story()}</div>],
  args: {
    index: 1,
    source: { title: "서울숲 공원 안내", site: "서울시", url: "https://example.com/seoul-forest" },
  },
} satisfies Meta<typeof Citation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Second: Story = { args: { index: 2 } };
