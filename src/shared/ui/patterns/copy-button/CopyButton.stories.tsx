import type { Meta, StoryObj } from "@storybook/react-vite";

import { CopyButton } from "@/shared/ui/patterns/copy-button/CopyButton";

const meta = {
  title: "Patterns/Buttons/Copy Button",
  component: CopyButton,
  args: { text: "https://atlas.example/invite/7KQ2" },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CodeSnippet: Story = {
  args: { text: "pnpm add ui-pattern-atlas", label: "명령어 복사" },
};
