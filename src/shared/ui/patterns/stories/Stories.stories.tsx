import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stories } from "@/shared/ui/patterns/stories/Stories";

const meta = {
  title: "Patterns/Cards and Gallery/Stories",
  component: Stories,
  args: {
    label: "카페 소식",
    stories: [
      {
        id: "1",
        label: "오늘의 메뉴",
        content: <div className="grid size-full place-items-center bg-amber-600">버섯 리조또</div>,
      },
      {
        id: "2",
        label: "새 원두",
        content: <div className="grid size-full place-items-center bg-emerald-700">에티오피아</div>,
      },
    ],
    onClose: () => {},
  },
  argTypes: { stories: { control: false } },
  decorators: [(Story) => <div className="h-72 w-44">{Story()}</div>],
} satisfies Meta<typeof Stories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playing: Story = {};
export const Slow: Story = { args: { duration: 8000 } };
