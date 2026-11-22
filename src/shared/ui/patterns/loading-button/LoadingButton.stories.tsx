import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoadingButton } from "@/shared/ui/patterns/loading-button/LoadingButton";

const meta = {
  title: "Patterns/Buttons/Loading Button",
  component: LoadingButton,
  args: {
    state: "idle",
    onClick: () => {},
    labels: { idle: "저장", loading: "저장하는 중", success: "저장했어요", error: "다시 시도" },
  },
} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};
export const Loading: Story = { args: { state: "loading" } };
export const Success: Story = { args: { state: "success" } };
export const Failed: Story = { args: { state: "error" } };
