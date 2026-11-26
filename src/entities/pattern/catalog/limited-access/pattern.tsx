import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const limitedAccessPattern: Pattern = {
  slug: "limited-access",

  name: "Limited Access",
  nameKo: "일부만 허용",
  aliases: ["선택한 사진만", "제한된 접근", "limited photo access", "partial permission"],
  category: "onboarding",
  summary: "허용받은 범위만 쓰고 필요할 때 범위 바꾸기",
  description:
    "사용자가 사진 몇 장처럼 일부만 허용했을 때, 받은 범위만으로 화면을 그리고 그 사실을 한 줄로 알려 주는 패턴입니다. 더 필요하면 그 자리에서 선택 변경으로 범위를 다시 고르게 합니다.",
  tags: [...BASE_TAGS, "Permissions", "fieldset", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/limited-access/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/limited-access/LimitedAccessDemo").then(
      (m) => m.LimitedAccessDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/limited-access/LimitedAccessThumbnail").then(
      (m) => m.LimitedAccessThumbnail,
    ),
  sources: [
    {
      fileName: "LimitedAccess.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/limited-access/LimitedAccess.tsx?raw"),
    },
    {
      fileName: "LimitedAccessDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/limited-access/LimitedAccessDemo.tsx?raw"),
    },
  ],
};
