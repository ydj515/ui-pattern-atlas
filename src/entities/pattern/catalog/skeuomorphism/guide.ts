import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "그리스어 skeuos(그릇, 도구)와 morphē(모양)를 합친 말로, 실제 물건의 모양과 질감을 흉내 낸다는 뜻이에요. 2013년 iOS 7 전까지 애플 앱의 가죽, 나무 질감이 대표적인 예예요.",
  whenToUse: [
    "실제 물건의 쓰임을 그대로 옮긴 화면(계산기, 녹음기)",
    "새로운 디지털 개념을 익숙한 물건으로 설명할 때",
    "향수를 주는 브랜드 표현",
  ],
  whenNotToUse: [
    "정보가 많은 업무 화면(장식이 내용을 가림)",
    "화면 크기가 다양한 반응형 서비스",
    "질감 이미지 때문에 로딩이 무거워질 때",
  ],
  alternatives: [
    { name: "플랫", slug: "flat-design", reason: "질감을 모두 뺀 면" },
    { name: "3D 아이콘", slug: "three-d-icon", reason: "아이콘에만 입체를 줄 때" },
  ],
  accessibility: [
    "질감 위 글자에는 그림자를 더해도 대비를 따로 확인합니다.",
    "광택과 눌림 외에 글자로 상태를 알립니다.",
    "장식 이미지는 aria-hidden입니다.",
    "포커스 링을 보여 줍니다.",
  ],
};
