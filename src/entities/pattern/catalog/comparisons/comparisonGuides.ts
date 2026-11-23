import type { PreviewLoader } from "@/entities/pattern/model/pattern";

/**
 * What each comparison asks the reader to try. Kept apart from the demo components so the
 * comparison pages can name every guide without pulling all demos into the main bundle;
 * the demos load on demand from their own chunk.
 */
const SCENARIOS: Readonly<Record<string, string>> = {
  "switch-checkbox": "이벤트 소식 수신을 켜고 저장이 필요한지 확인해 보세요.",
  "tabs-segmented-control": "받은 알림의 분류를 바꾸거나 읽지 않은 항목만 모아 보세요.",
  "modal-dialog-bottom-sheet":
    "배송 알림에 되돌릴 수 없는 삭제를 요청하거나 보관 옵션을 열어 보세요.",
  "toast-snackbar": "같은 알림을 보관한 뒤 되돌릴 수 있는지 확인해 보세요.",
  "tooltip-popover": "예상 배송일의 기준을 읽거나 배송일 계산 옵션을 바꿔 보세요.",
  "spinner-skeleton": "같은 프로필을 요청하고 기다리는 동안 표시되는 내용을 비교해 보세요.",
  "radio-group-checkbox": "주문서에서 배송 방법은 하나만, 배송 요청은 여러 개를 골라 보세요.",
  "chip-badge": "칩으로 배송 조건을 고르고, 배지로 읽지 않은 알림 수를 확인해 보세요.",
  "number-stepper-slider": "수량은 하나씩 정확히, 가격 상한은 범위 안에서 빠르게 정해 보세요.",
  "hamburger-kebab": "서비스 전체 메뉴와 주문 한 건의 추가 동작을 각각 열어 보세요.",
  "alert-dialog-toast": "확인해야 넘어가는 안내와 흐름을 끊지 않는 안내를 비교해 보세요.",
  "non-modal-popup-modal-dialog": "같은 쿠폰 안내를 연 채로 뒤의 담기 버튼을 눌러 보세요.",
  "bottom-sheet-drawer": "상품을 공유하는 짧은 작업과 카테고리를 옮기는 탐색을 비교해 보세요.",
  "alert-banner-push-notification":
    "화면 안에서 보이는 안내와 휴대폰 알림 영역으로 가는 안내를 비교해 보세요.",
  "alert-confirmation-dialog": "확인만 하면 되는 안내와 진행 여부를 고르는 질문을 비교해 보세요.",
  "helper-text-error-message":
    "입력 전 규칙 안내와, 짧은 비밀번호로 변경했을 때의 오류를 비교해 보세요.",
  "placeholder-label": "두 칸에 번호를 입력한 뒤에도 무엇을 쓰는 칸인지 알 수 있는지 보세요.",
  "autocomplete-search-suggestion":
    "입력 중에 완성해 주는 검색어와 결과 화면의 관련 검색어를 비교해 보세요.",
  "pagination-infinite-scroll": "같은 주문 내역을 쪽으로 넘기거나 아래로 이어 불러와 보세요.",
  "progress-bar-step-indicator": "사진 올리기의 진행률과 주문의 현재 단계를 비교해 보세요.",
  "accordion-read-more":
    "여러 질문 중 하나를 펼치는 것과 긴 설명 하나를 펼치는 것을 비교해 보세요.",
  "filter-sort": "같은 상품 목록에서 보이는 항목을 바꾸거나 순서만 바꿔 보세요.",
  "kebab-meatballs": "같은 주문 메뉴를 세로 점과 가로 점으로 열어 보세요.",
  "share-export": "같은 주문 내역을 누군가에게 보내거나 파일로 만들어 보세요.",
  "close-back": "떠 있는 창을 닫는 것과 이전 화면으로 돌아가는 것을 비교해 보세요.",
  "refresh-undo": "새 내용을 다시 불러오는 것과 방금 한 일을 취소하는 것을 비교해 보세요.",
  "search-zoom-in": "돋보기 모양 두 버튼이 무엇을 하는지 눌러 보세요.",
  "edit-compose": "있는 글을 고치는 것과 새 글을 쓰는 것을 비교해 보세요.",
  "dropdown-picker": "간단한 옵션은 펼쳐서, 날짜는 달력에서 골라 보세요.",
  "carousel-horizontal-scroll": "같은 추천 상품을 한 장씩 넘기거나 옆으로 밀어 보세요.",
  "top-bar-bottom-tab-bar": "화면 위의 제목 영역과 화면 아래의 주요 메뉴를 써 보세요.",
  "floating-action-button-sticky-action-bar":
    "띄운 버튼 하나와 아래에 고정한 가격·구매 영역을 비교해 보세요.",
  "text-field-textarea": "받는 분 이름과 여러 줄 배송 메모를 입력해 보세요.",
  "password-otp": "정해 둔 비밀번호와 문자로 받은 인증번호 칸을 비교해 보세요.",
  "clear-show-password": "입력값을 지우는 버튼과 값을 보이게 하는 버튼을 눌러 보세요.",
  "character-counter-max-length": "두 칸에 길게 입력해 보고 무엇이 다른지 보세요.",
  "numeric-keypad-keyboard": "두 칸을 눌러 어떤 키보드가 뜨는지 비교해 보세요.",
  "date-input-date-picker": "아는 날짜는 직접 입력하고, 배송일은 달력에서 골라 보세요.",
  "required-optional": "두 칸을 비워 둔 채로 다음을 눌러 보세요.",
  "badge-notification-dot": "새 알림이 올 때 숫자와 점이 어떻게 다른지 보세요.",
  "onboarding-coach-mark": "처음 안내 화면과 지금 화면의 한 곳을 짚는 안내를 비교해 보세요.",
  "dim-blur": "같은 창을 띄우고 배경이 어떻게 가려지는지 비교해 보세요.",
  "like-wishlist": "사진에 반응하는 하트와 상품을 모아 두는 하트를 눌러 보세요.",
  "wishlist-cart": "같은 셔츠를 찜하거나 장바구니에 담아 보세요.",
  "bookmark-like": "같은 글을 저장하거나 좋아요를 눌러 보세요.",
  "follow-subscribe-to-notifications":
    "계정을 팔로우하는 것과 알림 조건을 정하는 것을 비교해 보세요.",
  "share-copy-link": "받을 곳을 고르는 공유와 주소만 담는 링크 복사를 비교해 보세요.",
  "rating-review": "점수만 남기는 별점과 경험을 적는 리뷰를 비교해 보세요.",
  "recently-viewed-wishlist": "상품을 열어 보거나 직접 찜해 두 목록이 어떻게 쌓이는지 보세요.",
  "like-reaction": "좋아요 하나와 여러 감정 중 고르는 리액션을 비교해 보세요.",
  "save-download": "같은 영수증을 앱에 저장하거나 기기에 내려받아 보세요.",
};

export interface ComparisonGuide {
  readonly scenario: string;
  readonly loadPreview: PreviewLoader;
}

const loadPreviews = () =>
  import("@/entities/pattern/catalog/comparisons/ComparisonDemos").then(
    (module) => module.COMPARISON_PREVIEWS,
  );

export const COMPARISON_GUIDES: Readonly<Record<string, ComparisonGuide>> = Object.fromEntries(
  Object.entries(SCENARIOS).map(([slug, scenario]) => [
    slug,
    {
      scenario,
      loadPreview: () =>
        loadPreviews().then((previews) => {
          const Preview = previews[slug];
          if (!Preview) throw new Error(`Missing comparison demo: ${slug}`);
          return Preview;
        }),
    },
  ]),
);
