import { Carousel } from "@/shared/ui/patterns/carousel/Carousel";

const SLIDES = [
  {
    id: "sale",
    label: "겨울 세일",
    text: "겨울 세일 최대 40%",
    tone: "from-sky-400 to-indigo-500",
  },
  {
    id: "new",
    label: "새로 나온 상품",
    text: "이번 주 새로 나온 상품",
    tone: "from-amber-400 to-rose-500",
  },
  {
    id: "free",
    label: "무료 배송",
    text: "3만원 이상 무료 배송",
    tone: "from-emerald-400 to-teal-500",
  },
] as const;

export function CarouselDemo() {
  return (
    <div className="w-full max-w-sm">
      <Carousel
        label="이벤트 배너"
        interval={3000}
        prevLabel="이전 배너"
        nextLabel="다음 배너"
        pauseLabel="자동 넘김 멈추기"
        playLabel="자동 넘김 시작"
        slideLabel={(index, total) => `${index + 1} / ${total}`}
        slides={SLIDES.map((slide) => ({
          id: slide.id,
          label: slide.label,
          content: (
            <div
              className={`grid aspect-[16/9] place-items-center bg-gradient-to-br ${slide.tone} px-10 text-center text-lg font-bold text-white`}
            >
              {slide.text}
            </div>
          ),
        }))}
      />
    </div>
  );
}
