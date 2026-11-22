import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const REGIONS = ["서울", "부산", "대구", "울릉도"] as const;

/** Same flow as SelectDemo: open 지역 → pick 울릉도 → the fee note appears. */
export function SelectThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[24px] text-[7px] font-medium">지역</p>
      <span className="absolute top-[16px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      <p className="thumb-anim thumb-sel-empty absolute top-[19.5px] left-[30px] text-[6.5px] text-slate-400 opacity-0">
        지역을 고르세요
      </p>
      <p className="thumb-anim thumb-sel-picked absolute top-[19.5px] left-[30px] text-[6.5px]">
        울릉도
      </p>
      <span className="absolute top-[19px] left-[141px] text-[6px] text-slate-500">▾</span>
      <p className="absolute top-[35px] left-[24px] text-[6px] text-slate-500">
        배송비가 지역마다 달라요
      </p>
      <p className="thumb-anim thumb-sel-picked absolute top-[47px] left-[24px] text-[6.5px] text-slate-700">
        울릉도는 배송비 3,000원이 더 붙어요
      </p>

      <ul className="thumb-anim thumb-sel-menu absolute top-[33px] left-[24px] w-[128px] rounded border border-slate-200 bg-white py-[1px] text-[6.5px] shadow-md opacity-0">
        {REGIONS.map((region) => (
          <li key={region} className="relative h-[13px] px-[6px] leading-[13px]">
            {region === "울릉도" ? (
              <span className="thumb-anim thumb-sel-hover absolute inset-0 bg-blue-50" />
            ) : null}
            <span className="relative">{region}</span>
          </li>
        ))}
      </ul>
      <ThumbCursor motion="thumb-sel-cursor" />
    </ThumbStage>
  );
}
