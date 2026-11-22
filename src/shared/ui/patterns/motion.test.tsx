import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BounceDemo } from "@/entities/pattern/catalog/bounce/BounceDemo";
import { EasingCompareDemo } from "@/entities/pattern/catalog/ease-in-out/EasingCompareDemo";
import { ExpandCardDemo } from "@/entities/pattern/catalog/expand-collapse-motion/ExpandCardDemo";
import { FadeDemo } from "@/entities/pattern/catalog/fade/FadeDemo";
import { MicroToggleDemo } from "@/entities/pattern/catalog/micro-interaction/MicroToggleDemo";
import { PageTransitionDemo } from "@/entities/pattern/catalog/page-transition/PageTransitionDemo";
import { ParallaxDemo } from "@/entities/pattern/catalog/parallax/ParallaxDemo";
import { MotionSafeDemo } from "@/entities/pattern/catalog/reduced-motion/MotionSafeDemo";
import { RevealDemo } from "@/entities/pattern/catalog/scroll-reveal/RevealDemo";
import { ShakeDemo } from "@/entities/pattern/catalog/shake-on-error/ShakeDemo";
import { SharedElementDemo } from "@/entities/pattern/catalog/shared-element-transition/SharedElementDemo";
import { SlideDemo } from "@/entities/pattern/catalog/slide/SlideDemo";
import { SpringDemo } from "@/entities/pattern/catalog/spring/SpringDemo";
import { StaggerDemo } from "@/entities/pattern/catalog/stagger/StaggerDemo";
import { ZoomTransitionDemo } from "@/entities/pattern/catalog/zoom-transition/ZoomTransitionDemo";
import { Spring } from "@/shared/ui/patterns/spring/Spring";

afterEach(() => {
  vi.restoreAllMocks();
});

function animateSpy() {
  const spy = vi.fn();
  Object.defineProperty(HTMLElement.prototype, "animate", {
    value: spy,
    configurable: true,
    writable: true,
  });
  return spy;
}

function reduceMotion(matches: boolean) {
  vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        matches: matches && query.includes("reduce"),
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }) satisfies MediaQueryList,
  );
}

describe("ReducedMotion", () => {
  it("slides normally and only fades when motion is reduced", async () => {
    const user = userEvent.setup();
    const animate = animateSpy();
    render(<MotionSafeDemo />);
    await user.click(screen.getByRole("button", { name: "알림 보내기" }));
    expect(screen.getByText("새 메시지가 왔어요")).toBeInTheDocument();
    expect(animate.mock.lastCall?.[0][0]).toEqual({ transform: "translateX(110%)" });
    await user.click(screen.getByRole("checkbox", { name: "동작 줄이기" }));
    expect(animate.mock.lastCall?.[0]).toEqual([{ opacity: 0 }, { opacity: 1 }]);
    expect(screen.getByText("제자리에서 나타나요")).toBeInTheDocument();
  });
});

describe("PageTransition", () => {
  it("moves focus to the new screen and back", async () => {
    const user = userEvent.setup();
    render(<PageTransitionDemo />);
    await user.click(screen.getByRole("button", { name: "알림" }));
    expect(screen.getByRole("heading", { name: "알림" })).toBeInTheDocument();
    expect(screen.getByText("알림 설정 화면").parentElement!.parentElement).toHaveFocus();
    await user.click(screen.getByRole("button", { name: "‹ 설정" }));
    expect(screen.getByRole("heading", { name: "설정" })).toBeInTheDocument();
  });

  it("labels the way back 닫기 for the modal kind", async () => {
    const user = userEvent.setup();
    render(<PageTransitionDemo />);
    await user.click(screen.getByRole("radio", { name: "모달" }));
    await user.click(screen.getByRole("button", { name: "개인정보" }));
    expect(screen.getByRole("button", { name: "닫기" })).toBeInTheDocument();
  });
});

