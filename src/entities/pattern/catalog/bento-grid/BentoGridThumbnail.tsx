import { ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TILES = [
  {
    text: "어디서나 이어서",
    style: { left: 16, top: 8, width: 70, height: 58 },
    tone: "bg-slate-900 text-white",
    motion: "thumb-bg-t0",
  },
  {
    text: "오프라인 저장",
    style: { left: 90, top: 8, width: 70, height: 27 },
    tone: "bg-amber-100 text-amber-950",
    motion: "thumb-bg-t1",
  },
  {
    text: "공유",
    style: { left: 90, top: 39, width: 33, height: 27 },
    tone: "bg-sky-100 text-sky-950",
    motion: "thumb-bg-t2",
  },
  {
    text: "다크 모드",
    style: { left: 127, top: 39, width: 33, height: 27 },
    tone: "bg-emerald-100 text-emerald-950",
    motion: "thumb-bg-t3",
  },
  {
    text: "모든 메모를 한 번에 검색",
    style: { left: 16, top: 70, width: 144, height: 30 },
    tone: "bg-rose-100 text-rose-950",
    motion: "thumb-bg-t4",
  },
] as const;

/** Same tiles as BentoGridDemo: the big tile leads, the smaller ones fill in around it. */
export function BentoGridThumbnail() {
  return (
    <ThumbStage>
      {TILES.map((tile) => (
        <span
          key={tile.text}
          className={`thumb-anim ${tile.motion} absolute flex items-end rounded-[6px] p-[4px] text-[5.5px] font-bold ${tile.tone}`}
          style={tile.style}
        >
          {tile.text}
        </span>
      ))}
    </ThumbStage>
  );
}
