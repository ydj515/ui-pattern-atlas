import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as NoResultsDemo: a typo finds nothing → pick the suggested item → it is found. */
export function NoResultsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[24px] h-[14px] w-[128px] rounded border border-slate-300 text-[7px]">
        <span className="thumb-anim thumb-nr-typo absolute top-[2.5px] left-[6px]">아메리가노</span>
        <span className="thumb-anim thumb-nr-fixed absolute top-[2.5px] left-[6px] opacity-0">
          아메리카노
        </span>
      </div>

      <div className="thumb-anim thumb-nr-empty absolute top-[26px] left-[24px] h-[80px] w-[128px] rounded-md border border-slate-200 text-center">
        <p className="absolute inset-x-0 top-[7px] text-[7px] font-semibold">
          ‘아메리가노’ 검색 결과가 없어요
        </p>
        <p className="absolute inset-x-0 top-[20px] text-[6.5px] text-slate-600">
          혹시 <span className="font-semibold text-blue-700 underline">아메리카노</span> 찾으셨나요?
        </p>
        <p className="absolute inset-x-0 top-[34px] text-[5.5px] text-slate-500">
          맞춤법을 확인해 보세요
        </p>
        <p className="absolute inset-x-0 top-[42px] text-[5.5px] text-slate-500">
          더 짧은 단어로 찾아보세요
        </p>
        <span className="absolute top-[56px] left-[39px] grid h-[13px] w-[50px] place-items-center rounded border border-slate-300 text-[6px] font-medium">
          검색어 지우기
        </span>
      </div>

      <p className="thumb-anim thumb-nr-found absolute top-[26px] left-[24px] h-[18px] w-[128px] rounded-md border border-slate-200 px-[8px] text-[7px] leading-[16px] opacity-0">
        아메리카노
      </p>
      <ThumbCursor motion="thumb-nr-cursor" />
    </ThumbStage>
  );
}
