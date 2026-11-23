import type { Meta, StoryObj } from "@storybook/react-vite";

import { HighlightText } from "@/shared/ui/patterns/search-term-highlight/HighlightText";

const meta = {
  title: "Patterns/Search/Search Term Highlight",
  component: HighlightText,
  args: { text: "린넨 셔츠 반팔, 여름 셔츠", query: "셔츠" },
  decorators: [(Story) => <p className="text-sm text-slate-800">{Story()}</p>],
} satisfies Meta<typeof HighlightText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TwoWords: Story = { args: { query: "린넨 반팔" } };
