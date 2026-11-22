import type { Meta, StoryObj } from "@storybook/react-vite";

import { SidebarNavigation } from "@/shared/ui/patterns/sidebar-navigation/SidebarNavigation";

const meta = {
  title: "Patterns/Navigation/Sidebar Navigation",
  component: SidebarNavigation,
  args: {
    label: "워크스페이스 메뉴",
    entries: [
      { href: "#dashboard", label: "대시보드" },
      {
        label: "프로젝트",
        links: [
          { href: "#active", label: "진행 중" },
          { href: "#archive", label: "보관함" },
        ],
      },
      { href: "#settings", label: "설정" },
    ],
    current: "#dashboard",
    onNavigate: () => {},
  },
} satisfies Meta<typeof SidebarNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopLevel: Story = {};
export const InGroup: Story = { args: { current: "#archive" } };
