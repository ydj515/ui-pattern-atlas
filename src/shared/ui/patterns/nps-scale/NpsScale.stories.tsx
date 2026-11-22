import type { Meta, StoryObj } from "@storybook/react-vite";
import { NpsScale } from "@/shared/ui/patterns/nps-scale/NpsScale";

const meta = {
  title: "Patterns/Reaction and Share/NPS Scale",
  component: NpsScale,
  args: { question: "친구에게 추천할 의향이 있나요?", value: null, onChange: () => {} },
} satisfies Meta<typeof NpsScale>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Answered: Story = { args: { value: 9 } };
