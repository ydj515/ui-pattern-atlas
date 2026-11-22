import type { Meta, StoryObj } from "@storybook/react-vite";
import { RepostMenu } from "@/shared/ui/patterns/repost/RepostMenu";

const meta = {
  title: "Patterns/Reaction and Share/Repost",
  component: RepostMenu,
  decorators: [(Story) => <div className="flex h-56 items-end p-4">{Story()}</div>],
  args: { reposted: false, count: 12, onRepost: () => {}, onQuote: () => {} },
} satisfies Meta<typeof RepostMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Reposted: Story = { args: { reposted: true, count: 13 } };
