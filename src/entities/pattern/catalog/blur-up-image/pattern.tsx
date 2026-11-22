import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BlurUpImageThumbnail } from "@/entities/pattern/catalog/blur-up-image/BlurUpImageThumbnail";

export const blurUpImagePattern: Pattern = {
  slug: "blur-up-image",
  name: "Blur-up Image",
  nameKo: "흐린 이미지 로딩",
  aliases: ["블러 업", "LQIP", "프로그레시브 이미지", "image placeholder", "blurhash"],
  category: "loading",
  summary: "흐린 미리보기에서 선명해지는 이미지",
  description:
    "아주 작은 미리보기 이미지를 흐리게 먼저 보여 주고, 원본이 도착하면 부드럽게 바꾸는 패턴입니다. 빈 회색 상자 대신 사진의 색과 구도를 먼저 보여 줘 기다림이 짧게 느껴집니다.",
  whenToUse: [
    "사진이 화면의 중심인 갤러리, 상품, 기사 이미지",
    "느린 네트워크에서도 레이아웃과 분위기를 먼저 잡아야 할 때",
    "서버가 작은 미리보기를 함께 내려줄 수 있을 때",
  ],
  whenNotToUse: [
    "아이콘이나 로고처럼 작은 이미지",
    "미리보기를 만들 수 없는 사용자 업로드 직후",
    "정확한 내용이 중요한 이미지(흐린 상태에서 잘못 읽을 수 있음)",
  ],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "이미지 외 내용까지 자리만 먼저 잡을 때" },
  ],
  accessibility: [
    '흐린 미리보기는 장식이라 alt=""와 aria-hidden으로 두고, 원본 이미지에만 대체 텍스트를 씁니다.',
    "처음부터 최종 비율로 자리를 잡아 이미지가 도착해도 레이아웃이 밀리지 않습니다(CLS).",
    "선명해지는 전환은 동작 줄이기 설정에서 바로 바뀝니다.",
    "캐시된 이미지는 onLoad보다 먼저 끝날 수 있어 complete 값도 확인합니다.",
  ],
  tags: [...BASE_TAGS, "Images", "CLS"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/blur-up-image/BlurUpImageDemo").then(
      (m) => m.BlurUpImageDemo,
    ),
  Thumbnail: BlurUpImageThumbnail,
  sources: [
    {
      fileName: "BlurUpImage.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/blur-up-image/BlurUpImage.tsx?raw"),
    },
    {
      fileName: "BlurUpImageDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/blur-up-image/BlurUpImageDemo.tsx?raw"),
    },
  ],
};
