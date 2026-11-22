import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MENU = ["개요", "멤버", "결제", "설정"] as const;

function Toggle({ wide }: { readonly wide: boolean }) {
  return (
    <span className="absolute top-[3px] left-[54px] flex gap-[3px] text-[5px]">
      <span
        className={`rounded-[2px] border px-[3px] py-[1px] ${wide ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300"}`}
      >
        넓은 화면
      </span>
      <span
        className={`rounded-[2px] border px-[3px] py-[1px] ${wide ? "border-slate-300" : "border-slate-900 bg-slate-900 text-white"}`}
      >
        좁은 화면
      </span>
    </span>
  );
}

/** Same workspace as SidebarLayoutDemo: the menu sits on the left, then moves on top when narrow. */
export function SidebarLayoutThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-slay-wide absolute inset-0 opacity-0">
        <Toggle wide />
        <div className="absolute top-[18px] left-[18px] h-[86px] w-[140px] overflow-hidden rounded-md border border-slate-200">
          <div className="absolute inset-y-0 left-0 w-[40px] border-r border-slate-200 bg-slate-50 p-[3px]">
            {MENU.map((item, index) => (
              <p
                key={item}
                className={`mb-[2px] h-[10px] rounded-[2px] px-[3px] text-[5.5px] leading-[10px] ${index === 0 ? "bg-slate-900 text-white" : "text-slate-600"}`}
              >
                {item}
              </p>
            ))}
          </div>
          <p className="absolute top-[6px] left-[46px] text-[6.5px] font-semibold">개요</p>
          <p className="absolute top-[16px] left-[46px] text-[5px] text-slate-600">
            개요 화면의 내용이에요.
          </p>
        </div>
      </div>
      {["개요", "결제"].map((current, layer) => (
        <div
          key={current}
          className={`thumb-anim ${layer === 0 ? "thumb-slay-narrow opacity-0" : "thumb-slay-pay"} absolute inset-0`}
        >
          <Toggle wide={false} />
          <div className="absolute top-[18px] left-[48px] h-[86px] w-[80px] overflow-hidden rounded-md border border-slate-200">
            <div className="flex gap-[2px] border-b border-slate-200 bg-slate-50 p-[3px]">
              {MENU.map((item) => (
                <span
                  key={item}
                  className={`h-[10px] rounded-[2px] px-[3px] text-[5px] leading-[10px] ${item === current ? "bg-slate-900 text-white" : "text-slate-600"}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="m-[5px] text-[6.5px] font-semibold">{current}</p>
            <p className="mx-[5px] text-[5px] text-slate-600">{current} 화면의 내용이에요.</p>
          </div>
        </div>
      ))}
      <ThumbCursor motion="thumb-slay-cursor" />
    </ThumbStage>
  );
}
