import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { LoadMore } from "@/shared/ui/patterns/load-more/LoadMore";

const ALL = Array.from({ length: 12 }, (_, index) => `${index + 1}번째 후기`);

function Demo({ batch }: { readonly batch: number }) {
  const [shown, setShown] = useState(batch);
  return (
    <LoadMore
      items={ALL.slice(0, shown)}
      total={ALL.length}
      getKey={(item) => item}
      renderItem={(item) => <span className="block px-4 py-2 text-sm">{item}</span>}
      buttonLabel={(count, total) => `더 보기 (${count}/${total})`}
      onLoadMore={() => setShown((value) => value + batch)}
    />
  );
}

const meta = {
  title: "Patterns/Navigation/Load More",
  component: Demo,
  args: { batch: 4 },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FourAtATime: Story = {};
export const SixAtATime: Story = { args: { batch: 6 } };
