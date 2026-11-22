import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CoachMarkDemo } from "@/entities/pattern/catalog/coach-mark/CoachMarkDemo";
import { LimitedAccessDemo } from "@/entities/pattern/catalog/limited-access/LimitedAccessDemo";
import { OnboardingCarouselDemo } from "@/entities/pattern/catalog/onboarding-carousel/OnboardingCarouselDemo";
import { PermissionPrimingDemo } from "@/entities/pattern/catalog/permission-priming/PermissionPrimingDemo";
import { PermissionRecoveryDemo } from "@/entities/pattern/catalog/permission-recovery/PermissionRecoveryDemo";
import { ProductTourDemo } from "@/entities/pattern/catalog/product-tour/ProductTourDemo";
import { ProfileSetupDemo } from "@/entities/pattern/catalog/profile-setup/ProfileSetupDemo";
import { SetupChecklistDemo } from "@/entities/pattern/catalog/setup-checklist/SetupChecklistDemo";
import { SocialSignInDemo } from "@/entities/pattern/catalog/social-sign-in/SocialSignInDemo";
import { SplashScreenDemo } from "@/entities/pattern/catalog/splash-screen/SplashScreenDemo";
import { SystemPermissionDialogDemo } from "@/entities/pattern/catalog/system-permission-dialog/SystemPermissionDialogDemo";
import { TermsAgreementDemo } from "@/entities/pattern/catalog/terms-agreement/TermsAgreementDemo";
import { WelcomeScreenDemo } from "@/entities/pattern/catalog/welcome-screen/WelcomeScreenDemo";
import { WhatsNewDemo } from "@/entities/pattern/catalog/whats-new/WhatsNewDemo";

afterEach(() => {
  vi.useRealTimers();
});

