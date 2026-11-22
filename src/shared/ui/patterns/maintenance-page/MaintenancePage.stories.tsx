import type { Meta, StoryObj } from "@storybook/react-vite";

import { MaintenancePage } from "@/shared/ui/patterns/maintenance-page/MaintenancePage";

const meta = {
  title: "Patterns/Status/Maintenance Page",
  component: MaintenancePage,
  args: {
    start: new Date(2026, 10, 23, 2, 0),
    end: new Date(2026, 10, 23, 6, 0),
    now: new Date(2026, 10, 23, 4, 30),
    notified: false,
    onNotify: () => {},
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof MaintenancePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {};
export const AlmostDone: Story = { args: { now: new Date(2026, 10, 23, 5, 50) } };
export const Notified: Story = { args: { notified: true } };
