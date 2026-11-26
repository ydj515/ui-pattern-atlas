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
  tags: ["아이콘 이름", "끌기"],
  loadGuide: () => import("@/entities/pattern/catalog/grip/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/grip/GripDemo").then((m) => m.GripDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/grip/GripThumbnail").then((m) => m.GripThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/grip/GripDemo.tsx?raw"),
};
