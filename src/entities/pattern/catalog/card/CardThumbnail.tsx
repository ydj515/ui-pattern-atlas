import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ARTICLES = [
  {
    title: "색 정리부터 시작하기",
    summary: "작은 팀이 디자인 시스템을 만들 때 가장 먼저 할 일",
    meta: "가이드 · 5분",
    tone: "from-amber-200 to-rose-300",
  },
  {
    title: "폼 오류 문구 쓰는 법",
    summary: "무엇이 틀렸고 어떻게 고치는지 한 문장으로 알려 주기",
    meta: "글쓰기 · 3분",
    tone: "from-sky-200 to-indigo-300",
  },
] as const;

/** Same cards as CardDemo: save the first article, then open it from its title. */
export function CardThumbnail() {
  return (
    <ThumbStage>
      {ARTICLES.map((article, index) => (
        <div
          key={article.title}
          className="absolute top-[8px] h-[82px] w-[70px] overflow-hidden rounded-md border border-slate-200 bg-white"
          style={{ left: 16 + index * 74 }}
        >
          {index === 0 ? (
            <span className="thumb-anim thumb-cd-hover absolute inset-0 rounded-md shadow-md opacity-0" />
          ) : null}
          <span className={`block h-[38px] bg-gradient-to-br ${article.tone}`} />
          <p className="px-[4px] pt-[3px] text-[4.5px] text-slate-500">{article.meta}</p>
          <p className={`px-[4px] text-[6px] leading-[8px] font-semibold`}>{article.title}</p>
          <p className="px-[4px] pt-[2px] text-[4.5px] leading-[6px] text-slate-600">
            {article.summary}
          </p>
          <span className="absolute top-[4px] right-[4px] grid size-[10px] place-items-center rounded-full bg-white/90 text-[6px] text-slate-500">
            <span className="block h-[5px] w-[4px] border border-current" />
            {index === 0 ? (
              <span className="thumb-anim thumb-cd-saved absolute inset-0 grid place-items-center rounded-full bg-white">
                <span className="block h-[5px] w-[4px] bg-amber-500" />
              </span>
            ) : null}
          </span>
        </div>
      ))}
      <p className="thumb-anim thumb-cd-open absolute inset-x-0 top-[96px] text-center text-[5.5px] text-slate-600">
        ‘색 정리부터 시작하기’ 글을 열었어요
      </p>
      <ThumbCursor motion="thumb-cd-cursor" />
    </ThumbStage>
  );
}
