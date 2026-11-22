import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Kebab() {
  return (
    <svg viewBox="0 0 24 24" className="size-[8px] fill-slate-700">
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

/** Same files as KebabDemo: ⋮ on 회의록.pdf → 삭제 → the row goes. */
export function KebabThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px] p-[6px]">
        <p className="text-[7.5px] font-bold">내 파일</p>
        <div className="relative mt-[3px]">
          <p
            className="thumb-anim thumb-keb-row0 flex h-[16px] items-center justify-between border-b border-slate-100"
            style={{ opacity: 0 }}
          >
            회의록.pdf <Kebab />
          </p>
          <div className="thumb-anim thumb-keb-rest" style={{ transform: "translateY(-16px)" }}>
            {["예산표.xlsx", "사진.png"].map((file) => (
              <p
                key={file}
                className="flex h-[16px] items-center justify-between border-b border-slate-100"
              >
                {file} <Kebab />
              </p>
            ))}
          </div>
          <div
            className="thumb-anim thumb-keb-menu absolute top-[14px] right-0 grid w-[54px] rounded-md bg-white p-[2px] shadow-lg ring-1 ring-slate-200"
            style={{ opacity: 0 }}
          >
            <span className="px-[3px] py-[2px]">이름 바꾸기</span>
            <span className="rounded bg-slate-100 px-[3px] py-[2px] text-rose-600">삭제</span>
          </div>
        </div>
        <p className="thumb-anim thumb-keb-msg absolute bottom-[6px] left-[6px] text-[6px] text-slate-600">
          삭제했어요: 회의록.pdf
        </p>
      </div>
      <ThumbCursor motion="thumb-keb-cursor" />
    </ThumbStage>
  );
}
