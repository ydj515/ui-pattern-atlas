import type { Meta, StoryObj } from "@storybook/react-vite";

import { AddressForm } from "@/shared/ui/patterns/address-form/AddressForm";

const meta = {
  title: "Patterns/Checkout/Address Form",
  component: AddressForm,
  args: {
    searchAddress: (query: string) =>
      query ? [{ zip: "04768", road: "서울 성동구 뚝섬로 273 (서울숲)" }] : [],
    onSave: () => undefined,
    searchPlaceholder: "서울숲",
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof AddressForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoMatches: Story = { args: { searchAddress: () => [] } };
