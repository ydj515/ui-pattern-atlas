import type { Meta, StoryObj } from "@storybook/react-vite";

import { NoResults } from "@/shared/ui/patterns/no-results/NoResults";

const meta = {
  title: "Patterns/Status/No Results",
  component: NoResults,
  args: {
    title: "‘아메리가노’ 검색 결과가 없어요",
    tips: ["맞춤법을 확인해 보세요", "더 짧은 단어로 찾아보세요"],
    onClear: () => {},
  },
  argTypes: { suggestion: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof NoResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSuggestion: Story = {
  args: {
    suggestion: (
      <>
        혹시 <button className="font-semibold text-blue-700 underline">아메리카노</button>{" "}
        찾으셨나요?
      </>
    ),
  },
};
export const TipsOnly: Story = {};
