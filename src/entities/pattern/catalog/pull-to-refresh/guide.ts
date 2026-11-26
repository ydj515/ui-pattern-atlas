import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "당겨서(pull) 새로고침(refresh)한다는 이름 그대로예요. 2009년 로렌 브릭터(Loren Brichter)가 트위터 앱 Tweetie 2에 처음 넣은 동작으로 알려져 있어요.",
  whenToUse: ["최신 항목이 위에 쌓이는 뉴스나 알림 목록에서 수동으로 갱신할 때"],
  whenNotToUse: [
    "이미 내려간 스크롤 위치를 유지해야 하거나 새로고침 동작이 다른 제스처와 충돌할 때",
  ],
  alternatives: [
    { name: "스피너", slug: "spinner", reason: "제스처 없이 요청의 대기 상태만 알릴 때" },
  ],
  accessibility: [
    "새로고침 버튼으로 터치 제스처 없이 같은 작업을 실행합니다.",
    "진행과 실패를 라이브 영역에서 알려 줍니다.",
  ],
};
