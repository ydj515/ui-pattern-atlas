import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ThumbnailFrame } from "@/entities/pattern/ui/ThumbnailFrame";

class FakeObserver {
  static instances: FakeObserver[] = [];
  readonly targets = new Set<Element>();
  disconnected = false;

  constructor(
    private readonly callback: IntersectionObserverCallback,
    readonly options?: IntersectionObserverInit,
  ) {
    FakeObserver.instances.push(this);
  }

  observe(target: Element) {
    this.targets.add(target);
  }

  unobserve(target: Element) {
    this.targets.delete(target);
  }

  disconnect() {
    this.disconnected = true;
    this.targets.clear();
  }

  /** Reports every observed target as inside or outside the margin. */
  report(isIntersecting: boolean) {
    const entries = [...this.targets].map(
      (target) => ({ target, isIntersecting }) as IntersectionObserverEntry,
    );
    act(() => this.callback(entries, this as unknown as IntersectionObserver));
  }
}

/** A loader that resolves to a thumbnail showing `label`, counted with vi.fn. */
function loaderFor(label: string) {
  return vi.fn(() => Promise.resolve(() => <span>{label}</span>));
}

describe("ThumbnailFrame", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    FakeObserver.instances = [];
  });

  it("loads and shows the thumbnail right away without IntersectionObserver", async () => {
    const load = loaderFor("첫 썸네일");
    render(<ThumbnailFrame load={load} />);
    expect(await screen.findByText("첫 썸네일")).toBeInTheDocument();
    expect(load).toHaveBeenCalledTimes(1);
  });

  it("loads near the viewport, unmounts when far, and reuses what it loaded", async () => {
    vi.stubGlobal("IntersectionObserver", FakeObserver);
    const first = loaderFor("첫 썸네일");
    const second = loaderFor("둘째 썸네일");
    const { unmount } = render(
      <>
        <ThumbnailFrame load={first} />
        <ThumbnailFrame load={second} />
      </>,
    );
    expect(FakeObserver.instances).toHaveLength(1);
    const [observer] = FakeObserver.instances;
    expect(observer?.options?.rootMargin).toBe("100% 0px");
    expect(observer?.targets.size).toBe(2);
    expect(first).not.toHaveBeenCalled();

    observer?.report(true);
    expect(await screen.findByText("첫 썸네일")).toBeInTheDocument();
    expect(await screen.findByText("둘째 썸네일")).toBeInTheDocument();

    observer?.report(false);
    expect(screen.queryByText("첫 썸네일")).toBeNull();
    expect(screen.queryByText("둘째 썸네일")).toBeNull();

    observer?.report(true);
    expect(screen.getByText("첫 썸네일")).toBeInTheDocument();
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);

    unmount();
    expect(observer?.disconnected).toBe(true);
  });

  it("stays empty when loading fails and tries again next time it is near", async () => {
    vi.stubGlobal("IntersectionObserver", FakeObserver);
    const load = vi
      .fn<() => Promise<() => React.JSX.Element>>()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValue(() => <span>다시 불러온 썸네일</span>);
    const { container } = render(<ThumbnailFrame load={load} />);
    const [observer] = FakeObserver.instances;

    observer?.report(true);
    await act(() => Promise.resolve());
    expect(container.firstElementChild).toBeEmptyDOMElement();

    observer?.report(false);
    observer?.report(true);
    expect(await screen.findByText("다시 불러온 썸네일")).toBeInTheDocument();
    expect(load).toHaveBeenCalledTimes(2);
  });

  it("keeps the frame empty when there is no thumbnail", () => {
    const { container } = render(<ThumbnailFrame />);
    expect(container.firstElementChild).toBeEmptyDOMElement();
    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });
});
