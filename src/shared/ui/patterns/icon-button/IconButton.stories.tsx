import type { Meta, StoryObj } from "@storybook/react-vite";

import { IconButton } from "@/shared/ui/patterns/icon-button/IconButton";

const shareIcon = (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 3v10M6 7l4-4 4 4M4 12v4h12v-4" />
  </svg>
);

const meta = {
  title: "Patterns/Buttons/Icon Button",
  component: IconButton,
  args: { label: "공유", icon: shareIcon },
  argTypes: { icon: { control: false } },
  decorators: [(Story) => <div className="p-6">{Story()}</div>],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Share: Story = {};
export const Disabled: Story = { args: { disabled: true } };
