import type { Meta, StoryObj } from "@storybook/react-vite";

import { Lightbox } from "@/shared/ui/patterns/lightbox/Lightbox";

const meta = {
  title: "Patterns/Cards and Gallery/Lightbox",
  component: Lightbox,
  args: {
    items: [
      { id: "a", caption: "서울 한강", content: <div className="size-full bg-sky-400" /> },
      { id: "b", caption: "서울숲 길", content: <div className="size-full bg-emerald-500" /> },
    ],
    index: null,
    onIndexChange: () => {},
  },
  argTypes: { items: { control: false } },
  decorators: [
    (Story) => (
      <div className="h-20">
        {Story()}
        <p className="text-sm">index를 0으로 바꾸면 열려요</p>
      </div>
    ),
  ],
} satisfies Meta<typeof Lightbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};
export const Open: Story = { args: { index: 0 } };
