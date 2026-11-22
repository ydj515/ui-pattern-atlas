import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PHOTOS = [
  { alt: "머그컵 정면", tone: "from-rose-200 to-rose-400", shape: "rounded-b-[8px]" },
  {
    alt: "머그컵 옆면과 손잡이",
    tone: "from-rose-200 to-rose-400",
    shape: "rounded-b-[8px] rounded-r-full",
  },
  { alt: "위에서 본 머그컵", tone: "from-rose-100 to-rose-300", shape: "rounded-full" },
  { alt: "포장 상자", tone: "from-amber-100 to-amber-300", shape: "rounded-[2px]" },
] as const;

/** Same photos as ImageGalleryDemo: pick the second, then the third thumbnail. */
export function ImageGalleryThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[54px] size-[68px] overflow-hidden rounded-md bg-slate-50">
        {PHOTOS.map((photo, index) => (
          <span
            key={index}
            className={`thumb-anim thumb-ig-p${index} absolute inset-0 grid place-items-center bg-slate-50 ${index === 2 ? "" : "opacity-0"}`}
          >
            <span className={`block size-[34px] bg-gradient-to-br ${photo.tone} ${photo.shape}`} />
          </span>
        ))}
      </div>
      {PHOTOS.slice(0, 3).map((photo, index) => (
        <p
          key={photo.alt}
          className={`thumb-anim thumb-ig-p${index} absolute inset-x-0 top-[73px] text-center text-[5px] text-slate-500 ${index === 2 ? "" : "opacity-0"}`}
        >
          {photo.alt}
        </p>
      ))}
      {PHOTOS.map((photo, index) => (
        <span
          key={index}
          className="absolute top-[82px] grid size-[14px] place-items-center rounded-[3px] bg-slate-50"
          style={{ left: 54 + index * 18 }}
        >
          <span className={`block size-[6px] bg-gradient-to-br ${photo.tone} ${photo.shape}`} />
          {index < 3 ? (
            <span
              className={`thumb-anim thumb-ig-p${index} absolute -inset-[1.5px] rounded-[4px] ring-[1.5px] ring-slate-900 ${index === 2 ? "" : "opacity-0"}`}
            />
          ) : null}
        </span>
      ))}
      <ThumbCursor motion="thumb-ig-cursor" />
    </ThumbStage>
  );
}
