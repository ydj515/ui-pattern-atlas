import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShareSheet } from "@/shared/ui/patterns/share-sheet/ShareSheet";

const meta = {
  title: "Patterns/Reaction and Share/Share Sheet",
  component: ShareSheet,
  decorators: [(Story) => <div className="flex h-56 items-end p-4">{Story()}</div>],
  args: {
    title: "가을 산책 코스",
    url: "https://atlas.example/p/42",
    platform: "ios",
    open: true,
    onOpenChange: () => {},
    onTarget: () => {},
    targets: [
      { id: "copy", label: "링크 복사", icon: "⧉" },
      { id: "mail", label: "이메일", icon: "@" },
    ],
  },
} satisfies Meta<typeof ShareSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Android: Story = { args: { platform: "android", open: false } };
