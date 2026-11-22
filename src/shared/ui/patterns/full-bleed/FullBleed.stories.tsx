import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed, FullBleedLayout } from "@/shared/ui/patterns/full-bleed/FullBleed";

const meta = {
  title: "Patterns/Layout/Full Bleed",
  component: FullBleedLayout,
  args: {
    measure: "16rem",
    children: [
      <p key="a">글은 읽기 좋은 폭을 지켜요.</p>,
      <Bleed key="b">
        <div className="h-20 bg-sky-300" />
      </Bleed>,
      <p key="c">사진은 끝까지 펼쳐요.</p>,
    ],
  },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-96 border text-sm">{Story()}</div>],
} satisfies Meta<typeof FullBleedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {};
export const NarrowMeasure: Story = { args: { measure: "12rem" } };
