import "@/entities/pattern/ui/thumbnail-motion.css";

import type { ComponentType, CSSProperties } from "react";

import {
  HIDDEN,
  Side,
  L,
  R,
  Btn,
  Sec,
  Swap,
  Box,
  Dim,
  Radio,
  Field,
} from "@/entities/pattern/catalog/comparisons/ComparisonThumbParts";
import { REST_COMPARISON_THUMBNAILS } from "@/entities/pattern/catalog/comparisons/ComparisonThumbnailsRest";
import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/*
 * Catalog thumbnails for the comparison guides. Each one replays its comparison demo in
 * two mini panels: the same situation, the same copy, the left action first and then the
 * right one. Coordinates are px on the 176×112 stage; keyframes live in
 * thumbnail-motion.css under the thumb-cmp- prefix.
 */

function SwitchCheckbox() {
  return (
    <ThumbStage>
      <Side left={L} title="토글">
        <p className="mt-[6px] flex items-center justify-between">
          이벤트 소식 받기
          <span className="relative h-[7px] w-[12px] rounded-full bg-slate-300">
            <span
              className="thumb-anim thumb-cmp-sw-on absolute inset-0 rounded-full bg-blue-700"
              style={HIDDEN}
            />
            <span className="thumb-anim thumb-cmp-sw-knob absolute top-[1px] left-[1px] size-[5px] rounded-full bg-white" />
          </span>
        </p>
        <Swap
          motion="thumb-cmp-sw-state"
          from="수신 꺼짐"
          to="수신 켜짐"
          className="mt-[4px] text-slate-600"
        />
      </Side>
      <Side left={R} title="체크박스">
        <p className="mt-[6px] flex items-center gap-[3px]">
          <Box on="thumb-cmp-sw-check" />
          이벤트 소식 받기
        </p>
        <Btn>설정 저장</Btn>
        <span className="mt-[4px] grid text-slate-600">
          <span className="thumb-anim thumb-cmp-sw-off col-start-1 row-start-1">수신 꺼짐</span>
          <span className="thumb-anim thumb-cmp-sw-draft col-start-1 row-start-1" style={HIDDEN}>
            수신 꺼짐 · 저장되지 않은 변경
          </span>
          <span className="thumb-anim thumb-cmp-sw-saved col-start-1 row-start-1" style={HIDDEN}>
            수신 켜짐
          </span>
        </span>
      </Side>
      <ThumbCursor motion="thumb-cmp-sw-cursor" />
    </ThumbStage>
  );
}

function TabsSegmented() {
  return (
    <ThumbStage>
      <Side left={L} title="탭">
        <p className="relative mt-[5px] flex gap-[8px] border-b border-slate-200 pb-[2px]">
          <span>공지</span>
          <span>이벤트</span>
          <span className="thumb-anim thumb-cmp-tab-line absolute -bottom-px left-0 h-[1.5px] w-[10px] bg-blue-700" />
        </p>
        <Swap
          motion="thumb-cmp-tab-panel"
          from="다음 주 배송 일정이 바뀌어요."
          to="이번 달 적립 이벤트가 열렸어요."
          className="mt-[4px] text-slate-700"
        />
      </Side>
      <Side left={R} title="세그먼트">
        <p className="relative mt-[5px] flex rounded-[3px] bg-slate-100 p-[1px] text-center">
          <span className="thumb-anim thumb-cmp-tab-seg absolute top-[1px] left-[1px] h-[8px] w-[35px] rounded-[2px] bg-white shadow-sm" />
          <span className="relative h-[8px] flex-1 leading-[8px]">전체</span>
          <span className="relative h-[8px] flex-1 leading-[8px]">읽지 않음</span>
        </p>
        <p className="mt-[4px] text-slate-700">다음 주 배송 일정이 바뀌어요.</p>
        <p className="thumb-anim thumb-cmp-tab-rest mt-[2px] text-slate-700">
          이번 달 적립 이벤트가 열렸어요.
        </p>
      </Side>
      <ThumbCursor motion="thumb-cmp-tab-cursor" />
    </ThumbStage>
  );
}

