import type { Meta, StoryObj } from "@storybook/react-vite";

import { GroupedList } from "@/shared/ui/patterns/grouped-list/GroupedList";

const meta = {
  title: "Patterns/List and Table/Grouped List",
  component: GroupedList,
  args: {
    label: "연락처",
    groups: [
      { title: "ㄱ", items: ["강민지", "김하늘"] },
      { title: "ㅂ", items: ["박서준"] },
    ],
    height: 200,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof GroupedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contacts: Story = {};
export const Tall: Story = { args: { height: 320 } };
