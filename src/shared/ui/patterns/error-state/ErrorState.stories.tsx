import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorState } from "./ErrorState";

const meta = {
  title: "Patterns/Status/Error State",
  component: ErrorState,
  args: {
    title: "상품을 불러오지 못했어요",
    description: "잠시 후 다시 시도해 주세요.",
    retryLabel: "다시 시도",
    retryingLabel: "불러오는 중…",
    onRetry: () => {},
  },
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Failed: Story = {};
export const Retrying: Story = { args: { retrying: true } };
