import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Drawer } from "./Drawer";

function DrawerStory({ side }: { readonly side: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold"
      >
        필터 열기
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="필터"
        side={side}
        footer={
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white"
          >
            적용하기
          </button>
        }
      >
        <p className="text-sm text-slate-600">정렬과 가격대 같은 필터를 여기에 둡니다.</p>
      </Drawer>
    </>
  );
}

const meta = {
  title: "Patterns/Overlay/Drawer",
  component: Drawer,
  args: { open: false, onClose: () => {}, title: "필터", side: "right", children: null },
  render: ({ side = "right" }) => <DrawerStory side={side} />,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {};
export const Left: Story = { args: { side: "left" } };
