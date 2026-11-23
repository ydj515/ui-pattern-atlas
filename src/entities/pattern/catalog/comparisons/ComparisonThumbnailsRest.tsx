import type { ComponentType, ReactNode } from "react";

import { Icon, type IconName } from "@/entities/pattern/catalog/comparisons/ComparisonIcons";
import {
  Btn,
  Field,
  HIDDEN,
  L,
  R,
  Radio,
  Sec,
  Side,
  Swap,
} from "@/entities/pattern/catalog/comparisons/ComparisonThumbParts";
import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/*
 * Thumbnails for the comparison guides added last: each replays its demo in
 * ComparisonDemosRest with the same copy. Keyframes use the thumb-cmq- prefix.
 */

function Stage({ cursor, children }: { readonly cursor: string; readonly children: ReactNode }) {
  return (
    <ThumbStage>
      {children}
      <ThumbCursor motion={`thumb-cmq-${cursor}-cursor`} />
    </ThumbStage>
  );
}

function Ico({
  name,
  className = "size-[8px]",
}: {
  readonly name: IconName;
  readonly className?: string;
}) {
  return <Icon name={name} className={className} />;
}

/** Outline icon that fills in when `motion` fires (e.g. a heart being pressed). */
function Fill({
  name,
  motion,
  className = "size-[9px] text-rose-600",
}: {
  readonly name: IconName;
  readonly motion: string;
  readonly className?: string;
}) {
  return (
    <span className="relative inline-grid">
      <span className={`thumb-anim ${motion}-from col-start-1 row-start-1 text-slate-700`}>
        <Icon name={name} className={className.replace(/text-\S+/, "")} />
      </span>
      <span className={`thumb-anim ${motion}-to col-start-1 row-start-1`} style={HIDDEN}>
        <Icon name={name} className={className} filled />
      </span>
    </span>
  );
}

