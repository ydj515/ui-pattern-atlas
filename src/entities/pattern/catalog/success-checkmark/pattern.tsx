import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SuccessCheckmarkThumbnail } from "@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkThumbnail";

export const successCheckmarkPattern: Pattern = {
  slug: "success-checkmark",
  name: "Success Checkmark",
  nameKo: "체크 애니메이션",
  aliases: ["체크 표시", "완료 체크", "animated check", "success tick"],
  category: "completion",
  summary: "그려지는 체크 표시",
  description:
    "원이 채워진 뒤 체크 표시가 한 획으로 그려지는 완료 표시입니다. 송금처럼 기다린 끝에 성공한 순간에 짧게 쓰고, 결과는 글자로도 함께 알립니다.",
  whenToUse: [
    "송금, 결제처럼 잠깐 기다린 뒤 성공했을 때",
    "결과 화면의 첫 시선",
    "한 화면에 한 번",
  ],
  whenNotToUse: [
    "목록의 항목마다 반복될 때",
    "실패 가능성을 숨기고 성공처럼 보일 때",
    "오래 끄는 화려한 연출",
  ],
  alternatives: [
    { name: "완료 화면", slug: "success-screen", reason: "결과와 다음 단계를 함께 보여 줄 때" },
    { name: "축하 효과", slug: "confetti", reason: "목표 달성처럼 큰 성취일 때" },
  ],
  accessibility: [
    "체크 표시는 role=img와 이름(보냈어요)을 가집니다.",
    "결과 문구를 role=status로 함께 알립니다.",
    "동작 줄이기에서는 그리지 않고 완성된 표시를 바로 보여 줍니다.",
    "보내는 중에는 버튼을 비활성으로 두어 두 번 보내지 않게 합니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "stroke-dashoffset", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkDemo").then(
      (m) => m.SuccessCheckmarkDemo,
    ),
  Thumbnail: SuccessCheckmarkThumbnail,
  sources: [
    {
      fileName: "SuccessCheckmark.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/success-checkmark/SuccessCheckmark.tsx?raw"),
    },
    {
      fileName: "SuccessCheckmarkDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkDemo.tsx?raw"),
    },
  ],
};
