import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "@/shared/ui/patterns/select/Select";

const meta = {
  title: "Patterns/Selection/Select",
  component: Select,
  args: {
    label: "지역",
    placeholder: "지역을 고르세요",
    options: [
      { value: "seoul", label: "서울" },
      { value: "busan", label: "부산" },
      { value: "ulleungdo", label: "울릉도" },
    ],
    value: "",
    onChange: () => {},
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};
export const Chosen: Story = { args: { value: "busan", hint: "배송비가 지역마다 달라요" } };
