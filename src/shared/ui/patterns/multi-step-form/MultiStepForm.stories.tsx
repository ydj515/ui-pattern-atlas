import type { Meta, StoryObj } from "@storybook/react-vite";

import { MultiStepForm } from "@/shared/ui/patterns/multi-step-form/MultiStepForm";

const meta = {
  title: "Patterns/Text Input/Multi-step Form",
  component: MultiStepForm,
  args: {
    onComplete: () => {},
    steps: [
      {
        id: "account",
        title: "계정",
        content: (
          <input aria-label="이메일" className="w-full rounded-lg border px-3 py-1.5 text-sm" />
        ),
      },
      {
        id: "profile",
        title: "프로필",
        content: (
          <input aria-label="이름" className="w-full rounded-lg border px-3 py-1.5 text-sm" />
        ),
      },
      {
        id: "done",
        title: "확인",
        content: <p className="text-sm">입력한 내용을 확인해 주세요.</p>,
      },
    ],
  },
  argTypes: { steps: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof MultiStepForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeSteps: Story = {};
export const CustomLabels: Story = { args: { nextLabel: "계속", submitLabel: "가입하기" } };
