import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Screen({ padded, motion }: { readonly padded: boolean; readonly motion: string }) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-0 flex flex-col justify-between`}>
      <p
        className="bg-white px-[5px] pb-[3px] text-[6px] font-semibold shadow-sm"
        style={{ paddingTop: padded ? 12 : 3 }}
      >
        메시지
      </p>
      <p
        className="flex gap-[2px] bg-white px-[3px] pt-[3px] shadow-sm"
        style={{ paddingBottom: padded ? 8 : 3 }}
      >
        <span className="flex-1 rounded-full bg-slate-100 px-[3px] text-[4.5px] leading-[8px] text-slate-400">
          메시지 입력
        </span>
        <span className="rounded-full bg-blue-600 px-[3px] text-[4.5px] leading-[8px] text-white">
          보내기
        </span>
      </p>
    </div>
  );
}

/** Same phone as SafeAreaDemo: without the safe area the header hides under the notch. */
export function SafeAreaThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[56px] overflow-hidden rounded-[12px] border-2 border-slate-900 bg-slate-50">
        <Screen padded motion="thumb-sa-on" />
        <Screen padded={false} motion="thumb-sa-off opacity-0" />
        <span className="absolute top-[2px] left-1/2 z-10 h-[6px] w-[22px] -translate-x-1/2 rounded-full bg-slate-900" />
        <span className="absolute bottom-[2px] left-1/2 z-10 h-[1.5px] w-[20px] -translate-x-1/2 rounded-full bg-slate-900" />
      </div>
      <span className="absolute top-[50px] left-[104px] size-[7px] rounded-[1.5px] border border-slate-400" />
      <span className="thumb-anim thumb-sa-on absolute top-[50px] left-[104px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white">
        ✓
      </span>
      <p className="absolute top-[49px] left-[114px] text-[5.5px] text-slate-600">안전 영역 적용</p>
      <ThumbCursor motion="thumb-sa-cursor" />
    </ThumbStage>
  );
}
