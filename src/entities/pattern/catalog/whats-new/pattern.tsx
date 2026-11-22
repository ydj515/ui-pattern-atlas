import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { WhatsNewThumbnail } from "@/entities/pattern/catalog/whats-new/WhatsNewThumbnail";

export const whatsNewPattern: Pattern = {
  slug: "whats-new",
  name: "What's New",
  nameKo: "새 기능 소개",
  aliases: ["업데이트 안내", "새로워진 점", "release notes", "changelog modal"],
  category: "onboarding",
  summary: "업데이트 후 바뀐 점 안내",
  description:
    "업데이트 직후 한 번, 바뀐 점을 세 개 이내로 쉬운 말로 보여 주는 패턴입니다. 닫은 뒤에도 새 소식 버튼으로 다시 볼 수 있습니다.",
  whenToUse: ["사용 방법이 달라지는 기능 추가", "사용자가 반길 만한 개선", "버전마다 한 번만"],
  whenNotToUse: [
    "버그 수정 목록처럼 사용자에게 의미 없는 변경",
    "기능 하나만 알리면 될 때(코치마크 사용)",
    "앱을 열 때마다",
  ],
  alternatives: [
    { name: "코치마크", slug: "coach-mark", reason: "바뀐 버튼 하나를 짚을 때" },
    { name: "알림 배너", slug: "alert-banner", reason: "화면 위에 짧게 알릴 때" },
  ],
  accessibility: [
    "role=dialog와 제목으로 이름을 붙입니다.",
    "열리면 확인 버튼에 포커스가 갑니다.",
    "항목은 목록으로 묶어 몇 개인지 함께 전달합니다.",
    "버전은 글자로 함께 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "role=dialog", "Release notes", "ul"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/whats-new/WhatsNewDemo").then((m) => m.WhatsNewDemo),
  Thumbnail: WhatsNewThumbnail,
  sources: [
    {
      fileName: "WhatsNew.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/whats-new/WhatsNew.tsx?raw"),
    },
    {
      fileName: "WhatsNewDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/whats-new/WhatsNewDemo.tsx?raw"),
    },
  ],
};
