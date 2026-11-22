import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MAILS = ["시안 확인 부탁드려요", "회의록 공유해요", "점심 메뉴 투표"] as const;

function Toggle({ wide }: { readonly wide: boolean }) {
  return (
    <span className="absolute top-[3px] left-[54px] flex gap-[3px] text-[5px]">
      <span
        className={`rounded-[2px] border px-[3px] py-[1px] ${wide ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300"}`}
      >
        넓은 화면
      </span>
      <span
        className={`rounded-[2px] border px-[3px] py-[1px] ${wide ? "border-slate-300" : "border-slate-900 bg-slate-900 text-white"}`}
      >
        좁은 화면
      </span>
    </span>
  );
}

/** Same mail as SplitViewDemo: list and detail side by side, then one at a time when narrow. */
export function SplitViewThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-sv-wide absolute inset-0 opacity-0">
        <Toggle wide />
        <div className="absolute top-[18px] left-[18px] h-[86px] w-[140px] overflow-hidden rounded-md border border-slate-200 text-[5.5px]">
          <div className="absolute inset-y-0 left-0 w-[56px] border-r border-slate-200">
            {MAILS.map((mail, index) => (
              <p
                key={mail}
                className={`h-[14px] px-[4px] leading-[14px] ${index === 0 ? "bg-blue-50" : ""}`}
              >
                {mail}
              </p>
            ))}
          </div>
          <p className="absolute top-[6px] left-[62px] text-[6px] font-semibold">
            시안 확인 부탁드려요
          </p>
          <p className="absolute top-[16px] left-[62px] w-[72px] text-[5px] text-slate-600">
            수정한 시안을 올렸어요. 오늘 안에 봐 주세요.
          </p>
        </div>
      </div>
      <div className="thumb-anim thumb-sv-narrow absolute inset-0 opacity-0">
        <Toggle wide={false} />
        <div className="absolute top-[18px] left-[48px] h-[86px] w-[80px] overflow-hidden rounded-md border border-slate-200 text-[5.5px]">
          {MAILS.map((mail) => (
            <p key={mail} className="h-[14px] px-[4px] leading-[14px]">
              {mail}
            </p>
          ))}
        </div>
      </div>
      <div className="thumb-anim thumb-sv-detail absolute inset-0">
        <Toggle wide={false} />
        <div className="absolute top-[18px] left-[48px] h-[86px] w-[80px] overflow-hidden rounded-md border border-slate-200">
          <p className="m-[3px] text-[5.5px] text-slate-600">← 목록</p>
          <p className="mx-[5px] mt-[4px] text-[6px] font-semibold">시안 확인 부탁드려요</p>
          <p className="mx-[5px] mt-[3px] text-[5px] text-slate-600">
            수정한 시안을 올렸어요. 오늘 안에 봐 주세요.
          </p>
        </div>
      </div>
      <ThumbCursor motion="thumb-sv-cursor" />
    </ThumbStage>
  );
}
