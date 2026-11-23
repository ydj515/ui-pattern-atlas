import { useState, type ComponentType, type ReactNode } from "react";

import { Icon, type IconName } from "@/entities/pattern/catalog/comparisons/ComparisonIcons";
import {
  Panel,
  Panels,
  action,
  secondary,
} from "@/entities/pattern/catalog/comparisons/ComparisonPanels";
import { DropdownMenu } from "@/shared/ui/patterns/dropdown-menu/DropdownMenu";

const iconButton =
  "grid size-8 place-items-center rounded-full text-slate-700 hover:bg-slate-100 aria-pressed:text-rose-600";
const field =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400";

function Note({ children }: { readonly children: ReactNode }) {
  return <p className="text-xs text-slate-600">{children}</p>;
}

function Status({ children }: { readonly children: ReactNode }) {
  return (
    <p role="status" className="min-h-4 text-xs text-slate-600">
      {children}
    </p>
  );
}

function IconButton({
  icon,
  label,
  onClick,
  pressed,
  filled,
}: {
  readonly icon: IconName;
  readonly label: string;
  readonly onClick: () => void;
  readonly pressed?: boolean;
  readonly filled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={iconButton}
    >
      <Icon name={icon} filled={filled} />
    </button>
  );
}

function OverflowSide({
  icon,
  label,
}: {
  readonly icon: "kebab" | "meatballs";
  readonly label: string;
}) {
  const [picked, setPicked] = useState("");
  return (
    <>
      <div className="flex items-center justify-between rounded-md border border-slate-200 p-2">
        <p className="text-sm">주문 1024 · 배송 중</p>
        <DropdownMenu
          label={label}
          trigger={<Icon name={icon} className="size-4" />}
          align="end"
          items={[
            { id: "track", label: "배송 조회" },
            { id: "cancel", label: "주문 취소", tone: "danger" },
          ]}
          onSelect={(id) =>
            setPicked(id === "track" ? "배송 조회를 열었어요" : "취소를 요청했어요")
          }
        />
      </div>
      <Status>{picked}</Status>
    </>
  );
}

function KebabMeatballs() {
  return (
    <Panels>
      <Panel name="케밥">
        <OverflowSide icon="kebab" label="이 주문 더 보기" />
        <Note>세로 점 세 개 · 안드로이드와 웹에서 흔해요</Note>
      </Panel>
      <Panel name="미트볼">
        <OverflowSide icon="meatballs" label="이 주문 더 보기" />
        <Note>가로 점 세 개 · iOS와 웹에서 흔해요</Note>
      </Panel>
    </Panels>
  );
}

function ShareExport() {
  const [shareOpen, setShareOpen] = useState(false);
  const [shared, setShared] = useState("");
  const [format, setFormat] = useState("CSV");
  const [exported, setExported] = useState("");
  return (
    <Panels>
      <Panel name="공유">
        <p className="text-sm">11월 주문 내역</p>
        <button
          type="button"
          className={action}
          aria-expanded={shareOpen}
          onClick={() => setShareOpen((v) => !v)}
        >
          공유
        </button>
        {shareOpen ? (
          <div className="flex gap-2">
            {["메시지", "메일"].map((target) => (
              <button
                key={target}
                type="button"
                className={secondary}
                onClick={() => {
                  setShared(`${target}로 보낼 준비를 했어요`);
                  setShareOpen(false);
                }}
              >
                {target}
              </button>
            ))}
          </div>
        ) : null}
        <Status>{shared || "누구에게 보낼지 고르는 동작이에요"}</Status>
      </Panel>
      <Panel name="내보내기">
        <p className="text-sm">11월 주문 내역</p>
        <fieldset className="flex gap-3 text-sm">
          <legend className="sr-only">파일 형식</legend>
          {["CSV", "PDF"].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name="export-format"
                checked={format === option}
                onChange={() => setFormat(option)}
              />
              {option}
            </label>
          ))}
        </fieldset>
        <button
          type="button"
          className={action}
          onClick={() => setExported(`주문내역_11월.${format.toLowerCase()} 파일을 만들었어요`)}
        >
          내보내기
        </button>
        <Status>{exported || "다른 형식의 파일을 만드는 동작이에요"}</Status>
      </Panel>
    </Panels>
  );
}

function CloseBack() {
  const [overlay, setOverlay] = useState(true);
  const [screen, setScreen] = useState("주문 상세");
  return (
    <Panels>
      <Panel name="닫기">
        <div className="relative h-28 rounded-md bg-slate-100 p-2 text-sm">
          주문 상세
          {overlay ? (
            <div className="absolute inset-x-3 top-6 rounded-md bg-white p-2 shadow">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium">쿠폰을 받았어요</p>
                <IconButton icon="close" label="닫기" onClick={() => setOverlay(false)} />
              </div>
            </div>
          ) : null}
        </div>
        <Status>
          {overlay
            ? "떠 있는 창을 닫으면 같은 화면이 남아요"
            : "창을 닫았어요 · 지금 화면: 주문 상세"}
        </Status>
        {!overlay ? (
          <button type="button" className={secondary} onClick={() => setOverlay(true)}>
            창 다시 띄우기
          </button>
        ) : null}
      </Panel>
      <Panel name="뒤로">
        <div className="flex h-28 flex-col rounded-md bg-slate-100 p-2 text-sm">
          <div className="flex items-center gap-1">
            {screen === "주문 상세" ? (
              <IconButton icon="back" label="뒤로" onClick={() => setScreen("주문 내역")} />
            ) : null}
            <b>{screen}</b>
          </div>
        </div>
        <Status>
          {screen === "주문 상세"
            ? "이전 단계인 주문 내역으로 돌아가요"
            : "이전 화면으로 돌아왔어요 · 지금 화면: 주문 내역"}
        </Status>
        {screen !== "주문 상세" ? (
          <button type="button" className={secondary} onClick={() => setScreen("주문 상세")}>
            주문 상세 열기
          </button>
        ) : null}
      </Panel>
    </Panels>
  );
}