function ModalSheet() {
  return (
    <ThumbStage>
      <Side left={L} title="모달">
        <p className="mt-[4px]">배송 일정 안내</p>
        <Btn>알림 삭제</Btn>
        <Dim motion="thumb-cmp-ms-modal">
          <div className="absolute inset-x-[6px] top-[30px] rounded-[4px] bg-white p-[4px]">
            <b className="block">알림을 삭제할까요?</b>
            <span className="text-slate-600">이 알림은 복원할 수 없어요.</span>
            <span className="mt-[3px] flex justify-end gap-[3px]">
              <span className="rounded-[2px] border border-slate-300 px-[3px]">취소</span>
              <span className="rounded-[2px] bg-blue-700 px-[3px] text-white">삭제</span>
            </span>
          </div>
        </Dim>
      </Side>
      <Side left={R} title="바텀시트">
        <p className="mt-[4px]">배송 일정 안내</p>
        <Btn>알림 옵션</Btn>
        <Dim motion="thumb-cmp-ms-dim">{null}</Dim>
        <div
          className="thumb-anim thumb-cmp-ms-sheet absolute inset-x-0 bottom-0 rounded-t-[6px] bg-white p-[5px]"
          style={{ transform: "translateY(100%)" }}
        >
          <b className="block">알림 옵션</b>
          <span className="mt-[3px] block w-fit rounded-[2px] border border-slate-300 px-[3px]">
            보관함으로 옮기기
          </span>
        </div>
      </Side>
      <ThumbCursor motion="thumb-cmp-ms-cursor" />
    </ThumbStage>
  );
}

function ToastSnackbar() {
  return (
    <ThumbStage>
      <Side left={L} title="토스트">
        <Swap
          motion="thumb-cmp-ts-left"
          from="받은 알림 · 배송 일정 안내"
          to="보관함 · 배송 일정 안내"
          className="mt-[4px]"
        />
        <Btn>알림 보관</Btn>
        <p
          className="thumb-anim thumb-cmp-ts-toast absolute inset-x-[4px] bottom-[4px] rounded-[3px] bg-slate-900 px-[4px] py-[3px] text-white"
          style={HIDDEN}
        >
          배송 알림을 보관했어요
        </p>
      </Side>
      <Side left={R} title="스낵바">
        <Swap
          motion="thumb-cmp-ts-right"
          from="받은 알림 · 배송 일정 안내"
          to="보관함 · 배송 일정 안내"
          className="mt-[4px]"
        />
        <Btn>알림 보관</Btn>
        <p
          className="thumb-anim thumb-cmp-ts-snack absolute inset-x-[4px] bottom-[4px] flex justify-between rounded-[3px] bg-slate-900 px-[4px] py-[3px] text-white"
          style={HIDDEN}
        >
          배송 알림을 보관했어요
          <b className="text-sky-300">되돌리기</b>
        </p>
      </Side>
      <ThumbCursor motion="thumb-cmp-ts-cursor" />
    </ThumbStage>
  );
}

function TooltipPopover() {
  return (
    <ThumbStage>
      <Side left={L} title="툴팁">
        <p className="mt-[16px] flex items-center gap-[3px]">
          예상 배송일 · 월요일
          <span className="grid size-[7px] place-items-center rounded-full border border-slate-300 text-[4.5px]">
            ?
          </span>
        </p>
        <p
          className="thumb-anim thumb-cmp-tp-tip absolute top-[12px] right-[3px] rounded-[2px] bg-slate-900 px-[3px] py-[1px] text-[5px] text-white"
          style={HIDDEN}
        >
          주말을 뺀 예상 날짜예요.
        </p>
      </Side>
      <Side left={R} title="팝오버">
        <Swap
          motion="thumb-cmp-tp-day"
          from="예상 배송일 · 월요일"
          to="예상 배송일 · 토요일"
          className="mt-[4px]"
        />
        <Sec>배송일 옵션</Sec>
        <div
          className="thumb-anim thumb-cmp-tp-pop absolute top-[34px] left-[5px] rounded-[4px] border border-slate-200 bg-white p-[4px] shadow-md"
          style={HIDDEN}
        >
          <b className="block">예상 배송일 옵션</b>
          <span className="mt-[2px] flex items-center gap-[3px]">
            <Box on="thumb-cmp-tp-check" />
            주말 포함
          </span>
        </div>
      </Side>
      <ThumbCursor motion="thumb-cmp-tp-cursor" />
    </ThumbStage>
  );
}

function Profile() {
  return (
    <span className="block">
      <b className="block">김하늘</b>
      <span className="text-slate-600">프로덕트 디자이너</span>
    </span>
  );
}

function SpinnerSkeleton() {
  return (
    <ThumbStage>
      <Side left={L} title="스피너">
        <Btn>프로필 불러오기</Btn>
        <div className="relative mt-[5px] h-[16px]">
          <span
            className="thumb-anim thumb-cmp-sk-spin absolute top-[2px] left-[2px] size-[9px] rounded-full border-[1.5px] border-slate-200 border-t-blue-700"
            style={HIDDEN}
          />
          <span className="thumb-anim thumb-cmp-sk-left absolute inset-0" style={HIDDEN}>
            <Profile />
          </span>
        </div>
      </Side>
      <Side left={R} title="스켈레톤">
        <Btn>프로필 불러오기</Btn>
        <div className="relative mt-[5px] h-[16px]">
          <span
            className="thumb-anim thumb-cmp-sk-bars absolute inset-0 grid content-start gap-[3px]"
            style={HIDDEN}
          >
            <span className="h-[4px] w-[24px] rounded-[1px] bg-slate-200" />
            <span className="h-[4px] w-[36px] rounded-[1px] bg-slate-200" />
          </span>
          <span className="thumb-anim thumb-cmp-sk-right absolute inset-0" style={HIDDEN}>
            <Profile />
          </span>
        </div>
      </Side>
      <ThumbCursor motion="thumb-cmp-sk-cursor" />
    </ThumbStage>
  );
}

