import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Toggle({ on, motion }: { readonly on?: boolean; readonly motion?: string }) {
  return (
    <span
      className={`relative h-[7px] w-[12px] rounded-full ${on ? "bg-slate-900" : "bg-slate-300"}`}
    >
      {motion ? (
        <span
          className={`thumb-anim ${motion}-bg absolute inset-0 rounded-full bg-slate-900`}
          style={HIDDEN}
        />
      ) : null}
      <span
        className={`${motion ? `thumb-anim ${motion}-knob ` : ""}absolute top-[1px] size-[5px] rounded-full bg-white ${on ? "left-[6px]" : "left-[1px]"}`}
      />
    </span>
  );
}

/** Same settings as SettingsListDemo: a switch changes at once; a value row opens a choice. */
export function SettingsListThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6px] leading-[1.35]">
        <p className="text-[5px] font-semibold text-slate-500">알림</p>
        <div className="rounded-[4px] border border-slate-200 bg-white">
          <p className="flex items-center justify-between border-b border-slate-100 px-[4px] py-[2px]">
            앱 푸시
            <Toggle on />
          </p>
          <p className="flex items-center justify-between px-[4px] py-[2px]">
            <span>
              혜택 소식 받기
              <span className="block text-[4.5px] text-slate-500">
                쿠폰과 할인 소식을 보내 드려요
              </span>
            </span>
            <Toggle motion="thumb-st-sl-mk" />
          </p>
        </div>
        <p className="mt-[3px] text-[5px] font-semibold text-slate-500">화면</p>
        <div className="rounded-[4px] border border-slate-200 bg-white">
          <p className="flex justify-between border-b border-slate-100 px-[4px] py-[2px]">
            화면 모드<span className="text-slate-500">시스템 설정 ›</span>
          </p>
          <p className="flex justify-between px-[4px] py-[2px]">
            글자 크기<span className="text-slate-500">보통 ›</span>
          </p>
        </div>
        <p
          className="thumb-anim thumb-st-sl-open absolute inset-x-[6px] bottom-[3px] rounded-[3px] bg-slate-900 px-[4px] py-[2px] text-white"
          style={HIDDEN}
        >
          화면 모드를 고르는 화면을 열어요
        </p>
      </div>
      <ThumbCursor motion="thumb-st-sl-cursor" />
    </ThumbStage>
  );
}
