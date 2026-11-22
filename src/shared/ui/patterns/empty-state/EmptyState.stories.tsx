import type { Meta, StoryObj } from "@storybook/react-vite";

import { EmptyState } from "@/shared/ui/patterns/empty-state/EmptyState";

const meta = {
  title: "Patterns/Status/Empty State",
  component: EmptyState,
  args: {
    title: "아직 프로젝트가 없어요",
    description: "첫 프로젝트를 만들고 팀원을 초대해 보세요.",
    action: (
      <button
        type="button"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      >
        프로젝트 만들기
      </button>
    ),
  },
  argTypes: { action: { control: false }, icon: { control: false } },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {};
export const MessageOnly: Story = {
  args: {
    title: "검색 결과가 없어요",
    description: "다른 이름으로 찾아보세요.",
    action: undefined,
  },
};