function RefreshUndo() {
  const [orders, setOrders] = useState(3);
  const [items, setItems] = useState(["린넨 셔츠", "캔버스 백"]);
  const [removed, setRemoved] = useState<string | null>(null);
  return (
    <Panels>
      <Panel name="새로고침">
        <div className="flex items-center justify-between">
          <p className="text-sm">새 주문 {orders}건</p>
          <IconButton icon="refresh" label="새로고침" onClick={() => setOrders((v) => v + 2)} />
        </div>
        <Status>
          {orders > 3 ? "최신 주문을 다시 불러왔어요" : "서버에서 최신 내용을 다시 가져와요"}
        </Status>
      </Panel>
      <Panel name="되돌리기">
        <ul className="grid gap-1 text-sm">
          {items.map((item) => (
            <li key={item} className="flex items-center justify-between">
              {item}
              <button
                type="button"
                className="text-xs text-slate-500 underline"
                onClick={() => {
                  setItems((current) => current.filter((value) => value !== item));
                  setRemoved(item);
                }}
              >
                빼기
              </button>
            </li>
          ))}
        </ul>
        {removed ? (
          <button
            type="button"
            className={`${secondary} inline-flex items-center gap-1`}
            onClick={() => {
              setItems((current) => [...current, removed]);
              setRemoved(null);
            }}
          >
            <Icon name="undo" className="size-4" />
            되돌리기
          </button>
        ) : null}
        <Status>{removed ? `뺐어요: ${removed}` : "방금 한 작업을 취소해요"}</Status>
      </Panel>
    </Panels>
  );
}

function SearchZoom() {
  const [searching, setSearching] = useState(false);
  const [zoom, setZoom] = useState(1);
  return (
    <Panels>
      <Panel name="검색">
        <div className="flex items-center justify-between">
          {searching ? (
            <input aria-label="상품 검색" placeholder="상품 검색" className={field} autoFocus />
          ) : (
            <b className="text-sm">신상품</b>
          )}
          <IconButton icon="search" label="검색" onClick={() => setSearching(true)} />
        </div>
        <Note>다른 내용을 찾으러 가요</Note>
      </Panel>
      <Panel name="확대">
        <div className="relative h-24 overflow-hidden rounded-md bg-slate-100">
          <span
            aria-hidden="true"
            className="absolute inset-4 rounded-md bg-gradient-to-br from-sky-200 to-sky-400 transition-transform duration-300"
            style={{ transform: `scale(${zoom})` }}
          />
          <span className="absolute top-1 right-1">
            <IconButton
              icon="zoomIn"
              label="확대"
              onClick={() => setZoom((v) => (v >= 2 ? 1 : v + 0.5))}
            />
          </span>
        </div>
        <Status>지금 보는 사진을 {zoom}배로 봐요</Status>
      </Panel>
    </Panels>
  );
}

function EditCompose() {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("이번 주 장보기 목록이에요");
  const [composing, setComposing] = useState(false);
  return (
    <Panels>
      <Panel name="수정">
        <div className="flex items-start justify-between gap-2 rounded-md border border-slate-200 p-2">
          {editing ? (
            <input
              aria-label="글 내용"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className={field}
            />
          ) : (
            <p className="text-sm">{text}</p>
          )}
          <IconButton icon="edit" label="수정" onClick={() => setEditing(true)} />
        </div>
        <Note>이미 있는 글을 바꿔요</Note>
      </Panel>
      <Panel name="새 글">
        {composing ? (
          <textarea aria-label="새 글" placeholder="무엇을 적을까요?" className={field} rows={2} />
        ) : (
          <p className="text-sm text-slate-500">글 3개</p>
        )}
        <button
          type="button"
          className={`${action} inline-flex items-center gap-1`}
          onClick={() => setComposing(true)}
        >
          <Icon name="compose" className="size-4" />새 글
        </button>
        <Note>빈 칸에서 새로 써요</Note>
      </Panel>
    </Panels>
  );
}

const DAYS = Array.from({ length: 14 }, (_, index) => index + 17);

function DayGrid({
  value,
  onPick,
  blocked = [],
}: {
  readonly value: number | null;
  readonly onPick: (day: number) => void;
  readonly blocked?: readonly number[];
}) {
  return (
    <div role="group" aria-label="11월" className="grid grid-cols-7 gap-1 text-center text-xs">
      {DAYS.map((day) => (
        <button
          key={day}
          type="button"
          disabled={blocked.includes(day)}
          aria-pressed={value === day}
          onClick={() => onPick(day)}
          className="rounded py-1 text-slate-700 disabled:text-slate-300 disabled:line-through aria-pressed:bg-blue-700 aria-pressed:text-white"
        >
          {day}
        </button>
      ))}
    </div>
  );
}

