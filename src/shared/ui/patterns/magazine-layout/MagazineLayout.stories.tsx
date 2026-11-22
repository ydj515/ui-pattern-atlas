import type { Meta, StoryObj } from "@storybook/react-vite";

import { MagazineLayout } from "@/shared/ui/patterns/magazine-layout/MagazineLayout";

const block = <div className="size-full bg-slate-200" />;

const meta = {
  title: "Patterns/Layout/Magazine Layout",
  component: MagazineLayout,
  args: {
    lead: {
      id: "lead",
      kicker: "커버 스토리",
      title: "작은 동네 책방이 살아남는 법",
      href: "#lead",
      visual: block,
    },
    stories: [
      { id: "a", kicker: "여행", title: "겨울 바다 걷기 좋은 곳", href: "#a", visual: block },
    ],
  },
  argTypes: { lead: { control: false }, stories: { control: false } },
  decorators: [(Story) => <div className="w-[28rem]">{Story()}</div>],
} satisfies Meta<typeof MagazineLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneSide: Story = {};
export const LeadOnly: Story = { args: { stories: [] } };
