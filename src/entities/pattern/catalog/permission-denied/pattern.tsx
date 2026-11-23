import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PermissionDeniedThumbnail } from "@/entities/pattern/catalog/permission-denied/PermissionDeniedThumbnail";

export const permissionDeniedPattern: Pattern = {
  slug: "permission-denied",
  name: "Permission Denied",
  nameKo: "권한 없음",
  aliases: ["접근 거부", "403", "권한 요청", "access denied", "forbidden"],
  category: "empty-error",
  summary: "볼 수 없는 이유와 요청 방법",
  description:
    "볼 권한이 없는 내용을 열었을 때 이유와 권한을 받는 방법을 알려 주는 패턴입니다. 누가 권한을 줄 수 있는지, 지금 어떤 계정으로 로그인했는지 보여 주고 요청까지 이어 줍니다.",
  whenToUse: [
    "공유 문서, 폴더, 팀 공간처럼 권한이 사람마다 다를 때",
    "다른 계정으로 로그인해 생기는 문제가 잦을 때",
    "앱 안에서 권한을 요청할 수 있을 때",
  ],
  whenNotToUse: [
    "존재 자체를 숨겨야 하는 내용(404로 응답하기)",
    "유료 기능 잠금(잠긴 콘텐츠 사용)",
    "로그인하지 않은 상태(로그인 화면으로 보내기)",
  ],
  alternatives: [
    { name: "잠긴 콘텐츠", slug: "locked-content", reason: "결제나 멤버십으로 풀 수 있을 때" },
    {
      name: "찾을 수 없는 페이지",
      slug: "not-found-page",
      reason: "있는지조차 알려 주면 안 될 때",
    },
  ],
  accessibility: [
    '요청 뒤 결과 문구("승인되면 메일로 알려 드려요.")를 role="status"로 알립니다.',
    '요청한 버튼은 비활성으로 바꾸고 이름도 "요청함"으로 바꿔 상태를 글로 전합니다.',
    "잠금 아이콘은 장식이라 aria-hidden으로 둡니다.",
    "로그인한 계정을 보여 줘 계정을 잘못 고른 경우를 스스로 알아챌 수 있게 합니다.",
  ],
  tags: [...BASE_TAGS, "HTTP 403", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/permission-denied/PermissionDeniedDemo").then(
      (m) => m.PermissionDeniedDemo,
    ),
  Thumbnail: PermissionDeniedThumbnail,
  sources: [
    {
      fileName: "PermissionDenied.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/permission-denied/PermissionDenied.tsx?raw"),
    },
    {
      fileName: "PermissionDeniedDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/permission-denied/PermissionDeniedDemo.tsx?raw"),
    },
  ],
};
