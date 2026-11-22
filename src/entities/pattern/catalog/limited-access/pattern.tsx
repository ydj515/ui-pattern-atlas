import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { LimitedAccessThumbnail } from "@/entities/pattern/catalog/limited-access/LimitedAccessThumbnail";

export const limitedAccessPattern: Pattern = {
  slug: "limited-access",
  name: "Limited Access",
  nameKo: "일부만 허용",
  aliases: ["선택한 사진만", "제한된 접근", "limited photo access", "partial permission"],
  category: "onboarding",
  summary: "허용받은 범위만 쓰고 필요할 때 범위 바꾸기",
  description:
    "사용자가 사진 몇 장처럼 일부만 허용했을 때, 받은 범위만으로 화면을 그리고 그 사실을 한 줄로 알려 주는 패턴입니다. 더 필요하면 그 자리에서 선택 변경으로 범위를 다시 고르게 합니다.",
  whenToUse: [
    "사진, 연락처처럼 일부만 허용할 수 있는 권한",
    "일부만으로도 기능이 동작할 때",
    "범위를 바꾸는 시스템 화면을 열 수 있을 때",
  ],
  whenNotToUse: [
    "전체 허용을 거듭 조를 때",
    "일부만 허용했다고 기능을 막을 때",
    "범위를 바꿀 방법을 숨길 때",
  ],
  alternatives: [
    { name: "시스템 권한 요청", slug: "system-permission-dialog", reason: "처음 권한을 받을 때" },
    { name: "파일 업로드", slug: "file-upload", reason: "권한 없이 파일을 고르게 할 때" },
  ],
  accessibility: [
    "몇 장을 볼 수 있는지는 role=status 한 줄로 알립니다.",
    "사진 버튼마다 몇 번째 사진인지 이름을 붙입니다.",
    "선택 화면의 체크박스는 fieldset과 legend로 묶습니다.",
    "선택한 사진은 테두리와 체크 표시 두 가지로 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "Permissions", "fieldset", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/limited-access/LimitedAccessDemo").then(
      (m) => m.LimitedAccessDemo,
    ),
  Thumbnail: LimitedAccessThumbnail,
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
