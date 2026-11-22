import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SLIDES = [
  { text: "겨울 세일 최대 40%", tone: "from-sky-400 to-indigo-500" },
  { text: "이번 주 새로 나온 상품", tone: "from-amber-400 to-rose-500" },
  { text: "3만원 이상 무료 배송", tone: "from-emerald-400 to-teal-500" },
] as const;

/** Same banners as CarouselDemo: it advances on its own, then › moves to the third. */
export function CarouselThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[16px] h-[81px] w-[144px] overflow-hidden rounded-md">
        {SLIDES.map((slide, index) => (
          <p
            key={slide.text}
            className={`thumb-anim thumb-car-s${index} absolute inset-0 grid place-items-center bg-gradient-to-br ${slide.tone} px-[20px] text-center text-[9px] font-bold text-white ${index === 2 ? "" : "opacity-0"}`}
          >
            {slide.text}
          </p>
        ))}
        <span className="absolute top-[33px] left-[4px] grid size-[14px] place-items-center rounded-full bg-white/90 text-[8px]">
          ‹
        </span>
        <span className="absolute top-[33px] right-[4px] grid size-[14px] place-items-center rounded-full bg-white/90 text-[8px]">
          ›
        </span>
        <span className="absolute bottom-[5px] left-[56px] flex items-center gap-[3px]">
          <span className="grid size-[8px] place-items-center rounded-full bg-black/40 text-[4px] text-white">
            ❚❚
          </span>
          {SLIDES.map((slide, index) => (
            <span key={slide.text} className="relative h-[3px] w-[3px] rounded-full bg-white/50">
              <span
                className={`thumb-anim thumb-car-s${index} absolute inset-y-0 left-0 w-[8px] rounded-full bg-white ${index === 2 ? "" : "opacity-0"}`}
              />
            </span>
          ))}
        </span>
      </div>
      <ThumbCursor motion="thumb-car-cursor" />
    </ThumbStage>
  );
}
