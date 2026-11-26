import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "다른 사람에게 이름이 보이는 서비스",
    "필요한 정보가 닉네임과 사진 정도일 때",
    "건너뛰어도 쓸 수 있을 때",
  ],
  whenNotToUse: [
    "이름이 필요 없는 서비스",
    "생일, 주소처럼 지금 필요 없는 정보를 함께 받을 때",
    "건너뛸 수 없게 막을 때",
  ],
  alternatives: [
    { name: "아바타", slug: "avatar", reason: "프로필 사진 표시" },
    { name: "인라인 오류", slug: "inline-validation", reason: "입력 규칙을 바로 알릴 때" },
  ],
  accessibility: [
    "닉네임 칸은 label과 연결하고 규칙과 글자 수를 aria-describedby로 묶습니다.",
    "규칙에 맞지 않으면 aria-invalid로 알립니다.",
    "사진 선택은 label로 감싼 파일 입력이라 키보드로 열 수 있습니다.",
    "아바타 미리 보기는 장식이라 aria-hidden입니다.",
  ],
};
