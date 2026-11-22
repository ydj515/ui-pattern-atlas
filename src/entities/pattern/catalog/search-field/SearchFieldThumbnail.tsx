import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const DOCS = ["버튼 크기 정하기", "버튼 문구 쓰는 법", "입력 필드 상태", "색상 대비 확인"] as const;

/** Same flow as SearchFieldDemo: press / → type 버튼 → the list narrows → clear with ×. */
export function SearchFieldThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[8px] left-[20px] h-[16px] w-[136px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-sf-ring absolute top-[7px] left-[19px] h-[18px] w-[138px] rounded ring-2 ring-blue-500/30" />
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="absolute top-[12px] left-[25px] size-[8px] text-slate-400"
      >
        <circle cx="9" cy="9" r="5.5" />
        <path d="m13.5 13.5 3.5 3.5" strokeLinecap="round" />
      </svg>
      <p className="thumb-anim thumb-sf-empty absolute top-[11.5px] left-[37px] text-[6.5px] text-slate-400 opacity-0">
        문서 검색
      </p>
      <p className="thumb-anim thumb-sf-typed absolute top-[11.5px] left-[37px] text-[6.5px]">
        버튼
      </p>
      <span className="thumb-anim thumb-sf-empty absolute top-[11px] left-[143px] rounded-[2px] border border-slate-300 px-[2px] text-[5.5px] leading-[8px] text-slate-500 opacity-0">
        /
      </span>
      <span className="thumb-anim thumb-sf-typed absolute top-[10px] left-[142px] text-[8px] leading-[12px] text-slate-400">
        ×
      </span>

      <span className="thumb-anim thumb-sf-rest absolute top-[30px] left-[20px] h-[62px] w-[136px] rounded border border-slate-200 opacity-0" />
      <span className="thumb-anim thumb-sf-typed absolute top-[30px] left-[20px] h-[32px] w-[136px] rounded border border-slate-200" />
      <ul className="absolute top-[31px] left-[20px] w-[136px] text-[6.5px]">
        {DOCS.map((doc, index) => (
          <li
            key={doc}
            className={`h-[15px] px-[8px] leading-[15px] ${index === 1 ? "" : "border-b border-slate-100"} ${index === 3 ? "border-b-0" : ""} ${index > 1 ? "thumb-anim thumb-sf-rest opacity-0" : ""}`}
          >
            {doc}
          </li>
        ))}
      </ul>
      <span className="thumb-anim thumb-sf-key absolute top-[94px] left-[80px] grid h-[14px] w-[16px] place-items-center rounded-[3px] border border-slate-300 bg-white text-[8px] text-slate-600 shadow-sm opacity-0">
        /
      </span>
      <ThumbCursor motion="thumb-sf-cursor" />
    </ThumbStage>
  );
}
