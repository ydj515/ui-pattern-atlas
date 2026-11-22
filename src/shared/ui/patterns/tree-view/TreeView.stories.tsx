import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { TreeView } from "@/shared/ui/patterns/tree-view/TreeView";

const nodes = [
  { id: "design", label: "디자인", children: [{ id: "logo", label: "로고.svg" }] },
  { id: "readme", label: "README.md" },
];

function Controlled({ expanded }: { readonly expanded: readonly string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <TreeView
      label="프로젝트 파일"
      nodes={nodes}
      selected={selected}
      onSelect={setSelected}
      defaultExpanded={expanded}
    />
  );
}

const meta = {
  title: "Patterns/Disclosure/Tree View",
  component: Controlled,
  args: { expanded: ["design"] },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {};
export const Collapsed: Story = { args: { expanded: [] } };
