import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TREE = [
  ["쇼핑", 0],
  ["마이페이지", 0],
  ["주문 내역", 1],
  ["반품 신청", 2],
  ["회원 정보", 1],
  ["고객센터", 0],
  ["자주 묻는 질문", 1],
  ["1:1 문의", 1],
] as const;
const PATHS = [
  [
    ["마이페이지", "주문 내역", "반품 신청"],
    "font-semibold text-emerald-700",
    "62%가 마이페이지 → 주문 내역 → 반품 신청으로 찾았어요",
  ],
  [
    ["고객센터", "자주 묻는 질문"],
    "font-semibold text-rose-700",
    "30%가 고객센터 → 자주 묻는 질문에서 멈췄어요",
  ],
] as const;

/** Same tree as TreeTestingDemo: the path most people took to 반품 신청, then the wrong path many stopped on. */
export function TreeTestingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="rounded-[4px] bg-slate-100 px-[4px] py-[2px] text-[5.5px]">
          과제: 주문한 운동화를 반품하려면 어디로 가나요?
        </p>
        <div className="mt-[3px]">
          <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
            <span className="thumb-anim thumb-ux-tree-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
            <span className="relative h-[11px] flex-1 leading-[11px]">성공한 경로</span>
            <span className="relative h-[11px] flex-1 leading-[11px]">틀린 경로</span>
          </p>
        </div>
        {PATHS.map(([nodes, tone, note], index) => (
          <div
            key={note}
            className={`thumb-anim thumb-ux-tree-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[36px] text-[5.5px] leading-[6.5px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            {TREE.map(([name, depth]) => (
              <p
                key={name}
                style={{ paddingLeft: depth * 8 }}
                className={(nodes as readonly string[]).includes(name) ? tone : "text-slate-500"}
              >
                {depth > 0 ? "└ " : ""}
                {name}
              </p>
            ))}
            <p className="mt-[2px] text-[5px] text-slate-600">{note}</p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-ux-tree-cursor" />
    </ThumbStage>
  );
}
