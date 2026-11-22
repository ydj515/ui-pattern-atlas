import { ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same map as PinchToZoomDemo: two fingers spread apart and 본점 grows from 100% to 200%. */
export function PinchToZoomThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[10px] font-semibold">매장 위치</p>
      <div className="absolute top-[18px] left-[10px] h-[88px] w-[156px] overflow-hidden rounded-md bg-emerald-50">
        <div className="thumb-anim thumb-pz-map absolute inset-0" style={{ transform: "scale(2)" }}>
          <span className="absolute inset-x-0 top-[28px] h-[6px] bg-white" />
          <span className="absolute inset-y-0 left-[75px] w-[6px] bg-white" />
          <span className="absolute top-[10px] left-[16px] h-[16px] w-[30px] rounded bg-emerald-200" />
          <span className="absolute right-[14px] bottom-[10px] h-[22px] w-[38px] rounded bg-sky-200" />
          <span className="absolute top-[36px] left-[70px] rounded-full bg-rose-600 px-[4px] text-[6px] leading-[10px] font-semibold text-white">
            본점
          </span>
        </div>
        <span className="absolute right-[4px] bottom-[4px] grid rounded-full bg-black/50 px-[4px] text-[6.5px] text-white tabular-nums">
          <span className="thumb-anim thumb-pz-p100 col-start-1 row-start-1" style={{ opacity: 0 }}>
            100%
          </span>
          <span className="thumb-anim thumb-pz-p200 col-start-1 row-start-1">200%</span>
        </span>
      </div>
      <span
        className="thumb-anim thumb-pz-f1 absolute top-[56px] left-[80px] -mt-[5px] -ml-[5px] size-[10px] rounded-full border border-white bg-slate-900/40"
        style={{ opacity: 0 }}
      />
      <span
        className="thumb-anim thumb-pz-f2 absolute top-[56px] left-[100px] -mt-[5px] -ml-[5px] size-[10px] rounded-full border border-white bg-slate-900/40"
        style={{ opacity: 0 }}
      />
    </ThumbStage>
  );
}
