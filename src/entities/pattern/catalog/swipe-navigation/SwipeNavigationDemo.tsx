import { SwipeNavigation } from "@/shared/ui/patterns/swipe-navigation/SwipeNavigation";

const DAYS = [
  { id: "today", title: "오늘", weather: "맑음", temp: "18°", tone: "from-sky-200 to-amber-100" },
  { id: "tomorrow", title: "내일", weather: "비", temp: "14°", tone: "from-slate-300 to-sky-200" },
  { id: "after", title: "모레", weather: "흐림", temp: "16°", tone: "from-slate-200 to-slate-100" },
];

export function SwipeNavigationDemo() {
  return (
    <div className="w-full max-w-xs">
      <SwipeNavigation
        label="날씨"
        prevLabel="이전"
        nextLabel="다음"
        pages={DAYS.map((day) => ({
          id: day.id,
          title: day.title,
          content: (
            <div
              className={`grid h-40 place-content-center bg-gradient-to-b text-center ${day.tone}`}
            >
              <p className="text-4xl font-semibold text-slate-900">{day.temp}</p>
              <p className="text-sm text-slate-700">{day.weather}</p>
            </div>
          ),
        }))}
      />
    </div>
  );
}
