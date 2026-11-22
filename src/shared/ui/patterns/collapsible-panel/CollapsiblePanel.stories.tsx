import type { Meta, StoryObj } from "@storybook/react-vite";

import { CollapsiblePanel } from "@/shared/ui/patterns/collapsible-panel/CollapsiblePanel";

const meta = {
  title: "Patterns/Disclosure/Collapsible Panel",
  component: CollapsiblePanel,
  args: { title: "속성", open: true, onOpenChange: () => {}, children: <p>너비 128</p> },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="flex h-48 justify-end border">{Story()}</div>],
} satisfies Meta<typeof CollapsiblePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
export const Folded: Story = { args: { open: false } };
