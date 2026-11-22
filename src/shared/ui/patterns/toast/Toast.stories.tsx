import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToastProvider, useToast, type ToastTone } from "@/shared/ui/patterns/toast/Toast";

function Trigger({ tone, withAction }: { readonly tone: ToastTone; readonly withAction: boolean }) {
  const showToast = useToast();
  return (
    <button
      type="button"
      onClick={() =>
        showToast("찜 목록에 저장했어요", {
          tone,
          action: withAction ? { label: "되돌리기", onAction: () => {} } : undefined,
        })
      }
      className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold"
    >
      토스트 띄우기
    </button>
  );
}

const meta = {
  title: "Patterns/Feedback/Toast",
  component: ToastProvider,
  args: { children: null },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => (
    <ToastProvider>
      <Trigger tone="success" withAction />
    </ToastProvider>
  ),
};

export const Neutral: Story = {
  render: () => (
    <ToastProvider>
      <Trigger tone="neutral" withAction={false} />
    </ToastProvider>
  ),
};

export const Error: Story = {
  render: () => (
    <ToastProvider>
      <Trigger tone="error" withAction={false} />
    </ToastProvider>
  ),
};
