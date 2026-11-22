import type { Meta, StoryObj } from "@storybook/react-vite";

import { AvatarGroup } from "@/shared/ui/patterns/avatar-group/AvatarGroup";

const meta = {
  title: "Patterns/Indicator/Avatar Group",
  component: AvatarGroup,
  args: { people: ["김하늘", "이도윤", "박서준", "최유나", "정민호"], max: 3 },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithRest: Story = {};
export const AllShown: Story = { args: { people: ["김하늘", "이도윤"] } };
