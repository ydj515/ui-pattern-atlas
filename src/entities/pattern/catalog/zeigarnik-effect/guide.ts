import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "1927년 심리학자 블루마 자이가르닉(Bluma Zeigarnik)의 연구에서 이름을 따왔어요. 식당 종업원이 계산 전 주문은 잘 기억하다가 계산이 끝나면 잊는다는 관찰에서 시작된 것으로 알려져 있어요.",
  whenToUse: [
    "프로필, 설정 체크리스트처럼 단계가 있는 일",
    "남은 일이 무엇인지 보여 줄 때",
    "중간에 멈춘 작업을 이어 하게 할 때",
  ],
  whenNotToUse: [
    "필요 없는 정보를 채우게 하려고 진행률을 띄울 때",
    "100%를 일부러 늦게 만들 때",
    "끝없이 새 할 일을 붙일 때",
  ],
  alternatives: [
    { name: "설정 체크리스트", slug: "setup-checklist", reason: "처음 할 일 목록" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "진행률 표시" },
  ],
  accessibility: [
    "진행률은 숫자와 글로 함께 보여 줍니다.",
    "막대는 progress 요소나 role=progressbar로 만듭니다.",
    "남은 일은 바로 할 수 있는 링크로 둡니다.",
    "색만으로 진행을 알리지 않습니다.",
  ],
};
