import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as HicksLawDemo: 선택지 12개 → 묶어서 4개. */
export function HicksLawThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-hicks-law-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">선택지 12개</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-hicks-law-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">묶어서 4개</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-hicks-law-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[6.5px]">무엇을 도와드릴까요?</b>
          <span className="mt-[3px] grid grid-cols-3 gap-[2px] text-[5px]">
            {[
              "주문 조회",
              "배송 문의",
              "환불",
              "교환",
              "쿠폰",
              "포인트",
              "회원 정보",
              "비밀번호",
              "알림",
              "결제 수단",
              "주소",
              "탈퇴",
            ].map((item) => (
              <span
                key={item}
                className="rounded-[2px] border border-slate-200 py-[1px] text-center"
              >
                {item}
              </span>
            ))}
          </span>
        </div>
        <div className="thumb-anim thumb-dk-hicks-law-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[6.5px]">무엇을 도와드릴까요?</b>
          <span className="mt-[3px] grid grid-cols-2 gap-[3px]">
            {["주문과 배송", "환불과 교환", "혜택", "내 정보"].map((item) => (
              <span
                key={item}
                className="rounded border border-slate-200 py-[5px] text-center font-semibold"
              >
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-hicks-law-cursor" />
    </ThumbStage>
  );
}
