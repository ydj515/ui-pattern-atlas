import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same flow as AddressFormDemo: search 서울숲, pick the address, then type only the detail. */
export function AddressFormThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">배송지 입력</b>
        <p className="mt-[2px]">주소 검색</p>
        <p className="flex gap-[3px]">
          <span className="relative block h-[11px] flex-1 rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
            <span className="thumb-anim thumb-co-af-q-from text-slate-400">서울숲</span>
            <span className="thumb-anim thumb-co-af-q-to absolute left-[3px]" style={HIDDEN}>
              서울숲
            </span>
          </span>
          <span className="rounded-[3px] border border-slate-300 px-[4px] leading-[10px]">
            검색
          </span>
        </p>
        <div
          className="thumb-anim thumb-co-af-list mt-[3px] rounded-[3px] border border-slate-200"
          style={HIDDEN}
        >
          <p className="border-b border-slate-100 px-[3px] py-[2px]">
            <span className="text-slate-500">04768</span> 서울 성동구 뚝섬로 273 (서울숲)
          </p>
          <p className="px-[3px] py-[2px]">
            <span className="text-slate-500">04769</span> 서울 성동구 서울숲길 17
          </p>
        </div>
        <div
          className="thumb-anim thumb-co-af-picked absolute inset-x-[8px] top-[40px]"
          style={HIDDEN}
        >
          <p className="rounded-[3px] bg-slate-50 px-[3px] py-[2px]">
            <span className="block text-[5px] text-slate-500">선택한 주소 · 04768</span>
            서울 성동구 뚝섬로 273 (서울숲)
          </p>
          <p className="mt-[3px]">상세 주소</p>
          <span className="block h-[11px] rounded-[3px] border border-slate-900 px-[3px] leading-[10px]">
            <span className="thumb-anim thumb-co-af-detail" style={HIDDEN}>
              101동 1203호
            </span>
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-co-af-cursor" />
    </ThumbStage>
  );
}
