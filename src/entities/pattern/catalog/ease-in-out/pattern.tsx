import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EasingCompareThumbnail } from "@/entities/pattern/catalog/ease-in-out/EasingCompareThumbnail";

export const easeInOutPattern: Pattern = {
  slug: "ease-in-out",
  name: "Ease In / Ease Out",
  nameKo: "이즈 인·아웃",
  aliases: ["이징", "easing", "타이밍 함수", "cubic-bezier", "가속 감속"],
  category: "motion",
  summary: "시작과 끝의 속도를 조절하는 이징",
  description:
    "같은 시간 동안 같은 거리를 움직여도 처음에 천천히, 끝에 천천히, 또는 양쪽 모두 천천히 움직이게 바꾸는 속도 곡선입니다. 들어오는 요소는 ease-out, 나가는 요소는 ease-in, 제자리에서 옮겨 가는 요소는 ease-in-out이 자연스럽습니다.",
  whenToUse: [
    "화면에 나타나는 요소(ease-out)",
    "화면 밖으로 사라지는 요소(ease-in)",
    "한 지점에서 다른 지점으로 옮겨 가는 요소(ease-in-out)",
  ],
  whenNotToUse: [
    "진행률, 회전 로딩처럼 일정한 속도가 의미인 경우(linear)",
    "아주 짧은 100ms 이하 변화(차이를 느끼기 어려움)",
    "곡선을 화면마다 제각각 정할 때(토큰으로 통일하기)",
  ],
  alternatives: [
    { name: "스프링", slug: "spring", reason: "목표를 지나쳤다 돌아오는 움직임" },
    { name: "바운스", slug: "bounce", reason: "바닥에 닿아 튀는 움직임" },
  ],
  accessibility: [
    "점은 장식이고 곡선 이름과 값은 글자로 함께 보여 줍니다.",
    "동작 줄이기에서는 재생하면 바로 끝 위치로 옮깁니다.",
    "재생 버튼으로만 움직여 저절로 반복되지 않습니다.",
  ],
  tags: [...BASE_TAGS, "CSS easing", "Web Animations API", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/ease-in-out/EasingCompareDemo").then(
      (m) => m.EasingCompareDemo,
    ),
  Thumbnail: EasingCompareThumbnail,
  sources: [
    {
      fileName: "EasingCompare.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/ease-in-out/EasingCompare.tsx?raw"),
    },
    {
      fileName: "EasingCompareDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/ease-in-out/EasingCompareDemo.tsx?raw"),
    },
  ],
};
