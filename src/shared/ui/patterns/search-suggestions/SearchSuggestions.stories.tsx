import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SearchSuggestions } from "@/shared/ui/patterns/search-suggestions/SearchSuggestions";

const TERMS = ["린넨 셔츠", "린넨 바지", "린넨 원피스", "무선 이어폰"];

function Controlled({ initial }: { readonly initial: string }) {
  const [value, setValue] = useState(initial);
  return (
    <SearchSuggestions
      label="상품 검색"
      value={value}
      onChange={setValue}
      onSearch={() => undefined}
      suggestions={TERMS.filter((term) => value.trim() !== "" && term.startsWith(value.trim()))}
    />
  );
}

const meta = {
  title: "Patterns/Search/Search Suggestions",
  component: Controlled,
  args: { initial: "" },
  decorators: [(Story) => <div className="h-48 w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Typed: Story = { args: { initial: "린넨" } };
