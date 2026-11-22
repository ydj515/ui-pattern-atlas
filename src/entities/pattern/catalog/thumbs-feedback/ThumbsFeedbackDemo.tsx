import { ThumbsFeedback } from "@/shared/ui/patterns/thumbs-feedback/ThumbsFeedback";

export function ThumbsFeedbackDemo() {
  return (
    <article className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">비밀번호를 바꾸려면</h3>
      <p className="text-sm text-slate-600">내 정보 → 보안에서 새 비밀번호를 두 번 입력하세요.</p>
      <ThumbsFeedback
        question="이 도움말이 도움이 됐나요?"
        yesLabel="네"
        noLabel="아니요"
        thanks="의견 고마워요"
        sendLabel="보내기"
        reasons={["정보가 틀려요", "설명이 어려워요", "찾던 내용이 아니에요"]}
        onSubmit={() => {}}
      />
    </article>
  );
}
