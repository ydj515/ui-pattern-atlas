import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchScopeTabs } from "@/shared/ui/patterns/search-scope-tabs/SearchScopeTabs";

const meta = {
  title: "Patterns/Search/Search Scope Tabs",
  component: SearchScopeTabs,
  args: {
    label: "검색 범위",
    scopes: [
      { id: "all", label: "전체", count: 12 },
      { id: "product", label: "상품", count: 9 },
      { id: "brand", label: "브랜드", count: 2 },
    ],
    value: "all",
    onChange: () => undefined,
    children: <p className="text-sm text-slate-600">린넨 셔츠, 린넨 바지, 린넨 공방</p>,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof SearchScopeTabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Brand: Story = {
  args: { value: "brand", children: <p className="text-sm text-slate-600">린넨 공방</p> },
};
