import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Pagination } from "./Pagination";

function PaginationStory({ initialPage, totalPages }: { initialPage: number; totalPages: number }) {
  const [page, setPage] = useState(initialPage);
  return (
    <Pagination
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
      label="주문 목록 페이지"
      previousLabel="이전 페이지"
      nextLabel="다음 페이지"
      pageLabel={(value) => `${value}페이지`}
    />
  );
}

const meta = {
  title: "Patterns/Navigation/Pagination",
  component: Pagination,
  args: { page: 1, totalPages: 20, onPageChange: () => {} },
  render: ({ page, totalPages }) => (
    <PaginationStory key={`${page}-${totalPages}`} initialPage={page} totalPages={totalPages} />
  ),
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {};
export const Middle: Story = { args: { page: 10 } };
export const FewPages: Story = { args: { page: 2, totalPages: 4 } };
