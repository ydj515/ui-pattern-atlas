import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same tray as AttachmentTrayDemo: 회의록.pdf finishes uploading; 사진.png is too big and gets removed. */
export function AttachmentTrayThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[6px] text-[6px]">
        <div className="flex gap-[4px]">
          <span className="relative flex w-[68px] items-center gap-[3px] overflow-hidden rounded-md border border-slate-200 px-[3px] py-[2px]">
            <span className="grid size-[11px] place-items-center rounded-[2px] bg-slate-100 text-[4px] font-bold">
              PDF
            </span>
            <span className="min-w-0 flex-1">
              <b className="block text-[5.5px]">회의록.pdf</b>
              <span className="grid text-[5px] text-slate-500">
                <span
                  className="thumb-anim thumb-attach-p20 col-start-1 row-start-1"
                  style={{ opacity: 0 }}
                >
                  올리는 중 20%
                </span>
                <span
                  className="thumb-anim thumb-attach-p60 col-start-1 row-start-1"
                  style={{ opacity: 0 }}
                >
                  올리는 중 60%
                </span>
                <span className="thumb-anim thumb-attach-done col-start-1 row-start-1">1.2MB</span>
              </span>
            </span>
            <span className="text-slate-500">×</span>
            <span
              className="thumb-anim thumb-attach-bar absolute bottom-0 left-0 h-[1px] w-full origin-left bg-blue-600"
              style={{ opacity: 0 }}
            />
          </span>
          <span
            className="thumb-anim thumb-attach-bad flex w-[68px] items-center gap-[3px] rounded-md border border-rose-300 bg-rose-50 px-[3px] py-[2px]"
            style={{ opacity: 0 }}
          >
            <span className="grid size-[11px] place-items-center rounded-[2px] bg-slate-100 text-[4px] font-bold">
              PNG
            </span>
            <span className="min-w-0 flex-1">
              <b className="block text-[5.5px]">사진.png</b>
              <span className="text-[5px] text-rose-600">10MB를 넘어요</span>
            </span>
            <span className="text-slate-500">×</span>
          </span>
        </div>
        <div className="mt-[6px] flex items-center gap-[4px] rounded-[8px] border border-slate-300 px-[4px] py-[3px]">
          <span>파일 추가</span>
          <span className="flex-1 text-slate-400">이 자료로 요약해 줘</span>
          <span className="relative rounded-full bg-slate-900 px-[4px] font-semibold text-white">
            <span
              className="thumb-anim thumb-attach-blocked absolute inset-0 rounded-full bg-slate-300"
              style={{ opacity: 0 }}
            />
            <span className="relative">보내기</span>
          </span>
        </div>
        <p className="thumb-anim thumb-attach-msg mt-[4px] text-slate-600" style={{ opacity: 0 }}>
          보낼 수 없는 파일을 빼 주세요
        </p>
      </div>
      <ThumbCursor motion="thumb-attach-cursor" />
    </ThumbStage>
  );
}
