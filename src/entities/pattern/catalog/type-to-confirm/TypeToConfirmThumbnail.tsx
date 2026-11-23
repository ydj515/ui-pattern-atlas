import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same dialog as TypeToConfirmDemo: the delete button waits until the name is typed. */
export function TypeToConfirmThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">사진첩을 지울까요?</b>
        <ul className="mt-[3px] list-disc pl-[8px] text-slate-600">
          <li>사진 128장이 함께 지워져요</li>
          <li>공유받은 3명도 더 볼 수 없어요</li>
        </ul>
        <p className="mt-[4px] text-slate-700">지우려면 봄 사진첩을 입력하세요</p>
        <span className="mt-[2px] grid h-[13px] rounded-[3px] border border-slate-300 px-[3px] leading-[12px]">
          <span className="thumb-anim thumb-ra-tc-t1 col-start-1 row-start-1" style={HIDDEN}>
            봄
          </span>
          <span className="thumb-anim thumb-ra-tc-t2 col-start-1 row-start-1" style={HIDDEN}>
            봄 사진첩
          </span>
        </span>
        <span className="relative mt-[4px] grid h-[14px] place-items-center rounded-[3px] bg-slate-200 text-slate-400">
          영구 삭제
          <span
            className="thumb-anim thumb-ra-tc-on absolute inset-0 grid place-items-center rounded-[3px] bg-rose-600 text-white"
            style={HIDDEN}
          >
            영구 삭제
          </span>
        </span>
        <p
          className="thumb-anim thumb-ra-tc-done absolute inset-0 grid place-items-center bg-white text-[7px] text-slate-700"
          style={HIDDEN}
        >
          봄 사진첩을 지웠어요
        </p>
      </div>
      <ThumbCursor motion="thumb-ra-tc-cursor" />
    </ThumbStage>
  );
}