function RadioCheckbox() {
  return (
    <ThumbStage>
      <Side left={L} title="라디오">
        <p className="mt-[2px] text-slate-600">배송 방법</p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Radio on="thumb-cmp-rc-normal" base />
          일반 배송
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Radio on="thumb-cmp-rc-dawn" />
          새벽 배송
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Radio on="thumb-cmp-rc-none" />
          직접 받기
        </p>
        <p className="mt-[4px] text-slate-600">하나만 고를 수 있어요</p>
      </Side>
      <Side left={R} title="체크박스">
        <p className="mt-[2px] text-slate-600">배송 요청</p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Box on="thumb-cmp-rc-door" />문 앞에 두기
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Box />벨 누르지 않기
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Box on="thumb-cmp-rc-pack" />
          포장 줄이기
        </p>
        <span className="mt-[4px] grid text-slate-600">
          <span className="thumb-anim thumb-cmp-rc-c0 col-start-1 row-start-1">0개 골랐어요</span>
          <span className="thumb-anim thumb-cmp-rc-c1 col-start-1 row-start-1" style={HIDDEN}>
            1개 골랐어요
          </span>
          <span className="thumb-anim thumb-cmp-rc-c2 col-start-1 row-start-1" style={HIDDEN}>
            2개 골랐어요
          </span>
        </span>
      </Side>
      <ThumbCursor motion="thumb-cmp-rc-cursor" />
    </ThumbStage>
  );
}

function ChipBadge() {
  return (
    <ThumbStage>
      <Side left={L} title="칩">
        <p className="mt-[5px] flex gap-[2px]">
          <span className="relative rounded-full border border-slate-300 px-[3px]">
            <span
              className="thumb-anim thumb-cmp-cb-chip absolute -inset-px rounded-full bg-slate-900 px-[3px] text-white"
              style={HIDDEN}
            >
              ✓ 새벽배송
            </span>
            <span className="invisible">✓ </span>새벽배송
          </span>
          <span className="rounded-full border border-slate-300 px-[3px]">무료배송</span>
        </p>
        <Swap
          motion="thumb-cmp-cb-count"
          from="상품 4개"
          to="상품 2개"
          className="mt-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="배지">
        <p className="mt-[5px] flex items-center gap-[5px]">
          <span className="relative grid size-[14px] place-items-center rounded-full bg-slate-100 text-[4.5px]">
            알림
            <span className="absolute -top-[2px] -right-[3px] grid h-[7px] min-w-[7px] place-items-center rounded-full bg-rose-600 px-[1px] text-[4.5px] text-white ring-1 ring-white">
              <Swap motion="thumb-cmp-cb-badge" from="3" to="2" />
            </span>
          </span>
          <Sec className="mt-0">하나 읽기</Sec>
        </p>
        <p className="mt-[5px] text-slate-600">배지는 누를 수 없고 개수만 알려요</p>
      </Side>
      <ThumbCursor motion="thumb-cmp-cb-cursor" />
    </ThumbStage>
  );
}

function StepperSlider() {
  return (
    <ThumbStage>
      <Side left={L} title="수량 스테퍼">
        <p className="mt-[3px] text-slate-600">수량</p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <span className="grid size-[9px] place-items-center rounded-[2px] border border-slate-300">
            −
          </span>
          <Swap
            motion="thumb-cmp-ss-q"
            from="1"
            to="2"
            className="w-[6px] text-center font-semibold"
          />
          <span className="grid size-[9px] place-items-center rounded-[2px] border border-slate-300">
            +
          </span>
        </p>
        <Swap
          motion="thumb-cmp-ss-sum"
          from="1개 · 12,000원"
          to="2개 · 24,000원"
          className="mt-[4px] text-slate-600"
        />
      </Side>
      <Side left={R} title="슬라이더">
        <p className="mt-[3px] flex justify-between text-slate-600">
          가격 상한
          <Swap motion="thumb-cmp-ss-v" from="50,000원" to="80,000원" />
        </p>
        <span className="relative mt-[5px] block h-[2px] rounded-full bg-slate-200">
          <span
            className="thumb-anim thumb-cmp-ss-fill absolute inset-y-0 left-0 w-full origin-left rounded-full bg-blue-700"
            style={{ transform: "scaleX(0.444)" }}
          />
          <span
            className="thumb-anim thumb-cmp-ss-thumb absolute -top-[2.5px] -left-[3.5px] size-[7px] rounded-full border border-blue-700 bg-white"
            style={{ transform: "translateX(31.5px)" }}
          />
        </span>
        <Swap
          motion="thumb-cmp-ss-note"
          from="50,000원 이하 상품만 보여요"
          to="80,000원 이하 상품만 보여요"
          className="mt-[6px] text-slate-600"
        />
      </Side>
      <ThumbCursor motion="thumb-cmp-ss-cursor" />
    </ThumbStage>
  );
}

