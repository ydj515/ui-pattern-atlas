import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const ROWS = [
  ["주문·배송", ["lock", "on", "off"]],
  ["이벤트·혜택", ["new", "off", "off"]],
  ["댓글·답글", ["on", "off", "off"]],
] as const;

function Box({ state }: { readonly state: "lock" | "on" | "off" | "new" }) {
  return (
    <span
      className={`relative mx-auto block size-[6px] rounded-[1.5px] border border-slate-400 ${state === "lock" ? "opacity-40" : ""}`}
    >
      {state === "lock" || state === "on" ? (
        <span className="absolute -inset-px rounded-[1.5px] bg-slate-900 text-center text-[4.5px] leading-[6px] text-white">
          ✓
        </span>
      ) : null}
      {state === "new" ? (
        <span
          className="thumb-anim thumb-st-ns-new absolute -inset-px rounded-[1.5px] bg-slate-900 text-center text-[4.5px] leading-[6px] text-white"
          style={HIDDEN}
        >
          ✓
        </span>
      ) : null}
    </span>
  );
}

/** Same grid as NotificationSettingsDemo: topics by channels, required notices locked on. */
export function NotificationSettingsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7px]">받을 알림</b>
        <p className="mt-[2px] grid grid-cols-[44px_repeat(3,1fr)] text-center text-[5px] text-slate-500">
          <span />
          <span>앱 푸시</span>
          <span>이메일</span>
          <span>문자</span>
        </p>
        {ROWS.map(([topic, states]) => (
          <p
            key={topic}
            className="grid grid-cols-[44px_repeat(3,1fr)] items-center border-t border-slate-100 py-[2px]"
          >
            <span>{topic}</span>
            {states.map((state, index) => (
              <Box key={index} state={state} />
            ))}
          </p>
        ))}
        <p className="mt-[2px] text-[5px] text-slate-500">
          주문·배송 앱 푸시는 필수 알림이라 끌 수 없어요
        </p>
        <p className="mt-[3px] flex justify-between">
          밤 10시~아침 8시에는 알림 끄기
          <span className="rounded-full bg-slate-900 px-[3px] text-[4.5px] text-white">ON</span>
        </p>
        <p className="mt-[1px] grid text-[5.5px] text-slate-600">
          <span className="thumb-anim thumb-st-ns-c-from col-start-1 row-start-1">
            켜 둔 알림 3개
          </span>
          <span className="thumb-anim thumb-st-ns-c-to col-start-1 row-start-1" style={HIDDEN}>
            켜 둔 알림 4개
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-st-ns-cursor" />
    </ThumbStage>
  );
}
