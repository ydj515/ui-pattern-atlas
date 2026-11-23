import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchFilters } from "@/shared/ui/patterns/search-filters/SearchFilters";

const meta = {
  title: "Patterns/Search/Search Filters",
  component: SearchFilters,
  args: {
    groups: [
      {
        id: "price",
        label: "가격",
        options: [
          { value: "low", label: "3만 원 이하" },
          { value: "mid", label: "3만~5만 원" },
        ],
      },
      {
        id: "color",
        label: "색상",
        options: [
          { value: "white", label: "흰색" },
          { value: "beige", label: "베이지" },
        ],
      },
    ],
    selected: {},
    onChange: () => undefined,
    resultLabel: "결과 8개",
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof SearchFilters>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Applied: Story = {
  args: { selected: { color: ["white"], price: ["low"] }, resultLabel: "결과 2개" },
};
