import type { Meta, StoryObj } from "@storybook/react-vite";

import { List } from "@/shared/ui/patterns/list/List";

const meta = {
  title: "Patterns/List and Table/List",
  component: List,
  args: {
    label: "최근 파일",
    items: [
      { id: "a", title: "회의록.pdf", meta: "2.1MB · 김하늘", trailing: "어제" },
      { id: "b", title: "출시 계획.docx", meta: "540KB · 이도윤", trailing: "월요일" },
    ],
    onSelect: () => {},
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Files: Story = {};
export const TitlesOnly: Story = {
  args: {
    items: [
      { id: "a", title: "알림 설정" },
      { id: "b", title: "개인정보" },
    ],
  },
};
