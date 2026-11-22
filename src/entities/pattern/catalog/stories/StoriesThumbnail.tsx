import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STORIES = [
  { label: "오늘의 메뉴", text: "오늘의 메뉴는 버섯 리조또", tone: "from-amber-400 to-orange-600" },
  { label: "새 원두", text: "에티오피아 원두가 들어왔어요", tone: "from-emerald-500 to-teal-700" },
  {
    label: "영업 시간",
    text: "이번 주는 저녁 9시까지 열어요",
    tone: "from-indigo-500 to-violet-700",
  },
] as const;

/** Same stories as StoriesDemo: each fills its bar and moves on; a tap on the right skips ahead. */
export function StoriesThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[58px] h-[108px] w-[60px] overflow-hidden rounded-[10px] border-2 border-slate-900 text-white">
        {STORIES.map((story, index) => (
          <div
            key={story.label}
            className={`thumb-anim thumb-sto-s${index} absolute inset-0 bg-gradient-to-br ${story.tone} ${index === 2 ? "" : "opacity-0"}`}
          >
            <p className="absolute top-[9px] left-[4px] text-[5px] font-semibold">{story.label}</p>
            <p className="absolute inset-x-[5px] top-[40px] text-center text-[6.5px] leading-[9px] font-bold">
              {story.text}
            </p>
          </div>
        ))}
        <div className="absolute inset-x-[3px] top-[3px] flex gap-[2px]">
          {STORIES.map((story, index) => (
            <span
              key={story.label}
              className="h-[1.5px] flex-1 overflow-hidden rounded-full bg-white/30"
            >
              <span
                className={`thumb-anim thumb-sto-b${index} block h-full origin-left bg-white`}
              />
            </span>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-sto-cursor" />
    </ThumbStage>
  );
}
