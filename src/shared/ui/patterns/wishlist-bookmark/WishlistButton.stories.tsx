import type { Meta, StoryObj } from "@storybook/react-vite";
import { WishlistButton } from "@/shared/ui/patterns/wishlist-bookmark/WishlistButton";

const meta = {
  title: "Patterns/Reaction and Share/Wishlist / Bookmark",
  component: WishlistButton,
  args: { saved: false, itemName: "린넨 셔츠", onToggle: () => {} },
} satisfies Meta<typeof WishlistButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Saved: Story = { args: { saved: true } };
