import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PHOTO = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fde68a"/><circle cx="160" cy="40" r="18" fill="#fff7ed"/><path d="M0 150 60 110l40 25 50-40 50 35v70H0Z" fill="#86efac"/><circle cx="100" cy="88" r="26" fill="#78350f"/><circle cx="100" cy="92" r="20" fill="#fcd9b6"/><path d="M62 170c4-30 20-44 38-44s34 14 38 44Z" fill="#2563eb"/></svg>`,
)}`;

/** Same photo as ImageCropperDemo: drag it into place, then zoom → the previews follow. */
export function ImageCropperThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[20px] size-[84px] overflow-hidden rounded-md bg-slate-200">
        <img
          src={PHOTO}
          alt=""
          className="thumb-anim thumb-ic-img absolute inset-0 size-full"
          style={{ transform: "translate(10px, -8px) scale(2)" }}
        />
        <span className="absolute inset-0 rounded-full shadow-[0_0_0_60px_rgba(15,23,42,0.55)]" />
      </div>
      <p className="absolute top-[96px] left-[20px] text-[6px] text-slate-600">확대</p>
      <span className="absolute top-[99px] left-[36px] h-[2px] w-[68px] rounded-full bg-slate-300" />
      <span className="thumb-anim thumb-ic-zoom absolute top-[96px] left-[66px] size-[8px] rounded-full border-2 border-blue-600 bg-white" />

      <p className="absolute top-[8px] left-[118px] w-[40px] text-center text-[6px] text-slate-500">
        미리 보기
      </p>
      <div className="absolute top-[20px] left-[124px] size-[28px] overflow-hidden rounded-full bg-slate-200">
        <img
          src={PHOTO}
          alt=""
          className="thumb-anim thumb-ic-p1 absolute inset-0 size-full"
          style={{ transform: "translate(3.3px, -2.7px) scale(2)" }}
        />
      </div>
      <div className="absolute top-[54px] left-[131px] size-[14px] overflow-hidden rounded-full bg-slate-200">
        <img
          src={PHOTO}
          alt=""
          className="thumb-anim thumb-ic-p2 absolute inset-0 size-full"
          style={{ transform: "translate(1.7px, -1.3px) scale(2)" }}
        />
      </div>
      <ThumbCursor motion="thumb-ic-cursor" />
    </ThumbStage>
  );
}
