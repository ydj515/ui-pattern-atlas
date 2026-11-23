import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [
  ["0:05", "검색창에 운동화를 입력했어요", false],
  ["0:32", "사이즈를 고르지 않고 담기를 눌렀어요", false],
  ["0:48", "오류 문구를 보지 못하고 담기를 다시 눌렀어요", true],
  ["1:40", "화면을 올려 사이즈를 고르고 담았어요", false],
] as const;

/** Same session as UsabilityTestDemo: 다음 관찰 reveals each step until the stuck point and the problem it shows. */
export function UsabilityTestThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="rounded-[4px] bg-slate-100 px-[4px] py-[3px] text-[5.5px]">
          과제: 운동화 260 사이즈를 장바구니에 담아 주세요
        </p>
        {STEPS.map(([time, text, stuck], index) => (
          <p
            key={time}
            className={`${index > 0 ? `thumb-anim thumb-ux-usab-s${index}` : ""} mt-[3px] flex gap-[4px] text-[5.5px]`}
          >
            <span className="w-[12px] text-slate-500">{time}</span>
            <span className={stuck ? "font-medium text-amber-800" : ""}>
              {stuck ? <b className="mr-[2px] rounded-[2px] bg-amber-100 px-[2px]">막힘</b> : null}
              {text}
            </span>
          </p>
        ))}
        <p className="thumb-anim thumb-ux-usab-s3 mt-[3px] text-[5px] text-slate-600">
          찾은 문제: 사이즈 안내가 담기 버튼에서 멀어요
        </p>
        <p className="absolute bottom-[6px] left-[8px] flex gap-[4px]">
          <span className="rounded-[3px] bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            다음 관찰
          </span>
          <span className="rounded-[3px] border border-slate-200 px-[5px] py-[2px]">처음부터</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-ux-usab-cursor" />
    </ThumbStage>
  );
}
