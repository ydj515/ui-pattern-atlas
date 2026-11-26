import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "초대 링크, 공유 주소처럼 보여 주고 복사하게 할 때",
    "주소를 확인한 뒤 복사해야 할 때",
    "공유 시트의 대체 방법",
  ],
  whenNotToUse: [
    "코드, 번호처럼 주소가 아닌 값(복사 버튼 사용)",
    "주소를 보여 줄 자리가 없을 때",
    "복사할 필요 없이 바로 열면 될 때",
  ],
  alternatives: [
    { name: "복사 버튼", slug: "copy-button", reason: "코드나 번호를 복사할 때" },
    { name: "공유 시트", slug: "share-sheet", reason: "기기의 앱으로 보낼 때" },
  ],
  accessibility: [
    "주소 칸은 label과 연결된 읽기 전용 입력입니다.",
    "포커스가 가면 주소 전체가 선택됩니다.",
    "결과는 role=status로 알리고 실패하면 직접 복사를 안내합니다.",
    "버튼은 글자로 복사라고 씁니다.",
  ],
};
