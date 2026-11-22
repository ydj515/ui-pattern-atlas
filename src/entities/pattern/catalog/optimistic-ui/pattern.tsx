import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { OptimisticUiThumbnail } from "@/entities/pattern/catalog/optimistic-ui/OptimisticUiThumbnail";

export const optimisticUiPattern: Pattern = {
  slug: "optimistic-ui",
  name: "Optimistic UI",
  nameKo: "낙관적 업데이트",
  aliases: ["낙관적 UI", "즉시 반영", "optimistic update", "useOptimistic"],
  category: "loading",
  summary: "응답 전에 결과부터 보여 주기",
  description:
    "서버 응답을 기다리지 않고 성공했다고 가정해 결과를 먼저 보여 주는 패턴입니다. 요청이 실패하면 원래 상태로 되돌리고 짧게 알려 줍니다. 좋아요처럼 거의 실패하지 않는 작업을 즉각적으로 느끼게 합니다.",
  whenToUse: [
    "좋아요, 북마크, 체크처럼 거의 항상 성공하는 가벼운 작업",
    "응답을 기다리는 시간이 반응이 느리다는 인상을 줄 때",
    "실패해도 되돌리기 쉬운 작업",
  ],
  whenNotToUse: [
    "결제, 송금처럼 결과가 확정돼야 의미가 있는 작업",
    "서버에서 값이 바뀌어 돌아오는 작업(주문 번호 발급 등)",
    "실패가 잦은 작업(계속 되돌아가면 더 혼란스럽습니다)",
  ],
  alternatives: [
    { name: "스피너", slug: "spinner", reason: "결과가 확정될 때까지 기다리게 해야 할 때" },
    { name: "되돌리기", slug: "undo", reason: "먼저 반영하되 사용자가 직접 취소할 기회를 줄 때" },
  ],
  accessibility: [
    "버튼의 aria-pressed가 바로 바뀌어 스크린 리더도 즉시 새 상태를 읽습니다.",
    '실패하면 role="status" 문구("좋아요를 반영하지 못했어요")로 되돌아간 이유를 알립니다.',
    "숫자가 되돌아가는 것만으로 실패를 전하지 않습니다.",
    "React 19의 useOptimistic으로 요청이 끝나면 확정된 값으로 자연스럽게 돌아갑니다.",
  ],
  tags: [...BASE_TAGS, "useOptimistic", "aria-pressed"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/optimistic-ui/OptimisticUiDemo").then(
      (m) => m.OptimisticUiDemo,
    ),
  Thumbnail: OptimisticUiThumbnail,
  sources: [
    {
      fileName: "OptimisticLikeButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/optimistic-ui/OptimisticLikeButton.tsx?raw"),
    },
    {
      fileName: "OptimisticUiDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/optimistic-ui/OptimisticUiDemo.tsx?raw"),
    },
  ],
};