describe("OnboardingCarousel", () => {
  it("moves with 다음 and arrow keys, then finishes", async () => {
    const user = userEvent.setup();
    render(<OnboardingCarouselDemo />);
    expect(screen.getByRole("heading", { name: "지출을 한곳에" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByRole("heading", { name: "예산 알림" })).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole("heading", { name: "예산 알림" }), { key: "ArrowRight" });
    expect(screen.getByRole("button", { name: "3번째 소개" })).toHaveAttribute(
      "aria-current",
      "step",
    );
    await user.click(screen.getByRole("button", { name: "시작하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("가계부를 시작했어요");
  });

  it("can be skipped at any time", async () => {
    const user = userEvent.setup();
    render(<OnboardingCarouselDemo />);
    await user.click(screen.getByRole("button", { name: "건너뛰기" }));
    expect(screen.getByRole("status")).toHaveTextContent("가계부를 시작했어요");
  });
});

describe("CoachMark", () => {
  it("focuses 확인, closes with Escape and can be shown again", async () => {
    const user = userEvent.setup();
    render(<CoachMarkDemo />);
    expect(
      screen.getByRole("dialog", { name: "여기서 새 메모를 만들 수 있어요" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "확인" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "다시 보기" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});

describe("ProductTour", () => {
  it("walks through every stop and finishes", async () => {
    const user = userEvent.setup();
    render(<ProductTourDemo />);
    await user.click(screen.getByRole("button", { name: "둘러보기 시작" }));
    expect(screen.getByRole("dialog", { name: "검색" })).toHaveTextContent("1 / 3");
    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByRole("dialog", { name: "필터" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "다음" })).toHaveFocus();
    await user.click(screen.getByRole("button", { name: "이전" }));
    expect(screen.getByRole("dialog", { name: "검색" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "다음" }));
    await user.click(screen.getByRole("button", { name: "다음" }));
    await user.click(screen.getByRole("button", { name: "마치기" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("둘러보기를 마쳤어요");
  });
});

describe("SetupChecklist", () => {
  it("checks tasks off and reports progress", async () => {
    const user = userEvent.setup();
    render(<SetupChecklistDemo />);
    const bar = screen.getByRole("progressbar", { name: "시작하기" });
    expect(bar).toHaveAttribute("value", "1");
    await user.click(screen.getByRole("button", { name: "초대" }));
    expect(bar).toHaveAttribute("value", "2");
    expect(screen.getByText("팀원 초대하기")).toHaveClass("line-through");
    await user.click(screen.getByRole("button", { name: "만들기" }));
    await user.click(screen.getByRole("button", { name: "설정" }));
    expect(screen.getByRole("status")).toHaveTextContent("준비를 마쳤어요");
  });
});

describe("PermissionPriming", () => {
  it("lets people say later without the system prompt", async () => {
    const user = userEvent.setup();
    render(<PermissionPrimingDemo />);
    expect(screen.getByRole("region", { name: "배송 알림을 받아 보세요" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "나중에" }));
    expect(screen.getByRole("status")).toHaveTextContent("내 정보에서 언제든 켤 수 있어요");
    await user.click(screen.getByRole("button", { name: "다시 보기" }));
    await user.click(screen.getByRole("button", { name: "알림 켜기" }));
    expect(screen.getByRole("status")).toHaveTextContent("시스템 알림 요청으로 이어져요");
  });
});

describe("WelcomeScreen", () => {
  it("opens as a modal and treats Escape as looking around", async () => {
    const user = userEvent.setup();
    render(<WelcomeScreenDemo />);
    await user.click(screen.getByRole("button", { name: "환영 화면 열기" }));
    const dialog = screen.getByRole("dialog", { name: "환영해요" });
    expect(dialog).toHaveAttribute("open");
    fireEvent(dialog, new Event("cancel", { cancelable: true }));
    expect(dialog).not.toHaveAttribute("open");
    expect(screen.getByRole("status")).toHaveTextContent("둘러보는 중이에요");
    await user.click(screen.getByRole("button", { name: "환영 화면 열기" }));
    await user.click(within(screen.getByRole("dialog")).getByRole("button", { name: "시작하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("시작했어요");
  });
});

describe("WhatsNew", () => {
  it("closes and opens again from 새 소식", async () => {
    const user = userEvent.setup();
    render(<WhatsNewDemo />);
    expect(screen.getByRole("dialog", { name: "새로워진 점" })).toHaveTextContent("버전 3.2");
    await user.click(screen.getByRole("button", { name: "확인" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "새 소식" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});

describe("SplashScreen", () => {
  it("stays until loading is done, then shows the app", () => {
    vi.useFakeTimers();
    render(<SplashScreenDemo />);
    expect(screen.getByRole("status")).toHaveTextContent("앱을 준비하는 중");
    act(() => vi.advanceTimersByTime(700));
    expect(screen.getByRole("status")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(600));
    expect(screen.getByRole("heading", { name: "오늘의 추천" })).toBeInTheDocument();
    act(() => screen.getByRole("button", { name: "앱 다시 열기" }).click());
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});

describe("SocialSignIn", () => {
  it("shows progress on the chosen provider and blocks the others", () => {
    vi.useFakeTimers();
    render(<SocialSignInDemo />);
    act(() => screen.getByRole("button", { name: "Google로 계속하기" }).click());
    expect(screen.getByRole("button", { name: "연결하는 중" })).toHaveAttribute(
      "aria-busy",
      "true",
    );
    expect(screen.getByRole("button", { name: "Apple로 계속하기" })).toBeDisabled();
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByRole("status")).toHaveTextContent("가입을 마쳤어요");
  });
});

describe("TermsAgreement", () => {
  it("marks 전체 동의 mixed and needs every required item", async () => {
    const user = userEvent.setup();
    render(<TermsAgreementDemo />);
    const all = screen.getByRole("checkbox", { name: "전체 동의" });
    const next = screen.getByRole("button", { name: "다음" });
    await user.click(screen.getByRole("checkbox", { name: /이용약관/ }));
    expect((all as HTMLInputElement).indeterminate).toBe(true);
    expect(next).toBeDisabled();
    await user.click(screen.getByRole("checkbox", { name: /개인정보/ }));
    expect(next).toBeEnabled();
    expect(screen.getByRole("checkbox", { name: /마케팅/ })).not.toBeChecked();
    await user.click(next);
    expect(screen.getByRole("status")).toHaveTextContent("다음 단계로 넘어가요");
    await user.click(screen.getByRole("button", { name: "이용약관 보기" }));
    expect(screen.getByText(/이용약관 전문이 여기에 나와요/)).toBeInTheDocument();
  });

  it("checks and clears everything from 전체 동의", async () => {
    const user = userEvent.setup();
    render(<TermsAgreementDemo />);
    const all = screen.getByRole("checkbox", { name: "전체 동의" });
    await user.click(all);
    expect(screen.getByRole("checkbox", { name: /마케팅/ })).toBeChecked();
    await user.click(all);
    expect(screen.getByRole("checkbox", { name: /이용약관/ })).not.toBeChecked();
  });
});

describe("ProfileSetup", () => {
  it("checks the name length before finishing", async () => {
    const user = userEvent.setup();
    render(<ProfileSetupDemo />);
    const name = screen.getByRole("textbox", { name: "닉네임" });
    await user.type(name, "하");
    await user.click(screen.getByRole("button", { name: "완료" }));
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAccessibleDescription(/2~12자로 정해 주세요/);
    await user.type(name, "늘");
    await user.click(screen.getByRole("button", { name: "완료" }));
    expect(screen.getByRole("status")).toHaveTextContent("하늘 님, 반가워요");
  });

  it("can be skipped", async () => {
    const user = userEvent.setup();
    render(<ProfileSetupDemo />);
    await user.click(screen.getByRole("button", { name: "나중에 하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("프로필은 나중에 만들 수 있어요");
  });
});

describe("SystemPermissionDialog", () => {
  it("handles each decision", async () => {
    const user = userEvent.setup();
    render(<SystemPermissionDialogDemo />);
    await user.click(screen.getByRole("button", { name: "사진 올리기" }));
    expect(screen.getByRole("alertdialog")).toHaveAccessibleDescription(
      "후기에 사진을 붙이려면 필요해요",
    );
    await user.click(screen.getByRole("button", { name: "사진 선택" }));
    expect(screen.getByRole("status")).toHaveTextContent("고른 사진만 쓸 수 있어요");
    await user.click(screen.getByRole("button", { name: "사진 올리기" }));
    await user.click(screen.getByRole("button", { name: "허용 안 함" }));
    expect(screen.getByRole("status")).toHaveTextContent("사진 없이 후기를 쓸 수 있어요");
  });
});

describe("PermissionRecovery", () => {
  it("asks again once, then points to settings, with a fallback", async () => {
    const user = userEvent.setup();
    render(<PermissionRecoveryDemo />);
    await user.click(screen.getByRole("button", { name: "내 위치로 찾기" }));
    await user.click(screen.getByRole("button", { name: "다시 허용하기" }));
    await user.click(screen.getByRole("button", { name: "설정 열기" }));
    expect(screen.getAllByRole("status").at(-1)).toHaveTextContent("기기 설정으로 이동해요");
    await user.click(screen.getByRole("button", { name: "주소 직접 입력" }));
    expect(screen.getByRole("textbox", { name: "주소" })).toBeInTheDocument();
  });
});

describe("LimitedAccess", () => {
  it("works with the allowed photos and changes the selection in place", async () => {
    const user = userEvent.setup();
    render(<LimitedAccessDemo />);
    expect(screen.getByRole("status")).toHaveTextContent("사진 3장만 볼 수 있어요");
    expect(screen.getAllByRole("button", { name: /첨부/ })).toHaveLength(3);
    await user.click(screen.getByRole("button", { name: "선택 변경" }));
    await user.click(screen.getByRole("checkbox", { name: "사진 4" }));
    await user.click(screen.getByRole("button", { name: "완료" }));
    expect(screen.getByRole("status")).toHaveTextContent("사진 4장만 볼 수 있어요");
    expect(screen.getAllByRole("button", { name: /첨부/ })).toHaveLength(4);
  });
});
