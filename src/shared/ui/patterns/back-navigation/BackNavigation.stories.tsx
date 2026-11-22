import type { Meta, StoryObj } from "@storybook/react-vite";

import { BackButton } from "@/shared/ui/patterns/back-navigation/BackNavigation";

const meta = {
  title: "Patterns/Navigation/Back Navigation",
  component: BackButton,
  args: { label: "목록", onBack: () => {} },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToList: Story = {};
export const ToSearch: Story = { args: { label: "검색 결과" } };
