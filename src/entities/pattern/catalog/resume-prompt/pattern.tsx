import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ResumePromptThumbnail } from "@/entities/pattern/catalog/resume-prompt/ResumePromptThumbnail";

export const resumePromptPattern: Pattern = {
  slug: "resume-prompt",
  name: "Resume Prompt",
  nameKo: "이어서 하기 안내",
  aliases: [
    "이어 보기",
    "다시 오셨네요",
    "continue watching",
    "pick up where you left off",
    "welcome back",
  ],
  category: "leave-return",
  summary: "멈춘 곳과 진행률을 보여 주고 바로 이어 가게 하기",
  description:
    "다시 돌아온 사람에게 무엇을 어디까지 했는지 알려 주고 버튼 하나로 이어 가게 하는 카드입니다. 진행률을 함께 보여 주고, 처음부터 하거나 닫는 선택도 남깁니다.",
  whenToUse: [
    "강의, 영상, 긴 글처럼 나눠서 보는 콘텐츠",
    "작성하다 만 글이나 주문이 있을 때",
    "오랜만에 앱을 다시 열었을 때",
  ],
  whenNotToUse: ["처음 온 사람(첫 화면 사용)", "이어 할 것이 없을 때", "닫아도 매번 다시 띄울 때"],
  alternatives: [
    { name: "환영 화면", slug: "welcome-screen", reason: "처음 온 사람을 맞을 때" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "진행률만 보여 줄 때" },
  ],
  accessibility: [
    "진행률은 progress 요소에 제목과 퍼센트를 이름으로 붙입니다.",
    "닫기 버튼은 글자 이름이 있는 버튼입니다.",
    "카드 전체를 이름이 있는 section으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "progress", "section"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/resume-prompt/ResumePromptDemo").then(
      (m) => m.ResumePromptDemo,
    ),
  Thumbnail: ResumePromptThumbnail,
  sources: [
    {
      fileName: "ResumePrompt.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/resume-prompt/ResumePrompt.tsx?raw"),
    },
    {
      fileName: "ResumePromptDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/resume-prompt/ResumePromptDemo.tsx?raw"),
    },
  ],
};
