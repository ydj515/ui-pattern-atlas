import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same team as InviteDialogDemo: type an address → Enter makes a chip → 1명 초대하기. */
export function InviteDialogThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[4px] left-[12px] flex h-[18px] w-[152px] items-center justify-between rounded-md border border-slate-200 px-[6px] text-[6.5px]">
        <b>디자인 팀</b>
        <span className="rounded border border-slate-200 px-[3px] text-[5.5px]">초대하기</span>
      </p>
      <p
        className="thumb-anim thumb-inv-done absolute top-[30px] left-[14px] text-[6.5px] text-emerald-700"
        style={{ opacity: 0 }}
      >
        1명에게 초대를 보냈어요
      </p>
      <div className="thumb-anim thumb-inv-dialog absolute top-[26px] left-[12px] h-[80px] w-[152px] rounded-lg bg-white p-[6px] text-[6px] shadow-xl ring-1 ring-slate-200">
        <p className="text-[7.5px] font-bold">팀에 초대하기</p>
        <p className="mt-[3px] text-[5.5px] text-slate-600">이메일</p>
        <span className="relative mt-[1px] block h-[14px] rounded border border-slate-300 px-[3px] leading-[13px]">
          <span className="thumb-anim thumb-inv-t0 absolute text-slate-400" style={{ opacity: 0 }}>
            name@example.com
          </span>
          <span className="thumb-anim thumb-inv-t1 absolute" style={{ opacity: 0 }}>
            sky@
          </span>
          <span className="thumb-anim thumb-inv-t2 absolute" style={{ opacity: 0 }}>
            sky@example.com
          </span>
          <span className="thumb-anim thumb-inv-chip absolute top-[2px] rounded-full bg-slate-100 px-[4px] text-[5.5px] leading-[9px]">
            sky@example.com ×
          </span>
        </span>
        <p className="absolute inset-x-[6px] bottom-[6px] flex justify-end gap-[3px]">
          <span className="px-[3px] py-[1px] text-slate-600">닫기</span>
          <span className="relative grid rounded bg-slate-300 px-[4px] py-[1px] font-semibold text-white">
            <span className="thumb-anim thumb-inv-chip absolute inset-0 rounded bg-slate-900" />
            <span
              className="thumb-anim thumb-inv-zero relative col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              0명 초대하기
            </span>
            <span className="thumb-anim thumb-inv-chip relative col-start-1 row-start-1">
              1명 초대하기
            </span>
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-inv-cursor" />
    </ThumbStage>
  );
}
