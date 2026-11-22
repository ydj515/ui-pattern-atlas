import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PageTransitionThumbnail } from "@/entities/pattern/catalog/page-transition/PageTransitionThumbnail";

export const pageTransitionPattern: Pattern = {
  slug: "page-transition",
  name: "Page Transition",
  nameKo: "페이지 전환",
  aliases: ["화면 전환", "푸시 전환", "페이드 스루", "screen transition", "navigation transition"],
  category: "motion",
  summary: "새 화면이 어디서 왔는지 보여 주는 전환",
  description:
    "목록에서 상세로 갈 때는 옆에서 밀려 들어오고, 돌아갈 때는 반대로 움직여 앞뒤 관계를 보여 주는 패턴입니다. 관계가 없는 화면은 페이드 스루, 잠깐 띄우는 화면은 아래에서 올라오는 모달 전환을 씁니다.",
  whenToUse: [
    "목록과 상세처럼 깊이가 있는 화면 이동",
    "탭이나 섹션을 바꿀 때(페이드 스루)",
    "작업 화면을 잠깐 띄울 때(모달)",
  ],
  whenNotToUse: [
    "같은 화면 안의 작은 변화(해당 요소만 움직이기)",
    "빠르게 여러 번 오가는 화면(전환이 기다림이 됨)",
    "300ms를 넘는 긴 전환",
  ],
  alternatives: [
    {
      name: "공유 요소 전환",
      slug: "shared-element-transition",
      reason: "누른 요소가 다음 화면으로 이어질 때",
    },
    { name: "줌 전환", slug: "zoom-transition", reason: "아이콘이나 카드에서 화면이 커져 나올 때" },
  ],
  accessibility: [
    "화면이 바뀌면 새 화면으로 포커스를 옮겨 키보드와 화면 읽기 사용자가 위치를 잃지 않습니다.",
    "돌아가기는 반대 방향으로 움직여 앞뒤 관계를 일관되게 보여 줍니다.",
    "동작 줄이기에서는 모든 전환을 짧은 페이드로 바꿉니다.",
    "전환 중에도 내용은 즉시 바뀌므로 애니메이션을 기다리지 않아도 됩니다.",
  ],
  tags: [...BASE_TAGS, "Web Animations API", "Focus management", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/page-transition/PageTransitionDemo").then(
      (m) => m.PageTransitionDemo,
    ),
  Thumbnail: PageTransitionThumbnail,
  sources: [
    {
      fileName: "PageTransition.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/page-transition/PageTransition.tsx?raw"),
    },
    {
      fileName: "PageTransitionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/page-transition/PageTransitionDemo.tsx?raw"),
    },
  ],
};
