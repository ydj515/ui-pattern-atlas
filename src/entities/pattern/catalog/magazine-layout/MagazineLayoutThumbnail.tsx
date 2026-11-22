import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STORIES = [
  ["여행", "겨울 바다 걷기 좋은 곳", "from-sky-200 to-indigo-300"],
  ["음식", "집에서 굽는 바게트", "from-yellow-100 to-amber-300"],
  ["공간", "작은 방을 넓게 쓰기", "from-emerald-100 to-teal-300"],
] as const;

/** Same issue as MagazineLayoutDemo: the lead story big on the left, smaller ones beside it. */
export function MagazineLayoutThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[6px] left-[10px] h-[54px] w-[90px] rounded-[5px] bg-gradient-to-br from-amber-200 to-rose-300" />
      <p className="absolute top-[63px] left-[10px] text-[4.5px] font-semibold text-rose-700">
        커버 스토리
      </p>
      <p className="absolute top-[70px] left-[10px] w-[90px] text-[7.5px] leading-[9px] font-bold">
        작은 동네 책방이 살아남는 법
      </p>
      {STORIES.map(([kicker, title, tone], index) => (
        <div
          key={title}
          className="absolute left-[106px] h-[24px] w-[62px]"
          style={{ top: 6 + index * 28 }}
        >
          <span
            className={`absolute top-0 left-0 size-[22px] rounded-[3px] bg-gradient-to-br ${tone}`}
          />
          <p className="absolute top-0 left-[25px] text-[4px] font-semibold text-slate-500">
            {kicker}
          </p>
          <p className="absolute top-[6px] left-[25px] w-[37px] text-[5px] leading-[6.5px] font-semibold">
            {title}
          </p>
        </div>
      ))}
      <p className="thumb-anim thumb-mag-done absolute inset-x-0 top-[96px] text-center text-[5px] text-slate-600">
        ‘작은 동네 책방이 살아남는 법’ 기사를 열었어요
      </p>
      <ThumbCursor motion="thumb-mag-cursor" />
    </ThumbStage>
  );
}