function HamburgerKebab() {
  return (
    <ThumbStage>
      <Side left={L} title="햄버거">
        <p className="mt-[3px] flex items-center justify-between">
          <Swap motion="thumb-cmp-hk-page" from="홈" to="주문 내역" />
          <span className="text-[8px] leading-none">≡</span>
        </p>
        <div
          className="thumb-anim thumb-cmp-hk-nav absolute top-[22px] right-[4px] w-[48px] rounded-[3px] border border-slate-200 bg-white p-[2px] shadow-md"
          style={HIDDEN}
        >
          {["홈", "주문 내역", "설정"].map((item) => (
            <p key={item} className="px-[2px] py-[1px]">
              {item}
            </p>
          ))}
        </div>
        <p className="absolute bottom-[5px] left-[5px] text-slate-600">
          서비스 전체의 다른 화면으로 이동해요
        </p>
      </Side>
      <Side left={R} title="케밥">
        <p className="mt-[3px] flex items-center justify-between rounded-[3px] border border-slate-200 px-[3px] py-[2px]">
          주문 1024 · 배송 중<span className="text-[7px] leading-none">⋮</span>
        </p>
        <div
          className="thumb-anim thumb-cmp-hk-menu absolute top-[24px] right-[4px] w-[40px] rounded-[3px] border border-slate-200 bg-white p-[2px] shadow-md"
          style={HIDDEN}
        >
          <p className="px-[2px] py-[1px]">배송 조회</p>
          <p className="px-[2px] py-[1px] text-rose-600">주문 취소</p>
        </div>
        <Swap
          motion="thumb-cmp-hk-note"
          from="이 주문에만 해당하는 동작이에요"
          to="배송 조회를 열었어요"
          className="absolute bottom-[5px] left-[5px] text-slate-600"
        />
      </Side>
      <ThumbCursor motion="thumb-cmp-hk-cursor" />
    </ThumbStage>
  );
}

function AlertToast() {
  return (
    <ThumbStage>
      <Side left={L} title="얼럿">
        <p className="mt-[3px]">결제 수단 · 카드 1234</p>
        <Btn>결제하기</Btn>
        <Dim motion="thumb-cmp-at-alert">
          <div className="absolute inset-x-[6px] top-[28px] rounded-[4px] bg-white p-[4px]">
            <b className="block">카드 유효기간이 지났어요</b>
            <span className="text-slate-600">다른 결제 수단을 고른 뒤 다시 결제해 주세요.</span>
            <span className="mt-[3px] ml-auto block w-fit rounded-[2px] bg-blue-700 px-[4px] text-white">
              확인
            </span>
          </div>
        </Dim>
      </Side>
      <Side left={R} title="토스트">
        <p className="mt-[3px]">결제 수단 · 카드 1234</p>
        <Btn>배송지 저장</Btn>
        <p
          className="thumb-anim thumb-cmp-at-toast absolute inset-x-[4px] bottom-[4px] rounded-[3px] bg-slate-900 px-[4px] py-[3px] text-white"
          style={HIDDEN}
        >
          배송지를 저장했어요
        </p>
      </Side>
      <ThumbCursor motion="thumb-cmp-at-cursor" />
    </ThumbStage>
  );
}

