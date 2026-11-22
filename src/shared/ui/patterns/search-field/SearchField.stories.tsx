import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SearchField } from "@/shared/ui/patterns/search-field/SearchField";

function Controlled({ initial }: { readonly initial: string }) {
  const [value, setValue] = useState(initial);
  return <SearchField label="문서 검색" value={value} onChange={setValue} />;
}

const meta = {
  title: "Patterns/Text Input/Search Field",
  component: Controlled,
  args: { initial: "" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const WithQuery: Story = { args: { initial: "버튼" } };
