import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const NEWS = [
  "점심 메뉴 투표가 열렸어요",
  "새 디자인 가이드가 올라왔어요",
  "회의실 예약이 바뀌었어요",
] as const;

/** Same flow as OfflineStateDemo: offline message → connection back → the content loads. */
export function OfflineStateThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[6px] left-[100px] size-[7px] rounded-[1.5px] border border-slate-400" />
      <span className="thumb-anim thumb-off-check absolute top-[6px] left-[100px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white">
        ✓
      </span>
      <p className="absolute top-[5px] left-[110px] text-[6.5px] text-slate-600">연결 끊김 흉내</p>

      <div className="thumb-anim thumb-off-state absolute top-[18px] left-[24px] h-[74px] w-[128px] rounded-md border border-slate-200 text-center">
        <svg
          viewBox="0 0 24 24"
          className="absolute top-[6px] left-[57px] size-[14px] text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01M3 3l18 18" />
        </svg>
        <p className="absolute inset-x-0 top-[24px] text-[7.5px] font-semibold">
          인터넷 연결이 끊겼어요
        </p>
        <p className="absolute inset-x-0 top-[36px] text-[6px] text-slate-500">
          연결되면 자동으로 다시 불러와요.
        </p>
        <span className="absolute top-[51px] left-[44px] grid h-[13px] w-[40px] place-items-center rounded border border-slate-300 text-[6px] font-medium">
          다시 시도
        </span>
      </div>

      <ul className="thumb-anim thumb-off-news absolute top-[18px] left-[24px] w-[128px] divide-y divide-slate-100 rounded-md border border-slate-200 text-[6.5px] opacity-0">
        {NEWS.map((item) => (
          <li key={item} className="h-[18px] px-[8px] leading-[18px]">
            {item}
          </li>
        ))}
      </ul>
      <ThumbCursor motion="thumb-off-cursor" />
    </ThumbStage>
  );
}
