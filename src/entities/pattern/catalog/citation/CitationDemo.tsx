import { Citation, CitationList } from "@/shared/ui/patterns/citation/Citation";

const SOURCES = [
  {
    title: "서울숲 주말 행사",
    site: "서울숲 공원",
    url: "https://example.com/seoul-forest/events",
  },
  { title: "주차 안내", site: "서울숲 공원", url: "https://example.com/seoul-forest/parking" },
];

export function CitationDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="text-sm leading-relaxed text-slate-900">
        서울숲은 매주 토요일 아침에 플리마켓이 열려요
        <Citation index={1} source={SOURCES[0]!} openLabel="원문 열기" />. 주차는 공원 남쪽이 가장
        넓어요
        <Citation index={2} source={SOURCES[1]!} openLabel="원문 열기" />.
      </p>
      <CitationList sources={SOURCES} label="출처" />
    </section>
  );
}
