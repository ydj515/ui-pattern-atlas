import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same notice as DormantAccountDemo: which account, since when, what was kept, one step back in. */
export function DormantAccountThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7px]">휴면 계정이에요</b>
        <p className="mt-[2px] rounded-[3px] bg-slate-100 px-[4px] py-[1px] font-medium">
          haneul@kakao.com
        </p>
        <p className="mt-[2px] text-slate-600">
          1년 동안 로그인하지 않아 {"2025년 3월 2일"}에 휴면 계정으로 바꿨어요
        </p>
        <p className="mt-[2px] text-[5px] text-slate-500">따로 보관해 둔 정보</p>
        {["적립금 4,200원", "주문 내역 12건", "배송지 2곳"].map((line) => (
          <p key={line} className="text-slate-700">
            <span className="text-emerald-600">✓</span> {line}
          </p>
        ))}
        <span className="mt-[3px] block rounded-[3px] bg-slate-900 py-[1px] text-center text-white">
          휴면 풀고 이어서 쓰기
        </span>
        <p
          className="thumb-anim thumb-lr-da-done absolute inset-0 grid place-items-center bg-white p-[12px] text-center text-[7px] text-slate-700"
          style={HIDDEN}
        >
          다시 오신 걸 환영해요. 적립금과 주문 내역을 그대로 돌려놓았어요
        </p>
      </div>
      <ThumbCursor motion="thumb-lr-da-cursor" />
    </ThumbStage>
  );
}