function DropdownPicker() {
  const [request, setRequest] = useState("문 앞에 두기");
  const [day, setDay] = useState<number | null>(null);
  return (
    <Panels>
      <Panel name="드롭다운">
        <label className="grid gap-1 text-sm">
          배송 요청
          <select
            value={request}
            onChange={(event) => setRequest(event.target.value)}
            className={field}
          >
            {["문 앞에 두기", "경비실에 맡기기", "직접 받기"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <Status>{request}</Status>
      </Panel>
      <Panel name="피커">
        <p className="text-sm">배송 희망일</p>
        <DayGrid value={day} onPick={setDay} blocked={[22, 23, 29, 30]} />
        <Status>{day ? `11월 ${day}일에 받아요` : "주말은 고를 수 없어요"}</Status>
      </Panel>
    </Panels>
  );
}

const SLIDES = ["린넨 셔츠", "캔버스 백", "무선 이어폰"];

function CarouselScroll() {
  const [index, setIndex] = useState(0);
  return (
    <Panels>
      <Panel name="캐러셀">
        <div aria-roledescription="carousel" aria-label="추천 상품" className="grid gap-2">
          <div
            aria-live="polite"
            className="grid h-20 place-items-center rounded-md bg-slate-100 text-sm"
          >
            {SLIDES[index]}
          </div>
          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              className={secondary}
              disabled={index === 0}
              onClick={() => setIndex((v) => v - 1)}
            >
              이전
            </button>
            <span className="tabular-nums">
              {index + 1} / {SLIDES.length}
            </span>
            <button
              type="button"
              className={secondary}
              disabled={index === SLIDES.length - 1}
              onClick={() => setIndex((v) => v + 1)}
            >
              다음
            </button>
          </div>
        </div>
        <Note>한 번에 한 장씩 넘겨요</Note>
      </Panel>
      <Panel name="가로 스크롤">
        <ul aria-label="추천 상품" tabIndex={0} className="flex gap-2 overflow-x-auto pb-2">
          {[...SLIDES, "주방 행주", "린넨 바지"].map((name) => (
            <li
              key={name}
              className="grid h-20 w-24 shrink-0 place-items-center rounded-md bg-slate-100 text-xs"
            >
              {name}
            </li>
          ))}
        </ul>
        <Note>옆으로 밀어 원하는 만큼 봐요</Note>
      </Panel>
    </Panels>
  );
}

function TopBottomBar() {
  const [tab, setTab] = useState("홈");
  const [shared, setShared] = useState(false);
  return (
    <Panels>
      <Panel name="상단 바">
        <div className="rounded-md border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 px-2 py-1">
            <Icon name="back" className="size-4" />
            <b className="text-sm">주문 상세</b>
            <IconButton icon="share" label="공유" onClick={() => setShared(true)} />
          </div>
          <p className="h-14 p-2 text-sm">주문 1024 · 배송 중</p>
        </div>
        <Status>{shared ? "이 주문을 공유해요" : "지금 화면의 제목과 동작"}</Status>
      </Panel>
      <Panel name="하단 탭 바">
        <div className="rounded-md border border-slate-200">
          <p className="h-14 p-2 text-sm">{tab} 화면</p>
          <nav aria-label="주요 메뉴" className="flex border-t border-slate-200 text-xs">
            {["홈", "검색", "주문", "내 정보"].map((name) => (
              <button
                key={name}
                type="button"
                aria-current={tab === name ? "page" : undefined}
                onClick={() => setTab(name)}
                className="flex-1 py-2 text-slate-500 aria-[current=page]:font-semibold aria-[current=page]:text-slate-900"
              >
                {name}
              </button>
            ))}
          </nav>
        </div>
        <Note>앱의 주요 목적지를 오가요</Note>
      </Panel>
    </Panels>
  );
}

function FabSticky() {
  const [posts, setPosts] = useState(3);
  const [bought, setBought] = useState(false);
  return (
    <Panels>
      <Panel name="플로팅 버튼">
        <div className="relative h-32 rounded-md bg-slate-50 p-2 text-sm">
          글 {posts}개
          <button
            type="button"
            aria-label="새 글"
            onClick={() => setPosts((v) => v + 1)}
            className="absolute right-2 bottom-2 grid size-10 place-items-center rounded-full bg-blue-700 text-white shadow-lg"
          >
            <Icon name="compose" />
          </button>
        </div>
        <Note>동작 하나를 내용 위에 띄워요</Note>
      </Panel>
      <Panel name="하단 고정 바">
        <div className="relative h-32 rounded-md bg-slate-50 p-2 text-sm">
          린넨 셔츠
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between rounded-b-md border-t border-slate-200 bg-white p-2">
            <b>39,000원</b>
            <button type="button" className={action} onClick={() => setBought(true)}>
              구매하기
            </button>
          </div>
        </div>
        <Status>{bought ? "주문서로 넘어가요" : "가격과 버튼을 함께 아래에 고정해요"}</Status>
      </Panel>
    </Panels>
  );
}

function FieldTextarea() {
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  return (
    <Panels>
      <Panel name="한 줄 입력">
        <label className="grid gap-1 text-sm">
          받는 분
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            placeholder="김하늘"
            className={field}
          />
        </label>
        <Note>이름처럼 짧은 값. Enter는 다음으로 넘어가요</Note>
      </Panel>
      <Panel name="여러 줄 입력">
        <label className="grid gap-1 text-sm">
          배송 메모
          <textarea
            value={memo}
            onChange={(event) => setMemo(event.target.value)}
            rows={3}
            placeholder={"문 앞에 두고\n벨은 누르지 말아 주세요"}
            className={field}
          />
        </label>
        <Status>{memo.split("\n").length}줄 · Enter는 줄을 바꿔요</Status>
      </Panel>
    </Panels>
  );
}

function PasswordOtp() {
  const [code, setCode] = useState("");
  return (
    <Panels>
      <Panel name="비밀번호">
        <label className="grid gap-1 text-sm">
          비밀번호
          <input type="password" autoComplete="current-password" className={field} />
        </label>
        <Note>내가 정해 두고 계속 쓰는 값이에요</Note>
      </Panel>
      <Panel name="인증번호">
        <label className="grid gap-1 text-sm">
          인증번호 6자리
          <input
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={code}
            onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))}
            className={`${field} tracking-[0.4em]`}
          />
        </label>
        <Status>
          {code.length === 6 ? "확인 중이에요" : "문자로 받은 번호예요 · 3분 안에 입력해 주세요"}
        </Status>
      </Panel>
    </Panels>
  );
}

