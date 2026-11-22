import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SONGS = [
  "봄날의 산책",
  "새벽 기차",
  "바다 냄새",
  "오후 세 시",
  "비 오는 거리",
  "작은 정원",
  "여름 밤",
  "푸른 언덕",
  "첫눈",
  "골목길",
  "달빛 산책",
  "기억의 방",
  "노을",
  "바람의 노래",
];

/** Same playlist as MomentumScrollDemo: a quick flick keeps the list gliding, then it slows. */
export function MomentumScrollThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[34px] font-semibold">재생 목록</p>
      <div className="absolute top-[18px] left-[34px] h-[88px] w-[108px] overflow-hidden rounded-md border border-slate-200">
        <ol
          className="thumb-anim thumb-ms-list text-[7px]"
          style={{ transform: "translateY(-118px)" }}
        >
          {SONGS.map((song, index) => (
            <li
              key={song}
              className="flex h-[15px] items-center gap-[5px] border-b border-slate-100 px-[5px]"
            >
              <span className="w-[10px] text-right text-slate-400 tabular-nums">{index + 1}</span>
              {song}
            </li>
          ))}
        </ol>
      </div>
      <ThumbCursor motion="thumb-ms-cursor" />
    </ThumbStage>
  );
}
