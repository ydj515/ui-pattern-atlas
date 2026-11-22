import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { AlertDialog } from "@/shared/ui/patterns/alert-dialog/AlertDialog";

function AlertDialogStory({ withCancel }: { readonly withCancel: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
      >
        경고 띄우기
      </button>
      <AlertDialog
        open={open}
        title="곧 로그아웃돼요"
        description="한동안 아무 동작이 없어서 로그아웃할 예정이에요."
        actionLabel="로그인 유지"
        onAction={() => setOpen(false)}
        cancelLabel={withCancel ? "로그아웃" : undefined}
        onCancel={withCancel ? () => setOpen(false) : undefined}
      />
    </>
  );
}

const meta = {
  title: "Patterns/Overlay/Alert Dialog",
  component: AlertDialog,
  args: {
    open: false,
    title: "곧 로그아웃돼요",
    description: "한동안 아무 동작이 없어서 로그아웃할 예정이에요.",
    actionLabel: "로그인 유지",
    onAction: () => {},
  },
  render: ({ cancelLabel }) => <AlertDialogStory withCancel={cancelLabel !== undefined} />,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoResponses: Story = { args: { cancelLabel: "로그아웃" } };
export const SingleAction: Story = {};
