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
  tags: [...BASE_TAGS, "ol", "aria-live", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/agent-steps/guide").then((m) => m.guide),
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
