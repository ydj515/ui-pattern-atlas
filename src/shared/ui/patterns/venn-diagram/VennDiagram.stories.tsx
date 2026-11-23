import type { Meta, StoryObj } from "@storybook/react-vite";

import { VennDiagram } from "@/shared/ui/patterns/venn-diagram/VennDiagram";

const meta = {
  title: "Patterns/Data Viz/Venn Diagram",
  component: VennDiagram,
  args: {
    title: "마케팅 수신 동의",
    sets: [
      { key: "email", label: "이메일" },
      { key: "push", label: "앱 푸시" },
      { key: "sms", label: "문자" },
    ],
    regions: [
      { sets: ["email"], value: 320 },
      { sets: ["push"], value: 280 },
      { sets: ["sms"], value: 150 },
      { sets: ["email", "push"], value: 120 },
      { sets: ["email", "sms"], value: 60 },
      { sets: ["push", "sms"], value: 90 },
      { sets: ["email", "push", "sms"], value: 40 },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof VennDiagram>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeSets: Story = {};
export const TwoSets: Story = {
  args: {
    sets: [
      { key: "email", label: "이메일" },
      { key: "push", label: "앱 푸시" },
    ],
    regions: [
      { sets: ["email"], value: 380 },
      { sets: ["push"], value: 370 },
      { sets: ["email", "push"], value: 160 },
    ],
  },
};
