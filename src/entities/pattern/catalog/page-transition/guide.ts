import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "목록과 상세처럼 깊이가 있는 화면 이동",
    "탭이나 섹션을 바꿀 때(페이드 스루)",
    "작업 화면을 잠깐 띄울 때(모달)",
  ],
  whenNotToUse: [
    "같은 화면 안의 작은 변화(해당 요소만 움직이기)",
    "빠르게 여러 번 오가는 화면(전환이 기다림이 됨)",
    "300ms를 넘는 긴 전환",
  ],
  alternatives: [
    {
      name: "공유 요소 전환",
      slug: "shared-element-transition",
      reason: "누른 요소가 다음 화면으로 이어질 때",
    },
    { name: "줌 전환", slug: "zoom-transition", reason: "아이콘이나 카드에서 화면이 커져 나올 때" },
  ],
  accessibility: [
    "화면이 바뀌면 새 화면으로 포커스를 옮겨 키보드와 화면 읽기 사용자가 위치를 잃지 않습니다.",
    "돌아가기는 반대 방향으로 움직여 앞뒤 관계를 일관되게 보여 줍니다.",
    "동작 줄이기에서는 모든 전환을 짧은 페이드로 바꿉니다.",
    "전환 중에도 내용은 즉시 바뀌므로 애니메이션을 기다리지 않아도 됩니다.",
  ],
};
