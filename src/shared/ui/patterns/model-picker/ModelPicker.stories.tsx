import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModelPicker } from "@/shared/ui/patterns/model-picker/ModelPicker";

const meta = {
  title: "Patterns/AI/Model Picker",
  component: ModelPicker,
  decorators: [(Story) => <div className="h-56 p-2">{Story()}</div>],
  args: {
    label: "모델",
    value: "fast",
    onChange: () => {},
    models: [
      { id: "fast", name: "빠른 모델", hint: "짧은 질문에 알맞아요" },
      { id: "deep", name: "깊은 모델", hint: "복잡한 질문에 알맞아요" },
    ],
  },
} satisfies Meta<typeof ModelPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Deep: Story = { args: { value: "deep" } };
