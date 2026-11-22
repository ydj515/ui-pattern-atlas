import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const FREE =
  "작은 팀일수록 색과 글꼴부터 정리하는 편이 빠릅니다. 버튼을 만들 때마다 같은 질문을 반복하지 않게 되니까요.";
const MEMBERS_ONLY =
  "다음은 간격입니다. 4의 배수로 시작하면 대부분의 화면을 충분히 맞출 수 있습니다.";

/** Same article as LockedContentDemo: free part fades into the lock → 멤버십 시작하기 → full text. */
export function LockedContentThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[3px] left-[16px] text-[7.5px] font-semibold">
        디자인 시스템을 처음 만들 때
      </p>

      <div className="thumb-anim thumb-lock-locked absolute top-[15px] left-[16px] h-[93px] w-[144px] overflow-hidden rounded-md border border-slate-200 text-center">
        <p className="absolute top-[5px] left-[8px] h-[29px] w-[128px] overflow-hidden text-left text-[6px] leading-[9.5px] text-slate-700">
          {FREE}
        </p>
        <span className="absolute inset-x-0 top-[18px] h-[16px] bg-gradient-to-b from-white/0 to-white" />
        <span className="absolute inset-x-0 top-[36px] h-px bg-slate-100" />
        <p className="absolute inset-x-0 top-[41px] text-[7px] font-semibold">
          멤버십 회원만 볼 수 있어요
        </p>
        <p className="absolute inset-x-0 top-[52px] text-[6px] text-slate-500">
          월 4,900원으로 모든 글을 읽을 수 있어요.
        </p>
        <span className="absolute top-[65px] left-[43px] grid h-[15px] w-[58px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white">
          멤버십 시작하기
        </span>
      </div>

      <div className="thumb-anim thumb-lock-open absolute top-[15px] left-[16px] h-[93px] w-[144px] rounded-md border border-slate-200 px-[8px] pt-[5px] text-[6px] leading-[9.5px] text-slate-700 opacity-0">
        <p>{FREE}</p>
        <p className="mt-[4px]">{MEMBERS_ONLY}</p>
        <p className="mt-[6px] text-[5.5px] text-slate-500 underline">잠금 다시 보기</p>
      </div>
      <ThumbCursor motion="thumb-lock-cursor" />
    </ThumbStage>
  );
}
