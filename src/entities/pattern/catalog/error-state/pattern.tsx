import { BASE_TAGS, type Pattern } from "../../model/pattern";
import { ErrorStateThumbnail } from "./ErrorStateThumbnail";

export const errorStatePattern: Pattern = {
  slug: "error-state",
  name: "Error State",
  nameKo: "오류 화면",
  aliases: ["에러 페이지", "에러 화면", "로드 실패", "다시 시도", "Load Error"],
  category: "empty-error",
  summary: "콘텐츠를 불러오지 못했을 때 오류와 복구 방법을 안내하는 화면",
  description:
    "목록이나 상세 화면을 불러오는 요청이 실패하면 어떤 작업에 문제가 생겼는지 알려 주고, 같은 화면에서 다시 시도할 수 있게 합니다.",
  whenToUse: ["일시적인 실패로 주요 콘텐츠를 표시할 수 없을 때"],
  whenNotToUse: ["요청은 성공했지만 실제 데이터가 없을 때", "특정 입력 필드만 수정하면 될 때"],
  alternatives: [
    { name: "빈 화면", slug: "empty-state", reason: "요청이 성공했고 보여 줄 데이터가 없는 경우" },
    { name: "배너 알림", slug: "alert-banner", reason: "나머지 콘텐츠를 탐색할 수 있는 부분 실패" },
  ],
  accessibility: [
    "오류 제목과 안내를 텍스트로 표시하고 다시 시도 중임을 라이브 영역으로 전달합니다.",
    "재시도 중에는 버튼의 포커스를 유지하고 중복 요청을 막습니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () => import("./ErrorStateDemo").then((m) => m.ErrorStateDemo),
  Thumbnail: ErrorStateThumbnail,
  sources: [
    {
      fileName: "ErrorState.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/error-state/ErrorState.tsx?raw"),
    },
    {
      fileName: "ErrorStateDemo.tsx",
      role: "Usage",
      load: () => import("./ErrorStateDemo.tsx?raw"),
    },
  ],
};
