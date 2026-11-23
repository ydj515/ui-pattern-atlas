import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { WelcomeScreenThumbnail } from "@/entities/pattern/catalog/welcome-screen/WelcomeScreenThumbnail";

export const welcomeScreenPattern: Pattern = {
  slug: "welcome-screen",
  name: "Welcome Screen / Modal",
  nameKo: "환영 화면",
  aliases: ["웰컴 모달", "첫 방문 인사", "welcome modal", "first-run"],
  category: "onboarding",
  summary: "첫 방문 인사와 시작 버튼",
  description:
    "처음 들어온 사람에게 서비스가 무엇을 하는지 한 문장으로 인사하고 시작 버튼을 주는 모달입니다. 먼저 둘러보기를 고를 수 있고, Esc로 닫아도 둘러보기로 처리합니다.",
  whenToUse: [
    "가입 직후나 첫 방문의 첫 화면",
    "시작 버튼 하나로 다음 행동을 정할 수 있을 때",
    "한 번만 보여 줄 수 있을 때",
  ],
  whenNotToUse: [
    "들어올 때마다 다시 띄울 때",
    "소개할 내용이 여러 장일 때(온보딩 슬라이드 사용)",
    "광고나 이벤트를 끼워 넣을 때",
  ],
  alternatives: [
    { name: "온보딩 슬라이드", slug: "onboarding-carousel", reason: "여러 장으로 소개할 때" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "일반적인 확인 창" },
  ],
  accessibility: [
    "기본 dialog 요소의 showModal로 열어 포커스가 안에 머뭅니다.",
    "열리면 시작하기 버튼에 포커스가 갑니다.",
    "Esc로 닫으면 먼저 둘러보기와 같게 처리합니다.",
    "제목을 aria-labelledby로 연결합니다.",
  ],
  tags: [...BASE_TAGS, "dialog", "showModal", "Focus management"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/welcome-screen/WelcomeScreenDemo").then(
      (m) => m.WelcomeScreenDemo,
    ),
  Thumbnail: WelcomeScreenThumbnail,
  sources: [
    {
      fileName: "WelcomeScreen.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/welcome-screen/WelcomeScreen.tsx?raw"),
    },
    {
      fileName: "WelcomeScreenDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/welcome-screen/WelcomeScreenDemo.tsx?raw"),
    },
  ],
};
