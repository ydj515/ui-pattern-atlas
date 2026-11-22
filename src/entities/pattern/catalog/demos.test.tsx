import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { DrawerDemo } from "@/entities/pattern/catalog/drawer/DrawerDemo";
import { EmptyStateDemo } from "@/entities/pattern/catalog/empty-state/EmptyStateDemo";
import {
  InlineValidationDemo,
  validateEmail,
} from "@/entities/pattern/catalog/inline-validation/InlineValidationDemo";
import { ModalDialogDemo } from "@/entities/pattern/catalog/modal-dialog/ModalDialogDemo";

describe("validateEmail", () => {
  it("explains what is wrong and how to fix it", () => {
    expect(validateEmail("  ")).toBe("이메일을 입력해 주세요.");
    expect(validateEmail("name@")).toMatch(/형식이 올바르지 않아요/);
    expect(validateEmail("name@example.com")).toBeUndefined();
  });
});

describe("pattern demos", () => {
  it("modal dialog confirms the destructive action", async () => {
    render(<ModalDialogDemo />);
    await userEvent.click(screen.getByRole("button", { name: "삭제하기" }));
    await userEvent.click(screen.getByRole("button", { name: "삭제" }));
    expect(screen.getByRole("status")).toHaveTextContent("프로젝트를 삭제했어요.");
  });

  it("drawer applies the draft only when the user confirms", async () => {
    render(<DrawerDemo />);
    await userEvent.click(screen.getByRole("button", { name: "필터 열기" }));
    await userEvent.click(screen.getByRole("radio", { name: "최신순" }));
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.getByText("현재 정렬: 추천순")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "필터 열기" }));
    await userEvent.click(screen.getByRole("radio", { name: "가격 낮은순" }));
    await userEvent.click(screen.getByRole("button", { name: "적용하기" }));
    expect(screen.getByText("현재 정렬: 가격 낮은순")).toBeInTheDocument();
  });

  it("inline validation shows the error after blur and clears on success", async () => {
    render(<InlineValidationDemo />);
    const input = screen.getByRole("textbox", { name: "이메일" });
    await userEvent.type(input, "wrong");
    await userEvent.tab();
    expect(input).toHaveAttribute("aria-invalid", "true");

    await userEvent.clear(input);
    await userEvent.type(input, "name@example.com");
    await userEvent.click(screen.getByRole("button", { name: "영수증 받기" }));
    expect(input).not.toHaveAttribute("aria-invalid");
    expect(screen.getByText("영수증을 보냈어요.")).toBeInTheDocument();
  });

  it("empty state leads to the first item and back", async () => {
    render(<EmptyStateDemo />);
    await userEvent.click(screen.getByRole("button", { name: "프로젝트 만들기" }));
    expect(screen.getByText("새 프로젝트")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "빈 상태로 되돌리기" }));
    expect(screen.getByText("아직 프로젝트가 없어요")).toBeInTheDocument();
  });
});
