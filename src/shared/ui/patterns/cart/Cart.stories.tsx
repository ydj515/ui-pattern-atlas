import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Cart, type CartItem } from "@/shared/ui/patterns/cart/Cart";

const ITEMS: readonly CartItem[] = [
  { id: "shirt", name: "린넨 셔츠", price: 39000, quantity: 1, selected: true },
  { id: "bag", name: "캔버스 백", price: 29000, quantity: 1, selected: true },
];

function Controlled({ initial }: { readonly initial: readonly CartItem[] }) {
  const [items, setItems] = useState(initial);
  return <Cart items={items} onChange={setItems} onOrder={() => undefined} />;
}

const meta = {
  title: "Patterns/Checkout/Cart",
  component: Controlled,
  args: { initial: ITEMS },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Controlled>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { initial: [] } };