function ClearShow() {
  const [query, setQuery] = useState("린넨 셔츠");
  const [password, setPassword] = useState("linen2024");
  const [visible, setVisible] = useState(false);
  return (
    <Panels>
      <Panel name="지우기">
        <div className="relative">
          <input
            aria-label="상품 검색"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className={`${field} pr-9`}
          />
          {query ? (
            <button
              type="button"
              aria-label="검색어 지우기"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-slate-500"
            >
              <Icon name="close" className="size-4" />
            </button>
          ) : null}
        </div>
        <Status>{query ? "입력한 값을 비워요" : "비웠어요"}</Status>
      </Panel>
      <Panel name="보기">
        <div className="relative">
          <input
            aria-label="비밀번호"
            type={visible ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={`${field} pr-12`}
          />
          <button
            type="button"
            aria-pressed={visible}
            onClick={() => setVisible((v) => !v)}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-slate-600"
          >
            보기
          </button>
        </div>
        <Status>{visible ? "값은 그대로, 글자로 보여요" : "값은 그대로, 가려서 보여요"}</Status>
      </Panel>
    </Panels>
  );
}

function CounterLimit() {
  const [review, setReview] = useState("");
  const [nickname, setNickname] = useState("");
  return (
    <Panels>
      <Panel name="글자 수">
        <label className="grid gap-1 text-sm">
          한 줄 후기
          <input
            value={review}
            onChange={(event) => setReview(event.target.value)}
            placeholder="포장이 꼼꼼하고 배송도 빨라서 정말 좋아요"
            className={field}
          />
        </label>
        <p
          className={`text-right text-xs tabular-nums ${review.length > 20 ? "text-rose-600" : "text-slate-500"}`}
        >
          {review.length}/20
        </p>
        <Note>지금 길이를 알려 줘요. 넘쳐도 입력은 돼요</Note>
      </Panel>
      <Panel name="입력 제한">
        <label className="grid gap-1 text-sm">
          닉네임
          <input
            value={nickname}
            maxLength={8}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="동네가게단골손님"
            className={field}
          />
        </label>
        <Status>
          {nickname.length === 8 ? "8자까지만 들어가요" : "8자가 넘으면 더 입력되지 않아요"}
        </Status>
      </Panel>
    </Panels>
  );
}

function MiniKeys({ keys }: { readonly keys: readonly string[] }) {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-[repeat(auto-fill,minmax(1.5rem,1fr))] gap-1 rounded-md bg-slate-100 p-1.5 text-center text-xs"
    >
      {keys.map((key, index) => (
        <span key={`${key}-${index}`} className="rounded bg-white py-1 shadow-sm">
          {key}
        </span>
      ))}
    </div>
  );
}

function KeypadKeyboard() {
  const [focus, setFocus] = useState<"phone" | "memo" | null>(null);
  return (
    <Panels>
      <Panel name="숫자 키패드">
        <label className="grid gap-1 text-sm">
          휴대폰 번호
          <input
            inputMode="numeric"
            autoComplete="tel"
            onFocus={() => setFocus("phone")}
            className={field}
          />
        </label>
        {focus === "phone" ? (
          <MiniKeys keys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]} />
        ) : (
          <Note>칸을 누르면 숫자 키패드가 떠요</Note>
        )}
      </Panel>
      <Panel name="일반 키보드">
        <label className="grid gap-1 text-sm">
          배송 메모
          <input onFocus={() => setFocus("memo")} className={field} />
        </label>
        {focus === "memo" ? (
          <MiniKeys keys={["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"]} />
        ) : (
          <Note>칸을 누르면 글자 키보드가 떠요</Note>
        )}
      </Panel>
    </Panels>
  );
}

function DateInputPicker() {
  const [birth, setBirth] = useState("");
  const [day, setDay] = useState<number | null>(null);
  return (
    <Panels>
      <Panel name="날짜 직접 입력">
        <label className="grid gap-1 text-sm">
          생년월일
          <input
            inputMode="numeric"
            placeholder="1990-05-14"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            className={field}
          />
        </label>
        <Note>이미 아는 날짜는 바로 입력해요</Note>
      </Panel>
      <Panel name="날짜 선택">
        <p className="text-sm">배송 희망일</p>
        <DayGrid value={day} onPick={setDay} blocked={[22, 23, 29, 30]} />
        <Status>{day ? `11월 ${day}일에 받아요` : "고를 수 있는 날을 보며 골라요"}</Status>
      </Panel>
    </Panels>
  );
}

