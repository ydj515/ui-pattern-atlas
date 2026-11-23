import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same page as AccountDeletionDemo: what is lost is listed, typing 탈퇴 unlocks the button, and the result says how to undo. */
export function AccountDeletionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <div className="thumb-anim thumb-auth-ad-form absolute inset-[8px]">
          <b className="text-[8px]">회원 탈퇴</b>
          <div className="mt-[3px] rounded-[3px] bg-rose-50 p-[3px] text-rose-900">
            <p className="font-medium">탈퇴하면 함께 사라져요</p>
            <p>· 주문 내역 3건 · 적립금 2,300원 · 찜한 상품 12개</p>
          </div>
          <p className="mt-[3px]">계속하려면 '탈퇴'를 입력해 주세요</p>
          <span className="block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
            <span className="thumb-anim thumb-auth-ad-typed" style={HIDDEN}>
              탈퇴
            </span>
          </span>
          <span className="relative mt-[3px] block rounded-[3px] bg-rose-600 py-[2px] text-center font-semibold text-white">
            <span className="thumb-anim thumb-auth-ad-lock absolute inset-0 rounded-[3px] bg-white/60" />
            탈퇴하기
          </span>
        </div>
        <p
          className="thumb-anim thumb-auth-ad-done absolute inset-[8px] grid place-items-center text-center text-[6.5px]"
          style={HIDDEN}
        >
          탈퇴를 접수했어요. 30일 안에 다시 로그인하면 취소돼요.
        </p>
      </div>
      <ThumbCursor motion="thumb-auth-ad-cursor" />
    </ThumbStage>
  );
}
