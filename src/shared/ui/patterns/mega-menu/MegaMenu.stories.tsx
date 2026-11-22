import type { Meta, StoryObj } from "@storybook/react-vite";

import { MegaMenu } from "@/shared/ui/patterns/mega-menu/MegaMenu";

const meta = {
  title: "Patterns/Navigation/Mega Menu",
  component: MegaMenu,
  args: {
    items: [
      {
        label: "제품",
        columns: [
          {
            title: "만들기",
            links: [
              { href: "#docs", label: "문서" },
              { href: "#board", label: "화이트보드" },
            ],
          },
          { title: "관리", links: [{ href: "#projects", label: "프로젝트" }] },
        ],
      },
    ],
    onNavigate: () => {},
  },
  decorators: [(Story) => <div className="h-56 w-[28rem]">{Story()}</div>],
} satisfies Meta<typeof MegaMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLabel: Story = { args: { label: "사이트 메뉴" } };
