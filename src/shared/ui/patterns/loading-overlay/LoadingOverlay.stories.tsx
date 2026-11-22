import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoadingOverlay } from "@/shared/ui/patterns/loading-overlay/LoadingOverlay";

const meta = {
  title: "Patterns/Loading/Loading Overlay",
  component: LoadingOverlay,
  args: {
    loading: true,
    label: "저장하는 중",
    children: (
      <div className="w-72 space-y-2 rounded-xl border border-slate-200 p-4">
        <p className="text-sm font-semibold">프로필</p>
        <input
          defaultValue="김하늘"
          className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
        />
        <button
          type="button"
          className="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
        >
          저장
        </button>
      </div>
    ),
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof LoadingOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Saving: Story = {};
export const Idle: Story = { args: { loading: false } };
