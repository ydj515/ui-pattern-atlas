import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const DEVICES = [
  ["하늘의 태블릿", "M5 4h14v16H5z"],
  ["도윤의 휴대폰", "M8 3h8v18H8z"],
  ["회의실 노트북", "M5 5h14v10H5zM3 18h18"],
];

/** Same send as NearbyShareDemo: devices appear one by one → 하늘의 태블릿 → 수락을 기다리는 중 → 보냈어요. */
export function NearbyShareThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[5.5px]">
        <p className="text-[7.5px] font-bold">사진 3장 보내기</p>
        <p className="thumb-anim thumb-nb-search mt-[3px] flex items-center gap-[3px] text-slate-600">
          <span className="size-[4px] rounded-full bg-blue-500" />
          주변 기기를 찾는 중
        </p>
        <div className="absolute inset-x-[8px] top-[36px] grid grid-cols-3">
          {DEVICES.map(([name, shape], index) => (
            <div
              key={name}
              className={`thumb-anim thumb-nb-d${index} grid justify-items-center gap-[2px]`}
            >
              <span className="relative grid size-[18px] place-items-center rounded-full bg-slate-100 text-slate-600">
                {index === 0 ? (
                  <span className="thumb-anim thumb-nb-ring absolute -inset-[1px] rounded-full bg-blue-100 ring-2 ring-blue-400" />
                ) : null}
                <svg
                  viewBox="0 0 24 24"
                  className="relative size-[10px] fill-none stroke-current stroke-2"
                >
                  <path d={shape} />
                </svg>
              </span>
              {name}
              {index === 0 ? (
                <span className="grid text-[5px] text-slate-500">
                  <span
                    className="thumb-anim thumb-nb-wait col-start-1 row-start-1"
                    style={{ opacity: 0 }}
                  >
                    수락을 기다리는 중
                  </span>
                  <span className="thumb-anim thumb-nb-sent col-start-1 row-start-1 font-semibold text-emerald-700">
                    보냈어요
                  </span>
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-nearby-share-cursor" />
    </ThumbStage>
  );
}
