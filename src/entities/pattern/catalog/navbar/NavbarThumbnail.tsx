import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const LINKS = [
  { label: "홈", left: 22, width: 16 },
  { label: "제품", left: 40, width: 20 },
  { label: "가격", left: 62, width: 20 },
  { label: "블로그", left: 84, width: 24 },
] as const;

/** Same bar as NavbarDemo: 홈 is current → click 가격 → the underline and page follow. */
export function NavbarThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[12px] h-[60px] w-[152px] rounded-md border border-slate-200">
        <span className="absolute inset-x-0 top-[20px] h-px bg-slate-200" />
        <p className="absolute top-[6px] left-[6px] text-[7px] font-bold">모아</p>
        {LINKS.map((link) => (
          <p
            key={link.label}
            className="absolute top-[6.5px] text-center text-[6.5px] text-slate-600"
            style={{ left: link.left, width: link.width }}
          >
            {link.label}
          </p>
        ))}
        <span className="thumb-anim thumb-nb-home absolute top-[19px] left-[24px] h-[1.5px] w-[12px] bg-slate-900 opacity-0" />
        <span className="thumb-anim thumb-nb-price absolute top-[19px] left-[64px] h-[1.5px] w-[16px] bg-slate-900" />
        <span className="absolute top-[4px] left-[120px] grid h-[12px] w-[27px] place-items-center rounded-[3px] bg-slate-900 text-[5.5px] font-semibold text-white">
          시작하기
        </span>
        <p className="thumb-anim thumb-nb-home absolute inset-x-0 top-[36px] text-center text-[7px] text-slate-600 opacity-0">
          홈 페이지
        </p>
        <p className="thumb-anim thumb-nb-price absolute inset-x-0 top-[36px] text-center text-[7px] text-slate-600">
          가격 페이지
        </p>
      </div>
      <ThumbCursor motion="thumb-nb-cursor" />
    </ThumbStage>
  );
}
