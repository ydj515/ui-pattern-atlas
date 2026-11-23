import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { LightboxThumbnail } from "@/entities/pattern/catalog/lightbox/LightboxThumbnail";

export const lightboxPattern: Pattern = {
  slug: "lightbox",
  name: "Lightbox",
  nameKo: "라이트박스",
  aliases: ["사진 크게 보기", "이미지 뷰어", "image viewer", "photo modal"],
  category: "card-gallery",
  summary: "이미지를 크게 띄워 넘겨 보기",
  description:
    "작은 사진을 누르면 화면 위에 크게 띄우고, 좌우로 넘기며 보는 패턴입니다. 몇 번째 사진인지와 설명을 함께 보여 주고, 닫으면 누른 사진으로 돌아갑니다.",
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
  tags: [...BASE_TAGS, "dialog element", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/lightbox/LightboxDemo").then((m) => m.LightboxDemo),
  Thumbnail: LightboxThumbnail,
  sources: [
    {
      fileName: "Lightbox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/lightbox/Lightbox.tsx?raw"),
    },
    {
      fileName: "LightboxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/lightbox/LightboxDemo.tsx?raw"),
    },
  ],
};
