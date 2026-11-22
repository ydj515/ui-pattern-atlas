import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PHOTOS = [
  { caption: "서울 한강", tone: "from-sky-300 to-cyan-600" },
  { caption: "서울숲 길", tone: "from-emerald-300 to-green-700" },
  { caption: "한강 노을", tone: "from-amber-300 to-rose-500" },
  { caption: "인왕산 능선", tone: "from-lime-200 to-emerald-500" },
] as const;

/** Same photos as LightboxDemo: open 서울숲 길 → › to 한강 노을 → close. */
export function LightboxThumbnail() {
  return (
    <ThumbStage>
      {PHOTOS.map((photo, index) => (
        <span
          key={photo.caption}
          className={`absolute h-[34px] w-[46px] rounded-[4px] bg-gradient-to-br ${photo.tone}`}
          style={{ left: 40 + (index % 2) * 50, top: 10 + Math.floor(index / 2) * 38 }}
        />
      ))}
      <div className="thumb-anim thumb-lbx-open absolute inset-0 bg-slate-950/85 text-white opacity-0">
        {[1, 2].map((index) => (
          <div
            key={index}
            className={`thumb-anim ${index === 1 ? "thumb-lbx-p1" : "thumb-lbx-p2"} absolute inset-0`}
          >
            <p className="absolute top-[6px] left-[38px] text-[6px]">{index + 1} / 4</p>
            <span
              className={`absolute top-[18px] left-[38px] h-[56px] w-[100px] rounded-[4px] bg-gradient-to-br ${PHOTOS[index]!.tone}`}
            />
            <p className="absolute inset-x-0 top-[78px] text-center text-[6px] text-slate-200">
              {PHOTOS[index]!.caption}
            </p>
          </div>
        ))}
        <span className="absolute top-[3px] right-[38px] grid size-[11px] place-items-center rounded-full bg-white/10 text-[6px]">
          ✕
        </span>
        <span className="absolute top-[90px] left-[74px] grid size-[12px] place-items-center rounded-full bg-white/10 text-[7px]">
          ‹
        </span>
        <span className="absolute top-[90px] left-[90px] grid size-[12px] place-items-center rounded-full bg-white/10 text-[7px]">
          ›
        </span>
      </div>
      <ThumbCursor motion="thumb-lbx-cursor" />
    </ThumbStage>
  );
}