function RequiredOptional() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [memoDone, setMemoDone] = useState(false);
  return (
    <Panels>
      <Panel name="필수">
        <form
          className="grid gap-2"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            setNameError(name.trim() === "");
          }}
        >
          <label className="grid gap-1 text-sm">
            <span>
              받는 분 <span className="text-rose-600">(필수)</span>
            </span>
            <input
              required
              aria-invalid={nameError}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={field}
            />
          </label>
          <button type="submit" className={action}>
            다음
          </button>
          <Status>{nameError ? "받는 분을 입력해야 넘어가요" : ""}</Status>
        </form>
      </Panel>
      <Panel name="선택">
        <form
          className="grid gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setMemoDone(true);
          }}
        >
          <label className="grid gap-1 text-sm">
            <span>
              배송 메모 <span className="text-slate-500">(선택)</span>
            </span>
            <input className={field} />
          </label>
          <button type="submit" className={action}>
            다음
          </button>
          <Status>{memoDone ? "비워 두어도 넘어가요" : ""}</Status>
        </form>
      </Panel>
    </Panels>
  );
}

function Bell({ children, label }: { readonly children: ReactNode; readonly label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="relative inline-grid size-9 place-items-center rounded-full bg-slate-100"
    >
      <Icon name="bell" />
      {children}
    </span>
  );
}

function BadgeDot() {
  const [count, setCount] = useState(3);
  return (
    <Panels>
      <Panel name="배지">
        <Bell label={`읽지 않은 알림 ${count}개`}>
          {count > 0 ? (
            <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-rose-600 px-1 text-[11px] font-semibold text-white ring-2 ring-white">
              {count}
            </span>
          ) : null}
        </Bell>
        <Note>몇 개인지 알려 줘요</Note>
      </Panel>
      <Panel name="알림 점">
        <Bell label={count > 0 ? "새 알림 있음" : "새 알림 없음"}>
          {count > 0 ? (
            <span className="absolute top-1 right-1 size-2.5 rounded-full bg-rose-600 ring-2 ring-white" />
          ) : null}
        </Bell>
        <Note>있다는 사실만 알려 줘요</Note>
      </Panel>
      <div className="flex gap-2 sm:col-span-2">
        <button type="button" className={secondary} onClick={() => setCount((v) => v + 1)}>
          새 알림 오기
        </button>
        <button type="button" className={secondary} onClick={() => setCount(0)}>
          모두 읽기
        </button>
      </div>
    </Panels>
  );
}

const ONBOARDING = ["가까운 가게를 찾아요", "새벽에 받아요", "알림으로 배송을 확인해요"];

function OnboardingCoach() {
  const [step, setStep] = useState(0);
  const [coach, setCoach] = useState(true);
  return (
    <Panels>
      <Panel name="온보딩">
        <div className="grid h-24 place-items-center rounded-md bg-slate-100 p-2 text-center text-sm">
          {step < ONBOARDING.length ? ONBOARDING[step] : "시작해요"}
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="tabular-nums">{Math.min(step + 1, 3)} / 3</span>
          <button
            type="button"
            className={secondary}
            onClick={() => setStep((v) => (v >= 3 ? 0 : v + 1))}
          >
            {step >= 3 ? "처음부터" : "다음"}
          </button>
        </div>
        <Note>처음 한 번, 서비스 흐름을 차례로 보여 줘요</Note>
      </Panel>
      <Panel name="코치마크">
        <div className="relative h-24 rounded-md bg-slate-100 p-2 text-sm">
          <span
            className={`inline-block rounded-md bg-white px-2 py-1 ${coach ? "ring-2 ring-blue-600" : ""}`}
          >
            주문 내역
          </span>
          {coach ? (
            <div
              role="dialog"
              aria-label="도움말"
              className="absolute top-10 left-2 w-40 rounded-md bg-slate-900 p-2 text-xs text-white"
            >
              여기서 주문 내역을 볼 수 있어요
              <button
                type="button"
                onClick={() => setCoach(false)}
                className="mt-1 block font-semibold text-sky-300"
              >
                확인
              </button>
            </div>
          ) : null}
        </div>
        {!coach ? (
          <button type="button" className={secondary} onClick={() => setCoach(true)}>
            다시 보기
          </button>
        ) : null}
        <Note>지금 화면의 한 곳을 짚어 줘요</Note>
      </Panel>
    </Panels>
  );
}

