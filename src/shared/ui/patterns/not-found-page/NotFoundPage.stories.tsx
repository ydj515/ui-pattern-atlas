import type { Meta, StoryObj } from "@storybook/react-vite";

import { NotFoundPage } from "@/shared/ui/patterns/not-found-page/NotFoundPage";

const meta = {
  title: "Patterns/Status/404 Page",
  component: NotFoundPage,
  args: {
    onSearch: () => {},
    homeAction: (
      <a href="#home" className="font-medium text-blue-700 underline">
        홈으로 가기
      </a>
    ),
  },
  argTypes: { homeAction: { control: false } },
  decorators: [(Story) => <div className="w-96 rounded-xl border border-slate-200">{Story()}</div>],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MovedPage: Story = {
  args: { description: "글 주소가 바뀌었어요. 제목으로 찾아보세요." },
};