function PopupModal() {
  return (
    <ThumbStage>
      <Side left={L} title="팝업">
        <Sec>쿠폰 안내</Sec>
        <div
          className="thumb-anim thumb-cmp-pm-pop absolute top-[28px] left-[5px] w-[60px] rounded-[3px] border border-slate-200 bg-white p-[3px] shadow-md"
          style={HIDDEN}
        >
          <b className="block">쿠폰 안내</b>
          3만 원 이상 구매 시 5,000원 할인돼요.
        </div>
        <Sec className="absolute bottom-[25px] left-[5px]">
          <Swap motion="thumb-cmp-pm-count" from="장바구니 담기 0" to="장바구니 담기 1" />
        </Sec>
        <p className="absolute bottom-[4px] left-[5px] text-[5px] text-slate-600">
          열어 둔 채로 뒤의 버튼도 누를 수 있어요
        </p>
      </Side>
      <Side left={R} title="모달">
        <Sec>쿠폰 안내</Sec>
        <Sec className="absolute bottom-[25px] left-[5px]">장바구니 담기 0</Sec>
        <p className="absolute bottom-[4px] left-[5px] text-[5px] text-slate-600">
          닫기 전에는 뒤의 화면을 쓸 수 없어요
        </p>
        <Dim motion="thumb-cmp-pm-modal">
          <div className="absolute inset-x-[6px] top-[26px] rounded-[4px] bg-white p-[4px]">
            <b className="block">쿠폰 안내</b>
            <span className="text-slate-600">3만 원 이상 구매 시 5,000원 할인돼요.</span>
            <span className="mt-[3px] block w-fit rounded-[2px] bg-blue-700 px-[4px] text-white">
              닫기
            </span>
          </div>
        </Dim>
      </Side>
      <ThumbCursor motion="thumb-cmp-pm-cursor" />
    </ThumbStage>
  );
}

function SheetDrawer() {
  return (
    <ThumbStage>
      <Side left={L} title="바텀시트">
        <p className="mt-[3px]">린넨 셔츠 · 39,000원</p>
        <Btn>공유하기</Btn>
        <Dim motion="thumb-cmp-sd-dim">{null}</Dim>
        <div
          className="thumb-anim thumb-cmp-sd-sheet absolute inset-x-0 bottom-0 rounded-t-[6px] bg-white p-[5px]"
          style={{ transform: "translateY(100%)" }}
        >
          <b className="block">공유하기</b>
          <span className="mt-[2px] block w-fit rounded-[2px] border border-slate-300 px-[3px]">
            링크 복사
          </span>
          <span className="mt-[2px] block w-fit rounded-[2px] border border-slate-300 px-[3px]">
            메시지로 보내기
          </span>
        </div>
      </Side>
      <Side left={R} title="드로어">
        <p className="mt-[3px]">지금 보는 분류 · 전체</p>
        <Btn>카테고리</Btn>
        <Dim motion="thumb-cmp-sd-dim2">{null}</Dim>
        <div
          className="thumb-anim thumb-cmp-sd-drawer absolute inset-y-0 left-0 w-[52px] bg-white p-[5px]"
          style={{ transform: "translateX(-100%)" }}
        >
          <b className="block">카테고리</b>
          {["전체", "상의", "하의", "가방"].map((name) => (
            <p key={name} className="mt-[2px]">
              {name}
            </p>
          ))}
        </div>
      </Side>
      <ThumbCursor motion="thumb-cmp-sd-cursor" />
    </ThumbStage>
  );
}

function BannerPush() {
  return (
    <ThumbStage>
      <Side left={L} title="배너">
        <p className="mt-[4px] rounded-[3px] border border-amber-200 bg-amber-50 p-[3px] text-amber-950">
          오늘 밤 2시부터 4시까지 점검해요
        </p>
        <p className="mt-[4px] text-slate-600">앱이나 사이트를 보고 있을 때만 보여요</p>
      </Side>
      <Side left={R} title="푸시 알림">
        <Btn>알림 미리 보기</Btn>
        <div
          className="thumb-anim thumb-cmp-bp-push absolute inset-x-[4px] top-[30px] rounded-[5px] bg-white p-[3px] shadow-md ring-1 ring-slate-900/5"
          style={HIDDEN}
        >
          <span className="text-[4.5px] text-slate-500">동네가게 · 지금</span>
          <b className="block">주문한 상품이 출발했어요</b>
          <span className="text-slate-600">오늘 저녁 7시 전에 도착해요</span>
        </div>
        <Swap
          motion="thumb-cmp-bp-note"
          from="허락한 사람에게만 보낼 수 있어요"
          to="앱을 닫아 두어도 휴대폰 알림 영역에 와요"
          className="absolute inset-x-[5px] bottom-[5px] text-slate-600"
        />
      </Side>
      <ThumbCursor motion="thumb-cmp-bp-cursor" />
    </ThumbStage>
  );
}

