import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, type ComponentProps } from "react";

import { ModalDialog } from "@/shared/ui/patterns/modal-dialog/ModalDialog";

function ModalDialogStory(props: Omit<ComponentProps<typeof ModalDialog>, "open" | "onClose">) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
      >
        삭제하기
      </button>
      <ModalDialog {...props} open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            autoFocus
            onClick={() => setOpen(false)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
          >
            취소
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white"
          >
            삭제
          </button>
        </div>
      </ModalDialog>
    </>
  );
}

const meta = {
  title: "Patterns/Overlay/Modal Dialog",
  component: ModalDialog,
  args: {
    open: false,
    onClose: () => {},
    title: "프로젝트를 삭제할까요?",
    description: "삭제한 프로젝트와 파일은 복구할 수 없어요.",
    dismissOnBackdrop: true,
  },
  render: ({ title, description, dismissOnBackdrop }) => (
    <ModalDialogStory
      title={title}
      description={description}
      dismissOnBackdrop={dismissOnBackdrop}
    />
  ),
} satisfies Meta<typeof ModalDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {};
export const BackdropLocked: Story = { args: { dismissOnBackdrop: false } };
