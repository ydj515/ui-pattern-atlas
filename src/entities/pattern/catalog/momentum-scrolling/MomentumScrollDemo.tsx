import { useState } from "react";
import { MomentumScroll } from "@/shared/ui/patterns/momentum-scrolling/MomentumScroll";

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
  "고요한 아침",
  "마지막 페이지",
];

export function MomentumScrollDemo() {
  const [momentum, setMomentum] = useState(true);
  return (
    <section className="w-full max-w-xs">
      <h2 className="mb-2 text-sm font-semibold text-slate-900">재생 목록</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <MomentumScroll label="재생 목록" height={220} friction={momentum ? 0.95 : 0}>
          <ol className="divide-y divide-slate-100 text-sm">
            {SONGS.map((song, index) => (
              <li key={song} className="flex gap-3 px-3 py-2.5">
                <span className="w-4 text-right text-slate-400 tabular-nums">{index + 1}</span>
                {song}
              </li>
            ))}
          </ol>
        </MomentumScroll>
      </div>
      <label className="mt-2 flex items-center gap-2 text-xs text-slate-700">
        <input
          type="checkbox"
          checked={!momentum}
          onChange={(event) => setMomentum(!event.currentTarget.checked)}
        />
        관성 끄기
      </label>
    </section>
  );
}
