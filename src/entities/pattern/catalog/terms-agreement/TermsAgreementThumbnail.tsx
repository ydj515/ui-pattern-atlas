import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Box({ motion, on }: { readonly motion?: string; readonly on?: boolean }) {
  return (
    <span className="relative size-[7px] shrink-0 rounded-[1.5px] border border-slate-400 bg-white">
      <span
        className={`absolute inset-0 grid place-items-center bg-slate-900 text-[5px] leading-none text-white ${motion ? `thumb-anim ${motion}` : ""}`}
        style={on ? undefined : { opacity: 0 }}
      >
        ✓
      </span>
    </span>
  );
}

/** Same form as TermsAgreementDemo: tick both [필수] items → 전체 동의 shows mixed → 다음 → 다음 단계로 넘어가요. */
export function TermsAgreementThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] rounded-[12px] border border-slate-200 p-[6px] text-[6px]">
        <p className="text-[7.5px] font-bold">약관에 동의해 주세요</p>
        <p className="mt-[4px] flex h-[13px] items-center gap-[4px] rounded bg-slate-100 px-[4px] font-semibold">
          <span className="relative size-[7px] rounded-[1.5px] border border-slate-400 bg-white">
            <span className="thumb-anim thumb-ta-mixed absolute inset-[1.5px] top-[2.5px] h-[1px] bg-slate-900" />
          </span>
          전체 동의
        </p>
        {[
          ["필수", "이용약관", "thumb-ta-c1", "text-blue-700"],
          ["필수", "개인정보 수집·이용", "thumb-ta-c2", "text-blue-700"],
          ["선택", "마케팅 정보 수신", undefined, "text-slate-500"],
        ].map(([tag, label, motion, tone]) => (
          <p key={label} className="flex h-[12px] items-center gap-[4px] px-[4px]">
            <Box motion={motion} on={Boolean(motion)} />
            <span className="flex-1">
              <span className={tone}>[{tag}]</span> {label}
            </span>
            <span className="text-[5px] text-slate-500 underline">보기</span>
          </p>
        ))}
        <span className="relative mt-[5px] block h-[12px] overflow-hidden rounded text-center leading-[12px] font-semibold text-white">
          <span className="absolute inset-0 bg-slate-300" />
          <span className="thumb-anim thumb-ta-ready absolute inset-0 bg-slate-900" />
          <span className="relative">다음</span>
        </span>
        <p
          className="thumb-anim thumb-ta-status mt-[4px] text-center text-slate-600"
          style={{ opacity: 0 }}
        >
          다음 단계로 넘어가요
        </p>
      </div>
      <ThumbCursor motion="thumb-terms-agreement-cursor" />
    </ThumbStage>
  );
}
