import { useEffect, useEffectEvent, useRef, useState, type ReactNode } from "react";

const REFRESH_DISTANCE = 64;

type RefreshState = "idle" | "loading" | "success" | "error";
const DEFAULT_LABELS = {
  button: "새로고침",
  pull: "아래로 당기기",
  release: "놓아서 새로고침",
  loading: "새 소식을 불러오는 중",
  success: "새로고침을 완료했어요",
  error: "새로고침에 실패했어요. 다시 시도해 주세요.",
};

interface PullToRefreshProps {
  readonly onRefresh: (signal: AbortSignal) => Promise<void>;
  readonly children: ReactNode;
  readonly labels?: typeof DEFAULT_LABELS;
}

export function PullToRefresh({
  onRefresh,
  children,
  labels = DEFAULT_LABELS,
}: PullToRefreshProps) {
  const area = useRef<HTMLDivElement>(null);
  const request = useRef<AbortController | null>(null);
  const [state, setState] = useState<RefreshState>("idle");
  const [pull, setPull] = useState(0);

  useEffect(() => () => request.current?.abort(), []);

  async function refresh() {
    if (request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setState("loading");
    try {
      await onRefresh(controller.signal);
      if (!controller.signal.aborted) setState("success");
    } catch {
      if (!controller.signal.aborted) setState("error");
    } finally {
      request.current = null;
    }
  }

  const refreshFromGesture = useEffectEvent(refresh);

  useEffect(() => {
    const list = area.current;
    if (!list) return;
    let start: { x: number; y: number; id: number } | undefined;
    let distance = 0;

    function cancel() {
      start = undefined;
      distance = 0;
      setPull(0);
    }

    function begin(event: TouchEvent) {
      const touch = event.touches[0];
      if (
        !touch ||
        event.touches.length !== 1 ||
        request.current ||
        (area.current?.scrollTop ?? 0) > 0
      ) {
        cancel();
        return;
      }
      start = { x: touch.clientX, y: touch.clientY, id: touch.identifier };
    }

    function move(event: TouchEvent) {
      if (!start) return;
      const touch = event.touches[0];
      if (!touch || event.touches.length !== 1 || touch.identifier !== start.id) {
        cancel();
        return;
      }
      const deltaY = touch.clientY - start.y;
      const deltaX = Math.abs(touch.clientX - start.x);
      if (deltaY <= 0 || deltaX > deltaY) {
        cancel();
        return;
      }
      if (event.cancelable) event.preventDefault();
      distance = Math.min(deltaY, REFRESH_DISTANCE * 1.2);
      setPull(distance);
    }

    function finish() {
      const crossedThreshold = distance >= REFRESH_DISTANCE;
      cancel();
      if (crossedThreshold) void refreshFromGesture();
    }

    list.addEventListener("touchstart", begin, { passive: true });
    list.addEventListener("touchmove", move, { passive: false });
    list.addEventListener("touchend", finish);
    list.addEventListener("touchcancel", cancel);
    return () => {
      list.removeEventListener("touchstart", begin);
      list.removeEventListener("touchmove", move);
      list.removeEventListener("touchend", finish);
      list.removeEventListener("touchcancel", cancel);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900">
      <div className="flex min-h-11 items-center gap-2 border-b border-slate-200 px-3 py-2">
        <button
          type="button"
          onClick={() => void refresh()}
          disabled={state === "loading"}
          className="shrink-0 rounded-md border border-slate-300 px-2 py-1 text-sm font-medium disabled:opacity-50"
        >
          {labels.button}
        </button>
        <p role="status" className="text-xs text-slate-700">
          {state === "idle" ? "" : labels[state]}
        </p>
      </div>
      <div ref={area} className="relative max-h-40 overflow-auto overscroll-y-contain">
        {pull > 0 ? (
          <p
            aria-hidden="true"
            className="absolute inset-x-0 top-0 grid h-9 place-items-center bg-blue-50 text-xs font-medium text-blue-700"
          >
            {pull >= REFRESH_DISTANCE ? labels.release : labels.pull}
          </p>
        ) : null}
        <div style={{ transform: `translateY(${pull * 0.5}px)` }}>{children}</div>
      </div>
    </div>
  );
}
