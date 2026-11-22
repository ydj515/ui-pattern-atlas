import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: "Patterns/Navigation/Breadcrumb",
  component: Breadcrumb,
  args: {
    label: "현재 위치",
    items: [
      { label: "홈", href: "#home" },
      { label: "가전", href: "#electronics" },
      { label: "주방가전", href: "#kitchen" },
      { label: "에어프라이어", href: "#air-fryer" },
    ],
    onNavigate: (_item, event) => event.preventDefault(),
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Deep: Story = {};
export const TwoLevels: Story = {
  args: {
    items: [
      { label: "홈", href: "#home" },
      { label: "가전", href: "#electronics" },
    ],
  },
};