function OverlaySide({ blur }: { readonly blur: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative h-28 overflow-hidden rounded-md bg-gradient-to-br from-amber-100 to-sky-200 p-2 text-sm">
        <b>여름 린넨 모음</b>
        <p>가볍고 시원한 셔츠와 바지</p>
        {open ? (
          <div
            className={`absolute inset-0 grid place-items-center ${blur ? "bg-white/30 backdrop-blur-sm" : "bg-slate-900/50"}`}
          >
            <div className="rounded-md bg-white p-2 text-center text-xs shadow">
              쿠폰을 받았어요
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-1 block w-full font-semibold text-blue-700"
              >
                닫기
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <button type="button" className={secondary} onClick={() => setOpen(true)}>
        창 띄우기
      </button>
    </>
  );
}

function DimBlur() {
  return (
    <Panels>
      <Panel name="딤">
        <OverlaySide blur={false} />
        <Note>배경을 어둡게 해 창에 집중하게 해요</Note>
      </Panel>
      <Panel name="블러">
        <OverlaySide blur />
        <Note>배경을 흐리게 해 맥락은 남기고 가려요</Note>
      </Panel>
    </Panels>
  );
}

function LikeWishlist() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <Panels>
      <Panel name="좋아요">
        <p className="text-sm">서울숲 산책 사진</p>
        <div className="flex items-center gap-1">
          <IconButton
            icon="heart"
            label="좋아요"
            pressed={liked}
            filled={liked}
            onClick={() => setLiked((v) => !v)}
          />
          <span className="text-sm tabular-nums">{liked ? 13 : 12}</span>
        </div>
        <Note>글쓴이에게 반응을 보여요. 숫자가 모두에게 보여요</Note>
      </Panel>
      <Panel name="찜">
        <p className="text-sm">린넨 셔츠 · 39,000원</p>
        <IconButton
          icon="heart"
          label="찜하기"
          pressed={saved}
          filled={saved}
          onClick={() => setSaved((v) => !v)}
        />
        <Status>{saved ? "찜 목록에 담았어요" : "관심 상품을 나만 보는 목록에 모아요"}</Status>
      </Panel>
    </Panels>
  );
}

function WishlistCart() {
  const [saved, setSaved] = useState(false);
  const [quantity, setQuantity] = useState(0);
  return (
    <Panels>
      <Panel name="찜">
        <p className="text-sm">린넨 셔츠 · 39,000원</p>
        <button
          type="button"
          className={secondary}
          aria-pressed={saved}
          onClick={() => setSaved((v) => !v)}
        >
          {saved ? "찜 해제" : "찜하기"}
        </button>
        <Status>{saved ? "나중에 다시 볼게요 · 수량과 결제는 없어요" : ""}</Status>
      </Panel>
      <Panel name="장바구니">
        <p className="text-sm">린넨 셔츠 · 39,000원</p>
        <button type="button" className={action} onClick={() => setQuantity((v) => v + 1)}>
          장바구니 담기
        </button>
        <Status>
          {quantity > 0
            ? `${quantity}개 · 결제 예정 ${(quantity * 39000).toLocaleString("ko-KR")}원`
            : ""}
        </Status>
      </Panel>
    </Panels>
  );
}

function BookmarkLike() {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <Panels>
      <Panel name="북마크">
        <p className="text-sm">겨울 패딩 고르는 법</p>
        <IconButton
          icon="bookmark"
          label="저장"
          pressed={saved}
          filled={saved}
          onClick={() => setSaved((v) => !v)}
        />
        <Status>{saved ? "저장한 글 1 · 나만 볼 수 있어요" : "나중에 읽으려고 보관해요"}</Status>
      </Panel>
      <Panel name="좋아요">
        <p className="text-sm">겨울 패딩 고르는 법</p>
        <div className="flex items-center gap-1">
          <IconButton
            icon="heart"
            label="좋아요"
            pressed={liked}
            filled={liked}
            onClick={() => setLiked((v) => !v)}
          />
          <span className="text-sm tabular-nums">{liked ? 26 : 25}</span>
        </div>
        <Note>반응을 남겨요. 숫자가 모두에게 보여요</Note>
      </Panel>
    </Panels>
  );
}

function FollowNotify() {
  const [following, setFollowing] = useState(false);
  const [level, setLevel] = useState("off");
  return (
    <Panels>
      <Panel name="팔로우">
        <p className="text-sm">동네가게 공식 계정</p>
        <button
          type="button"
          className={following ? secondary : action}
          aria-pressed={following}
          onClick={() => setFollowing((v) => !v)}
        >
          {following ? "팔로잉" : "팔로우"}
        </button>
        <Status>{following ? "피드에 새 글이 모여요" : ""}</Status>
      </Panel>
      <Panel name="알림 설정">
        <fieldset className="grid gap-1 text-sm">
          <legend className="mb-1 flex items-center gap-1">
            <Icon name="bell" className="size-4" />새 글 알림
          </legend>
          {[
            ["all", "모든 글"],
            ["key", "주요 글만"],
            ["off", "끄기"],
          ].map(([value, label]) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="radio"
                name="notify-level"
                checked={level === value}
                onChange={() => setLevel(value ?? "off")}
              />
              {label}
            </label>
          ))}
        </fieldset>
        <Note>언제 알림을 받을지 정해요</Note>
      </Panel>
    </Panels>
  );
}

function ShareCopy() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState("");
  const [copied, setCopied] = useState(false);
  return (
    <Panels>
      <Panel name="공유">
        <button
          type="button"
          className={`${action} inline-flex items-center gap-1`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name="share" className="size-4" />
          공유
        </button>
        {open ? (
          <div className="flex gap-2">
            {["메시지", "메일"].map((name) => (
              <button
                key={name}
                type="button"
                className={secondary}
                onClick={() => {
                  setTarget(name);
                  setOpen(false);
                }}
              >
                {name}
              </button>
            ))}
          </div>
        ) : null}
        <Status>{target ? `${target}로 보낼게요` : "받을 곳을 골라요"}</Status>
      </Panel>
      <Panel name="링크 복사">
        <button
          type="button"
          className={`${secondary} inline-flex items-center gap-1`}
          onClick={() => {
            void navigator.clipboard
              ?.writeText("https://example.com/p/1024")
              .catch(() => undefined);
            setCopied(true);
          }}
        >
          <Icon name="link" className="size-4" />
          링크 복사
        </button>
        <Status>{copied ? "링크를 복사했어요" : "주소만 복사해 원하는 곳에 붙여 넣어요"}</Status>
      </Panel>
    </Panels>
  );
}

