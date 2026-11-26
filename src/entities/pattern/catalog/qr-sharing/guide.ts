import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "모임, 행사처럼 같은 자리에 있는 사람에게 링크를 넘길 때",
    "화면을 보여 주는 쪽이 데스크톱일 때",
    "입력하기 긴 주소",
  ],
  whenNotToUse: [
    "멀리 있는 사람에게 보낼 때(공유 시트 사용)",
    "42바이트를 넘는 긴 주소(라이브러리 사용 또는 주소 줄이기)",
    "코드만 있고 주소를 숨길 때",
  ],
  alternatives: [
    { name: "공유 시트", slug: "share-sheet", reason: "기기 앱으로 보낼 때" },
    { name: "근처 공유", slug: "nearby-share", reason: "가까운 기기로 바로 보낼 때" },
  ],
  accessibility: [
    "QR 코드는 role=img와 이름(모임 초대 QR 코드)을 가집니다.",
    "같은 주소를 글자로 함께 보여 줍니다.",
    "읽기 쉽도록 흰 바탕과 여백 4칸을 둡니다.",
    "코드 크기는 144px 이상으로 둡니다.",
  ],
};
