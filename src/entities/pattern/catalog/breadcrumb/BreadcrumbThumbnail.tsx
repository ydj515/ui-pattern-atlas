import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

function Separator({ left }: { readonly left: number }) {
  return (
    <span className="absolute top-[9px] text-slate-300" style={{ left }}>
      ›
    </span>
  );
}

/** Same trail as BreadcrumbDemo: click 주방가전 → trail shortens → 상품 페이지로 돌아가기. */
export function BreadcrumbThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[9px] left-[10px] text-slate-500">홈</span>
      <Separator left={22} />
      <span className="absolute top-[9px] left-[29px] text-slate-500">가전</span>
      <Separator left={47} />
      <span className="absolute top-[9px] left-[54px] text-slate-500">주방가전</span>
      <span className="thumb-anim thumb-crumb-current absolute top-[9px] left-[54px] bg-white font-semibold">
        주방가전
      </span>
      <span className="thumb-anim thumb-crumb-tail">
        <Separator left={88} />
        <span className="absolute top-[9px] left-[95px] font-semibold">에어프라이어</span>
      </span>

      <div className="absolute top-[28px] left-[10px] h-[72px] w-[156px] rounded-lg border border-slate-200">
        <p className="thumb-anim thumb-crumb-tail absolute top-[9px] left-[10px] text-[10px] font-semibold">
          에어프라이어
        </p>
        <p className="thumb-anim thumb-crumb-current absolute top-[9px] left-[10px] text-[10px] font-semibold">
          주방가전
        </p>
        <p className="absolute top-[26px] left-[10px] text-[7px] text-slate-500">
          상위 경로를 눌러 이동해 보세요.
        </p>
        <p className="thumb-anim thumb-crumb-current absolute top-[42px] left-[10px] text-[7px] font-medium underline">
          상품 페이지로 돌아가기
        </p>
      </div>
      <ThumbCursor motion="thumb-crumb-cursor" />
    </ThumbStage>
  );
}
