import type { Meta, StoryObj } from "@storybook/react-vite";

import { Combobox } from "@/shared/ui/patterns/combobox/Combobox";

const meta = {
  title: "Patterns/Selection/Combobox",
  component: Combobox,
  args: {
    label: "도시",
    placeholder: "도시 이름을 입력하세요",
    options: ["서울", "부산", "인천", "대구", "대전"],
    value: "",
    onChange: () => {},
  },
  decorators: [(Story) => <div className="h-56 w-72">{Story()}</div>],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const WithValue: Story = { args: { value: "대전" } };
