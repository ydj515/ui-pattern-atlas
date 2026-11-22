import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SECTIONS = ["시작하기", "설치", "사용법", "자주 묻는 질문"] as const;

/** Same page as TableOfContentsDemo: scrolling the text moves the marker down the 목차. */
export function TableOfContentsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[8px] h-[100px] w-[160px] overflow-hidden rounded-md border border-slate-200">
        <span className="absolute top-[8px] left-[6px] h-[44px] w-px bg-slate-200" />
        <span
          className="thumb-anim thumb-toc-bar absolute top-[8px] left-[5.5px] h-[11px] w-[2px] bg-blue-600"
          style={{ transform: "translateY(33px)" }}
        />
        {SECTIONS.map((section, index) => (
          <p
            key={section}
            className="absolute left-[10px] text-[5.5px] leading-[11px] text-slate-600"
            style={{ top: 8 + index * 11 }}
          >
            {section}
          </p>
        ))}
        <div className="absolute top-[6px] left-[54px] h-[88px] w-[100px] overflow-hidden">
          <div className="thumb-anim thumb-toc-text" style={{ transform: "translateY(-120px)" }}>
            {SECTIONS.map((section) => (
              <div key={section} className="h-[40px] text-[5px] leading-[7px] text-slate-500">
                <p className="text-[6.5px] leading-[9px] font-semibold text-slate-900">{section}</p>
                <p>
                  {section}에 대한 설명이에요. 스크롤하면 왼쪽 목차가 지금 읽는 부분을 따라가요.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-toc-cursor" />
    </ThumbStage>
  );
}
