import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PHOTO = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#fde68a"/></linearGradient></defs><rect width="320" height="200" fill="url(#s)"/><circle cx="240" cy="70" r="22" fill="#fff7ed"/><path d="M0 120 70 70l50 35 60-55 70 60 70-30v50H0Z" fill="#475569"/><path d="M0 135h320v65H0Z" fill="#0e7490"/><path d="M20 150h60M120 165h80M230 152h60" stroke="#a5f3fc" stroke-width="3" stroke-linecap="round"/></svg>`,
)}`;
const PREVIEW = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3" shape-rendering="crispEdges"><rect width="4" height="1" fill="#a5d8f0"/><rect y="1" width="4" height="1" fill="#8a94a0"/><rect x="3" y="1" width="1" height="1" fill="#c9c6a8"/><rect y="2" width="4" height="1" fill="#2a8094"/></svg>`,
)}`;

/** Same photo as BlurUpImageDemo: blurred preview → sharp photo, then 다시 불러오기 repeats it. */
export function BlurUpImageThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[28px] h-[75px] w-[120px] overflow-hidden rounded-md bg-slate-200">
        <img
          src={PREVIEW}
          alt=""
          className="absolute inset-0 size-full scale-110 object-cover blur-[5px]"
        />
        <img
          src={PHOTO}
          alt=""
          className="thumb-anim thumb-blur-photo absolute inset-0 size-full object-cover"
        />
      </div>
      <p className="absolute top-[89px] left-[28px] text-[7px]">동해 바다</p>
      <span className="absolute top-[86px] left-[96px] grid h-[14px] w-[52px] place-items-center rounded border border-slate-300 text-[6px] font-medium">
        다시 불러오기
      </span>
      <ThumbCursor motion="thumb-blur-cursor" />
    </ThumbStage>
  );
}