describe("ExpandCollapseMotion", () => {
  it("toggles aria-expanded and keeps collapsed details inert", async () => {
    const user = userEvent.setup();
    render(<ExpandCardDemo />);
    const button = screen.getByRole("button", { name: /주문 #2481/ });
    const details = document.getElementById(button.getAttribute("aria-controls")!)!;
    expect(details).toHaveAttribute("inert");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(details).not.toHaveAttribute("inert");
    expect(details).toHaveClass("grid-rows-[1fr]");
  });
});

describe("MicroInteraction", () => {
  it("pops once when turned on and updates the label", async () => {
    const user = userEvent.setup();
    const animate = animateSpy();
    render(<MicroToggleDemo />);
    await user.click(screen.getByRole("button", { name: "저장" }));
    expect(screen.getByRole("button", { name: "저장됨" })).toHaveAttribute("aria-pressed", "true");
    expect(animate).toHaveBeenCalledTimes(1);
    await user.click(screen.getByRole("button", { name: "저장됨" }));
    expect(animate).toHaveBeenCalledTimes(1);
  });
});

describe("ShakeOnError", () => {
  it("shakes and explains a wrong password, accepts the right one", async () => {
    const user = userEvent.setup();
    const animate = animateSpy();
    render(<ShakeDemo />);
    const input = screen.getByLabelText("비밀번호");
    await user.type(input, "0000");
    await user.click(screen.getByRole("button", { name: "확인" }));
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("비밀번호가 맞지 않아요");
    expect(animate).toHaveBeenCalledTimes(1);
    await user.clear(input);
    await user.type(input, "1234{Enter}");
    expect(screen.getByRole("status")).toHaveTextContent("확인했어요");
  });

  it("does not shake with reduced motion", async () => {
    const user = userEvent.setup();
    const animate = animateSpy();
    reduceMotion(true);
    render(<ShakeDemo />);
    await user.type(screen.getByLabelText("비밀번호"), "9{Enter}");
    expect(animate).not.toHaveBeenCalled();
    expect(screen.getByRole("status")).toHaveTextContent("비밀번호가 맞지 않아요");
  });
});

describe("SharedElementTransition", () => {
  it("opens the photo and returns focus to it on close", async () => {
    const user = userEvent.setup();
    render(<SharedElementDemo />);
    await user.click(screen.getByRole("button", { name: "부산" }));
    expect(screen.getByRole("heading", { name: "부산" })).toBeInTheDocument();
    const close = screen.getByRole("button", { name: "닫기" });
    expect(close).toHaveFocus();
    await user.click(close);
    expect(screen.getByRole("button", { name: "부산" })).toHaveFocus();
  });

  it("uses a view transition when the browser has one", async () => {
    const user = userEvent.setup();
    const start = vi.fn((update: () => void) => update());
    Object.defineProperty(document, "startViewTransition", { value: start, configurable: true });
    render(<SharedElementDemo />);
    await user.click(screen.getByRole("button", { name: "서울" }));
    expect(start).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("heading", { name: "서울" })).toBeInTheDocument();
    Reflect.deleteProperty(document, "startViewTransition");
  });
});

describe("ScrollReveal", () => {
  it("shows content right away without IntersectionObserver", () => {
    render(<RevealDemo />);
    const card = screen.getByText("린넨 셔츠").closest(".transition")!;
    expect(card).not.toHaveClass("opacity-0");
  });
});

describe("Parallax", () => {
  it("moves the background at half the scroll speed", () => {
    render(<ParallaxDemo />);
    const region = screen.getByRole("region", { name: "여름 캠핑" });
    const layer = region.firstElementChild as HTMLElement;
    region.scrollTop = 100;
    fireEvent.scroll(region);
    expect(layer.style.transform).toBe("translateY(50px)");
  });
});

describe("EaseInOut", () => {
  it("plays every curve with its own easing", async () => {
    const user = userEvent.setup();
    const animate = animateSpy();
    render(<EasingCompareDemo />);
    await user.click(screen.getByRole("button", { name: "재생" }));
    expect(animate.mock.calls.map((call) => call[1].easing)).toEqual([
      "linear",
      "ease-in",
      "ease-out",
      "ease-in-out",
    ]);
  });
});

describe("Fade", () => {
  it("shows the message, then removes it after the fade out", () => {
    vi.useFakeTimers();
    render(<FadeDemo />);
    fireEvent.click(screen.getByRole("button", { name: "저장" }));
    const message = screen.getByText("저장했어요");
    act(() => vi.advanceTimersByTime(2000));
    expect(message.parentElement).toHaveAttribute("aria-hidden", "true");
    fireEvent.transitionEnd(message.parentElement!);
    expect(screen.queryByText("저장했어요")).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});

describe("Slide", () => {
  it("slides in from the chosen edge and leaves the same way", async () => {
    const user = userEvent.setup();
    render(<SlideDemo />);
    await user.click(screen.getByRole("radio", { name: "오른쪽에서" }));
    await user.click(screen.getByRole("button", { name: "보여 주기" }));
    const wrapper = screen.getByText("새 메시지 1개").parentElement!.parentElement!;
    expect(wrapper).toHaveClass("starting:translate-x-full");
    await user.click(screen.getByRole("button", { name: "숨기기" }));
    expect(wrapper).toHaveClass("translate-x-full");
    fireEvent.transitionEnd(wrapper);
    expect(screen.queryByText("새 메시지 1개")).not.toBeInTheDocument();
  });
});

describe("Spring", () => {
  it("jumps straight to the target with reduced motion", async () => {
    reduceMotion(true);
    const { rerender } = render(<Spring to={0}>{(value) => <span>{value}</span>}</Spring>);
    rerender(<Spring to={120}>{(value) => <span>{value}</span>}</Spring>);
    expect(await screen.findByText("120")).toBeInTheDocument();
  });

  it("toggles the target from the demo button", async () => {
    const user = userEvent.setup();
    render(<SpringDemo />);
    await user.click(screen.getByRole("button", { name: "오른쪽으로" }));
    expect(screen.getByRole("button", { name: "왼쪽으로" })).toBeInTheDocument();
  });
});

describe("Bounce", () => {
  it("counts the cart and bounces it", async () => {
    const user = userEvent.setup();
    const animate = animateSpy();
    render(<BounceDemo />);
    await user.click(screen.getByRole("button", { name: "장바구니 담기" }));
    expect(screen.getByRole("status")).toHaveTextContent("장바구니 2개");
    expect(animate).toHaveBeenCalledTimes(1);
  });
});

describe("Stagger", () => {
  it("delays each item a little more than the previous one", async () => {
    const user = userEvent.setup();
    render(<StaggerDemo />);
    await user.click(screen.getByRole("radio", { name: "150ms" }));
    await user.click(screen.getByRole("button", { name: "알림 불러오기" }));
    const items = screen.getByRole("list", { name: "알림" }).querySelectorAll("li");
    expect([...items].map((item) => item.style.transitionDelay)).toEqual([
      "0ms",
      "150ms",
      "300ms",
      "450ms",
    ]);
  });
});

describe("ZoomTransition", () => {
  it("zooms from the icon and returns focus on close", async () => {
    const user = userEvent.setup();
    render(<ZoomTransitionDemo />);
    const icon = screen.getByRole("button", { name: "메모" });
    await user.click(icon);
    const screenRegion = screen.getByRole("region", { name: "메모" });
    expect(screenRegion).toHaveAttribute("aria-hidden", "false");
    expect(screen.getByRole("button", { name: "홈으로" })).toHaveFocus();
    await user.click(screen.getByRole("button", { name: "홈으로" }));
    expect(icon).toHaveFocus();
    fireEvent.transitionEnd(screenRegion);
    expect(screen.queryByRole("region", { name: "메모" })).not.toBeInTheDocument();
  });
});
