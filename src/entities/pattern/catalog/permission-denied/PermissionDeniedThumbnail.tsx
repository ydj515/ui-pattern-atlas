import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as PermissionDeniedDemo: no access → 권한 요청 → 요청함 and what happens next. */
export function PermissionDeniedThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[20px] h-[104px] w-[136px] rounded-md border border-slate-200 text-center">
        <span className="absolute top-[7px] left-[60px] grid size-[16px] place-items-center rounded-full bg-slate-100 text-slate-500">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-[8px]">
            <path d="M6 8V6a4 4 0 1 1 8 0v2h.5A1.5 1.5 0 0 1 16 9.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-7A1.5 1.5 0 0 1 5.5 8H6Zm2 0h4V6a2 2 0 1 0-4 0v2Z" />
          </svg>
        </span>
        <p className="absolute inset-x-0 top-[27px] text-[7.5px] font-semibold">
          이 문서를 볼 권한이 없어요
        </p>
        <p className="absolute inset-x-0 top-[39px] text-[5.5px] text-slate-500">
          소유자 김하늘 님에게 권한을 요청할 수 있어요.
        </p>
        <p className="absolute inset-x-0 top-[47px] text-[5px] text-slate-400">
          sky@example.com 계정으로 로그인 중
        </p>
        <span className="thumb-anim thumb-pd-idle absolute top-[59px] left-[44px] grid h-[15px] w-[48px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white opacity-0">
          권한 요청
        </span>
        <span className="thumb-anim thumb-pd-sent absolute top-[59px] left-[44px] grid h-[15px] w-[48px] place-items-center rounded bg-slate-200 text-[6.5px] font-semibold text-slate-500">
          요청함
        </span>
        <p className="thumb-anim thumb-pd-sent absolute inset-x-0 top-[80px] text-[6px] text-emerald-700">
          승인되면 메일로 알려 드려요.
        </p>
      </div>
      <ThumbCursor motion="thumb-pd-cursor" />
    </ThumbStage>
  );
}
