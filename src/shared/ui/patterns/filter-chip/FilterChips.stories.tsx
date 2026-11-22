import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { FilterChips } from "@/shared/ui/patterns/filter-chip/FilterChips";

function Controlled({ initial }: { readonly initial: readonly string[] }) {
  const [selected, setSelected] = useState(initial);
  return (
    <FilterChips
      label="편의시설"
      options={["와이파이", "콘센트", "주차", "반려동물"]}
      selected={selected}
      onChange={setSelected}
    />
  );
}

const meta = {
  title: "Patterns/Selection/Filter Chip",
  component: Controlled,
  args: { initial: [] },
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoneOn: Story = {};
export const TwoOn: Story = { args: { initial: ["와이파이", "콘센트"] } };
