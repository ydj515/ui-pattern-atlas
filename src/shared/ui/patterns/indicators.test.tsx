import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AvatarDemo } from "@/entities/pattern/catalog/avatar/AvatarDemo";
import { AvatarGroupDemo } from "@/entities/pattern/catalog/avatar-group/AvatarGroupDemo";
import { BadgeDemo } from "@/entities/pattern/catalog/badge/BadgeDemo";
import { FeatureDotDemo } from "@/entities/pattern/catalog/feature-dot/FeatureDotDemo";
import { PageIndicatorDemo } from "@/entities/pattern/catalog/page-indicator/PageIndicatorDemo";
import { PasswordStrengthMeterDemo } from "@/entities/pattern/catalog/password-strength-meter/PasswordStrengthMeterDemo";
import { PresenceDemo } from "@/entities/pattern/catalog/presence/PresenceDemo";
import { ScrollProgressDemo } from "@/entities/pattern/catalog/scroll-progress/ScrollProgressDemo";
import { StatusDotDemo } from "@/entities/pattern/catalog/status-dot/StatusDotDemo";
import { TagDemo } from "@/entities/pattern/catalog/tag/TagDemo";
import { UnreadIndicatorDemo } from "@/entities/pattern/catalog/unread-indicator/UnreadIndicatorDemo";

describe("Badge", () => {
  it("puts the count in the button name and caps the bubble", async () => {
    const user = userEvent.setup();
    render(<BadgeDemo />);
    await user.click(screen.getByRole("button", { name: "담기" }));
    expect(screen.getByRole("button", { name: "장바구니, 상품 4개" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "120개" }));
    expect(screen.getByText("99+")).toHaveAttribute("aria-hidden", "true");
  });
});

describe("StatusDot", () => {
  it("states each status in words", async () => {
    const user = userEvent.setup();
    render(<StatusDotDemo />);
    expect(screen.getByText("지연")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "새로 고침" }));
    expect(screen.getByText("장애")).toBeInTheDocument();
  });
});

describe("Tag", () => {
  it("removes a tag by its named button", async () => {
    const user = userEvent.setup();
    render(<TagDemo />);
    await user.click(screen.getByRole("button", { name: "접근성 태그 빼기" }));
    expect(screen.queryByText("접근성")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "태그 되돌리기" }));
    expect(screen.getByText("접근성")).toBeInTheDocument();
  });
});

describe("Avatar", () => {
  it("falls back to the initial when the photo fails", async () => {
    const user = userEvent.setup();
    render(<AvatarDemo />);
    expect(screen.getByRole("img", { name: "김하늘" }).tagName).toBe("IMG");
    await user.click(screen.getByRole("button", { name: "사진 불러오기 실패" }));
    fireEvent.error(screen.getByRole("img", { name: "김하늘" }));
    expect(screen.getByRole("img", { name: "김하늘" }).tagName).toBe("SPAN");
    expect(screen.getByRole("img", { name: "이도윤" })).toHaveTextContent("이");
  });
});

describe("AvatarGroup", () => {
  it("summarises the group in one name", async () => {
    const user = userEvent.setup();
    render(<AvatarGroupDemo />);
    expect(screen.getByRole("img", { name: "김하늘, 이도윤, 박서준 외 2명" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "참여자 추가" }));
    expect(screen.getByRole("img", { name: "김하늘, 이도윤, 박서준 외 3명" })).toBeInTheDocument();
  });
});

describe("PageIndicator", () => {
  it("marks the current page and jumps from a dot", async () => {
    const user = userEvent.setup();
    render(<PageIndicatorDemo />);
    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByRole("button", { name: "2 / 4" })).toHaveAttribute("aria-current", "true");
    await user.click(screen.getByRole("button", { name: "4 / 4" }));
    expect(screen.getByText("이제 시작해 볼까요")).toBeInTheDocument();
  });
});

describe("UnreadIndicator", () => {
  it("reads 안 읽음 with the title until opened", async () => {
    const user = userEvent.setup();
    render(<UnreadIndicatorDemo />);
    const first = screen.getByRole("button", { name: /시안 확인 부탁드려요/ });
    expect(first).toHaveTextContent("안 읽음");
    await user.click(first);
    expect(first).not.toHaveTextContent("안 읽음");
  });
});

describe("Presence", () => {
  it("includes the state in the person's name", async () => {
    const user = userEvent.setup();
    render(<PresenceDemo />);
    expect(screen.getByRole("img", { name: "김하늘, 자리 비움" })).toBeInTheDocument();
    await user.selectOptions(screen.getByRole("combobox", { name: "내 상태" }), "자리 비움");
    expect(screen.getByRole("img", { name: "나, 자리 비움" })).toBeInTheDocument();
  });
});

describe("FeatureDot", () => {
  it("disappears once the new item is opened", async () => {
    const user = userEvent.setup();
    render(<FeatureDotDemo />);
    const report = screen.getByRole("button", { name: "보고서, 새 기능" });
    await user.click(report);
    expect(screen.getByRole("button", { name: "보고서" })).toHaveAttribute("aria-current", "page");
  });
});

describe("ScrollProgress", () => {
  it("fills with the scroll position", () => {
    const { container } = render(<ScrollProgressDemo />);
    const scroller = screen.getByRole("heading", { name: "버튼 문구 쓰는 법" }).parentElement!;
    Object.defineProperty(scroller, "scrollHeight", { configurable: true, value: 600 });
    Object.defineProperty(scroller, "clientHeight", { configurable: true, value: 200 });
    scroller.scrollTop = 200;
    fireEvent.scroll(scroller);
    expect(container.querySelector<HTMLElement>("[aria-hidden] > div")!.style.transform).toBe(
      "scaleX(0.5)",
    );
  });
});

describe("PasswordStrengthMeter", () => {
  it("names the strength in words as the password grows", async () => {
    const user = userEvent.setup();
    render(<PasswordStrengthMeterDemo />);
    const input = screen.getByLabelText("새 비밀번호");
    await user.type(input, "abc");
    expect(screen.getByText("약함")).toBeInTheDocument();
    await user.type(input, "defgh12!xyz");
    expect(screen.getByText("아주 강함")).toBeInTheDocument();
  });
});
