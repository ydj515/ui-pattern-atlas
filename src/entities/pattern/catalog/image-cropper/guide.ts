import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "프로필 사진, 썸네일처럼 정해진 비율로 잘라야 할 때",
    "올린 사진의 얼굴 위치가 제각각일 때",
    "결과가 작게 보여 미리 확인이 필요할 때",
  ],
  whenNotToUse: [
    "사진 편집이 주된 기능일 때(전용 편집기 사용)",
    "원본 그대로 보여 줘야 할 때",
    "자동 얼굴 인식으로 충분할 때",
  ],
  alternatives: [{ name: "파일 업로드", slug: "file-upload", reason: "사진을 고르는 앞 단계" }],
  accessibility: [
    "자르기 영역은 포커스를 받고 화살표 키로 사진을 옮길 수 있어 포인터 없이도 씁니다.",
    "확대는 이름이 있는 range 입력입니다.",
    "사진은 항상 영역을 가득 채우도록 이동 범위를 제한합니다.",
    "어두운 바깥 영역은 장식이라 aria-hidden입니다.",
  ],
};
