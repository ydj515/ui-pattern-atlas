import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SPOTS = [
  [70, 30, 36, 0.75],
  [92, 52, 20, 0.5],
  [50, 44, 14, 0.3],
] as const;

/** Same product page as BehavioralHeatmapDemo: clicks pile up on the photo; scroll depth shows few reach the reviews. */
export function BehavioralHeatmapThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-ux-heat-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">클릭</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">스크롤</span>
        </p>
        <div className="absolute inset-x-[30px] top-[24px] h-[66px] overflow-hidden rounded-[6px] border border-slate-200 p-[4px] text-[5px]">
          <span className="block h-[22px] rounded-[3px] bg-slate-200" />
          <b className="mt-[2px] block">린넨 셔츠 · 39,000원</b>
          <span className="ml-auto block w-fit rounded-[2px] bg-slate-900 px-[3px] text-white">
            담기
          </span>
          <span className="mt-[2px] block h-[2px] w-5/6 rounded bg-slate-100" />
          <span className="mt-[3px] block text-slate-500">리뷰 128개</span>
          <div className="thumb-anim thumb-ux-heat-a absolute inset-0">
            {SPOTS.map(([x, y, size, strength]) => (
              <span
                key={x}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: x - 30,
                  top: y - 24,
                  width: size,
                  height: size,
                  background: `radial-gradient(circle, rgb(239 68 68 / ${strength}), rgb(251 191 36 / 0.25) 55%, transparent 72%)`,
                }}
              />
            ))}
          </div>
          <div
            className="thumb-anim thumb-ux-heat-b absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/45"
            style={{ opacity: 0 }}
          >
            {[
              ["0%", "100%"],
              ["45%", "60%"],
              ["78%", "25%"],
            ].map(([top, label]) => (
              <span
                key={label}
                className="absolute inset-x-0 border-t border-dashed border-slate-500"
                style={{ top }}
              >
                <b className="absolute right-[1px] bg-white px-[1px]">{label}</b>
              </span>
            ))}
          </div>
        </div>
        <p className="thumb-anim thumb-ux-heat-a absolute bottom-[5px] left-[8px] text-[5px] text-slate-600">
          누를 수 없는 사진에 클릭이 몰려요
        </p>
        <p
          className="thumb-anim thumb-ux-heat-b absolute bottom-[5px] left-[8px] text-[5px] text-slate-600"
          style={{ opacity: 0 }}
        >
          리뷰까지 내려오는 사람은 25%예요
        </p>
      </div>
      <ThumbCursor motion="thumb-ux-heat-cursor" />
    </ThumbStage>
  );
}
