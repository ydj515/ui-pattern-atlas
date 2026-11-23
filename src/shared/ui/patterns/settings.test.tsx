import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ConnectedAccountsDemo } from "@/entities/pattern/catalog/connected-accounts/ConnectedAccountsDemo";
import { LanguagePickerDemo } from "@/entities/pattern/catalog/language-picker/LanguagePickerDemo";
import { NotificationSettingsDemo } from "@/entities/pattern/catalog/notification-settings/NotificationSettingsDemo";
import { PrivacySettingsDemo } from "@/entities/pattern/catalog/privacy-settings/PrivacySettingsDemo";
import { SettingsListDemo } from "@/entities/pattern/catalog/settings-list/SettingsListDemo";
import { ThemeSwitcherDemo } from "@/entities/pattern/catalog/theme-switcher/ThemeSwitcherDemo";

describe("SettingsList", () => {
  it("applies a switch at once and opens a value row", async () => {
    const user = userEvent.setup();
    render(<SettingsListDemo />);
    const promo = screen.getByRole("switch", { name: /혜택 소식 받기/ });
    expect(promo).not.toBeChecked();
    await user.click(promo);
    expect(promo).toBeChecked();
    await user.click(screen.getByRole("button", { name: /화면 모드/ }));
    expect(screen.getByText("화면 모드를 고르는 화면을 열어요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "회원 탈퇴" }));
    expect(screen.getByText("회원 탈퇴 화면으로 이동해요")).toBeInTheDocument();
  });
});

describe("NotificationSettings", () => {
  it("locks the required notice and counts the chosen ones", async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsDemo />);
    expect(screen.getByRole("checkbox", { name: "주문·배송 앱 푸시" })).toBeDisabled();
    expect(screen.getByRole("checkbox", { name: "주문·배송 앱 푸시" })).toBeChecked();
    expect(screen.getByText("켜 둔 알림 3개")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "이벤트·혜택 앱 푸시" }));
    expect(screen.getByText("켜 둔 알림 4개")).toBeInTheDocument();
  });
});

describe("ThemeSwitcher", () => {
  it("says what the system choice is now and previews the pick", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcherDemo />);
    expect(screen.getByRole("radio", { name: /시스템 설정/ })).toBeChecked();
    expect(screen.getByText("지금은 라이트")).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: /다크/ }));
    expect(screen.getByText("다크 모드로 보여요")).toBeInTheDocument();
  });
});

describe("LanguagePicker", () => {
  it("finds a language by its Korean name and switches to it", async () => {
    const user = userEvent.setup();
    render(<LanguagePickerDemo />);
    await user.type(screen.getByRole("searchbox", { name: "언어 찾기" }), "일본");
    expect(screen.getAllByRole("radio")).toHaveLength(1);
    await user.click(screen.getByRole("radio", { name: /日本語/ }));
    expect(screen.getByText(/지금 언어: 日本語/)).toBeInTheDocument();
    await user.clear(screen.getByRole("searchbox", { name: "언어 찾기" }));
    await user.type(screen.getByRole("searchbox", { name: "언어 찾기" }), "없는 말");
    expect(screen.getByText("찾는 언어가 없어요")).toBeInTheDocument();
  });
});

describe("PrivacySettings", () => {
  it("explains each level and confirms the data request", async () => {
    const user = userEvent.setup();
    render(<PrivacySettingsDemo />);
    await user.click(screen.getByRole("radio", { name: /나만 보기/ }));
    expect(screen.getByRole("radio", { name: /나만 보기/ })).toBeChecked();
    await user.click(screen.getByRole("button", { name: "내 데이터 내려받기 요청" }));
    expect(screen.getByRole("status")).toHaveTextContent("요청을 받았어요");
  });
});

describe("ConnectedAccounts", () => {
  it("keeps the only sign-in until another is connected", async () => {
    const user = userEvent.setup();
    render(<ConnectedAccountsDemo />);
    const kakao = screen.getByRole("button", { name: "카카오 연결 해제" });
    expect(kakao).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "구글 연결" }));
    expect(kakao).toBeEnabled();
    await user.click(kakao);
    expect(screen.getByRole("button", { name: "카카오 연결" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "구글 연결 해제" })).toBeDisabled();
  });
});
