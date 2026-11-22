import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

/** Site chrome button (DESIGN.md → Components). Switch "Theme" in the toolbar to see dark mode. */
const meta = {
  title: "Site/Button",
  component: Button,
  args: { children: "전체 패턴 보기", variant: "primary", disabled: false },
  decorators: [(Story) => <div className="bg-paper p-6">{Story()}</div>],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Quiet: Story = { args: { variant: "quiet", children: "코드 복사" } };
export const QuietOnCanvas: Story = {
  args: { variant: "quietOnCanvas", children: "처음부터" },
  decorators: [(Story) => <div className="rounded-surface bg-canvas p-6">{Story()}</div>],
};
export const Icon: Story = {
  args: {
    variant: "icon",
    "aria-label": "다크 모드로 전환",
    children: (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
        <path d="M8.5 2.6a1 1 0 0 1 .2 1.1A6 6 0 0 0 16.3 11a1 1 0 0 1 1.3 1.3A8 8 0 1 1 7.4 2.4a1 1 0 0 1 1.1.2Z" />
      </svg>
    ),
  },
};
export const Disabled: Story = { args: { disabled: true } };
