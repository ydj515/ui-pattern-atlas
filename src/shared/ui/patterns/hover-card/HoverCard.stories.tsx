import type { Meta, StoryObj } from "@storybook/react-vite";

import { HoverCard } from "@/shared/ui/patterns/hover-card/HoverCard";

const meta = {
  title: "Patterns/Overlay/Hover Card",
  component: HoverCard,
  args: {
    openDelay: 500,
    closeDelay: 250,
    children: (
      <a href="#profile" className="font-semibold text-blue-700">
        @김하늘
      </a>
    ),
    content: (
      <>
        <span className="block text-sm font-semibold">김하늘</span>
        <span className="block text-xs text-slate-500">프로덕트 디자이너</span>
      </>
    ),
  },
  argTypes: { children: { control: false }, content: { control: false } },
  decorators: [(Story) => <div className="h-40">{Story()}</div>],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {};
export const Instant: Story = { args: { openDelay: 0 } };
