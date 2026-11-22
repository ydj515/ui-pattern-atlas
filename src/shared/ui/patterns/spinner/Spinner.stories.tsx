import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@/shared/ui/patterns/spinner/Spinner";

const meta = {
  title: "Patterns/Loading/Spinner",
  component: Spinner,
  args: { label: "소식을 확인하고 있어요" },
} satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
