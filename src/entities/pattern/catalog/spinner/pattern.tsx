import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SpinnerThumbnail } from "@/entities/pattern/catalog/spinner/SpinnerThumbnail";

export const spinnerPattern: Pattern = {
  slug: "spinner",

  name: "Spinner",
  nameKo: "스피너",
  aliases: ["로딩 아이콘", "Activity Indicator"],
  category: "loading",
  summary: "완료 시점을 알 수 없는 짧은 작업의 대기 상태",
  description:
    "작은 영역에서 얼마나 남았는지 계산하기 어려운 작업이 진행 중임을 표시합니다. 화면을 다시 불러오는 예시에서 작업이 완료되면 결과 안내로 바뀝니다.",
  whenToUse: ["새로고침이나 단일 요청이 처리되는 동안"],
  whenNotToUse: ["완료 비율을 계산할 수 있는 업로드나 다운로드"],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "불러올 콘텐츠의 구조를 이미 알 때" },
  ],
  accessibility: [
    "아이콘의 회전과 별도로 실제 대기 문구를 상태로 읽습니다.",
    "동작 줄이기 설정에서는 아이콘이 회전하지 않습니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () =>
    import("@/entities/pattern/catalog/spinner/SpinnerDemo").then((m) => m.SpinnerDemo),
  Thumbnail: SpinnerThumbnail,
  sources: [
    {
      fileName: "Spinner.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/spinner/Spinner.tsx?raw"),
    },
    {
      fileName: "SpinnerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/spinner/SpinnerDemo.tsx?raw"),
    },
  ],
};
