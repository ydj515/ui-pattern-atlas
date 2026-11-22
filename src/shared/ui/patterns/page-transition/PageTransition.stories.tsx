import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTransition } from "@/shared/ui/patterns/page-transition/PageTransition";

const meta = {
  title: "Patterns/Motion/Page Transition",
  component: PageTransition,
  args: { screenKey: "settings", kind: "push", children: <p className="p-4 text-sm">설정</p> },
} satisfies Meta<typeof PageTransition>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Push: Story = {};
export const Modal: Story = { args: { kind: "modal" } };