function RatingReview() {
  const [score, setScore] = useState(0);
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);
  return (
    <Panels>
      <Panel name="별점">
        <div role="radiogroup" aria-label="별점" className="flex text-amber-500">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={score === value}
              aria-label={`${value}점`}
              onClick={() => setScore(value)}
            >
              <Icon name="star" filled={value <= score} />
            </button>
          ))}
        </div>
        <Status>{score ? `${score}점을 남겼어요` : "한 번에 점수만 남겨요"}</Status>
      </Panel>
      <Panel name="리뷰">
        <label className="grid gap-1 text-sm">
          후기
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows={2}
            placeholder="예: 평소 사이즈로 넉넉하게 맞아요"
            className={field}
          />
        </label>
        <button
          type="button"
          className={action}
          disabled={text.trim().length < 10}
          onClick={() => setPosted(true)}
        >
          후기 올리기
        </button>
        <Status>{posted ? "후기를 올렸어요" : "10자 이상, 구체적인 경험을 적어요"}</Status>
      </Panel>
    </Panels>
  );
}

const SHOP = ["린넨 셔츠", "캔버스 백", "무선 이어폰"];

function RecentWishlist() {
  const [recent, setRecent] = useState<readonly string[]>([]);
  const [saved, setSaved] = useState<readonly string[]>([]);
  return (
    <Panels>
      <Panel name="최근 본 항목">
        <div className="flex flex-wrap gap-1">
          {SHOP.map((name) => (
            <button
              key={name}
              type="button"
              className={secondary}
              onClick={() =>
                setRecent((current) => [name, ...current.filter((item) => item !== name)])
              }
            >
              {name} 보기
            </button>
          ))}
        </div>
        <Status>
          {recent.length ? `최근 본 항목: ${recent.join(", ")}` : "열어 본 상품이 자동으로 쌓여요"}
        </Status>
      </Panel>
      <Panel name="찜 목록">
        <ul className="grid gap-1 text-sm">
          {SHOP.map((name) => (
            <li key={name} className="flex items-center justify-between">
              {name}
              <IconButton
                icon="heart"
                label={`${name} 찜하기`}
                pressed={saved.includes(name)}
                filled={saved.includes(name)}
                onClick={() =>
                  setSaved((current) =>
                    current.includes(name)
                      ? current.filter((item) => item !== name)
                      : [...current, name],
                  )
                }
              />
            </li>
          ))}
        </ul>
        <Status>{saved.length ? `찜 목록: ${saved.join(", ")}` : "직접 고른 상품만 모여요"}</Status>
      </Panel>
    </Panels>
  );
}

const REACTIONS = ["좋아요", "최고예요", "웃겨요", "슬퍼요"];

function LikeReaction() {
  const [liked, setLiked] = useState(false);
  const [reaction, setReaction] = useState("");
  return (
    <Panels>
      <Panel name="좋아요">
        <p className="text-sm">서울숲 산책 사진</p>
        <div className="flex items-center gap-1">
          <IconButton
            icon="heart"
            label="좋아요"
            pressed={liked}
            filled={liked}
            onClick={() => setLiked((v) => !v)}
          />
          <span className="text-sm tabular-nums">{liked ? 13 : 12}</span>
        </div>
        <Note>좋다는 반응 하나만 있어요</Note>
      </Panel>
      <Panel name="리액션">
        <p className="text-sm">서울숲 산책 사진</p>
        <div role="group" aria-label="반응 고르기" className="flex flex-wrap gap-1">
          {REACTIONS.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={reaction === name}
              onClick={() => setReaction((current) => (current === name ? "" : name))}
              className="rounded-full border border-slate-300 px-2 py-0.5 text-xs aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
            >
              {name}
            </button>
          ))}
        </div>
        <Status>{reaction ? `${reaction}를 남겼어요` : "여러 감정 중 하나를 골라요"}</Status>
      </Panel>
    </Panels>
  );
}

function SaveDownload() {
  const [saved, setSaved] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  return (
    <Panels>
      <Panel name="저장">
        <p className="text-sm">주문 1024 영수증</p>
        <button
          type="button"
          className={`${secondary} inline-flex items-center gap-1`}
          onClick={() => setSaved(true)}
        >
          <Icon name="bookmark" className="size-4" />
          저장
        </button>
        <Status>{saved ? "보관함에 담았어요 · 앱 안에서 다시 볼 수 있어요" : ""}</Status>
      </Panel>
      <Panel name="다운로드">
        <p className="text-sm">주문 1024 영수증</p>
        <button
          type="button"
          className={`${secondary} inline-flex items-center gap-1`}
          onClick={() => setDownloaded(true)}
        >
          <Icon name="download" className="size-4" />
          다운로드
        </button>
        <Status>{downloaded ? "영수증_1024.pdf를 기기에 저장했어요" : ""}</Status>
      </Panel>
    </Panels>
  );
}

