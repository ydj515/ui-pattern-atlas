import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const wishlistBookmarkPattern: Pattern = {
  slug: "wishlist-bookmark",
  name: "Wishlist / Bookmark",
  nameKo: "찜과 북마크",
  aliases: ["찜하기", "북마크", "저장", "save for later", "wishlist"],
  category: "reaction-share",
  summary: "나중에 볼 항목을 내 목록에 저장",
  description:
    "상품이나 글을 나만 보는 목록에 저장하는 토글입니다. 공개 반응인 좋아요와 달리 내 목록에 담기므로, 목록 개수와 담았다는 짧은 안내를 함께 보여 줍니다.",
  whenToUse: [
    "쇼핑, 숙소처럼 비교하고 나중에 고르는 서비스",
    "다시 찾기 어려운 콘텐츠",
    "목록을 따로 볼 수 있을 때",
  ],
  whenNotToUse: [
    "다른 사람에게 보이는 공감(좋아요 사용)",
    "저장한 것을 볼 곳이 없을 때",
    "장바구니처럼 구매 단계가 다를 때",
  ],
  alternatives: [
    { name: "좋아요", slug: "like-button", reason: "공개적으로 공감할 때" },
    { name: "마이크로 인터랙션", slug: "micro-interaction", reason: "저장 버튼의 작은 반응" },
  ],
  accessibility: [
    "aria-pressed와 함께 이름에 상품 이름과 찜하기, 찜 해제를 넣습니다.",
    "결과는 role=status로 알립니다.",
    "하트는 aria-hidden입니다.",
    "버튼은 사진 위에서도 보이도록 흰 바탕을 둡니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "role=status", "Saved list"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/wishlist-bookmark/WishlistButtonDemo").then(
      (m) => m.WishlistButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/wishlist-bookmark/WishlistButtonThumbnail").then(
      (m) => m.WishlistButtonThumbnail,
    ),
  sources: [
    {
      fileName: "WishlistButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/wishlist-bookmark/WishlistButton.tsx?raw"),
    },
    {
      fileName: "WishlistButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/wishlist-bookmark/WishlistButtonDemo.tsx?raw"),
    },
  ],
};
