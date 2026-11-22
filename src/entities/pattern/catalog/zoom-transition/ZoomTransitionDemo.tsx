import { useRef, useState, type MouseEvent } from "react";
import { ZoomTransition } from "@/shared/ui/patterns/zoom-transition/ZoomTransition";

const APPS = [
  { id: "photo", label: "사진", tone: "bg-rose-400", body: "최근 항목 128장" },
  { id: "memo", label: "메모", tone: "bg-amber-400", body: "우유, 달걀, 식빵 사기" },
  { id: "weather", label: "날씨", tone: "bg-sky-400", body: "맑음 18°" },
];

export function ZoomTransitionDemo() {
  const screenRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [shown, setShown] = useState(APPS[0]!);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  function open(app: (typeof APPS)[number], event: MouseEvent<HTMLButtonElement>) {
    const box = screenRef.current?.getBoundingClientRect();
    const icon = event.currentTarget.getBoundingClientRect();
    if (box)
      setOrigin({
        x: icon.left + icon.width / 2 - box.left,
        y: icon.top + icon.height / 2 - box.top,
      });
    triggerRef.current = event.currentTarget;
    setShown(app);
    setOpenId(app.id);
  }

  function close() {
    setOpenId(null);
    triggerRef.current?.focus();
  }

  return (
    <div
      ref={screenRef}
      className="relative h-72 w-48 overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-200 to-slate-200 p-4"
    >
      <ul className="grid grid-cols-3 gap-3" inert={openId !== null}>
        {APPS.map((app) => (
          <li key={app.id}>
            <button
              type="button"
              onClick={(event) => open(app, event)}
              className="grid w-full justify-items-center gap-1 text-[11px] text-slate-800"
            >
              <span className={`size-10 rounded-xl ${app.tone}`} />
              {app.label}
            </button>
          </li>
        ))}
      </ul>
      <ZoomTransition open={openId !== null} origin={origin} label={shown.label}>
        <div className="h-full bg-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900">{shown.label}</h3>
            <button
              type="button"
              autoFocus
              onClick={close}
              className="rounded-md px-2 py-1 text-xs text-blue-700"
            >
              홈으로
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-700">{shown.body}</p>
        </div>
      </ZoomTransition>
    </div>
  );
}