export const REST_COMPARISON_DEMOS: Readonly<
  Record<string, { readonly scenario: string; readonly Preview: ComponentType }>
> = {
  "kebab-meatballs": {
    scenario: "같은 주문 메뉴를 세로 점과 가로 점으로 열어 보세요.",
    Preview: KebabMeatballs,
  },
  "share-export": {
    scenario: "같은 주문 내역을 누군가에게 보내거나 파일로 만들어 보세요.",
    Preview: ShareExport,
  },
  "close-back": {
    scenario: "떠 있는 창을 닫는 것과 이전 화면으로 돌아가는 것을 비교해 보세요.",
    Preview: CloseBack,
  },
  "refresh-undo": {
    scenario: "새 내용을 다시 불러오는 것과 방금 한 일을 취소하는 것을 비교해 보세요.",
    Preview: RefreshUndo,
  },
  "search-zoom-in": {
    scenario: "돋보기 모양 두 버튼이 무엇을 하는지 눌러 보세요.",
    Preview: SearchZoom,
  },
  "edit-compose": {
    scenario: "있는 글을 고치는 것과 새 글을 쓰는 것을 비교해 보세요.",
    Preview: EditCompose,
  },
  "dropdown-picker": {
    scenario: "간단한 옵션은 펼쳐서, 날짜는 달력에서 골라 보세요.",
    Preview: DropdownPicker,
  },
  "carousel-horizontal-scroll": {
    scenario: "같은 추천 상품을 한 장씩 넘기거나 옆으로 밀어 보세요.",
    Preview: CarouselScroll,
  },
  "top-bar-bottom-tab-bar": {
    scenario: "화면 위의 제목 영역과 화면 아래의 주요 메뉴를 써 보세요.",
    Preview: TopBottomBar,
  },
  "floating-action-button-sticky-action-bar": {
    scenario: "띄운 버튼 하나와 아래에 고정한 가격·구매 영역을 비교해 보세요.",
    Preview: FabSticky,
  },
  "text-field-textarea": {
    scenario: "받는 분 이름과 여러 줄 배송 메모를 입력해 보세요.",
    Preview: FieldTextarea,
  },
  "password-otp": {
    scenario: "정해 둔 비밀번호와 문자로 받은 인증번호 칸을 비교해 보세요.",
    Preview: PasswordOtp,
  },
  "clear-show-password": {
    scenario: "입력값을 지우는 버튼과 값을 보이게 하는 버튼을 눌러 보세요.",
    Preview: ClearShow,
  },
  "character-counter-max-length": {
    scenario: "두 칸에 길게 입력해 보고 무엇이 다른지 보세요.",
    Preview: CounterLimit,
  },
  "numeric-keypad-keyboard": {
    scenario: "두 칸을 눌러 어떤 키보드가 뜨는지 비교해 보세요.",
    Preview: KeypadKeyboard,
  },
  "date-input-date-picker": {
    scenario: "아는 날짜는 직접 입력하고, 배송일은 달력에서 골라 보세요.",
    Preview: DateInputPicker,
  },
  "required-optional": {
    scenario: "두 칸을 비워 둔 채로 다음을 눌러 보세요.",
    Preview: RequiredOptional,
  },
  "badge-notification-dot": {
    scenario: "새 알림이 올 때 숫자와 점이 어떻게 다른지 보세요.",
    Preview: BadgeDot,
  },
  "onboarding-coach-mark": {
    scenario: "처음 안내 화면과 지금 화면의 한 곳을 짚는 안내를 비교해 보세요.",
    Preview: OnboardingCoach,
  },
  "dim-blur": {
    scenario: "같은 창을 띄우고 배경이 어떻게 가려지는지 비교해 보세요.",
    Preview: DimBlur,
  },
  "like-wishlist": {
    scenario: "사진에 반응하는 하트와 상품을 모아 두는 하트를 눌러 보세요.",
    Preview: LikeWishlist,
  },
  "wishlist-cart": {
    scenario: "같은 셔츠를 찜하거나 장바구니에 담아 보세요.",
    Preview: WishlistCart,
  },
  "bookmark-like": {
    scenario: "같은 글을 저장하거나 좋아요를 눌러 보세요.",
    Preview: BookmarkLike,
  },
  "follow-subscribe-to-notifications": {
    scenario: "계정을 팔로우하는 것과 알림 조건을 정하는 것을 비교해 보세요.",
    Preview: FollowNotify,
  },
  "share-copy-link": {
    scenario: "받을 곳을 고르는 공유와 주소만 담는 링크 복사를 비교해 보세요.",
    Preview: ShareCopy,
  },
  "rating-review": {
    scenario: "점수만 남기는 별점과 경험을 적는 리뷰를 비교해 보세요.",
    Preview: RatingReview,
  },
  "recently-viewed-wishlist": {
    scenario: "상품을 열어 보거나 직접 찜해 두 목록이 어떻게 쌓이는지 보세요.",
    Preview: RecentWishlist,
  },
  "like-reaction": {
    scenario: "좋아요 하나와 여러 감정 중 고르는 리액션을 비교해 보세요.",
    Preview: LikeReaction,
  },
  "save-download": {
    scenario: "같은 영수증을 앱에 저장하거나 기기에 내려받아 보세요.",
    Preview: SaveDownload,
  },
};
