import type { Meta, StoryObj } from "@storybook/react-vite";

import { TrendingSearches } from "@/shared/ui/patterns/trending-searches/TrendingSearches";

const meta = {
  title: "Patterns/Search/Trending Searches",
  component: TrendingSearches,
  args: {
    basis: "11월 23일 14:00 기준",
    items: [
      { term: "겨울 패딩", change: "up" },
      { term: "전기요", change: "new" },
      { term: "니트", change: "same" },
      { term: "부츠", change: "down" },
    ],
    onSelect: () => undefined,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof TrendingSearches>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Weekly: Story = { args: { basis: "11월 17일~23일 기준" } };
