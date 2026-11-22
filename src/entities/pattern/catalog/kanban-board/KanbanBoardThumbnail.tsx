import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const card =
  "absolute left-[4px] h-[16px] w-[44px] rounded-[3px] bg-white px-[3px] text-[5.5px] leading-[16px] shadow-sm";

/** Same board as KanbanBoardDemo: drag 회의록 정리 from 할 일 to 진행 중. */
export function KanbanBoardThumbnail() {
  return (
    <ThumbStage>
      {["할 일", "진행 중", "완료"].map((title, index) => (
        <div
          key={title}
          className="absolute top-[6px] h-[84px] w-[52px] rounded-md bg-slate-100"
          style={{ left: 8 + index * 56 }}
        >
          <p className="absolute top-[4px] left-[5px] text-[5.5px] font-semibold text-slate-600">
            {title}
          </p>
        </div>
      ))}
      <span className="thumb-anim thumb-kb-before absolute top-[10px] left-[48px] text-[5px] text-slate-400 opacity-0">
        2
      </span>
      <span className="thumb-anim thumb-kb-after absolute top-[10px] left-[48px] text-[5px] text-slate-400">
        1
      </span>
      <span className="thumb-anim thumb-kb-before absolute top-[10px] left-[104px] text-[5px] text-slate-400 opacity-0">
        1
      </span>
      <span className="thumb-anim thumb-kb-after absolute top-[10px] left-[104px] text-[5px] text-slate-400">
        2
      </span>
      <span className="absolute top-[10px] left-[160px] text-[5px] text-slate-400">1</span>

      <span className={`thumb-anim thumb-kb-rest ${card}`} style={{ left: 12, top: 20 }}>
        시안 검토
      </span>
      <span className={card} style={{ left: 68, top: 20 }}>
        로그인 오류 수정
      </span>
      <span className={card} style={{ left: 124, top: 20 }}>
        배포 공지
      </span>
      <span
        className={`thumb-anim thumb-kb-card ${card} ring-blue-400`}
        style={{ left: 68, top: 40 }}
      >
        회의록 정리
      </span>
      <p className="thumb-anim thumb-kb-after absolute top-[96px] left-[8px] text-[5.5px] text-slate-500">
        {"회의록 정리"} 카드를 {"진행 중"} 열로 옮겼어요
      </p>
      <ThumbCursor motion="thumb-kb-cursor" />
    </ThumbStage>
  );
}
