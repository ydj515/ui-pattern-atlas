import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { TagInput } from "@/shared/ui/patterns/tag-input/TagInput";

function Controlled({ initial }: { readonly initial: readonly string[] }) {
  const [tags, setTags] = useState(initial);
  return <TagInput label="관심 분야" placeholder="입력 후 Enter" tags={tags} onChange={setTags} />;
}

const meta = {
  title: "Patterns/Text Input/Tag Input",
  component: Controlled,
  args: { initial: ["디자인", "개발"] },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTags: Story = {};
export const Empty: Story = { args: { initial: [] } };