function AlertConfirm() {
  return (
    <ThumbStage>
      <Side left={L} title="얼럿">
        <p className="mt-[3px]">쿠폰함 · 5,000원 할인</p>
        <Btn>쿠폰 쓰기</Btn>
        <Dim motion="thumb-cmp-ac-alert">
          <div className="absolute inset-x-[6px] top-[30px] rounded-[4px] bg-white p-[4px]">
            <b className="block">쿠폰 기간이 지났어요</b>
            <span className="text-slate-600">11월 30일까지 쓸 수 있는 쿠폰이었어요.</span>
            <span className="mt-[3px] ml-auto block w-fit rounded-[2px] bg-blue-700 px-[4px] text-white">
              확인
            </span>
          </div>
        </Dim>
      </Side>
      <Side left={R} title="컨펌">
        <p className="mt-[3px]">주문 1024 · 결제 완료</p>
        <Btn>주문 취소</Btn>
        <Dim motion="thumb-cmp-ac-confirm">
          <div className="absolute inset-x-[6px] top-[26px] rounded-[4px] bg-white p-[4px]">
            <b className="block">주문을 취소할까요?</b>
            <span className="text-slate-600">취소하면 결제한 금액은 3일 안에 돌려드려요.</span>
            <span className="mt-[3px] flex justify-end gap-[3px]">
              <span className="rounded-[2px] border border-slate-300 px-[3px]">유지하기</span>
              <span className="rounded-[2px] bg-rose-600 px-[3px] text-white">주문 취소</span>
            </span>
          </div>
        </Dim>
      </Side>
      <ThumbCursor motion="thumb-cmp-ac-cursor" />
    </ThumbStage>
  );
}

function HelperError() {
  return (
    <ThumbStage>
      <Side left={L} title="안내 문구">
        <p className="mt-[4px] font-medium">새 비밀번호</p>
        <p className="text-slate-500">8자 이상, 숫자를 하나 이상 넣어 주세요</p>
        <Field>{null}</Field>
      </Side>
      <Side left={R} title="오류 문구">
        <p className="mt-[4px] font-medium">새 비밀번호</p>
        <Field invalid="thumb-cmp-he-invalid">
          <span className="thumb-anim thumb-cmp-he-typed" style={HIDDEN}>
            ••••••••
          </span>
        </Field>
        <p
          className="thumb-anim thumb-cmp-he-error mt-[2px] font-medium text-rose-600"
          style={HIDDEN}
        >
          ! 숫자를 하나 이상 넣어 주세요
        </p>
        <Btn>변경하기</Btn>
      </Side>
      <ThumbCursor motion="thumb-cmp-he-cursor" />
    </ThumbStage>
  );
}

function PlaceholderLabel() {
  return (
    <ThumbStage>
      <Side left={L} title="플레이스홀더">
        <Field>
          <Swap
            motion="thumb-cmp-pl-a"
            from={<span className="text-slate-400">휴대폰 번호 (010-0000-0000)</span>}
            to="010-1234-5678"
          />
        </Field>
        <p className="mt-[3px] text-slate-600">입력하면 무엇을 쓰는 칸인지 사라져요</p>
      </Side>
      <Side left={R} title="라벨">
        <p className="mt-[3px] font-medium">휴대폰 번호</p>
        <Field>
          <Swap
            motion="thumb-cmp-pl-b"
            from={<span className="text-slate-400">010-0000-0000</span>}
            to="010-1234-5678"
          />
        </Field>
        <p className="mt-[3px] text-slate-600">입력한 뒤에도 칸 이름이 남아요</p>
      </Side>
      <Sec className="absolute bottom-[6px] left-[4px] mt-0 bg-white text-[5.5px]">
        두 칸에 입력해 보기
      </Sec>
      <ThumbCursor motion="thumb-cmp-pl-cursor" />
    </ThumbStage>
  );
}

function AutocompleteSuggestion() {
  return (
    <ThumbStage>
      <Side left={L} title="자동완성">
        <Field>
          <Swap
            motion="thumb-cmp-as-typed"
            from={<span className="text-slate-400">린넨을 입력해 보세요</span>}
            to="린넨"
          />
        </Field>
        <div
          className="thumb-anim thumb-cmp-as-list mt-[1px] rounded-[3px] border border-slate-200 p-[2px] shadow-sm"
          style={HIDDEN}
        >
          {[" 셔츠", " 셔츠 반팔", " 바지", " 원피스"].map((rest) => (
            <p key={rest} className="whitespace-pre text-slate-600">
              린넨<b className="text-slate-900">{rest}</b>
            </p>
          ))}
        </div>
      </Side>
      <Side left={R} title="추천 검색어">
        <Swap
          motion="thumb-cmp-as-result"
          from="린넨 셔츠 검색 결과 24개"
          to="여름 셔츠 검색 결과"
          className="mt-[3px]"
        />
        <p className="mt-[3px] text-slate-600">함께 많이 찾는 검색어</p>
        <p className="mt-[2px] flex flex-wrap gap-[2px]">
          {["여름 셔츠", "린넨 바지", "반팔 셔츠"].map((term) => (
            <span key={term} className="rounded-full border border-slate-300 px-[3px]">
              {term}
            </span>
          ))}
        </p>
      </Side>
      <ThumbCursor motion="thumb-cmp-as-cursor" />
    </ThumbStage>
  );
}

