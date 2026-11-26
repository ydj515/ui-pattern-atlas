import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const calloutPattern: Pattern = {
  slug: "callout",
  name: "Callout",
  nameKo: "콜아웃",
  aliases: ["안내 상자", "참고 상자", "주의 상자", "admonition", "note box"],
  category: "feedback",
  summary: "본문 속 참고·주의 상자",
  description:
    "도움말이나 문서 본문 안에서 꼭 짚고 넘어갈 내용을 색과 제목이 있는 상자로 구분하는 패턴입니다. 참고, 팁, 주의처럼 종류를 나눠 읽는 사람이 중요도를 바로 알 수 있게 합니다.",
  whenToUse: [
    "문서나 도움말에서 놓치면 안 되는 조건이나 제한을 강조할 때",
    "본문 흐름과 별개인 팁을 따로 보여 줄 때",
    "되돌리기 어려운 동작 앞에 주의를 줄 때",
  ],
  whenNotToUse: [
    "방금 한 작업의 결과를 알릴 때(토스트나 배너 알림 사용)",
    "한 화면에 여러 개를 쌓아 모든 내용이 강조처럼 보일 때",
    "본문으로 써도 충분한 내용일 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "페이지 전체에 해당하는 상태나 공지" },
    { name: "툴팁", slug: "tooltip", reason: "필요할 때만 열어 보는 짧은 설명" },
  ],
  accessibility: [
    'role="note"인 aside로, 읽는 흐름 안에 있는 보조 내용임을 알립니다. 실시간 알림이 아니므로 live region을 쓰지 않습니다.',
    '종류를 색만으로 전하지 않도록 "참고", "팁", "주의" 제목을 항상 보여 줍니다.',
    "아이콘은 장식이라 aria-hidden으로 둡니다.",
    "배경과 글자 색 대비를 4.5:1 이상으로 유지합니다.",
  ],
  tags: [...BASE_TAGS, "role=note", "UX writing"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/callout/CalloutDemo").then((m) => m.CalloutDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/callout/CalloutThumbnail").then((m) => m.CalloutThumbnail),
  sources: [
    {
      fileName: "Callout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/callout/Callout.tsx?raw"),
    },
    {
      fileName: "CalloutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/callout/CalloutDemo.tsx?raw"),
    },
  ],
};
