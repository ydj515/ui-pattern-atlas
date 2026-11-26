import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const agentStepsPattern: Pattern = {
  slug: "agent-steps",
  name: "Agent Steps",
  nameKo: "에이전트 단계",
  aliases: ["작업 단계", "진행 단계", "agent progress", "task steps"],
  category: "ai",
  summary: "진행 중인 작업과 끝낸 단계를 순서대로",
  description:
    "에이전트가 하는 일을 순서 있는 단계로 보여 주는 패턴입니다. 끝낸 단계는 체크와 결과 한 줄, 지금 단계는 도는 표시, 남은 단계는 흐리게 두어 어디까지 왔는지 알 수 있습니다.",
  whenToUse: [
    "찾기, 정리, 쓰기처럼 여러 단계를 거치는 AI 작업",
    "몇십 초 이상 걸리는 일",
    "중간 결과를 보여 주면 믿음이 생길 때",
  ],
  whenNotToUse: [
    "한 번에 끝나는 짧은 답(생각 중 표시 사용)",
    "단계가 수십 개라 목록이 길어질 때(요약해서 보여 주기)",
    "내부 처리 과정을 그대로 노출할 필요가 없을 때",
  ],
  alternatives: [
    { name: "생각 중 표시", slug: "thinking-indicator", reason: "단계 없이 기다릴 때" },
    { name: "스테퍼", slug: "stepper", reason: "사용자가 직접 진행하는 단계" },
  ],
  accessibility: [
    "ol 목록이 aria-live라 단계가 바뀌면 알립니다.",
    "단계마다 완료, 진행 중, 대기를 글자로 덧붙입니다.",
    "아이콘과 연결선은 장식이라 aria-hidden입니다.",
    "도는 표시는 동작 줄이기에서 멈춥니다.",
  ],
  tags: [...BASE_TAGS, "ol", "aria-live", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/agent-steps/AgentStepsDemo").then((m) => m.AgentStepsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/agent-steps/AgentStepsThumbnail").then(
      (m) => m.AgentStepsThumbnail,
    ),
  sources: [
    {
      fileName: "AgentSteps.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/agent-steps/AgentSteps.tsx?raw"),
    },
    {
      fileName: "AgentStepsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/agent-steps/AgentStepsDemo.tsx?raw"),
    },
  ],
};