function Note({
  children,
  className = "",
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return <p className={`mt-[3px] text-[5px] text-slate-600 ${className}`}>{children}</p>;
}

function Menu({ motion, top }: { readonly motion: string; readonly top: number }) {
  return (
    <div
      className={`thumb-anim ${motion} absolute right-[5px] w-[40px] rounded-[3px] border border-slate-200 bg-white p-[2px] shadow-md`}
      style={{ top, ...HIDDEN }}
    >
      <p className="px-[2px] py-[1px]">배송 조회</p>
      <p className="px-[2px] py-[1px] text-rose-600">주문 취소</p>
    </div>
  );
}

function KebabMeatballs() {
  return (
    <Stage cursor="km">
      <Side left={L} title="케밥">
        <p className="mt-[4px] flex items-center justify-between rounded-[3px] border border-slate-200 px-[3px] py-[2px]">
          주문 1024 · 배송 중
          <Ico name="kebab" />
        </p>
        <Menu motion="thumb-cmq-km-l" top={28} />
        <Note className="absolute bottom-[5px]">세로 점 세 개 · 안드로이드와 웹에서 흔해요</Note>
      </Side>
      <Side left={R} title="미트볼">
        <p className="mt-[4px] flex items-center justify-between rounded-[3px] border border-slate-200 px-[3px] py-[2px]">
          주문 1024 · 배송 중
          <Ico name="meatballs" />
        </p>
        <Menu motion="thumb-cmq-km-r" top={28} />
        <Note className="absolute bottom-[5px]">가로 점 세 개 · iOS와 웹에서 흔해요</Note>
      </Side>
    </Stage>
  );
}

function ShareExport() {
  return (
    <Stage cursor="se">
      <Side left={L} title="공유">
        <p className="mt-[3px]">11월 주문 내역</p>
        <Btn>공유</Btn>
        <p className="thumb-anim thumb-cmq-se-targets mt-[3px] flex gap-[3px]" style={HIDDEN}>
          <Sec className="mt-0">메시지</Sec>
          <Sec className="mt-0">메일</Sec>
        </p>
        <Note>누구에게 보낼지 고르는 동작이에요</Note>
      </Side>
      <Side left={R} title="내보내기">
        <p className="mt-[3px]">11월 주문 내역</p>
        <p className="mt-[3px] flex gap-[6px]">
          <span className="flex items-center gap-[2px]">
            <Radio on="thumb-cmq-se-csv" base />
            CSV
          </span>
          <span className="flex items-center gap-[2px]">
            <Radio on="thumb-cmq-se-pdf" />
            PDF
          </span>
        </p>
        <Btn>내보내기</Btn>
        <Swap
          motion="thumb-cmq-se-done"
          from="다른 형식의 파일을 만드는 동작이에요"
          to="주문내역_11월.csv 파일을 만들었어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function CloseBack() {
  return (
    <Stage cursor="cb">
      <Side left={L} title="닫기">
        <div className="relative mt-[3px] h-[48px] rounded-[3px] bg-slate-100 p-[3px]">
          주문 상세
          <div className="thumb-anim thumb-cmq-cb-overlay absolute inset-x-[4px] top-[12px] flex justify-between rounded-[3px] bg-white p-[3px] shadow">
            <b>쿠폰을 받았어요</b>
            <Ico name="close" className="size-[7px]" />
          </div>
        </div>
        <Swap
          motion="thumb-cmq-cb-l"
          from="떠 있는 창을 닫으면 같은 화면이 남아요"
          to="창을 닫았어요 · 지금 화면: 주문 상세"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="뒤로">
        <div className="mt-[3px] h-[48px] rounded-[3px] bg-slate-100 p-[3px]">
          <Swap
            motion="thumb-cmq-cb-title"
            from={
              <b className="flex items-center gap-[2px]">
                <Ico name="back" className="size-[7px]" />
                주문 상세
              </b>
            }
            to={<b>주문 내역</b>}
          />
        </div>
        <Swap
          motion="thumb-cmq-cb-r"
          from="이전 단계인 주문 내역으로 돌아가요"
          to="이전 화면으로 돌아왔어요 · 지금 화면: 주문 내역"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function RefreshUndo() {
  return (
    <Stage cursor="ru">
      <Side left={L} title="새로고침">
        <p className="mt-[4px] flex items-center justify-between">
          <Swap motion="thumb-cmq-ru-count" from="새 주문 3건" to="새 주문 5건" />
          <Ico name="refresh" />
        </p>
        <Swap
          motion="thumb-cmq-ru-l"
          from="서버에서 최신 내용을 다시 가져와요"
          to="최신 주문을 다시 불러왔어요"
          className="mt-[4px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="되돌리기">
        <p className="thumb-anim thumb-cmq-ru-row mt-[4px] flex justify-between">
          린넨 셔츠<span className="text-slate-500 underline">빼기</span>
        </p>
        <p className="mt-[2px] flex justify-between">
          캔버스 백<span className="text-slate-500 underline">빼기</span>
        </p>
        <span className="thumb-anim thumb-cmq-ru-undo block" style={HIDDEN}>
          <Sec className="flex items-center gap-[2px]">
            <Ico name="undo" className="size-[6px]" />
            되돌리기
          </Sec>
        </span>
        <Swap
          motion="thumb-cmq-ru-r"
          from="방금 한 작업을 취소해요"
          to="뺐어요: 린넨 셔츠"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function SearchZoom() {
  return (
    <Stage cursor="sz">
      <Side left={L} title="검색">
        <p className="mt-[4px] flex items-center justify-between">
          <Swap
            motion="thumb-cmq-sz-field"
            from={<b>신상품</b>}
            to={<Field>상품 검색</Field>}
            className="w-[52px]"
          />
          <Ico name="search" />
        </p>
        <Note>다른 내용을 찾으러 가요</Note>
      </Side>
      <Side left={R} title="확대">
        <div className="relative mt-[4px] h-[44px] overflow-hidden rounded-[3px] bg-slate-100">
          <span className="thumb-anim thumb-cmq-sz-photo absolute inset-[8px] rounded-[3px] bg-gradient-to-br from-sky-200 to-sky-400" />
          <span className="absolute top-[2px] right-[2px] rounded-full bg-white p-[1px]">
            <Ico name="zoomIn" className="size-[7px]" />
          </span>
        </div>
        <Swap
          motion="thumb-cmq-sz-z"
          from="지금 보는 사진을 1배로 봐요"
          to="지금 보는 사진을 1.5배로 봐요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function EditCompose() {
  return (
    <Stage cursor="ec">
      <Side left={L} title="수정">
        <div className="mt-[4px] flex items-start justify-between gap-[2px] rounded-[3px] border border-slate-200 p-[3px]">
          <Swap
            motion="thumb-cmq-ec-text"
            from="이번 주 장보기 목록이에요"
            to={
              <span className="block rounded-[2px] border border-slate-400 px-[2px]">
                이번 주 장보기 목록이에요
              </span>
            }
          />
          <Ico name="edit" className="size-[7px] shrink-0" />
        </div>
        <Note>이미 있는 글을 바꿔요</Note>
      </Side>
      <Side left={R} title="새 글">
        <Swap
          motion="thumb-cmq-ec-new"
          from={<span className="text-slate-500">글 3개</span>}
          to={
            <span className="block h-[16px] rounded-[2px] border border-slate-300 px-[2px] text-slate-400">
              무엇을 적을까요?
            </span>
          }
          className="mt-[4px]"
        />
        <Btn className="flex items-center gap-[2px]">
          <Ico name="compose" className="size-[6px]" />새 글
        </Btn>
        <Note>빈 칸에서 새로 써요</Note>
      </Side>
    </Stage>
  );
}

function Days({ pick }: { readonly pick: string }) {
  return (
    <p className="mt-[2px] grid grid-cols-7 gap-[1px] text-center text-[4.5px]">
      {Array.from({ length: 14 }, (_, index) => index + 17).map((day) => (
        <span
          key={day}
          className={`relative rounded-[1px] ${[22, 23, 29, 30].includes(day) ? "text-slate-300 line-through" : ""}`}
        >
          {day === 25 ? (
            <span
              className={`thumb-anim ${pick} absolute inset-0 rounded-[1px] bg-blue-700 text-white`}
              style={HIDDEN}
            >
              25
            </span>
          ) : null}
          {day}
        </span>
      ))}
    </p>
  );
}

function DropdownPicker() {
  return (
    <Stage cursor="dp">
      <Side left={L} title="드롭다운">
        <p className="mt-[3px]">배송 요청</p>
        <Field>
          <span className="flex justify-between">
            <Swap motion="thumb-cmq-dp-value" from="문 앞에 두기" to="경비실에 맡기기" />
            <Ico name="chevronDown" className="size-[6px]" />
          </span>
        </Field>
        <div
          className="thumb-anim thumb-cmq-dp-list absolute inset-x-[5px] top-[36px] rounded-[3px] border border-slate-200 bg-white p-[2px] shadow-md"
          style={HIDDEN}
        >
          {["문 앞에 두기", "경비실에 맡기기", "직접 받기"].map((option) => (
            <p key={option} className="px-[2px] py-[1px]">
              {option}
            </p>
          ))}
        </div>
      </Side>
      <Side left={R} title="피커">
        <p className="mt-[3px]">배송 희망일</p>
        <Days pick="thumb-cmq-dp-day" />
        <Swap
          motion="thumb-cmq-dp-r"
          from="주말은 고를 수 없어요"
          to="11월 25일에 받아요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function CarouselScroll() {
  return (
    <Stage cursor="ch">
      <Side left={L} title="캐러셀">
        <div className="mt-[3px] grid h-[34px] place-items-center rounded-[3px] bg-slate-100">
          <Swap motion="thumb-cmq-ch-slide" from="린넨 셔츠" to="캔버스 백" />
        </div>
        <p className="mt-[3px] flex items-center justify-between">
          <span className="rounded-[2px] border border-slate-300 px-[3px]">이전</span>
          <Swap motion="thumb-cmq-ch-page" from="1 / 3" to="2 / 3" />
          <span className="rounded-[2px] border border-slate-300 px-[3px]">다음</span>
        </p>
        <Note>한 번에 한 장씩 넘겨요</Note>
      </Side>
      <Side left={R} title="가로 스크롤">
        <div className="mt-[3px] overflow-hidden">
          <p className="thumb-anim thumb-cmq-ch-row flex w-max gap-[3px]">
            {["린넨 셔츠", "캔버스 백", "무선 이어폰", "주방 행주", "린넨 바지"].map((name) => (
              <span
                key={name}
                className="grid h-[34px] w-[30px] place-items-center rounded-[3px] bg-slate-100 text-center text-[4.5px]"
              >
                {name}
              </span>
            ))}
          </p>
        </div>
        <Note>옆으로 밀어 원하는 만큼 봐요</Note>
      </Side>
    </Stage>
  );
}

function TopBottom() {
  const tabs = ["홈", "검색", "주문", "내 정보"];
  return (
    <Stage cursor="tb">
      <Side left={L} title="상단 바">
        <div className="mt-[3px] rounded-[3px] border border-slate-200">
          <p className="flex items-center justify-between border-b border-slate-200 px-[2px] py-[1px]">
            <Ico name="back" className="size-[6px]" />
            <b>주문 상세</b>
            <Ico name="share" className="size-[6px]" />
          </p>
          <p className="h-[24px] p-[2px]">주문 1024 · 배송 중</p>
        </div>
        <Swap
          motion="thumb-cmq-tb-l"
          from="지금 화면의 제목과 동작"
          to="이 주문을 공유해요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="하단 탭 바">
        <div className="mt-[3px] rounded-[3px] border border-slate-200">
          <Swap
            motion="thumb-cmq-tb-screen"
            from={<p className="h-[24px] p-[2px]">홈 화면</p>}
            to={<p className="h-[24px] p-[2px]">주문 화면</p>}
          />
          <p className="relative flex border-t border-slate-200 text-center text-[4.5px]">
            {tabs.map((tab) => (
              <span key={tab} className="flex-1 py-[2px] text-slate-500">
                {tab}
              </span>
            ))}
            <span className="thumb-anim thumb-cmq-tb-mark absolute top-0 left-0 h-[1px] w-1/4 bg-slate-900" />
          </p>
        </div>
        <Note>앱의 주요 목적지를 오가요</Note>
      </Side>
    </Stage>
  );
}

function FabSticky() {
  return (
    <Stage cursor="fb">
      <Side left={L} title="플로팅 버튼">
        <div className="relative mt-[3px] h-[56px] rounded-[3px] bg-slate-50 p-[3px]">
          <Swap motion="thumb-cmq-fb-count" from="글 3개" to="글 4개" />
          <span className="absolute right-[3px] bottom-[3px] grid size-[14px] place-items-center rounded-full bg-blue-700 text-white shadow">
            <Ico name="compose" className="size-[7px]" />
          </span>
        </div>
        <Note>동작 하나를 내용 위에 띄워요</Note>
      </Side>
      <Side left={R} title="하단 고정 바">
        <div className="relative mt-[3px] h-[56px] rounded-[3px] bg-slate-50 p-[3px]">
          린넨 셔츠
          <p className="absolute inset-x-0 bottom-0 flex items-center justify-between rounded-b-[3px] border-t border-slate-200 bg-white p-[2px]">
            <b>39,000원</b>
            <span className="rounded-[2px] bg-blue-700 px-[3px] text-white">구매하기</span>
          </p>
        </div>
        <Swap
          motion="thumb-cmq-fb-r"
          from="가격과 버튼을 함께 아래에 고정해요"
          to="주문서로 넘어가요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function FieldTextarea() {
  return (
    <Stage cursor="tt">
      <Side left={L} title="한 줄 입력">
        <p className="mt-[3px]">받는 분</p>
        <Field>
          <span className="thumb-anim thumb-cmq-tt-name" style={HIDDEN}>
            김하늘
          </span>
        </Field>
        <Note>이름처럼 짧은 값. Enter는 다음으로 넘어가요</Note>
      </Side>
      <Side left={R} title="여러 줄 입력">
        <p className="mt-[3px]">배송 메모</p>
        <span className="mt-[2px] block h-[22px] rounded-[3px] border border-slate-300 px-[3px] leading-[8px]">
          <span className="thumb-anim thumb-cmq-tt-l1 block" style={HIDDEN}>
            문 앞에 두고
          </span>
          <span className="thumb-anim thumb-cmq-tt-l2 block" style={HIDDEN}>
            벨은 누르지 말아 주세요
          </span>
        </span>
        <Swap
          motion="thumb-cmq-tt-lines"
          from="1줄 · Enter는 줄을 바꿔요"
          to="2줄 · Enter는 줄을 바꿔요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function PasswordOtp() {
  return (
    <Stage cursor="po">
      <Side left={L} title="비밀번호">
        <p className="mt-[3px]">비밀번호</p>
        <Field>
          <span className="thumb-anim thumb-cmq-po-pw" style={HIDDEN}>
            ••••••••
          </span>
        </Field>
        <Note>내가 정해 두고 계속 쓰는 값이에요</Note>
      </Side>
      <Side left={R} title="인증번호">
        <p className="mt-[3px]">인증번호 6자리</p>
        <Field>
          <span className="thumb-anim thumb-cmq-po-code tracking-[2px]" style={HIDDEN}>
            482913
          </span>
        </Field>
        <Swap
          motion="thumb-cmq-po-r"
          from="문자로 받은 번호예요 · 3분 안에 입력해 주세요"
          to="확인 중이에요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function ClearShow() {
  return (
    <Stage cursor="cs">
      <Side left={L} title="지우기">
        <Field>
          <span className="flex justify-between">
            <span className="thumb-anim thumb-cmq-cs-text">린넨 셔츠</span>
            <span className="thumb-anim thumb-cmq-cs-text">
              <Ico name="close" className="size-[6px]" />
            </span>
          </span>
        </Field>
        <Swap
          motion="thumb-cmq-cs-l"
          from="입력한 값을 비워요"
          to="비웠어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="보기">
        <Field>
          <span className="flex justify-between">
            <Swap motion="thumb-cmq-cs-pw" from="•••••••••" to="linen2024" />
            <span className="text-slate-600">보기</span>
          </span>
        </Field>
        <Swap
          motion="thumb-cmq-cs-r"
          from="값은 그대로, 가려서 보여요"
          to="값은 그대로, 글자로 보여요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function CounterLimit() {
  return (
    <Stage cursor="cl">
      <Side left={L} title="글자 수">
        <p className="mt-[3px]">한 줄 후기</p>
        <Field>
          <span className="thumb-anim thumb-cmq-cl-review block truncate" style={HIDDEN}>
            포장이 꼼꼼하고 배송도 빨라서 정말 좋아요
          </span>
        </Field>
        <Swap
          motion="thumb-cmq-cl-count"
          from={<span className="text-slate-500">0/20</span>}
          to={<span className="text-rose-600">23/20</span>}
          className="mt-[2px] text-right"
        />
        <Note>지금 길이를 알려 줘요. 넘쳐도 입력은 돼요</Note>
      </Side>
      <Side left={R} title="입력 제한">
        <p className="mt-[3px]">닉네임</p>
        <Field>
          <span className="thumb-anim thumb-cmq-cl-nick" style={HIDDEN}>
            동네가게단골손님
          </span>
        </Field>
        <Swap
          motion="thumb-cmq-cl-r"
          from="8자가 넘으면 더 입력되지 않아요"
          to="8자까지만 들어가요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function Keys({ keys, motion }: { readonly keys: readonly string[]; readonly motion: string }) {
  return (
    <p
      className={`thumb-anim ${motion} mt-[3px] grid grid-cols-5 gap-[1px] rounded-[3px] bg-slate-100 p-[2px] text-center text-[5px]`}
      style={HIDDEN}
    >
      {keys.map((key) => (
        <span key={key} className="rounded-[1px] bg-white">
          {key}
        </span>
      ))}
    </p>
  );
}

function KeypadKeyboard() {
  return (
    <Stage cursor="kk">
      <Side left={L} title="숫자 키패드">
        <p className="mt-[3px]">휴대폰 번호</p>
        <Field>{null}</Field>
        <Keys motion="thumb-cmq-kk-num" keys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]} />
      </Side>
      <Side left={R} title="일반 키보드">
        <p className="mt-[3px]">배송 메모</p>
        <Field>{null}</Field>
        <Keys
          motion="thumb-cmq-kk-kor"
          keys={["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"]}
        />
      </Side>
    </Stage>
  );
}

function DateInputPicker() {
  return (
    <Stage cursor="di">
      <Side left={L} title="날짜 직접 입력">
        <p className="mt-[3px]">생년월일</p>
        <Field>
          <Swap
            motion="thumb-cmq-di-birth"
            from={<span className="text-slate-400">1990-05-14</span>}
            to="1988-11-02"
          />
        </Field>
        <Note>이미 아는 날짜는 바로 입력해요</Note>
      </Side>
      <Side left={R} title="날짜 선택">
        <p className="mt-[3px]">배송 희망일</p>
        <Days pick="thumb-cmq-di-day" />
        <Swap
          motion="thumb-cmq-di-r"
          from="고를 수 있는 날을 보며 골라요"
          to="11월 25일에 받아요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function RequiredOptional() {
  return (
    <Stage cursor="ro">
      <Side left={L} title="필수">
        <p className="mt-[3px]">
          받는 분 <span className="text-rose-600">(필수)</span>
        </p>
        <Field invalid="thumb-cmq-ro-invalid">{null}</Field>
        <Btn>다음</Btn>
        <p
          className="thumb-anim thumb-cmq-ro-error mt-[3px] text-[5px] text-rose-600"
          style={HIDDEN}
        >
          받는 분을 입력해야 넘어가요
        </p>
      </Side>
      <Side left={R} title="선택">
        <p className="mt-[3px]">
          배송 메모 <span className="text-slate-500">(선택)</span>
        </p>
        <Field>{null}</Field>
        <Btn>다음</Btn>
        <p className="thumb-anim thumb-cmq-ro-ok mt-[3px] text-[5px] text-slate-600" style={HIDDEN}>
          비워 두어도 넘어가요
        </p>
      </Side>
    </Stage>
  );
}

function BellIcon({ children }: { readonly children: ReactNode }) {
  return (
    <span className="relative mt-[6px] inline-grid size-[16px] place-items-center rounded-full bg-slate-100">
      <Ico name="bell" className="size-[9px]" />
      {children}
    </span>
  );
}

function BadgeDot() {
  return (
    <Stage cursor="bd">
      <Side left={L} title="배지">
        <BellIcon>
          <span className="thumb-anim thumb-cmq-bd-badge absolute -top-[2px] -right-[3px] grid h-[7px] min-w-[7px] place-items-center rounded-full bg-rose-600 px-[1px] text-[4.5px] text-white ring-1 ring-white">
            <Swap motion="thumb-cmq-bd-n" from="3" to="4" />
          </span>
        </BellIcon>
        <Note>몇 개인지 알려 줘요</Note>
      </Side>
      <Side left={R} title="알림 점">
        <BellIcon>
          <span className="thumb-anim thumb-cmq-bd-dot absolute top-[2px] right-[2px] size-[4px] rounded-full bg-rose-600 ring-1 ring-white" />
        </BellIcon>
        <Note>있다는 사실만 알려 줘요</Note>
      </Side>
      <p className="absolute bottom-[8px] left-[8px] flex gap-[4px] text-[5.5px]">
        <Sec className="mt-0 bg-white">새 알림 오기</Sec>
        <Sec className="mt-0 bg-white">모두 읽기</Sec>
      </p>
    </Stage>
  );
}

function OnboardingCoach() {
  return (
    <Stage cursor="oc">
      <Side left={L} title="온보딩">
        <div className="mt-[3px] grid h-[36px] place-items-center rounded-[3px] bg-slate-100 text-center">
          <Swap motion="thumb-cmq-oc-step" from="가까운 가게를 찾아요" to="새벽에 받아요" />
        </div>
        <p className="mt-[3px] flex items-center justify-between">
          <Swap motion="thumb-cmq-oc-page" from="1 / 3" to="2 / 3" />
          <span className="rounded-[2px] border border-slate-300 px-[3px]">다음</span>
        </p>
      </Side>
      <Side left={R} title="코치마크">
        <div className="relative mt-[3px] h-[50px] rounded-[3px] bg-slate-100 p-[3px]">
          <span className="relative inline-block rounded-[2px] bg-white px-[3px]">
            <span className="thumb-anim thumb-cmq-oc-ring absolute -inset-px rounded-[2px] ring-1 ring-blue-600" />
            주문 내역
          </span>
          <div className="thumb-anim thumb-cmq-oc-tip absolute top-[16px] left-[3px] w-[64px] rounded-[3px] bg-slate-900 p-[3px] text-white">
            여기서 주문 내역을 볼 수 있어요
            <b className="block text-sky-300">확인</b>
          </div>
        </div>
        <Note>지금 화면의 한 곳을 짚어 줘요</Note>
      </Side>
    </Stage>
  );
}

function Scene({ motion, blur }: { readonly motion: string; readonly blur?: boolean }) {
  return (
    <div className="relative mt-[3px] h-[50px] overflow-hidden rounded-[3px] bg-gradient-to-br from-amber-100 to-sky-200 p-[3px]">
      <b className="block">여름 린넨 모음</b>
      가볍고 시원한 셔츠와 바지
      <div
        className={`thumb-anim ${motion} absolute inset-0 grid place-items-center ${blur ? "bg-white/30 backdrop-blur-[2px]" : "bg-slate-900/50"}`}
        style={HIDDEN}
      >
        <span className="rounded-[3px] bg-white px-[4px] py-[2px] text-center">
          쿠폰을 받았어요
        </span>
      </div>
    </div>
  );
}

function DimBlur() {
  return (
    <Stage cursor="db">
      <Side left={L} title="딤">
        <Scene motion="thumb-cmq-db-dim" />
        <Sec>창 띄우기</Sec>
        <Note>배경을 어둡게 해 창에 집중하게 해요</Note>
      </Side>
      <Side left={R} title="블러">
        <Scene motion="thumb-cmq-db-blur" blur />
        <Sec>창 띄우기</Sec>
        <Note>배경을 흐리게 해 맥락은 남기고 가려요</Note>
      </Side>
    </Stage>
  );
}

function LikeWishlist() {
  return (
    <Stage cursor="lw">
      <Side left={L} title="좋아요">
        <p className="mt-[3px]">서울숲 산책 사진</p>
        <p className="mt-[3px] flex items-center gap-[3px]">
          <Fill name="heart" motion="thumb-cmq-lw-like" />
          <Swap motion="thumb-cmq-lw-n" from="12" to="13" />
        </p>
        <Note>글쓴이에게 반응을 보여요. 숫자가 모두에게 보여요</Note>
      </Side>
      <Side left={R} title="찜">
        <p className="mt-[3px]">린넨 셔츠 · 39,000원</p>
        <p className="mt-[3px]">
          <Fill name="heart" motion="thumb-cmq-lw-save" />
        </p>
        <Swap
          motion="thumb-cmq-lw-r"
          from="관심 상품을 나만 보는 목록에 모아요"
          to="찜 목록에 담았어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function WishlistCart() {
  return (
    <Stage cursor="wc">
      <Side left={L} title="찜">
        <p className="mt-[3px]">린넨 셔츠 · 39,000원</p>
        <Sec>
          <Swap motion="thumb-cmq-wc-btn" from="찜하기" to="찜 해제" />
        </Sec>
        <p className="thumb-anim thumb-cmq-wc-l mt-[3px] text-[5px] text-slate-600" style={HIDDEN}>
          나중에 다시 볼게요 · 수량과 결제는 없어요
        </p>
      </Side>
      <Side left={R} title="장바구니">
        <p className="mt-[3px]">린넨 셔츠 · 39,000원</p>
        <Btn>장바구니 담기</Btn>
        <p className="thumb-anim thumb-cmq-wc-r mt-[3px] text-[5px] text-slate-600" style={HIDDEN}>
          1개 · 결제 예정 39,000원
        </p>
      </Side>
    </Stage>
  );
}

function BookmarkLike() {
  return (
    <Stage cursor="bl">
      <Side left={L} title="북마크">
        <p className="mt-[3px]">겨울 패딩 고르는 법</p>
        <p className="mt-[3px]">
          <Fill name="bookmark" motion="thumb-cmq-bl-save" className="size-[9px] text-slate-900" />
        </p>
        <Swap
          motion="thumb-cmq-bl-l"
          from="나중에 읽으려고 보관해요"
          to="저장한 글 1 · 나만 볼 수 있어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="좋아요">
        <p className="mt-[3px]">겨울 패딩 고르는 법</p>
        <p className="mt-[3px] flex items-center gap-[3px]">
          <Fill name="heart" motion="thumb-cmq-bl-like" />
          <Swap motion="thumb-cmq-bl-n" from="25" to="26" />
        </p>
        <Note>반응을 남겨요. 숫자가 모두에게 보여요</Note>
      </Side>
    </Stage>
  );
}

function FollowNotify() {
  return (
    <Stage cursor="fn">
      <Side left={L} title="팔로우">
        <p className="mt-[3px]">동네가게 공식 계정</p>
        <Swap motion="thumb-cmq-fn-btn" from={<Btn>팔로우</Btn>} to={<Sec>팔로잉</Sec>} />
        <p className="thumb-anim thumb-cmq-fn-l mt-[3px] text-[5px] text-slate-600" style={HIDDEN}>
          피드에 새 글이 모여요
        </p>
      </Side>
      <Side left={R} title="알림 설정">
        <p className="mt-[3px] flex items-center gap-[2px]">
          <Ico name="bell" className="size-[6px]" />새 글 알림
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Radio on="thumb-cmq-fn-all" />
          모든 글
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Radio on="thumb-cmq-fn-key" />
          주요 글만
        </p>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <Radio on="thumb-cmq-fn-off" base />
          끄기
        </p>
        <Note>언제 알림을 받을지 정해요</Note>
      </Side>
    </Stage>
  );
}

function ShareCopy() {
  return (
    <Stage cursor="sc">
      <Side left={L} title="공유">
        <Btn className="flex items-center gap-[2px]">
          <Ico name="share" className="size-[6px]" />
          공유
        </Btn>
        <p className="thumb-anim thumb-cmq-sc-targets mt-[3px] flex gap-[3px]" style={HIDDEN}>
          <Sec className="mt-0">메시지</Sec>
          <Sec className="mt-0">메일</Sec>
        </p>
        <Note>받을 곳을 골라요</Note>
      </Side>
      <Side left={R} title="링크 복사">
        <Sec className="flex items-center gap-[2px]">
          <Ico name="link" className="size-[6px]" />
          링크 복사
        </Sec>
        <Swap
          motion="thumb-cmq-sc-r"
          from="주소만 복사해 원하는 곳에 붙여 넣어요"
          to="링크를 복사했어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function RatingReview() {
  return (
    <Stage cursor="rr">
      <Side left={L} title="별점">
        <p className="mt-[4px] flex text-amber-500">
          {[1, 2, 3, 4, 5].map((value) => (
            <span key={value} className="relative inline-grid">
              <Ico name="star" className="col-start-1 row-start-1 size-[9px]" />
              {value <= 4 ? (
                <span
                  className="thumb-anim thumb-cmq-rr-stars col-start-1 row-start-1"
                  style={HIDDEN}
                >
                  <Icon name="star" className="size-[9px]" filled />
                </span>
              ) : null}
            </span>
          ))}
        </p>
        <Swap
          motion="thumb-cmq-rr-l"
          from="한 번에 점수만 남겨요"
          to="4점을 남겼어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="리뷰">
        <p className="mt-[3px]">후기</p>
        <span className="mt-[2px] block h-[16px] rounded-[3px] border border-slate-300 px-[2px]">
          <Swap
            motion="thumb-cmq-rr-text"
            from={<span className="text-slate-400">예: 평소 사이즈로 넉넉하게 맞아요</span>}
            to="평소 사이즈로 넉넉하게 맞아요"
          />
        </span>
        <Btn>후기 올리기</Btn>
        <Swap
          motion="thumb-cmq-rr-r"
          from="10자 이상, 구체적인 경험을 적어요"
          to="후기를 올렸어요"
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function RecentWishlist() {
  return (
    <Stage cursor="rw">
      <Side left={L} title="최근 본 항목">
        <p className="mt-[3px] flex flex-wrap gap-[2px]">
          {["린넨 셔츠", "캔버스 백"].map((name) => (
            <span key={name} className="rounded-[2px] border border-slate-300 px-[2px]">
              {name} 보기
            </span>
          ))}
        </p>
        <Swap
          motion="thumb-cmq-rw-l"
          from="열어 본 상품이 자동으로 쌓여요"
          to="최근 본 항목: 캔버스 백"
          className="mt-[4px] text-[5px] text-slate-600"
        />
      </Side>
      <Side left={R} title="찜 목록">
        {["린넨 셔츠", "캔버스 백"].map((name, index) => (
          <p key={name} className="mt-[3px] flex items-center justify-between">
            {name}
            {index === 0 ? (
              <Fill name="heart" motion="thumb-cmq-rw-save" className="size-[7px] text-rose-600" />
            ) : (
              <Ico name="heart" className="size-[7px]" />
            )}
          </p>
        ))}
        <Swap
          motion="thumb-cmq-rw-r"
          from="직접 고른 상품만 모여요"
          to="찜 목록: 린넨 셔츠"
          className="mt-[4px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function LikeReaction() {
  return (
    <Stage cursor="lr">
      <Side left={L} title="좋아요">
        <p className="mt-[3px]">서울숲 산책 사진</p>
        <p className="mt-[3px] flex items-center gap-[3px]">
          <Fill name="heart" motion="thumb-cmq-lr-like" />
          <Swap motion="thumb-cmq-lr-n" from="12" to="13" />
        </p>
        <Note>좋다는 반응 하나만 있어요</Note>
      </Side>
      <Side left={R} title="리액션">
        <p className="mt-[3px]">서울숲 산책 사진</p>
        <p className="mt-[3px] flex flex-wrap gap-[2px]">
          {["좋아요", "최고예요", "웃겨요", "슬퍼요"].map((name) => (
            <span key={name} className="relative rounded-full border border-slate-300 px-[3px]">
              {name === "최고예요" ? (
                <span
                  className="thumb-anim thumb-cmq-lr-pick absolute -inset-px rounded-full bg-slate-900 px-[3px] text-white"
                  style={HIDDEN}
                >
                  {name}
                </span>
              ) : null}
              {name}
            </span>
          ))}
        </p>
        <Swap
          motion="thumb-cmq-lr-r"
          from="여러 감정 중 하나를 골라요"
          to={<>{"최고예요"}를 남겼어요</>}
          className="mt-[3px] text-[5px] text-slate-600"
        />
      </Side>
    </Stage>
  );
}

function SaveDownload() {
  return (
    <Stage cursor="sv">
      <Side left={L} title="저장">
        <p className="mt-[3px]">주문 1024 영수증</p>
        <Sec className="flex items-center gap-[2px]">
          <Ico name="bookmark" className="size-[6px]" />
          저장
        </Sec>
        <p className="thumb-anim thumb-cmq-sv-l mt-[3px] text-[5px] text-slate-600" style={HIDDEN}>
          보관함에 담았어요 · 앱 안에서 다시 볼 수 있어요
        </p>
      </Side>
      <Side left={R} title="다운로드">
        <p className="mt-[3px]">주문 1024 영수증</p>
        <Sec className="flex items-center gap-[2px]">
          <Ico name="download" className="size-[6px]" />
          다운로드
        </Sec>
        <p className="thumb-anim thumb-cmq-sv-r mt-[3px] text-[5px] text-slate-600" style={HIDDEN}>
          영수증_1024.pdf를 기기에 저장했어요
        </p>
      </Side>
    </Stage>
  );
}

export const REST_COMPARISON_THUMBNAILS: Readonly<Record<string, ComponentType>> = {
  "kebab-meatballs": KebabMeatballs,
  "share-export": ShareExport,
  "close-back": CloseBack,
  "refresh-undo": RefreshUndo,
  "search-zoom-in": SearchZoom,
  "edit-compose": EditCompose,
  "dropdown-picker": DropdownPicker,
  "carousel-horizontal-scroll": CarouselScroll,
  "top-bar-bottom-tab-bar": TopBottom,
  "floating-action-button-sticky-action-bar": FabSticky,
  "text-field-textarea": FieldTextarea,
  "password-otp": PasswordOtp,
  "clear-show-password": ClearShow,
  "character-counter-max-length": CounterLimit,
  "numeric-keypad-keyboard": KeypadKeyboard,
  "date-input-date-picker": DateInputPicker,
  "required-optional": RequiredOptional,
  "badge-notification-dot": BadgeDot,
  "onboarding-coach-mark": OnboardingCoach,
  "dim-blur": DimBlur,
  "like-wishlist": LikeWishlist,
  "wishlist-cart": WishlistCart,
  "bookmark-like": BookmarkLike,
  "follow-subscribe-to-notifications": FollowNotify,
  "share-copy-link": ShareCopy,
  "rating-review": RatingReview,
  "recently-viewed-wishlist": RecentWishlist,
  "like-reaction": LikeReaction,
  "save-download": SaveDownload,
};
