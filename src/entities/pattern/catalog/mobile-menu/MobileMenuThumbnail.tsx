import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const LINKS = ["홈", "제품", "가격", "블로그"] as const;

/** Same flow as MobileMenuDemo: open the menu → choose 가격 → it closes on 가격 페이지. */
export function MobileMenuThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[58px] h-[108px] w-[60px] rounded-[10px] border-2 border-slate-900 bg-white">
        <span className="absolute inset-x-0 top-[16px] h-px bg-slate-200" />
        <p className="absolute top-[4px] left-[5px] text-[6.5px] font-bold">모아</p>
        <span className="thumb-anim thumb-mm-closed absolute top-[5px] left-[44px] flex w-[8px] flex-col gap-[1.5px]">
          <span className="h-px bg-slate-700" />
          <span className="h-px bg-slate-700" />
          <span className="h-px bg-slate-700" />
        </span>
        <span className="thumb-anim thumb-mm-open absolute top-[3px] left-[45px] text-[7px] leading-[8px] text-slate-700 opacity-0">
          ×
        </span>
        <p className="thumb-anim thumb-mm-home absolute top-[24px] left-[5px] text-[6px] text-slate-600 opacity-0">
          홈 페이지
        </p>
        <p className="thumb-anim thumb-mm-price absolute top-[24px] left-[5px] text-[6px] text-slate-600">
          가격 페이지
        </p>
        <ul className="thumb-anim thumb-mm-open absolute top-[19px] right-[3px] w-[40px] rounded-[4px] border border-slate-200 bg-white py-[1px] text-[5.5px] shadow-md opacity-0">
          {LINKS.map((link) => (
            <li
              key={link}
              className={`h-[11px] px-[4px] leading-[11px] ${link === "홈" ? "font-semibold" : "text-slate-600"}`}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <ThumbCursor motion="thumb-mm-cursor" />
    </ThumbStage>
  );
}