function Orders({ from }: { readonly from: number }) {
  return Array.from({ length: 5 }, (_, index) => (
    <p key={index} className="leading-[8px]">
      주문 {from + index}
    </p>
  ));
}

function PaginationInfinite() {
  return (
    <ThumbStage>
      <Side left={L} title="페이지네이션">
        <div className="relative mt-[2px] h-[42px]">
          <div className="thumb-anim thumb-cmp-pi-p1 absolute inset-0">
            <Orders from={1001} />
          </div>
          <div className="thumb-anim thumb-cmp-pi-p3 absolute inset-0" style={HIDDEN}>
            <Orders from={1011} />
          </div>
        </div>
        <p className="mt-[3px] flex gap-[3px]">
          <span>이전</span>
          {[1, 2, 3].map((page) => (
            <span
              key={page}
              className="relative grid size-[8px] place-items-center rounded-[2px] border border-slate-300"
            >
              {page === 1 ? (
                <span className="thumb-anim thumb-cmp-pi-on1 absolute -inset-px rounded-[2px] bg-slate-900" />
              ) : null}
              {page === 3 ? (
                <span
                  className="thumb-anim thumb-cmp-pi-on3 absolute -inset-px rounded-[2px] bg-slate-900"
                  style={HIDDEN}
                />
              ) : null}
              <span className="relative mix-blend-difference text-white">{page}</span>
            </span>
          ))}
          <span>다음</span>
        </p>
      </Side>
      <Side left={R} title="무한 스크롤">
        <div className="relative mt-[2px] h-[60px] overflow-hidden">
          <div className="thumb-anim thumb-cmp-pi-scroll">
            <Orders from={1001} />
            <Orders from={1006} />
            <p className="thumb-anim thumb-cmp-pi-loading text-slate-500" style={HIDDEN}>
              더 불러오는 중
            </p>
          </div>
        </div>
      </Side>
      <ThumbCursor motion="thumb-cmp-pi-cursor" />
    </ThumbStage>
  );
}

function ProgressSteps() {
  const steps = ["장바구니", "배송지", "결제", "완료"];
  return (
    <ThumbStage>
      <Side left={L} title="진행 바">
        <p className="mt-[3px] flex justify-between">
          사진 올리는 중
          <Swap motion="thumb-cmp-ps-pct" from="30%" to="50%" />
        </p>
        <span className="mt-[2px] block h-[3px] overflow-hidden rounded-full bg-slate-200">
          <span
            className="thumb-anim thumb-cmp-ps-bar block h-full w-full origin-left rounded-full bg-blue-700"
            style={{ transform: "scaleX(0.3)" }}
          />
        </span>
        <Sec>조금 더 올리기</Sec>
        <p className="mt-[3px] text-slate-600">얼마나 끝났는지 비율로 알려요</p>
      </Side>
      <Side left={R} title="단계 표시">
        <p className="mt-[4px] flex">
          {steps.map((step, index) => (
            <span key={step} className="grid flex-1 justify-items-center gap-[1px] text-[4.5px]">
              <span className="relative grid size-[8px] place-items-center rounded-full border border-blue-700 text-[4.5px]">
                {index === 0 ? (
                  <span className="absolute -inset-px rounded-full bg-blue-700 text-center leading-[8px] text-white">
                    ✓
                  </span>
                ) : null}
                {index === 1 ? (
                  <span
                    className="thumb-anim thumb-cmp-ps-done1 absolute -inset-px rounded-full bg-blue-700 text-center leading-[8px] text-white"
                    style={HIDDEN}
                  >
                    ✓
                  </span>
                ) : null}
                {index === 2 ? (
                  <span
                    className="thumb-anim thumb-cmp-ps-now2 absolute -inset-px rounded-full border-2 border-blue-700 bg-white"
                    style={HIDDEN}
                  />
                ) : null}
                {index + 1}
              </span>
              {step}
            </span>
          ))}
        </p>
        <Sec>다음 단계</Sec>
        <p className="mt-[3px] text-slate-600">이름 있는 단계 중 어디인지 알려요</p>
      </Side>
      <ThumbCursor motion="thumb-cmp-ps-cursor" />
    </ThumbStage>
  );
}

