import type { Meta, StoryObj } from "@storybook/react-vite";

import { RecentSearches } from "@/shared/ui/patterns/recent-searches/RecentSearches";

const meta = {
  title: "Patterns/Search/Recent Searches",
  component: RecentSearches,
  args: {
    items: ["린넨 셔츠", "캔버스 백", "무선 이어폰"],
    onSelect: () => undefined,
    onRemove: () => undefined,
    onClear: () => undefined,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof RecentSearches>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { items: [] } };
