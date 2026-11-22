import type { Meta, StoryObj } from "@storybook/react-vite";

import { TableOfContents } from "@/shared/ui/patterns/table-of-contents/TableOfContents";

const meta = {
  title: "Patterns/Navigation/Table of Contents",
  component: TableOfContents,
  args: {
    items: [
      { id: "story-start", label: "시작하기" },
      { id: "story-install", label: "설치" },
      { id: "story-usage", label: "사용법" },
    ],
  },
} satisfies Meta<typeof TableOfContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Named: Story = { args: { label: "이 문서의 목차" } };
