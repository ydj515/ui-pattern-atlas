import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const LINES = ["작게 시작해서", "매일 조금씩", "끝까지 갑니다"];

/** Same heading as StaggeredTextDemo by line: 다시 보기 → the three lines rise in one after another. */
export function StaggeredTextThumbnail() {
  return (
    <ThumbStage>
      {LINES.map((line, index) => (
        <p
          key={line}
          className={`thumb-anim thumb-stt-l${index} absolute left-[14px] text-[14px] leading-[18px] font-bold`}
          style={{ top: 8 + index * 20 }}
        >
          {line}
        </p>
      ))}
      <span className="absolute top-[82px] left-[14px] flex gap-[3px] text-[6.5px]">
        <span className="rounded border border-slate-900 px-[3px] py-[1px] font-semibold">
          줄 단위
        </span>
        <span className="rounded border border-slate-200 px-[3px] py-[1px]">단어 단위</span>
      </span>
      <span className="absolute top-[80px] left-[90px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-stt-cursor" />
    </ThumbStage>
  );
}
