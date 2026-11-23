import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TONES = ["bg-rose-500", "bg-rose-300", "bg-slate-300", "bg-blue-300", "bg-blue-600"];
const VERSIONS = [
  [
    [["배송이 빠르고 포장이 꼼꼼했나요?", [8, 14, 40, 26, 12]]],
    "빠름과 꼼꼼함이 섞여 무엇이 문제인지 알 수 없어요",
  ],
  [
    [
      ["배송이 빨랐나요?", [3, 6, 15, 44, 32]],
      ["포장이 꼼꼼했나요?", [18, 30, 28, 16, 8]],
    ],
    "나눠 물으니 포장에 불만이 몰려 있어요",
  ],
] as const;

/** Same survey as SurveyDemo: one question asking two things hides the problem; split, it shows up in 포장. */
export function SurveyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-ux-survey-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">한 문항</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">나눈 문항</span>
        </p>
        <p className="mt-[3px] text-[5px] text-slate-500">응답 320명</p>
        {VERSIONS.map(([questions, note], index) => (
          <div
            key={note}
            className={`thumb-anim thumb-ux-survey-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[30px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            {questions.map(([text, shares]) => (
              <div key={text} className="mt-[3px]">
                <p>{text}</p>
                <p className="mt-[2px] flex h-[5px] gap-[1px]">
                  {shares.map((share, tone) => (
                    <span
                      key={tone}
                      className={`first:rounded-l-[2px] last:rounded-r-[2px] ${TONES[tone]}`}
                      style={{ flexGrow: share, flexBasis: 0 }}
                    />
                  ))}
                </p>
                <p className="mt-[1px] flex justify-between text-[5px] text-slate-500">
                  <span>아니다 {shares[0] + shares[1]}%</span>
                  <span>그렇다 {shares[3] + shares[4]}%</span>
                </p>
              </div>
            ))}
            <p className="mt-[3px] text-[5px] text-slate-600">{note}</p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-ux-survey-cursor" />
    </ThumbStage>
  );
}
