import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PresenceThumbnail } from "@/entities/pattern/catalog/presence/PresenceThumbnail";

export const presencePattern: Pattern = {
  slug: "presence",
  name: "Presence",
  nameKo: "접속 상태",
  aliases: ["온라인 표시", "자리 비움", "online status", "availability"],
  category: "indicator",
  summary: "온라인, 자리 비움 표시",
  description:
    "아바타 모서리에 작은 점을 붙여 그 사람이 지금 온라인인지, 자리를 비웠는지 보여 주는 패턴입니다. 내 상태는 직접 바꿀 수 있습니다.",
  whenToUse: [
    "메신저, 협업 도구의 팀원 목록",
    "바로 답을 받을 수 있는지 알려 줄 때",
    "내 상태를 다른 사람에게 알릴 때",
  ],
  whenNotToUse: [
    "사생활이 중요한 서비스(상태 공개를 선택하게 하기)",
    "서비스나 장비의 상태(상태 점 사용)",
    "실시간으로 갱신할 수 없을 때",
  ],
  alternatives: [
    { name: "상태 점", slug: "status-dot", reason: "사람이 아닌 대상의 상태" },
    { name: "아바타", slug: "avatar", reason: "상태 없이 사람만 보여 줄 때" },
  ],
  accessibility: [
    '상태가 아바타 이름에 함께 들어가 "김하늘, 자리 비움"처럼 읽힙니다.',
    "자리 비움은 반원, 오프라인은 빈 원으로 모양을 달리해 색에만 의존하지 않습니다.",
    "목록에는 상태 글도 함께 보여 줍니다.",
    "내 상태는 기본 select로 바꿉니다.",
  ],
  tags: [...BASE_TAGS, "role=img", "Color independence"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/presence/PresenceDemo").then((m) => m.PresenceDemo),
  Thumbnail: PresenceThumbnail,
  sources: [
    {
      fileName: "Presence.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/presence/Presence.tsx?raw"),
    },
    {
      fileName: "PresenceDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/presence/PresenceDemo.tsx?raw"),
    },
  ],
};
