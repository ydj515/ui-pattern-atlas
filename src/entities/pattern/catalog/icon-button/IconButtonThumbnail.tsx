import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ICONS = [
  { label: "공유", path: "M10 3v10M6 7l4-4 4 4M4 12v4h12v-4", motion: "thumb-ib-tip1" },
  { label: "저장", path: "M5 3h10v14l-5-3.5L5 17Z", motion: "thumb-ib-tip2" },
  { label: "삭제", path: "M4 6h12M8 6V4h4v2M6 6l1 11h6l1-11", motion: "" },
] as const;

/** Same card as IconButtonDemo: hover shows each icon's name; 공유 → 링크를 복사했어요. */
export function IconButtonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[24px] h-[46px] w-[128px] rounded-md border border-slate-200">
        <p className="absolute top-[7px] left-[8px] text-[6.5px] font-semibold">
          디자인 시스템을 처음 만들 때
        </p>
      </div>
      {ICONS.map((icon, index) => (
        <span
          key={icon.label}
          className="absolute top-[32px] grid size-[18px] place-items-center rounded-full text-slate-600"
          style={{ left: 86 + index * 20 }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[10px]"
          >
            <path d={icon.path} />
          </svg>
          {icon.motion ? (
            <span
              className={`thumb-anim ${icon.motion} absolute top-[20px] left-1/2 -translate-x-1/2 rounded-[3px] bg-slate-900 px-[4px] py-[1px] text-[5.5px] whitespace-nowrap text-white opacity-0`}
            >
              {icon.label}
            </span>
          ) : null}
        </span>
      ))}
      <span className="thumb-anim thumb-ib-hover1 absolute top-[32px] left-[86px] size-[18px] rounded-full bg-slate-900/10 opacity-0" />
      <span className="thumb-anim thumb-ib-hover2 absolute top-[32px] left-[106px] size-[18px] rounded-full bg-slate-900/10 opacity-0" />
      <p className="thumb-anim thumb-ib-done absolute inset-x-0 top-[80px] text-center text-[6.5px] text-slate-600">
        링크를 복사했어요
      </p>
      <ThumbCursor motion="thumb-ib-cursor" />
    </ThumbStage>
  );
}
