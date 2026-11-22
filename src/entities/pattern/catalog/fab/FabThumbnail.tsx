import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MAILS = Array.from({ length: 12 }, (_, index) => `받은 메일 ${index + 1}`);

/** Same screen as FabDemo: scrolling down shrinks 새 메일 to an icon, scrolling up brings it back. */
export function FabThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <ul className="thumb-anim thumb-fab-list text-[6px]">
          {MAILS.map((mail) => (
            <li
              key={mail}
              className="h-[13px] border-b border-slate-100 px-[6px] leading-[13px] text-slate-700"
            >
              {mail}
            </li>
          ))}
        </ul>
        <span className="thumb-anim thumb-fab-wide absolute right-[6px] bottom-[6px] flex h-[16px] w-[40px] items-center justify-center gap-[2px] rounded-[5px] bg-blue-600 text-[6px] font-semibold text-white shadow-md">
          + 새 메일
        </span>
        <span className="thumb-anim thumb-fab-icon absolute right-[6px] bottom-[6px] grid size-[16px] place-items-center rounded-[5px] bg-blue-600 text-[8px] font-semibold text-white shadow-md opacity-0">
          +
        </span>
        <p className="thumb-anim thumb-fab-done absolute inset-x-[6px] top-[4px] rounded-full bg-slate-900 py-[2px] text-center text-[5.5px] text-white opacity-0">
          새 메일을 쓰고 있어요
        </p>
      </div>
      <ThumbCursor motion="thumb-fab-cursor" />
    </ThumbStage>
  );
}
