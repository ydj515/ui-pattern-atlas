import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { FloatingLabelDemo } from "@/entities/pattern/catalog/floating-label/FloatingLabelDemo";
import { InputMaskDemo } from "@/entities/pattern/catalog/input-mask/InputMaskDemo";
import { MultiStepFormDemo } from "@/entities/pattern/catalog/multi-step-form/MultiStepFormDemo";
import { NumberStepperDemo } from "@/entities/pattern/catalog/number-stepper/NumberStepperDemo";
import { OtpInputDemo } from "@/entities/pattern/catalog/otp-input/OtpInputDemo";
import { PasswordFieldDemo } from "@/entities/pattern/catalog/password-field/PasswordFieldDemo";
import { SearchFieldDemo } from "@/entities/pattern/catalog/search-field/SearchFieldDemo";
import { TagInputDemo } from "@/entities/pattern/catalog/tag-input/TagInputDemo";
import { TextareaDemo } from "@/entities/pattern/catalog/textarea/TextareaDemo";
import { TextFieldDemo } from "@/entities/pattern/catalog/text-field/TextFieldDemo";
import { formatWithMask } from "@/shared/ui/patterns/input-mask/MaskedInput";

describe("TextField", () => {
  it("links hint and error, and clears the error once fixed", async () => {
    const user = userEvent.setup();
    render(<TextFieldDemo />);
    const input = screen.getByRole("textbox", { name: /닉네임/ });
    expect(input).toHaveAccessibleDescription("2~12자로 입력해 주세요");
    expect(input).toBeRequired();

    await user.click(screen.getByRole("button", { name: "저장" }));
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("닉네임을 입력해 주세요");

    await user.type(input, "하늘");
    expect(input).not.toHaveAttribute("aria-invalid");
    await user.click(screen.getByRole("button", { name: "저장" }));
    expect(screen.getByRole("status")).toHaveTextContent("저장했어요");
  });
});

