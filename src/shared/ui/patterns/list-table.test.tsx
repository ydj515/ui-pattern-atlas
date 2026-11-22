import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DataTableDemo } from "@/entities/pattern/catalog/data-table/DataTableDemo";
import { DescriptionListDemo } from "@/entities/pattern/catalog/description-list/DescriptionListDemo";
import { GroupedListDemo } from "@/entities/pattern/catalog/grouped-list/GroupedListDemo";
import { KanbanBoardDemo } from "@/entities/pattern/catalog/kanban-board/KanbanBoardDemo";
import { ListDemo } from "@/entities/pattern/catalog/list/ListDemo";
import { SelectableTableDemo } from "@/entities/pattern/catalog/selectable-table/SelectableTableDemo";
import { SortableListDemo } from "@/entities/pattern/catalog/sortable-list/SortableListDemo";
import { TimelineDemo } from "@/entities/pattern/catalog/timeline/TimelineDemo";
import { VirtualizedList } from "@/shared/ui/patterns/virtualized-list/VirtualizedList";

describe("List", () => {
  it("makes each row one button named by its title first", async () => {
    const user = userEvent.setup();
    render(<ListDemo />);
    expect(
      within(screen.getByRole("list", { name: "최근 파일" })).getAllByRole("listitem"),
    ).toHaveLength(3);
    await user.click(screen.getByRole("button", { name: /^회의록.pdf/ }));
    expect(screen.getByRole("status")).toHaveTextContent("회의록.pdf을(를) 열었어요");
  });
});

describe("DataTable", () => {
  it("sorts by a column and reports it with aria-sort", async () => {
    const user = userEvent.setup();
    render(<DataTableDemo />);
    const table = screen.getByRole("table", { name: "지점별 11월 매출" });
    await user.click(screen.getByRole("button", { name: "지점 기준 정렬" }));
    expect(within(table).getByRole("columnheader", { name: /지점/ })).toHaveAttribute(
      "aria-sort",
      "descending",
    );
    expect(
      within(table)
        .getAllByRole("rowheader")
        .map((cell) => cell.textContent),
    ).toEqual(["홍대점", "부산점", "대전점", "강남점"]);
    await user.click(screen.getByRole("button", { name: "지점 기준 정렬" }));
    expect(within(table).getAllByRole("rowheader")[0]).toHaveTextContent("강남점");
  });
});

describe("SelectableTable", () => {
  it("selects rows, shows the indeterminate state and archives", async () => {
    const user = userEvent.setup();
    render(<SelectableTableDemo />);
    await user.click(screen.getByRole("checkbox", { name: "A-1021 선택" }));
    expect(screen.getByRole("checkbox", { name: "주문 모두 선택" })).toHaveProperty(
      "indeterminate",
      true,
    );
    await user.click(screen.getByRole("checkbox", { name: "A-1023 선택" }));
    expect(screen.getByText("2개 선택")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "보관하기" }));
    expect(screen.queryByText("A-1021")).not.toBeInTheDocument();
    expect(screen.getAllByRole("rowheader")).toHaveLength(2);
  });
});

describe("DescriptionList", () => {
  it("pairs each value with its term", async () => {
    const user = userEvent.setup();
    render(<DescriptionListDemo />);
    const terms = screen.getAllByRole("term").map((term) => term.textContent);
    expect(terms).toEqual(["주문 번호", "주문일", "결제 수단", "배송지"]);
    await user.click(screen.getByRole("button", { name: "복사" }));
    expect(screen.getByRole("button", { name: "복사됨" })).toBeInTheDocument();
  });
});

describe("Timeline", () => {
  it("marks the latest event and shows upcoming ones as 예정", async () => {
    const user = userEvent.setup();
    render(<TimelineDemo />);
    const list = screen.getByRole("list", { name: "배송 현황" });
    expect(within(list).getAllByRole("listitem")[2]).toHaveAttribute("aria-current", "step");
    expect(within(list).getAllByRole("listitem")[3]).toHaveTextContent("예정");
    await user.click(screen.getByRole("button", { name: "새로 고침" }));
    expect(within(list).getAllByRole("listitem")[3]).toHaveAttribute("aria-current", "step");
  });
});

describe("KanbanBoard", () => {
  it("moves a card with its button and announces it", async () => {
    const user = userEvent.setup();
    render(<KanbanBoardDemo />);
    await user.click(
      screen.getByRole("button", { name: "회의록 정리 카드를 진행 중 열로 옮기기" }),
    );
    expect(
      within(screen.getByRole("region", { name: "진행 중 2개" })).getByText("회의록 정리"),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      "회의록 정리 카드를 진행 중 열로 옮겼어요",
    );
  });
});

describe("SortableList", () => {
  it("moves an item with the arrow keys and announces the position", async () => {
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0);
      return 0;
    });
    render(<SortableListDemo />);
    const handle = screen.getByRole("button", { name: /보고서 마무리 순서 바꾸기/ });
    handle.focus();
    fireEvent.keyDown(handle, { key: "ArrowUp" });
    fireEvent.keyDown(screen.getByRole("button", { name: /보고서 마무리 순서 바꾸기/ }), {
      key: "ArrowUp",
    });
    const items = within(screen.getByRole("list", { name: "오늘 할 일" })).getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("보고서 마무리");
    expect(screen.getByRole("status")).toHaveTextContent("보고서 마무리, 4개 중 1번째");
    vi.restoreAllMocks();
  });
});

describe("GroupedList", () => {
  it("labels each group by its header", () => {
    render(<GroupedListDemo />);
    expect(screen.getByRole("list", { name: "ㄱ" }).children).toHaveLength(4);
    expect(screen.getByRole("region", { name: "연락처" })).toHaveAttribute("tabindex", "0");
  });
});

describe("VirtualizedList", () => {
  it("draws only the rows in view and tells each row's position", () => {
    render(
      <VirtualizedList
        label="주문"
        count={10_000}
        rowHeight={36}
        height={180}
        renderRow={(index) => `주문 ${index + 1}`}
      />,
    );
    const region = screen.getByRole("region", { name: "주문" });
    expect(within(region).getAllByRole("listitem").length).toBeLessThan(20);
    act(() => {
      region.scrollTop = 36 * 5000;
      fireEvent.scroll(region);
    });
    const row = within(region).getByText("주문 5001");
    expect(row).toHaveAttribute("aria-posinset", "5001");
    expect(row).toHaveAttribute("aria-setsize", "10000");
  });
});
