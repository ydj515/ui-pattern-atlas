import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사진, 연락처처럼 일부만 허용할 수 있는 권한",
    "일부만으로도 기능이 동작할 때",
    "범위를 바꾸는 시스템 화면을 열 수 있을 때",
  ],
  whenNotToUse: [
    "전체 허용을 거듭 조를 때",
    "일부만 허용했다고 기능을 막을 때",
    "범위를 바꿀 방법을 숨길 때",
  ],
  alternatives: [
    { name: "시스템 권한 요청", slug: "system-permission-dialog", reason: "처음 권한을 받을 때" },
    { name: "파일 업로드", slug: "file-upload", reason: "권한 없이 파일을 고르게 할 때" },
  ],
  accessibility: [
    "몇 장을 볼 수 있는지는 role=status 한 줄로 알립니다.",
    "사진 버튼마다 몇 번째 사진인지 이름을 붙입니다.",
    "선택 화면의 체크박스는 fieldset과 legend로 묶습니다.",
    "선택한 사진은 테두리와 체크 표시 두 가지로 보여 줍니다.",
  ],
};