describe("PasswordField", () => {
  it("ticks the rules off and toggles visibility", async () => {
    const user = userEvent.setup();
    const { container } = render(<PasswordFieldDemo />);
    const input = container.querySelector("input")!;
    expect(input).toHaveAttribute("type", "password");

    await user.type(input, "sky2026!");
    expect(screen.getByText("8자 이상").closest("li")).toHaveTextContent("(충족)");
    expect(screen.getByText("특수문자 포함").closest("li")).toHaveTextContent("(충족)");

    const toggle = screen.getByRole("button", { name: "비밀번호 보기" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(input).toHaveAttribute("type", "text");
  });
});

describe("SearchField", () => {
  it("focuses on /, filters, clears with Escape and the button", async () => {
    const user = userEvent.setup();
    render(<SearchFieldDemo />);
    const input = screen.getByRole("searchbox", { name: "문서 검색" });

    await user.keyboard("/");
    expect(input).toHaveFocus();
    await user.keyboard("버튼");
    expect(within(screen.getByRole("list")).getAllByRole("listitem")).toHaveLength(2);

    await user.keyboard("{Escape}");
    expect(input).toHaveValue("");

    await user.type(input, "색상");
    await user.click(screen.getByRole("button", { name: "검색어 지우기" }));
    expect(input).toHaveValue("");
    expect(input).toHaveFocus();
  });
});

describe("OtpInput", () => {
  it("moves through the boxes, accepts a paste and verifies", async () => {
    const user = userEvent.setup();
    render(<OtpInputDemo />);
    const first = screen.getByRole("textbox", { name: "인증번호 1/6자리" });
    expect(first).toHaveAttribute("autocomplete", "one-time-code");

    await user.click(first);
    await user.keyboard("12");
    expect(screen.getByRole("textbox", { name: "인증번호 3/6자리" })).toHaveFocus();
    await user.keyboard("{Backspace}");
    expect(screen.getByRole("textbox", { name: "인증번호 2/6자리" })).toHaveValue("");

    fireEvent.paste(first, { clipboardData: { getData: () => "123-456" } });
    expect(screen.getByRole("status")).toHaveTextContent("인증됐어요");
  });

  it("flags a wrong code", async () => {
    const user = userEvent.setup();
    render(<OtpInputDemo />);
    await user.click(screen.getByRole("textbox", { name: "인증번호 1/6자리" }));
    await user.keyboard("654321");
    expect(screen.getByRole("status")).toHaveTextContent("코드가 맞지 않아요");
    expect(screen.getByRole("textbox", { name: "인증번호 1/6자리" })).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});

describe("Textarea", () => {
  it("counts characters and links the counter", async () => {
    const user = userEvent.setup();
    render(<TextareaDemo />);
    const textarea = screen.getByRole("textbox", { name: "후기" });
    expect(textarea).toHaveAccessibleDescription("30/100");
    await user.type(textarea, "!");
    expect(textarea).toHaveAccessibleDescription("31/100");
    expect(textarea).toHaveAttribute("maxLength", "100");
  });
});

describe("NumberStepper", () => {
  it("steps with buttons and arrows, clamps typed values and stops at the limits", async () => {
    const user = userEvent.setup();
    render(<NumberStepperDemo />);
    const spin = screen.getByRole("spinbutton", { name: "수량" });
    expect(screen.getByRole("button", { name: "수량 줄이기" })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: "수량 늘리기" }));
    expect(spin).toHaveAttribute("aria-valuenow", "2");
    expect(screen.getByText("합계 24,000원")).toBeInTheDocument();

    await user.click(spin);
    await user.keyboard("{ArrowUp}");
    expect(spin).toHaveAttribute("aria-valuenow", "3");

    await user.clear(spin);
    await user.type(spin, "9");
    await user.tab();
    expect(spin).toHaveAttribute("aria-valuenow", "5");
    expect(screen.getByRole("button", { name: "수량 늘리기" })).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("최대 5개까지 살 수 있어요");
  });
});

describe("InputMask", () => {
  it("formats digits and stores only digits", async () => {
    expect(formatWithMask("01012345678", "000-0000-0000")).toBe("010-1234-5678");
    expect(formatWithMask("0101", "000-0000-0000")).toBe("010-1");

    const user = userEvent.setup();
    render(<InputMaskDemo />);
    const phone = screen.getByRole("textbox", { name: "휴대폰 번호" });
    await user.type(phone, "01012345678");
    expect(phone).toHaveValue("010-1234-5678");
    expect(screen.getByText("저장되는 값: 01012345678")).toBeInTheDocument();
  });
});

describe("TagInput", () => {
  it("adds on Enter, ignores IME composition and removes chips", async () => {
    const user = userEvent.setup();
    render(<TagInputDemo />);
    const input = screen.getByRole("textbox", { name: "관심 분야" });

    await user.type(input, "개발{Enter}");
    expect(screen.getByRole("button", { name: "개발 삭제" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("개발 태그를 추가했어요");

    await user.type(input, "마케");
    fireEvent.keyDown(input, { key: "Enter", isComposing: true });
    expect(input).toHaveValue("마케");

    await user.click(screen.getByRole("button", { name: "디자인 삭제" }));
    expect(screen.queryByRole("button", { name: "디자인 삭제" })).not.toBeInTheDocument();
    expect(input).toHaveFocus();
  });
});

describe("MultiStepForm", () => {
  it("moves between steps, keeps values and focuses each heading", async () => {
    const user = userEvent.setup();
    render(<MultiStepFormDemo />);
    expect(screen.getByText("1/3단계")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByRole("heading", { name: "결제 수단" })).toHaveFocus();
    await user.click(screen.getByRole("radio", { name: "계좌이체" }));
    await user.click(screen.getByRole("button", { name: "이전" }));
    expect(screen.getByRole("textbox", { name: "이름" })).toHaveValue("김하늘");

    await user.click(screen.getByRole("button", { name: "다음" }));
    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByText("계좌이체")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "주문하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("주문을 마쳤어요");
  });
});

describe("FloatingLabel", () => {
  it("keeps a real label for each field", () => {
    render(<FloatingLabelDemo />);
    act(() => {
      screen.getByRole("textbox", { name: "이메일" }).focus();
    });
    expect(screen.getByRole("textbox", { name: "이메일" })).toHaveAttribute("placeholder", " ");
    expect(screen.getByRole("textbox", { name: "이름" })).toBeInTheDocument();
  });
});