function AccordionReadMore() {
  return (
    <ThumbStage>
      <Side left={L} title="아코디언">
        <div className="relative">
          <p className="mt-[3px] border-b border-slate-100 pb-[1px]">배송은 얼마나 걸리나요?</p>
          <p className="thumb-anim thumb-cmp-ar-answer text-slate-600" style={HIDDEN}>
            보통 이틀 안에 도착해요.
          </p>
          <div className="thumb-anim thumb-cmp-ar-push" style={{ transform: "translateY(-8px)" }}>
            <p className="mt-[2px] border-b border-slate-100 pb-[1px]">반품은 어떻게 하나요?</p>
            <p className="mt-[2px] border-b border-slate-100 pb-[1px]">쿠폰은 어디서 받나요?</p>
          </div>
        </div>
      </Side>
      <Side left={R} title="더 보기 접기">
        <div className="relative mt-[3px] h-[50px] overflow-hidden">
          <p className="thumb-anim thumb-cmp-ar-clip text-slate-700">
            가볍고 바람이 잘 통하는 린넨 100% 셔츠예요. 여름 내내 입기 좋고, 세탁 후에도 형태가 쉽게
            무너지지 않아요.
          </p>
          <span className="thumb-anim thumb-cmp-ar-fade absolute inset-x-0 top-[10px] h-[40px] bg-white" />
        </div>
        <Swap
          motion="thumb-cmp-ar-more"
          from="더 보기"
          to="접기"
          className="font-medium text-blue-700"
        />
      </Side>
      <ThumbCursor motion="thumb-cmp-ar-cursor" />
    </ThumbStage>
  );
}

function FilterSort() {
  const names = ["린넨 셔츠", "캔버스 백", "무선 이어폰", "주방 행주"];
  const shift = ["16px", "0px", "8px", "-24px"];
  return (
    <ThumbStage>
      <Side left={L} title="필터">
        <p className="mt-[3px] flex gap-[2px]">
          <span className="rounded-full border border-slate-300 px-[3px]">새벽배송</span>
          <span className="relative rounded-full border border-slate-300 px-[3px]">
            <span
              className="thumb-anim thumb-cmp-fs-chip absolute -inset-px rounded-full bg-slate-900 px-[3px] text-white"
              style={HIDDEN}
            >
              ✓ 무료배송
            </span>
            <span className="invisible">✓ </span>무료배송
          </span>
        </p>
        <div className="mt-[3px]">
          {names.map((name, index) => (
            <p
              key={name}
              className={`leading-[8px] ${index >= 2 ? "thumb-anim thumb-cmp-fs-out" : ""}`}
            >
              {name}
            </p>
          ))}
        </div>
        <Swap
          motion="thumb-cmp-fs-count"
          from="결과 4개 · 보이는 항목이 바뀌어요"
          to="결과 2개 · 보이는 항목이 바뀌어요"
          className="mt-[3px] text-slate-600"
        />
      </Side>
      <Side left={R} title="정렬">
        <p className="mt-[3px] flex justify-end">
          <span className="rounded-[2px] border border-slate-200 px-[3px]">
            <Swap motion="thumb-cmp-fs-label" from="추천순 ▾" to="낮은 가격순 ▾" />
          </span>
        </p>
        <div className="relative mt-[3px] h-[32px]">
          {names.map((name, index) => (
            <p
              key={name}
              className="thumb-anim thumb-cmp-fs-move absolute leading-[8px]"
              style={{ top: index * 8, "--to": shift[index] } as CSSProperties}
            >
              {name}
            </p>
          ))}
        </div>
        <p className="text-slate-600">결과 4개 · 순서만 바뀌어요</p>
      </Side>
      <ThumbCursor motion="thumb-cmp-fs-cursor" />
    </ThumbStage>
  );
}

export const COMPARISON_THUMBNAILS: Readonly<Record<string, ComponentType>> = {
  "switch-checkbox": SwitchCheckbox,
  "tabs-segmented-control": TabsSegmented,
  "modal-dialog-bottom-sheet": ModalSheet,
  "toast-snackbar": ToastSnackbar,
  "tooltip-popover": TooltipPopover,
  "spinner-skeleton": SpinnerSkeleton,
  "radio-group-checkbox": RadioCheckbox,
  "chip-badge": ChipBadge,
  "number-stepper-slider": StepperSlider,
  "hamburger-kebab": HamburgerKebab,
  "alert-dialog-toast": AlertToast,
  "non-modal-popup-modal-dialog": PopupModal,
  "bottom-sheet-drawer": SheetDrawer,
  "alert-banner-push-notification": BannerPush,
  "alert-confirmation-dialog": AlertConfirm,
  "helper-text-error-message": HelperError,
  "placeholder-label": PlaceholderLabel,
  "autocomplete-search-suggestion": AutocompleteSuggestion,
  "pagination-infinite-scroll": PaginationInfinite,
  "progress-bar-step-indicator": ProgressSteps,
  "accordion-read-more": AccordionReadMore,
  "filter-sort": FilterSort,
  ...REST_COMPARISON_THUMBNAILS,
};
