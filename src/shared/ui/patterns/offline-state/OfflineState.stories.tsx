import type { Meta, StoryObj } from "@storybook/react-vite";

import { OfflineState } from "@/shared/ui/patterns/offline-state/OfflineState";

const meta = {
  title: "Patterns/Status/Offline State",
  component: OfflineState,
  args: { onRetry: () => {} },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof OfflineState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomCopy: Story = {
  args: {
    title: "오프라인이에요",
    description: "저장한 글만 볼 수 있어요.",
    retryLabel: "연결 확인",
  },
};
