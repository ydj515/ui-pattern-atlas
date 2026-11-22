import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as AlertDialogDemo: 자리 비움 보기 → logout warning counts down → 로그인 유지. */
export function AlertDialogThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[14px] left-[30px] h-[60px] w-[116px] rounded-md border border-slate-200 bg-white">
        <p className="absolute top-[8px] left-[10px] text-[9px] font-semibold">내 계정</p>
        <p className="absolute top-[21px] left-[10px] text-[7px] text-slate-500">
          김하늘 님으로 로그인 중
        </p>
        <span className="absolute top-[34px] left-[10px] grid h-[16px] w-[96px] place-items-center rounded border border-slate-300 text-[7px]">
          자리 비움 보기
        </span>
      </div>
      <p className="thumb-anim thumb-adlg-status absolute inset-x-0 top-[84px] text-center text-[7px] text-slate-500">
        로그인을 유지했어요
      </p>

      <div className="thumb-anim thumb-adlg-overlay absolute inset-0 bg-slate-950/55" />
      <div className="thumb-anim thumb-adlg-dialog absolute top-[16px] left-[18px] h-[80px] w-[140px] rounded-lg bg-white shadow-lg">
        <span className="absolute top-[10px] left-[10px] grid size-[12px] place-items-center rounded-full bg-amber-100 text-[7px] font-bold text-amber-700">
          !
        </span>
        <p className="absolute top-[9px] left-[28px] text-[9px] font-semibold">곧 로그아웃돼요</p>
        <p className="absolute top-[22px] left-[28px] w-[104px] text-[6.5px] leading-[1.35] text-slate-600">
          한동안 아무 동작이 없어서 개인정보 보호를 위해 로그아웃할 예정이에요.
        </p>
        <p className="absolute top-[50px] left-[28px] text-[7px] font-semibold text-amber-700 tabular-nums">
          남은 시간 <span className="thumb-anim thumb-adlg-15">15</span>
          <span className="thumb-anim thumb-adlg-14 absolute left-[27.5px]">14</span>
          <span className="thumb-anim thumb-adlg-13 absolute left-[27.5px]">13</span>초
        </p>
        <span className="absolute right-[52px] bottom-[8px] grid h-[13px] w-[38px] place-items-center rounded border border-slate-300 text-[6.5px]">
          로그아웃
        </span>
        <span className="absolute right-[8px] bottom-[8px] grid h-[13px] w-[40px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white">
          로그인 유지
        </span>
      </div>
      <ThumbCursor motion="thumb-adlg-cursor" />
    </ThumbStage>
  );
}
