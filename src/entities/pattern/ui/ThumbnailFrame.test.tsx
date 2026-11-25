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

function Mini({ label }: { readonly label: string }) {
  return <span>{label}</span>;
}

const First = () => <Mini label="첫 썸네일" />;
const Second = () => <Mini label="둘째 썸네일" />;

describe("ThumbnailFrame", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    FakeObserver.instances = [];
  });

  it("shows the thumbnail right away without IntersectionObserver", () => {
    render(<ThumbnailFrame Thumbnail={First} />);
    expect(screen.getByText("첫 썸네일")).toBeInTheDocument();
  });

  it("mounts thumbnails only while near the viewport, with one shared observer", () => {
    vi.stubGlobal("IntersectionObserver", FakeObserver);
    const { unmount } = render(
      <>
        <ThumbnailFrame Thumbnail={First} />
        <ThumbnailFrame Thumbnail={Second} />
      </>,
    );
    expect(FakeObserver.instances).toHaveLength(1);
    const [observer] = FakeObserver.instances;
    expect(observer?.options?.rootMargin).toBe("100% 0px");
    expect(observer?.targets.size).toBe(2);
    expect(screen.queryByText("첫 썸네일")).toBeNull();

    observer?.report(true);
    expect(screen.getByText("첫 썸네일")).toBeInTheDocument();
    expect(screen.getByText("둘째 썸네일")).toBeInTheDocument();

    observer?.report(false);
    expect(screen.queryByText("첫 썸네일")).toBeNull();
    expect(screen.queryByText("둘째 썸네일")).toBeNull();

    unmount();
    expect(observer?.disconnected).toBe(true);
  });

  it("keeps the frame empty when there is no thumbnail", () => {
    const { container } = render(<ThumbnailFrame />);
    expect(container.firstElementChild).toBeEmptyDOMElement();
    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });
});
