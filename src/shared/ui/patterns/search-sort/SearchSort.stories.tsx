import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchSort } from "@/shared/ui/patterns/search-sort/SearchSort";

const meta = {
  title: "Patterns/Search/Search Sort",
  component: SearchSort,
  args: {
    options: [
      { value: "recommended", label: "추천순" },
      { value: "low", label: "낮은 가격순" },
      { value: "high", label: "높은 가격순" },
      { value: "reviews", label: "리뷰 많은순" },
    ],
    value: "recommended",
    onChange: () => undefined,
  },
  decorators: [(Story) => <div className="flex h-48 w-72 justify-end">{Story()}</div>],
} satisfies Meta<typeof SearchSort>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LowPrice: Story = { args: { value: "low" } };
