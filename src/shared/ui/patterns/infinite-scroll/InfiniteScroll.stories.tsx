import type { Meta, StoryObj } from "@storybook/react-vite";

import { InfiniteScroll } from "@/shared/ui/patterns/infinite-scroll/InfiniteScroll";

const list = (
  <ul>
    {Array.from({ length: 12 }, (_, index) => (
      <li key={index} className="px-4 py-3 text-sm">
        소식 {index + 1}
      </li>
    ))}
  </ul>
);

const meta = {
  title: "Patterns/Navigation/Infinite Scroll",
  component: InfiniteScroll,
  args: { label: "새 소식", children: list, hasMore: true, loading: false, onLoadMore: () => {} },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="w-72 rounded-xl border">{Story()}</div>],
} satisfies Meta<typeof InfiniteScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = { args: { loading: true } };
export const End: Story = { args: { hasMore: false } };
