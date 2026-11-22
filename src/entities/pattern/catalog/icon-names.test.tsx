import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { BentoDemo } from "@/entities/pattern/catalog/bento/BentoDemo";
import { CaretDemo } from "@/entities/pattern/catalog/caret/CaretDemo";
import { ChevronDemo } from "@/entities/pattern/catalog/chevron/ChevronDemo";
import { DonerDemo } from "@/entities/pattern/catalog/doner/DonerDemo";
import { GripDemo } from "@/entities/pattern/catalog/grip/GripDemo";
import { HamburgerDemo } from "@/entities/pattern/catalog/hamburger/HamburgerDemo";
import { KebabDemo } from "@/entities/pattern/catalog/kebab/KebabDemo";
import { MeatballsDemo } from "@/entities/pattern/catalog/meatballs/MeatballsDemo";
import { SlidersDemo } from "@/entities/pattern/catalog/sliders/SlidersDemo";
import { SparklesDemo } from "@/entities/pattern/catalog/sparkles/SparklesDemo";
import { StairsDemo } from "@/entities/pattern/catalog/stairs/StairsDemo";
import { VeggieBurgerDemo } from "@/entities/pattern/catalog/veggie-burger/VeggieBurgerDemo";
import { WaffleDemo } from "@/entities/pattern/catalog/waffle/WaffleDemo";

describe("icon name demos", () => {
  it("opens the menu from the hamburger and marks the current page", async () => {
    const user = userEvent.setup();
    render(<HamburgerDemo />);
    const button = screen.getByRole("button", { name: "메뉴 열기" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await user.click(
      within(screen.getByRole("navigation", { name: "메뉴" })).getByRole("button", {
        name: "주문 내역",
      }),
    );
    expect(screen.getByRole("heading", { name: "주문 내역" })).toBeInTheDocument();
  });

  it("deletes a file from its kebab menu", async () => {
    const user = userEvent.setup();
    render(<KebabDemo />);
    await user.click(screen.getByRole("button", { name: "회의록.pdf 더 보기" }));
    await user.click(screen.getByRole("menuitem", { name: "삭제" }));
    expect(screen.queryByText("회의록.pdf", { selector: "li" })).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("삭제했어요: 회의록.pdf");
  });

  it("copies a link from the meatballs menu", async () => {
    const user = userEvent.setup();
    render(<MeatballsDemo />);
    await user.click(screen.getByRole("button", { name: "게시물 더 보기" }));
    await user.click(screen.getByRole("menuitem", { name: "링크 복사" }));
    expect(screen.getByRole("status")).toHaveTextContent("링크를 복사했어요");
  });

  it("switches apps from the bento and waffle launchers", async () => {
    const user = userEvent.setup();
    render(
      <>
        <BentoDemo />
        <WaffleDemo />
      </>,
    );
    await user.click(screen.getByRole("button", { name: "앱 목록" }));
    await user.click(
      within(screen.getByRole("dialog", { name: "앱 목록" })).getByRole("button", {
        name: "캘린더",
      }),
    );
    expect(screen.getByRole("heading", { name: "캘린더" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "앱 전환" }));
    await user.click(
      within(screen.getByRole("dialog", { name: "앱 전환" })).getByRole("button", { name: "메모" }),
    );
    expect(screen.getByRole("heading", { name: "메모" })).toBeInTheDocument();
  });

  it("moves forward with the chevron and back again", async () => {
    const user = userEvent.setup();
    render(<ChevronDemo />);
    await user.click(screen.getByRole("button", { name: "알림" }));
    expect(screen.getByText("알림 설정 화면")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "설정" }));
    expect(screen.getByRole("heading", { name: "설정" })).toBeInTheDocument();
  });

  it("picks a sort from the caret dropdown", async () => {
    const user = userEvent.setup();
    render(<CaretDemo />);
    await user.click(screen.getByRole("button", { name: /최신순/ }));
    await user.click(screen.getByRole("option", { name: "인기순" }));
    expect(screen.getByRole("status")).toHaveTextContent("인기순으로 보는 중");
  });

  it("reorders with the grip using the keyboard", () => {
    render(<GripDemo />);
    const grip = screen.getByRole("button", { name: /회의 준비 순서 바꾸기/ });
    fireEvent.keyDown(grip, { key: "ArrowUp" });
    fireEvent.keyDown(screen.getByRole("button", { name: /회의 준비 순서 바꾸기/ }), {
      key: "ArrowUp",
    });
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("회의 준비");
    expect(screen.getByRole("status")).toHaveTextContent("회의 준비: 1번째");
  });

  it("rewrites with the sparkles button and can undo", async () => {
    const user = userEvent.setup();
    render(<SparklesDemo />);
    await user.click(screen.getByRole("button", { name: "AI로 다듬기" }));
    expect(screen.getByRole("textbox", { name: "메시지" })).toHaveValue(
      "내일 회의를 오후 3시로 옮겨도 괜찮을까요?",
    );
    await user.click(screen.getByRole("button", { name: "되돌리기" }));
    expect(screen.getByRole("textbox", { name: "메시지" })).toHaveValue(
      "내일 회의 시간 바꿔도 되나요",
    );
  });

  it("sorts from the döner sheet", async () => {
    const user = userEvent.setup();
    render(<DonerDemo />);
    await user.click(screen.getByRole("button", { name: "정렬" }));
    await user.click(screen.getByRole("radio", { name: "가격 낮은 순" }));
    expect(screen.getByRole("status")).toHaveTextContent("가격 낮은 순으로 보는 중");
  });

  it("labels the less common menu icons with words", async () => {
    const user = userEvent.setup();
    render(
      <>
        <VeggieBurgerDemo />
        <StairsDemo />
      </>,
    );
    await user.click(screen.getByRole("button", { name: "메뉴" }));
    await user.click(screen.getByRole("button", { name: "탐색" }));
    expect(screen.getByRole("heading", { name: "탐색" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "목차" }));
    await user.click(screen.getByRole("button", { name: "인왕산" }));
    expect(screen.getByRole("status")).toHaveTextContent("인왕산 부분으로 이동했어요");
  });

  it("applies filters from the sliders sheet", async () => {
    const user = userEvent.setup();
    render(<SlidersDemo />);
    await user.click(screen.getByRole("button", { name: "필터" }));
    await user.click(screen.getByRole("checkbox", { name: "무료 배송만" }));
    await user.click(screen.getByRole("button", { name: "적용" }));
    expect(screen.getByRole("status")).toHaveTextContent("50,000원 이하, 무료 배송");
  });
});
