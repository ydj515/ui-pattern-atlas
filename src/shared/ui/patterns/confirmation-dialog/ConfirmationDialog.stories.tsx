import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import {
  ConfirmationDialogProvider,
  useConfirm,
  type ConfirmOptions,
} from "@/shared/ui/patterns/confirmation-dialog/ConfirmationDialog";

function Trigger({ options }: { readonly options: ConfirmOptions }) {
  const confirm = useConfirm();
  const [answer, setAnswer] = useState("");
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={async () => setAnswer((await confirm(options)) ? "확인했어요" : "취소했어요")}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
      >
        {options.confirmLabel}
      </button>
      <p className="text-xs text-slate-500">{answer}</p>
    </div>
  );
}

const meta = {
  title: "Patterns/Overlay/Confirmation Dialog",
  component: ConfirmationDialogProvider,
  args: { children: null },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof ConfirmationDialogProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Danger: Story = {
  render: () => (
    <ConfirmationDialogProvider>
      <Trigger
        options={{
          title: "저장하지 않고 나갈까요?",
          description: "작성 중인 내용이 사라져요.",
          confirmLabel: "나가기",
          cancelLabel: "계속 작성",
          tone: "danger",
        }}
      />
    </ConfirmationDialogProvider>
  ),
};

export const Default: Story = {
  render: () => (
    <ConfirmationDialogProvider>
      <Trigger options={{ title: "결제를 진행할까요?", confirmLabel: "결제하기" }} />
    </ConfirmationDialogProvider>
  ),
};
