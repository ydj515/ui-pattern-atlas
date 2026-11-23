import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const ITEMS = [
  ["회의록", "29일 뒤 영구 삭제", "", false],
  ["성수동 맛집 목록", "12일 뒤 영구 삭제", "thumb-ra-tr-gone", false],
  ["이사 체크리스트", "2일 뒤 영구 삭제", "thumb-ra-tr-up", true],
] as const;

/** Same trash as TrashDemo: each item shows its days left; restoring takes it out of the list. */
export function TrashThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">휴지통</b>
        <p className="text-[5px] text-slate-500">휴지통의 항목은 30일 뒤 영구 삭제돼요</p>
        <div className="mt-[3px] h-[50px] rounded-[4px] border border-slate-200">
          {ITEMS.map(([name, days, motion, soon]) => (
            <p
              key={name}
              className={`${motion ? `thumb-anim ${motion} ` : ""}flex h-[16px] items-center justify-between border-b border-slate-100 bg-white px-[4px] last:border-0`}
            >
              <span>
                <span className="block">{name}</span>
                <span className={`text-[4.5px] ${soon ? "text-rose-600" : "text-slate-500"}`}>
                  {days}
                </span>
              </span>
              <span className="rounded-[3px] border border-slate-300 px-[3px]">복원</span>
            </p>
          ))}
        </div>
        <p
          className="thumb-anim thumb-ra-tr-done mt-[3px] text-[5.5px] text-slate-600"
          style={HIDDEN}
        >
          {"성수동 맛집 목록"}을 원래 폴더로 되돌렸어요
        </p>
      </div>
      <ThumbCursor motion="thumb-ra-tr-cursor" />
    </ThumbStage>
  );
}
