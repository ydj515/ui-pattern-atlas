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
  tags: [...BASE_TAGS, "aria-pressed", "role=status", "Saved list"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/wishlist-bookmark/guide").then((m) => m.guide),
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
