import type { Meta, StoryObj } from "@storybook/react-vite";

import { UpdatePrompt } from "@/shared/ui/patterns/update-prompt/UpdatePrompt";

const meta = {
  title: "Patterns/Leaving and returning/Update Prompt",
  component: UpdatePrompt,
  args: {
    kind: "optional",
    version: "4.2",
    notes: ["사진을 한 번에 20장까지 올려요", "다크 모드 글자가 더 또렷해져요"],
    onUpdate: () => undefined,
    onLater: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof UpdatePrompt>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Optional: Story = {};
export const Required: Story = { args: { kind: "required" } };
