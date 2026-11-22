import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PARAGRAPHS = [
  "버튼 문구는 누르면 일어날 일을 동사로 씁니다.",
  "확인, 예 같은 말보다 저장, 보내기처럼 결과가 드러나는 말이 좋습니다.",
  "같은 화면에서 같은 행동은 같은 말로 부릅니다.",
  "취소는 되돌리는 동작에만 쓰고, 삭제와 헷갈리지 않게 합니다.",
  "버튼이 여러 개라면 가장 중요한 하나만 강조합니다.",
  "마지막으로, 문구를 소리 내어 읽어 보고 어색한 곳을 고칩니다.",
] as const;

/** Same article as ScrollProgressDemo: the top bar fills as the text scrolls by. */
export function ScrollProgressThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <span className="absolute inset-x-0 top-0 z-10 h-[2px] bg-slate-100">
          <span
            className="thumb-anim thumb-scp-bar block h-full origin-left bg-blue-600"
            style={{ transform: "scaleX(0.6)" }}
          />
        </span>
        <div
          className="thumb-anim thumb-scp-text space-y-[6px] px-[6px] pt-[6px] text-[5.5px] leading-[8px] text-slate-700"
          style={{ transform: "translateY(-60px)" }}
        >
          <p className="text-[7px] font-semibold text-slate-900">버튼 문구 쓰는 법</p>
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-scp-cursor" />
    </ThumbStage>
  );
}
