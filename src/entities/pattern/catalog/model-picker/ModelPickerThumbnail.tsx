import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MODELS = [
  ["빠른 모델", "짧은 질문에 알맞아요"],
  ["깊은 모델", "복잡한 질문에 알맞아요"],
  ["이미지 모델", "사진을 보고 답해요"],
];

/** Same header as ModelPickerDemo: open the menu → 깊은 모델 → it answers with that model. */
export function ModelPickerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[5px] text-[6.5px]">
        <p className="flex h-[14px] items-center justify-between rounded-md bg-white px-[4px] shadow-sm">
          <b className="grid">
            <span
              className="thumb-anim thumb-model-fast col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              빠른 모델 ▾
            </span>
            <span className="thumb-anim thumb-model-deep col-start-1 row-start-1">깊은 모델 ▾</span>
          </b>
          <span className="text-[5.5px] text-slate-500">새 대화</span>
        </p>
        <p className="mt-[16px] grid justify-items-center text-slate-600">
          <span
            className="thumb-anim thumb-model-fast col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            <span>빠른 모델</span>로 답해요
          </span>
          <span className="thumb-anim thumb-model-deep col-start-1 row-start-1">
            <span>깊은 모델</span>로 답해요
          </span>
        </p>
        <div
          className="thumb-anim thumb-model-menu absolute top-[21px] left-[5px] grid w-[90px] gap-[1px] rounded-md bg-white p-[2px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          {MODELS.map(([name, hint], index) => (
            <span
              key={name}
              className={`flex gap-[2px] rounded px-[3px] py-[1px] ${index === 1 ? "bg-slate-100" : ""}`}
            >
              <span className="w-[5px] text-blue-600">{index === 0 ? "✓" : ""}</span>
              <span>
                <b className="block">{name}</b>
                <span className="text-[5px] text-slate-500">{hint}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-model-cursor" />
    </ThumbStage>
  );
}
