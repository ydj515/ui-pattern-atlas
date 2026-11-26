import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "사진가들이 필름 슬라이드를 올려 놓고 보던, 아래에서 빛이 나오는 상자(라이트박스)에서 온 이름이에요. 2005년 로케시 다카르(Lokesh Dhakar)가 만든 자바스크립트 라이브러리 Lightbox가 이 이름을 웹에 퍼뜨렸어요.",
  whenToUse: [
    "사진 목록에서 한 장을 자세히 볼 때",
    "여러 장을 크게 넘겨 볼 때",
    "작은 화면에서 사진을 키워야 할 때",
  ],
  whenNotToUse: [
    "사진이 이미 충분히 클 때",
    "사진과 함께 많은 정보를 봐야 할 때(상세 페이지 사용)",
    "사진 한 장을 고르기만 할 때(이미지 갤러리 사용)",
  ],
  alternatives: [
    { name: "이미지 갤러리", slug: "image-gallery", reason: "페이지 안에서 바꿔 볼 때" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "사진이 아닌 내용" },
  ],
  accessibility: [
    "기본 dialog를 showModal로 열어 뒤 화면을 막고 포커스를 가둡니다.",
    "←/→로 사진을 넘기고, Esc로 닫으면 누른 썸네일로 포커스가 돌아옵니다.",
    '"2 / 4" 순서를 aria-live로 알리고 사진 설명을 figcaption으로 보여 줍니다.',
    '썸네일 버튼 이름은 "서울숲 길 크게 보기"처럼 무엇을 여는지 말합니다.',
  ],
};
