import type { Meta, StoryObj } from "@storybook/react-vite";

import { NoFilterResults } from "@/shared/ui/patterns/no-filter-results/NoFilterResults";

const meta = {
  title: "Patterns/Status/No Filter Results",
  component: NoFilterResults,
  args: {
    title: "조건에 맞는 숙소가 없어요",
    filters: [
      { id: "price", label: "5만원 이하" },
      { id: "pet", label: "반려동물" },
      { id: "pool", label: "수영장" },
    ],
    onRemove: () => {},
    onReset: () => {},
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof NoFilterResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeFilters: Story = {};
export const OneFilter: Story = { args: { filters: [{ id: "pool", label: "수영장" }] } };
