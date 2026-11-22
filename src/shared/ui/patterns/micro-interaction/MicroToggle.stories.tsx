import type { Meta, StoryObj } from "@storybook/react-vite";
import { MicroToggle } from "@/shared/ui/patterns/micro-interaction/MicroToggle";

const meta = {
  title: "Patterns/Motion/Micro-interaction",
  component: MicroToggle,
  args: {
    pressed: false,
    onPressedChange: () => {},
    label: "저장",
    pressedLabel: "저장됨",
    icon: (pressed: boolean) => <span>{pressed ? "■" : "□"}</span>,
  },
} satisfies Meta<typeof MicroToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};
export const On: Story = { args: { pressed: true } };
