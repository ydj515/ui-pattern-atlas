import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as ComboboxDemo: focus → type 대 → the list narrows → pick 대전. */
export function ComboboxThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[24px] text-[7px] font-medium">도시</p>
      <span className="absolute top-[16px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-cb-focus absolute top-[15px] left-[23px] h-[17px] w-[130px] rounded ring-2 ring-blue-500/30 opacity-0" />
      <p className="thumb-anim thumb-cb-empty absolute top-[19.5px] left-[30px] text-[6.5px] text-slate-400 opacity-0">
        도시 이름을 입력하세요
      </p>
      <p className="thumb-anim thumb-cb-typed absolute top-[19.5px] left-[30px] text-[6.5px] opacity-0">
        대
      </p>
      <p className="thumb-anim thumb-cb-picked absolute top-[19.5px] left-[30px] text-[6.5px]">
        대전
      </p>
      <p className="thumb-anim thumb-cb-picked absolute top-[38px] left-[24px] text-[6.5px] text-slate-600">
        선택한 도시: 대전
      </p>

      <ul className="thumb-anim thumb-cb-all absolute top-[33px] left-[24px] w-[128px] rounded border border-slate-200 bg-white py-[1px] text-[6.5px] shadow-md opacity-0">
        {["서울", "부산", "인천", "대구"].map((city) => (
          <li key={city} className="h-[13px] px-[6px] leading-[13px]">
            {city}
          </li>
        ))}
      </ul>
      <ul className="thumb-anim thumb-cb-some absolute top-[33px] left-[24px] w-[128px] rounded border border-slate-200 bg-white py-[1px] text-[6.5px] shadow-md opacity-0">
        <li className="relative h-[13px] px-[6px] leading-[13px]">
          <span className="thumb-anim thumb-cb-a1 absolute inset-0 bg-blue-50" />
          <span className="relative">대구</span>
        </li>
        <li className="relative h-[13px] px-[6px] leading-[13px]">
          <span className="thumb-anim thumb-cb-a2 absolute inset-0 bg-blue-50 opacity-0" />
          <span className="relative">대전</span>
        </li>
      </ul>
      <ThumbCursor motion="thumb-cb-cursor" />
    </ThumbStage>
  );
}
