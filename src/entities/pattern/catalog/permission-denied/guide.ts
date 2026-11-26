import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
