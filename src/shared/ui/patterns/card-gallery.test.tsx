import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BeforeAfterSliderDemo } from "@/entities/pattern/catalog/before-after-slider/BeforeAfterSliderDemo";
import { CardDemo } from "@/entities/pattern/catalog/card/CardDemo";
import { CarouselDemo } from "@/entities/pattern/catalog/carousel/CarouselDemo";
import { ImageGalleryDemo } from "@/entities/pattern/catalog/image-gallery/ImageGalleryDemo";
import { LightboxDemo } from "@/entities/pattern/catalog/lightbox/LightboxDemo";
import { MasonryGridDemo } from "@/entities/pattern/catalog/masonry-grid/MasonryGridDemo";
import { StoriesDemo } from "@/entities/pattern/catalog/stories/StoriesDemo";

afterEach(() => {
  vi.useRealTimers();
});

describe("Card", () => {
  it("has one link per card and an independent save button", async () => {
    const user = userEvent.setup();
    render(<CardDemo />);
    const save = screen.getByRole("button", { name: "색 정리부터 시작하기 저장" });
    await user.click(save);
    expect(save).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("");
    await user.click(screen.getByRole("link", { name: "색 정리부터 시작하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("‘색 정리부터 시작하기’ 글을 열었어요");
  });
});

describe("Carousel", () => {
  it("rotates, pauses on request and names each slide", () => {
    vi.useFakeTimers();
    render(<CarouselDemo />);
    expect(screen.getByRole("group", { name: "1 / 3, 겨울 세일" })).toBeVisible();
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole("group", { name: "2 / 3, 새로 나온 상품" })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "자동 넘김 멈추기" }));
    fireEvent.pointerLeave(screen.getByRole("region", { name: "이벤트 배너" }));
    act(() => vi.advanceTimersByTime(6000));
    expect(screen.getByRole("group", { name: "2 / 3, 새로 나온 상품" })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "다음 배너" }));
    expect(screen.getByRole("button", { name: "3 / 3" })).toHaveAttribute("aria-current", "true");
  });
});

describe("ImageGallery", () => {
  it("swaps the large picture from named thumbnails", async () => {
    const user = userEvent.setup();
    render(<ImageGalleryDemo />);
    await user.click(screen.getByRole("button", { name: "3 / 4, 위에서 본 머그컵" }));
    expect(screen.getByRole("img", { name: "위에서 본 머그컵" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "3 / 4, 위에서 본 머그컵" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });
});

describe("Lightbox", () => {
  it("opens, moves with arrows and returns focus on close", async () => {
    const user = userEvent.setup();
    render(<LightboxDemo />);
    const thumb = screen.getByRole("button", { name: "서울숲 길 크게 보기" });
    await user.click(thumb);
    expect(screen.getByText("2 / 4")).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "ArrowRight" });
    expect(screen.getByText("한강 노을")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "닫기" }));
    expect(thumb).toHaveFocus();
  });
});

describe("MasonryGrid", () => {
  it("switches the column count", async () => {
    const user = userEvent.setup();
    render(<MasonryGridDemo />);
    await user.click(screen.getByRole("button", { name: "2열" }));
    expect(screen.getByRole("list", { name: "인테리어 아이디어" })).toHaveStyle({
      columnCount: "2",
    });
  });
});

describe("BeforeAfterSlider", () => {
  it("reads both sides as the handle moves", () => {
    render(<BeforeAfterSliderDemo />);
    const slider = screen.getByRole("slider", { name: "보정 전후 비교" });
    fireEvent.change(slider, { target: { value: "70" } });
    expect(slider).toHaveAttribute("aria-valuetext", "보정 전 70%, 보정 후 30%");
  });
});

describe("Stories", () => {
  it("advances on its own, pauses and closes at the end", () => {
    vi.useFakeTimers();
    render(<StoriesDemo />);
    expect(screen.getByText("오늘의 메뉴는 버섯 리조또")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(4000));
    expect(screen.getByText("에티오피아 원두가 들어왔어요")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "일시 정지" }));
    act(() => vi.advanceTimersByTime(8000));
    expect(screen.getByText("에티오피아 원두가 들어왔어요")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "다음 스토리" }));
    fireEvent.click(screen.getByRole("button", { name: "다음 스토리" }));
    expect(screen.getByRole("button", { name: "다시 보기" })).toBeInTheDocument();
  });
});
