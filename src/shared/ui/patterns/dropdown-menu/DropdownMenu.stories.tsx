import type { Meta, StoryObj } from "@storybook/react-vite";

import { DropdownMenu } from "@/shared/ui/patterns/dropdown-menu/DropdownMenu";

const meta = {
  title: "Patterns/Overlay/Dropdown Menu",
  component: DropdownMenu,
  args: {
    label: "기획서 더보기",
    trigger: <span aria-hidden="true">⋯</span>,
    align: "start",
    onSelect: () => {},
    items: [
      { id: "rename", label: "이름 바꾸기" },
      { id: "duplicate", label: "복제" },
      { id: "share", label: "공유" },
      { id: "delete", label: "삭제", tone: "danger", separatorBefore: true },
    ],
  },
  argTypes: { trigger: { control: false } },
  decorators: [(Story) => <div className="h-56">{Story()}</div>],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconTrigger: Story = {};
export const TextTrigger: Story = { args: { label: "정렬", trigger: "정렬 ▾" } };
export const WithDisabledItem: Story = {
  args: {
    items: [
      { id: "rename", label: "이름 바꾸기" },
      { id: "share", label: "공유", disabled: true },
      { id: "delete", label: "삭제", tone: "danger", separatorBefore: true },
    ],
  },
};
