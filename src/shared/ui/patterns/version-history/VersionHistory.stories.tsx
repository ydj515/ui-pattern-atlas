import type { Meta, StoryObj } from "@storybook/react-vite";

import { VersionHistory } from "@/shared/ui/patterns/version-history/VersionHistory";

const VERSIONS = [
  { id: "v3", time: "오늘 14:20", author: "하늘", summary: "숙소를 바꿈", body: "숙소: 성수동" },
  { id: "v2", time: "오늘 11:05", author: "민준", summary: "서울숲 추가", body: "숙소: 을지로" },
];

const meta = {
  title: "Patterns/Risky actions/Version History",
  component: VersionHistory,
  args: { versions: VERSIONS, value: "v3", onSelect: () => undefined, onRestore: () => undefined },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof VersionHistory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Current: Story = {};
export const OlderPicked: Story = { args: { value: "v2" } };
