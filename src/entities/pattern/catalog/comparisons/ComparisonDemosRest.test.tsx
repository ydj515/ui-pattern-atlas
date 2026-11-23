import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { REST_COMPARISON_DEMOS } from "@/entities/pattern/catalog/comparisons/ComparisonDemosRest";

function renderDemo(slug: string) {
  const demo = REST_COMPARISON_DEMOS[slug];
  if (!demo) throw new Error(`missing comparison ${slug}`);
  render(<demo.Preview />);
  return (name: string) => within(screen.getByRole("region", { name }));
}

describe("rest of the comparison demos", () => {
  it.each(Object.entries(REST_COMPARISON_DEMOS))(
    "renders both sides for %s",
    (_slug, { Preview }) => {
      render(<Preview />);
      expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
    },
  );

  it("closing keeps the screen; going back changes it", async () => {
    const side = renderDemo("close-back");
    await userEvent.click(side("닫기").getByRole("button", { name: "닫기" }));
    expect(side("닫기").getByRole("status")).toHaveTextContent("지금 화면: 주문 상세");
    await userEvent.click(side("뒤로").getByRole("button", { name: "뒤로" }));
    expect(side("뒤로").getByRole("status")).toHaveTextContent("지금 화면: 주문 내역");
  });

  it("undo restores what was removed", async () => {
    const side = renderDemo("refresh-undo");
    await userEvent.click(side("되돌리기").getAllByRole("button", { name: "빼기" })[0]!);
    expect(side("되돌리기").queryByText("린넨 셔츠")).toBeNull();
    await userEvent.click(side("되돌리기").getByRole("button", { name: "되돌리기" }));
    expect(side("되돌리기").getByText("린넨 셔츠")).toBeInTheDocument();
  });

  it("a counter allows going over; a max length stops typing", async () => {
    const side = renderDemo("character-counter-max-length");
    await userEvent.type(
      side("글자 수").getByLabelText("한 줄 후기"),
      "포장이 꼼꼼하고 배송도 빨라서 정말 좋아요",
    );
    expect(side("글자 수").getByText("23/20")).toBeInTheDocument();
    await userEvent.type(side("입력 제한").getByLabelText("닉네임"), "동네가게단골손님입니다");
    expect(side("입력 제한").getByLabelText("닉네임")).toHaveValue("동네가게단골손님");
  });

  it("clear empties the value; show keeps it and changes how it looks", async () => {
    const side = renderDemo("clear-show-password");
    await userEvent.click(side("지우기").getByRole("button", { name: "검색어 지우기" }));
    expect(side("지우기").getByLabelText("상품 검색")).toHaveValue("");
    await userEvent.click(side("보기").getByRole("button", { name: "보기" }));
    expect(side("보기").getByLabelText("비밀번호")).toHaveAttribute("type", "text");
    expect(side("보기").getByLabelText("비밀번호")).toHaveValue("linen2024");
  });

  it("a required field blocks the next step; an optional one does not", async () => {
    const side = renderDemo("required-optional");
    await userEvent.click(side("필수").getByRole("button", { name: "다음" }));
    expect(side("필수").getByRole("status")).toHaveTextContent("받는 분을 입력해야 넘어가요");
    await userEvent.click(side("선택").getByRole("button", { name: "다음" }));
    expect(side("선택").getByRole("status")).toHaveTextContent("비워 두어도 넘어가요");
  });

  it("a badge counts, a dot only says something is new", async () => {
    renderDemo("badge-notification-dot");
    await userEvent.click(screen.getByRole("button", { name: "새 알림 오기" }));
    expect(screen.getByRole("img", { name: "읽지 않은 알림 4개" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "새 알림 있음" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "모두 읽기" }));
    expect(screen.getByRole("img", { name: "새 알림 없음" })).toBeInTheDocument();
  });

  it("wishlist only remembers; the cart adds a quantity and a price", async () => {
    const side = renderDemo("wishlist-cart");
    await userEvent.click(side("찜").getByRole("button", { name: "찜하기" }));
    expect(side("찜").getByRole("status")).toHaveTextContent("수량과 결제는 없어요");
    await userEvent.click(side("장바구니").getByRole("button", { name: "장바구니 담기" }));
    expect(side("장바구니").getByRole("status")).toHaveTextContent("1개 · 결제 예정 39,000원");
  });

  it("the picker blocks unavailable days", async () => {
    const side = renderDemo("dropdown-picker");
    expect(side("피커").getByRole("button", { name: "22" })).toBeDisabled();
    await userEvent.click(side("피커").getByRole("button", { name: "25" }));
    expect(side("피커").getByRole("status")).toHaveTextContent("11월 25일에 받아요");
  });
});
