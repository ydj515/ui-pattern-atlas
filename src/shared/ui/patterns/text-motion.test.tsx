import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AnimatedHighlightDemo } from "@/entities/pattern/catalog/animated-highlight/AnimatedHighlightDemo";
import { BlurInDemo } from "@/entities/pattern/catalog/blur-in/BlurInDemo";
import { CountUpDemo } from "@/entities/pattern/catalog/count-up/CountUpDemo";
import { FadeUpDemo } from "@/entities/pattern/catalog/fade-up/FadeUpDemo";
import { MarqueeDemo } from "@/entities/pattern/catalog/marquee/MarqueeDemo";
import { MaskRevealDemo } from "@/entities/pattern/catalog/mask-reveal/MaskRevealDemo";
import { RotatingWordsDemo } from "@/entities/pattern/catalog/rotating-words/RotatingWordsDemo";
import { StaggeredTextDemo } from "@/entities/pattern/catalog/staggered-text-reveal/StaggeredTextDemo";
import { TextScrambleDemo } from "@/entities/pattern/catalog/text-scramble/TextScrambleDemo";
import { TypewriterDemo } from "@/entities/pattern/catalog/typewriter/TypewriterDemo";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

/** Runs requestAnimationFrame callbacks on fake timers, one frame per 16 ms. */
function fakeFrames() {
  vi.useFakeTimers({
    toFake: [
      "setTimeout",
      "setInterval",
      "clearInterval",
      "requestAnimationFrame",
      "cancelAnimationFrame",
      "performance",
    ],
  });
}

describe("CountUp", () => {
  it("lands on the final value and gives screen readers only that value", () => {
    fakeFrames();
    render(<CountUpDemo />);
    expect(screen.getByText("128,400명", { selector: ".sr-only" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1500));
    expect(screen.getByText("128,400명", { selector: "[aria-hidden]" })).toBeInTheDocument();
    expect(screen.getByText("42%", { selector: "[aria-hidden]" })).toBeInTheDocument();
  });
});

describe("Typewriter", () => {
  it("types the sentence while screen readers get it whole", () => {
    vi.useFakeTimers();
    render(<TypewriterDemo />);
    const full = "오늘 저녁 메뉴를 골라 드릴게요";
    expect(screen.getByText(full, { selector: ".sr-only" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(70 * 4));
    expect(screen.getByText("오늘 저", { selector: "[aria-hidden]" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(70 * 20));
    expect(screen.getByText(full, { selector: "[aria-hidden]" })).toBeInTheDocument();
  });
});

describe("RotatingWords", () => {
  it("moves to the next word and can be paused", () => {
    vi.useFakeTimers();
    render(<RotatingWordsDemo />);
    const current = () =>
      screen.getAllByText(/디자인|문서|발표/, { selector: ".translate-y-0" })[0]?.textContent;
    expect(current()).toBe("디자인");
    act(() => vi.advanceTimersByTime(2000));
    expect(current()).toBe("문서");
    act(() => screen.getByRole("button", { name: "멈추기" }).click());
    act(() => vi.advanceTimersByTime(6000));
    expect(current()).toBe("문서");
    expect(screen.getByRole("button", { name: "재생" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("함께 만드는 디자인, 문서, 발표")).toHaveClass("sr-only");
  });
});

describe("Marquee", () => {
  it("hides the duplicate copy from screen readers and pauses", async () => {
    const user = userEvent.setup();
    render(<MarqueeDemo />);
    const strip = screen.getByRole("region", { name: "혜택" });
    expect(screen.getAllByRole("list", { hidden: false })).toHaveLength(1);
    expect(strip.querySelectorAll("ul")).toHaveLength(2);
    await user.click(screen.getByRole("button", { name: "멈추기" }));
    expect(strip.querySelector<HTMLElement>(".w-max")!.style.animationPlayState).toBe("paused");
  });
});

describe("TextScramble", () => {
  it("settles into the real text", () => {
    fakeFrames();
    render(<TextScrambleDemo />);
    expect(screen.getByRole("status")).toHaveTextContent("연결 대기 중");
    act(() => screen.getByRole("button", { name: "연결하기" }).click());
    expect(screen.getByText("보안 연결 완료", { selector: ".sr-only" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByText("보안 연결 완료", { selector: "[aria-hidden]" })).toBeInTheDocument();
  });
});

describe("StaggeredTextReveal", () => {
  it("delays each word and reads the heading as one sentence", async () => {
    const user = userEvent.setup();
    render(<StaggeredTextDemo />);
    expect(screen.getByText("작게 시작해서 매일 조금씩 끝까지 갑니다")).toHaveClass("sr-only");
    await user.click(screen.getByRole("radio", { name: "단어 단위" }));
    const pieces = [...document.querySelectorAll<HTMLElement>("[aria-hidden] .inline-block")];
    expect(pieces).toHaveLength(6);
    expect(pieces.map((piece) => piece.style.transitionDelay).slice(0, 3)).toEqual([
      "0ms",
      "70ms",
      "140ms",
    ]);
  });
});

describe("FadeUp, MaskReveal, BlurIn", () => {
  it("replays by remounting the animated text", async () => {
    const user = userEvent.setup();
    render(
      <>
        <FadeUpDemo />
        <MaskRevealDemo />
        <BlurInDemo />
      </>,
    );
    const heading = screen.getByRole("heading", { name: "이제 사진으로 검색하세요" });
    await user.click(screen.getAllByRole("button", { name: "다시 보기" })[0]!);
    expect(screen.getByRole("heading", { name: "이제 사진으로 검색하세요" })).not.toBe(heading);
    expect(screen.getByText("가을 컬렉션 10월 1일 공개")).toHaveClass("sr-only");
    expect(screen.getByText("작은 습관이 큰 변화를 만듭니다").parentElement).toHaveClass(
      "starting:blur-md",
    );
  });
});

describe("AnimatedHighlight", () => {
  it("is a real mark that is filled without IntersectionObserver", () => {
    render(<AnimatedHighlightDemo />);
    const mark = screen.getByText("첫 달은 무료");
    expect(mark.tagName).toBe("MARK");
    expect(mark).toHaveClass("bg-size-[100%_100%]");
  });
});
