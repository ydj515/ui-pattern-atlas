import { type Pattern } from "@/entities/pattern/model/pattern";

export const gripPattern: Pattern = {
  slug: "grip",
  kind: "concept",
  name: "Grip ⠿",
  nameKo: "그립",
  aliases: ["드래그 핸들", "손잡이 아이콘", "drag handle", "gripper"],
  category: "icon-names",
  summary: "점 여섯 개, 끌어서 옮기기",
  description:
    "점 여섯 개를 두 줄로 놓은 손잡이 아이콘으로, 잡고 끌어 순서를 바꿀 수 있다는 뜻입니다. 행 왼쪽에 두고, 잡는 곳을 손잡이로 좁혀 행의 다른 부분은 평소처럼 누를 수 있게 합니다.",
  whenToUse: [
    "할 일, 재생 목록처럼 순서를 바꾸는 목록",
    "카드나 위젯을 다시 배치할 때",
    "끌 수 있는 곳을 분명히 보여 줄 때",
  ],
  whenNotToUse: [
    "순서가 의미 없는 목록",
    "키보드 대안 없이 끌기만 가능할 때",
    "행 전체를 끌 때 손잡이만 장식으로 둘 때",
  ],
  alternatives: [
    { name: "드래그 앤 드롭", slug: "drag-and-drop", reason: "다른 영역으로 옮길 때" },
    { name: "순서 바꾸기 목록", slug: "sortable-list", reason: "목록 순서 바꾸기 전체 패턴" },
  ],
  accessibility: [
    "손잡이는 버튼이고 위아래 화살표로 순서를 바꿀 수 있습니다.",
    "버튼 이름에 항목과 조작 방법을 넣습니다.",
    "옮긴 결과는 role=status로 알립니다.",
    "끄는 중인 행은 테두리 색으로 구분합니다.",
  ],
  tags: ["아이콘 이름", "끌기"],
  loadPreview: () => import("@/entities/pattern/catalog/grip/GripDemo").then((m) => m.GripDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/grip/GripThumbnail").then((m) => m.GripThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/grip/GripDemo.tsx?raw"),
};
