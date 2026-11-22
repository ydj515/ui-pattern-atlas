import type { Meta, StoryObj } from "@storybook/react-vite";

import { ColorPicker } from "@/shared/ui/patterns/color-picker/ColorPicker";

const meta = {
  title: "Patterns/Special Input/Color Picker",
  component: ColorPicker,
  args: {
    label: "태그 색",
    colors: [
      { value: "#2563eb", name: "파랑" },
      { value: "#16a34a", name: "초록" },
      { value: "#ea580c", name: "주황" },
    ],
    value: "#2563eb",
    onChange: () => {},
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preset: Story = {};
export const Custom: Story = { args: { value: "#db2777" } };
