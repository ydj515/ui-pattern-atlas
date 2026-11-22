import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const GROUPS = [
  { title: "ㄱ", items: ["강민지", "고은우", "김하늘", "김서연"] },
  { title: "ㄴ", items: ["나유진", "남도현"] },
  { title: "ㅂ", items: ["박서준", "백지호", "변하린"] },
  { title: "ㅇ", items: ["윤채원", "이도윤", "임서아"] },
  { title: "ㅊ", items: ["최유나", "추민재"] },
] as const;

const header =
  "h-[10px] border-b border-slate-200 bg-slate-50 px-[6px] text-[5.5px] font-semibold leading-[10px] text-slate-600";

/** Same contacts as GroupedListDemo: scrolling keeps the current group's header pinned on top. */
export function GroupedListThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <div className="thumb-anim thumb-gl-scroll text-[6px]">
          {GROUPS.map((group) => (
            <section key={group.title}>
              <p className={header}>{group.title}</p>
              {group.items.map((item) => (
                <p
                  key={item}
                  className="h-[12px] border-b border-slate-100 px-[6px] leading-[12px]"
                >
                  {item}
                </p>
              ))}
            </section>
          ))}
        </div>
        {GROUPS.map((group, index) => (
          <p
            key={group.title}
            className={`thumb-anim thumb-gl-pin${index} absolute inset-x-0 top-0 ${header} ${index === 0 ? "" : "opacity-0"}`}
          >
            {group.title}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-gl-cursor" />
    </ThumbStage>
  );
}
