import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { MORE_COMPARISON_DEMOS } from "@/entities/pattern/catalog/comparisons/ComparisonDemosMore";

function renderDemo(slug: string) {
  const demo = MORE_COMPARISON_DEMOS[slug];
  if (!demo) throw new Error(`missing comparison ${slug}`);
  render(<demo.Preview />);
  return (name: string) => within(screen.getByRole("region", { name }));
}

describe("more comparison demos", () => {
  it("radio keeps one choice while checkboxes collect several", async () => {
    const side = renderDemo("radio-group-checkbox");
    await userEvent.click(side("라디오").getByRole("radio", { name: "새벽 배송" }));
    expect(side("라디오").getByRole("radio", { name: "일반 배송" })).not.toBeChecked();
    await userEvent.click(side("체크박스").getByRole("checkbox", { name: "문 앞에 두기" }));
    await userEvent.click(side("체크박스").getByRole("checkbox", { name: "포장 줄이기" }));
    expect(side("체크박스").getByRole("status")).toHaveTextContent("2개 골랐어요");
  });

  it("chips change the result while the badge only counts", async () => {
    const side = renderDemo("chip-badge");
    await userEvent.click(side("칩").getByRole("button", { name: "새벽배송" }));
    expect(side("칩").getByRole("status")).toHaveTextContent("상품 2개");
    await userEvent.click(side("배지").getByRole("button", { name: "하나 읽기" }));
    expect(side("배지").getByRole("img", { name: "읽지 않은 알림 2개" })).toBeInTheDocument();
  });

  it("a non-modal popup leaves the page usable, a modal does not", async () => {
    const side = renderDemo("non-modal-popup-modal-dialog");
    await userEvent.click(side("팝업").getByRole("button", { name: "쿠폰 안내" }));
    await userEvent.click(side("팝업").getByRole("button", { name: /장바구니 담기/ }));
    expect(side("팝업").getByRole("button", { name: "장바구니 담기 1" })).toBeInTheDocument();
    await userEvent.click(side("모달").getByRole("button", { name: "쿠폰 안내" }));
    expect(screen.getByRole("dialog", { name: "쿠폰 안내" })).toBeInTheDocument();
  });

  it("an alert only acknowledges, a confirmation asks to proceed", async () => {
    const side = renderDemo("alert-confirmation-dialog");
    await userEvent.click(side("얼럿").getByRole("button", { name: "쿠폰 쓰기" }));
    await userEvent.click(screen.getByRole("button", { name: "확인" }));
    expect(side("얼럿").getByRole("status")).toHaveTextContent("안내를 확인했어요");
    await userEvent.click(side("컨펌").getByRole("button", { name: "주문 취소" }));
    await userEvent.click(screen.getByRole("button", { name: "유지하기" }));
    expect(side("컨펌").getByRole("status")).toHaveTextContent("주문을 유지했어요");
  });

  it("helper text shows the rule before typing; the error appears after submitting", async () => {
    const side = renderDemo("helper-text-error-message");
    expect(side("안내 문구").getByLabelText("새 비밀번호")).toHaveAccessibleDescription(
      "8자 이상, 숫자를 하나 이상 넣어 주세요",
    );
    const field = side("오류 문구").getByLabelText("새 비밀번호");
    await userEvent.type(field, "abcdefgh");
    await userEvent.click(side("오류 문구").getByRole("button", { name: "변경하기" }));
    expect(field).toHaveAttribute("aria-invalid", "true");
    expect(field).toHaveAccessibleDescription(/숫자를 하나 이상 넣어 주세요/);
  });

  it("filtering changes what is shown, sorting only the order", async () => {
    const side = renderDemo("filter-sort");
    await userEvent.click(side("필터").getByRole("button", { name: "무료배송" }));
    expect(side("필터").getAllByRole("listitem")).toHaveLength(2);
    await userEvent.click(side("정렬").getByRole("button", { name: "정렬: 추천순" }));
    await userEvent.click(screen.getByRole("menuitemradio", { name: "낮은 가격순" }));
    const items = side("정렬").getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent("주방 행주");
  });

  it("pagination jumps to a page of the same orders", async () => {
    const side = renderDemo("pagination-infinite-scroll");
    await userEvent.click(side("페이지네이션").getByRole("button", { name: "3쪽" }));
    expect(side("페이지네이션").getAllByRole("listitem")[0]).toHaveTextContent("주문 1011");
  });

  it("a step indicator names the current step; a progress bar shows a ratio", async () => {
    const side = renderDemo("progress-bar-step-indicator");
    await userEvent.click(side("진행 바").getByRole("button", { name: "조금 더 올리기" }));
    expect(side("진행 바").getByRole("progressbar")).toHaveAttribute("value", "50");
    await userEvent.click(side("단계 표시").getByRole("button", { name: "다음 단계" }));
    expect(side("단계 표시").getByText("결제").closest("li")).toHaveAttribute(
      "aria-current",
      "step",
    );
  });
});
