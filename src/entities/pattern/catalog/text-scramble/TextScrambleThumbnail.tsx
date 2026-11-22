import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const FRAMES = ["<# _! */", "보안 ?= {^", "보안 연결 ]#", "보안 연결 완료"];

/** Same card as TextScrambleDemo: 연결하기 → symbols settle into 보안 연결 완료 from left to right. */
export function TextScrambleThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[10px] h-[80px] w-[156px] rounded-lg bg-slate-900 p-[8px] text-white">
        <p className="text-[6px] text-white/70">서버 연결</p>
        <p className="relative mt-[4px] h-[16px] font-mono text-[12px] leading-[16px] font-bold">
          <span className="thumb-anim thumb-ts-f0 absolute text-white/50" style={{ opacity: 0 }}>
            연결 대기 중
          </span>
          {FRAMES.map((frame, index) => (
            <span
              key={frame}
              className={`thumb-anim thumb-ts-f${index + 1} absolute`}
              style={index === 3 ? undefined : { opacity: 0 }}
            >
              {frame}
            </span>
          ))}
        </p>
        <span className="mt-[16px] inline-block rounded bg-white px-[6px] py-[2px] text-[7px] font-semibold text-slate-900">
          연결하기
        </span>
      </div>
      <ThumbCursor motion="thumb-ts-cursor" />
    </ThumbStage>
  );
}
