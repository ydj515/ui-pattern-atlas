import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AccountDeletionDemo } from "@/entities/pattern/catalog/account-deletion/AccountDeletionDemo";
import { EmailVerificationDemo } from "@/entities/pattern/catalog/email-verification/EmailVerificationDemo";
import { LoginFormDemo } from "@/entities/pattern/catalog/login-form/LoginFormDemo";
import { PasswordResetDemo } from "@/entities/pattern/catalog/password-reset/PasswordResetDemo";
import { SignupFormDemo } from "@/entities/pattern/catalog/signup-form/SignupFormDemo";
import { TwoFactorAuthDemo } from "@/entities/pattern/catalog/two-factor-auth/TwoFactorAuthDemo";

afterEach(() => {
  vi.useRealTimers();
});

describe("LoginForm", () => {
  it("uses one message for a wrong email or password, then signs in", async () => {
    const user = userEvent.setup();
    render(<LoginFormDemo />);
    const email = screen.getByLabelText("이메일");
    const password = screen.getByLabelText("비밀번호");
    expect(email).toHaveAttribute("autocomplete", "username");
    expect(password).toHaveAttribute("autocomplete", "current-password");
    await user.type(email, "haneul@example.com");
    await user.type(password, "wrong");
    await user.click(screen.getByRole("button", { name: "로그인" }));
    expect(screen.getByRole("alert")).toHaveTextContent("이메일 또는 비밀번호가 맞지 않아요");
    expect(password).toHaveAttribute("aria-invalid", "true");
    await user.click(screen.getByRole("button", { name: "보기" }));
    expect(password).toHaveAttribute("type", "text");
    await user.clear(password);
    await user.type(password, "linen2024");
    await user.click(screen.getByRole("button", { name: "로그인" }));
    expect(screen.getByRole("status")).toHaveTextContent("김하늘님, 다시 오신 걸 환영해요");
  });
});

describe("SignupForm", () => {
  it("flags a taken email on blur and ticks the password rules", async () => {
    const user = userEvent.setup();
    render(<SignupFormDemo />);
    await user.type(screen.getByLabelText("이메일"), "haneul@example.com");
    await user.click(screen.getByLabelText("비밀번호"));
    expect(screen.getByText("이미 가입된 이메일이에요")).toBeInTheDocument();
    await user.type(screen.getByLabelText("비밀번호"), "linen2024");
    expect(screen.getByText("8자 이상").closest("li")).toHaveTextContent("충족");
    await user.click(screen.getByRole("button", { name: "가입하기" }));
    expect(screen.getByRole("alert")).toHaveTextContent("표시된 항목을 고쳐 주세요");
    await user.type(screen.getByLabelText("이름"), "김하늘");
    await user.clear(screen.getByLabelText("이메일"));
    await user.type(screen.getByLabelText("이메일"), "sky@example.com");
    await user.click(screen.getByRole("button", { name: "가입하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("가입을 마쳤어요");
  });
});

describe("EmailVerification", () => {
  it("resends and counts down before the next send", () => {
    vi.useFakeTimers();
    render(<EmailVerificationDemo />);
    act(() => screen.getByRole("button", { name: "메일 다시 보내기" }).click());
    expect(screen.getByRole("status")).toHaveTextContent("메일을 다시 보냈어요");
    expect(screen.getByRole("button", { name: "30초 뒤에 다시 보낼 수 있어요" })).toBeDisabled();
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByRole("button", { name: "29초 뒤에 다시 보낼 수 있어요" })).toBeDisabled();
    act(() => vi.advanceTimersByTime(29000));
    expect(screen.getByRole("button", { name: "메일 다시 보내기" })).toBeEnabled();
  });
});

describe("PasswordReset", () => {
  it("answers the same way for any address", async () => {
    const user = userEvent.setup();
    render(<PasswordResetDemo />);
    await user.click(screen.getByRole("button", { name: "재설정 링크 받기" }));
    expect(screen.getByLabelText("이메일")).toHaveAttribute("aria-invalid", "true");
    await user.type(screen.getByLabelText("이메일"), "nobody@example.com");
    await user.click(screen.getByRole("button", { name: "재설정 링크 받기" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "nobody@example.com 주소가 가입되어 있다면 재설정 링크를 보냈어요",
    );
  });
});

describe("TwoFactorAuth", () => {
  it("counts the tries left and accepts the right code or a backup code", async () => {
    const user = userEvent.setup();
    render(<TwoFactorAuthDemo />);
    const code = screen.getByLabelText("인증 코드");
    expect(code).toHaveAttribute("autocomplete", "one-time-code");
    await user.type(code, "111111");
    await user.click(screen.getByRole("button", { name: "확인" }));
    expect(screen.getByRole("alert")).toHaveTextContent("4번 더 시도할 수 있어요");
    await user.click(screen.getByRole("button", { name: /백업 코드로 인증/ }));
    await user.type(screen.getByLabelText("백업 코드"), "ab12cd34");
    await user.click(screen.getByRole("button", { name: "확인" }));
    expect(screen.getByRole("status")).toHaveTextContent("인증됐어요");
  });
});

describe("AccountDeletion", () => {
  it("unlocks only after the confirmation word and says how to undo", async () => {
    const user = userEvent.setup();
    render(<AccountDeletionDemo />);
    expect(screen.getByText("적립금 2,300원")).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "탈퇴하기" });
    expect(button).toBeDisabled();
    await user.type(screen.getByLabelText(/'탈퇴'를 입력해 주세요/), "탈퇴");
    expect(button).toBeEnabled();
    await user.click(button);
    expect(screen.getByRole("status")).toHaveTextContent("30일 안에 다시 로그인하면 취소돼요");
  });
});
