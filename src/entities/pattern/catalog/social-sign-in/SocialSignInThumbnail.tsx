import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const BUTTONS = [
  ["G", "Google로 계속하기", "border border-slate-300 bg-white"],
  ["A", "Apple로 계속하기", "bg-black text-white"],
  ["@", "이메일로 계속하기", "bg-slate-100"],
];

/** Same card as SocialSignInDemo: Google로 계속하기 → 연결하는 중 (the rest wait) → 가입을 마쳤어요. */
export function SocialSignInThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-center">
        <div className="thumb-anim thumb-si-form">
          <p className="text-[8px] font-bold">3초 만에 시작하기</p>
          {BUTTONS.map(([mark, label, tone], index) => (
            <span
              key={label}
              className={`relative mt-[4px] flex h-[14px] items-center justify-center rounded text-[6.5px] font-semibold ${tone} ${index > 0 ? "thumb-anim thumb-si-wait" : ""}`}
            >
              <b className="absolute left-[5px]">{mark}</b>
              {index === 0 ? (
                <span className="grid">
                  <span className="thumb-anim thumb-si-label col-start-1 row-start-1">{label}</span>
                  <span
                    className="thumb-anim thumb-si-pending col-start-1 row-start-1"
                    style={{ opacity: 0 }}
                  >
                    연결하는 중
                  </span>
                </span>
              ) : (
                label
              )}
            </span>
          ))}
          <p className="mt-[6px] text-[5px] text-slate-500">계속하면 이용약관에 동의하게 돼요</p>
        </div>
        <div
          className="thumb-anim thumb-si-done absolute inset-0 grid place-content-center justify-items-center gap-[5px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[8px]">가입을 마쳤어요</b>
          <span className="rounded border border-slate-200 px-[4px] text-[6px]">처음으로</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-si-cursor" />
    </ThumbStage>
  );
}
