import { useState, type ComponentType } from "react";

import {
  Panel,
  Panels,
  action,
  secondary,
} from "@/entities/pattern/catalog/comparisons/ComparisonPanels";
import { Accordion } from "@/shared/ui/patterns/accordion/Accordion";
import { AlertBanner } from "@/shared/ui/patterns/alert-banner/AlertBanner";
import { AlertDialog } from "@/shared/ui/patterns/alert-dialog/AlertDialog";
import { Badge } from "@/shared/ui/patterns/badge/Badge";
import { BottomSheet } from "@/shared/ui/patterns/bottom-sheet/BottomSheet";
import { Checkbox } from "@/shared/ui/patterns/checkbox/Checkbox";
import {
  ConfirmationDialogProvider,
  useConfirm,
} from "@/shared/ui/patterns/confirmation-dialog/ConfirmationDialog";
import { Drawer } from "@/shared/ui/patterns/drawer/Drawer";
import { DropdownMenu } from "@/shared/ui/patterns/dropdown-menu/DropdownMenu";
import { FilterChips } from "@/shared/ui/patterns/filter-chip/FilterChips";
import { InfiniteScroll } from "@/shared/ui/patterns/infinite-scroll/InfiniteScroll";
import { TextField } from "@/shared/ui/patterns/inline-validation/TextField";
import { MobileMenu } from "@/shared/ui/patterns/mobile-menu/MobileMenu";
import { ModalDialog } from "@/shared/ui/patterns/modal-dialog/ModalDialog";
import { NumberStepper } from "@/shared/ui/patterns/number-stepper/NumberStepper";
import { Pagination } from "@/shared/ui/patterns/pagination/Pagination";
import { Popover } from "@/shared/ui/patterns/popover/Popover";
import { ProgressBar } from "@/shared/ui/patterns/progress-bar/ProgressBar";
import { PushNotificationBanner } from "@/shared/ui/patterns/push-notification/PushNotification";
import { RadioGroup } from "@/shared/ui/patterns/radio-group/RadioGroup";
import { ReadMore } from "@/shared/ui/patterns/read-more/ReadMore";
import { SearchSort } from "@/shared/ui/patterns/search-sort/SearchSort";
import { SearchSuggestions } from "@/shared/ui/patterns/search-suggestions/SearchSuggestions";
import { Slider } from "@/shared/ui/patterns/slider/Slider";
import { Stepper } from "@/shared/ui/patterns/stepper/Stepper";
import { ToastProvider, useToast } from "@/shared/ui/patterns/toast/Toast";

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

function RadioAndCheckbox() {
  const [method, setMethod] = useState("normal");
  const [requests, setRequests] = useState<readonly string[]>([]);
  const REQUESTS = ["문 앞에 두기", "벨 누르지 않기", "포장 줄이기"];
  return (
    <Panels>
      <Panel name="라디오">
        <RadioGroup
          legend="배송 방법"
          value={method}
          onChange={setMethod}
          options={[
            { value: "normal", label: "일반 배송" },
            { value: "dawn", label: "새벽 배송" },
            { value: "pickup", label: "직접 받기" },
          ]}
        />
        <p role="status" className="text-xs text-slate-600">
          하나만 고를 수 있어요
        </p>
      </Panel>
      <Panel name="체크박스">
        <fieldset className="grid gap-2">
          <legend className="text-sm font-medium text-slate-800">배송 요청</legend>
          {REQUESTS.map((request) => (
            <Checkbox
              key={request}
              label={request}
              checked={requests.includes(request)}
              onCheckedChange={(on) =>
                setRequests((current) =>
                  on ? [...current, request] : current.filter((item) => item !== request),
                )
              }
            />
          ))}
        </fieldset>
        <p role="status" className="text-xs text-slate-600">
          {requests.length}개 골랐어요
        </p>
      </Panel>
    </Panels>
  );
}

const PRODUCTS = [
  { name: "린넨 셔츠", price: 39000, reviews: 120, tags: ["새벽배송", "무료배송"] },
  { name: "캔버스 백", price: 29000, reviews: 210, tags: ["무료배송"] },
  { name: "무선 이어폰", price: 59000, reviews: 86, tags: ["새벽배송"] },
  { name: "주방 행주", price: 12000, reviews: 48, tags: [] as string[] },
];

function ChipAndBadge() {
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [unread, setUnread] = useState(3);
  const shown = PRODUCTS.filter((product) => selected.every((tag) => product.tags.includes(tag)));
  return (
    <Panels>
      <Panel name="칩">
        <FilterChips
          label="배송 조건"
          options={["새벽배송", "무료배송"]}
          selected={selected}
          onChange={setSelected}
        />
        <p role="status" className="text-xs text-slate-600">
          상품 {shown.length}개
        </p>
      </Panel>
      <Panel name="배지">
        <div className="flex items-center gap-3">
          <span className="relative">
            <span
              role="img"
              aria-label={`읽지 않은 알림 ${unread}개`}
              className="grid size-9 place-items-center rounded-full bg-slate-100 text-sm"
            >
              알림
            </span>
            <Badge count={unread} className="absolute -top-1 -right-1" />
          </span>
          <button
            type="button"
            className={secondary}
            disabled={unread === 0}
            onClick={() => setUnread((value) => value - 1)}
          >
            하나 읽기
          </button>
        </div>
        <p className="text-xs text-slate-600">배지는 누를 수 없고 개수만 알려요</p>
      </Panel>
    </Panels>
  );
}

function StepperAndSlider() {
  const [quantity, setQuantity] = useState(1);
  const [limit, setLimit] = useState(50000);
  return (
    <Panels>
      <Panel name="수량 스테퍼">
        <NumberStepper
          label="수량"
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={10}
          decreaseLabel="수량 줄이기"
          increaseLabel="수량 늘리기"
        />
        <p role="status" className="text-xs text-slate-600">
          {quantity}개 · {won(quantity * 12000)}
        </p>
      </Panel>
      <Panel name="슬라이더">
        <Slider
          label="가격 상한"
          min={10000}
          max={100000}
          step={1000}
          value={limit}
          onChange={setLimit}
          format={won}
        />
        <p role="status" className="text-xs text-slate-600">
          {won(limit)} 이하 상품만 보여요
        </p>
      </Panel>
    </Panels>
  );
}

const SITE_LINKS = [
  { href: "#home", label: "홈" },
  { href: "#orders", label: "주문 내역" },
  { href: "#settings", label: "설정" },
];

function HamburgerAndKebab() {
  const [page, setPage] = useState("#home");
  const [orderAction, setOrderAction] = useState("");
  return (
    <Panels>
      <Panel name="햄버거">
        <div className="flex items-center justify-between">
          <p className="text-sm">{SITE_LINKS.find((link) => link.href === page)?.label ?? "홈"}</p>
          <MobileMenu links={SITE_LINKS} current={page} onNavigate={setPage} label="서비스 메뉴" />
        </div>
        <p className="text-xs text-slate-600">서비스 전체의 다른 화면으로 이동해요</p>
      </Panel>
      <Panel name="케밥">
        <div className="flex items-center justify-between rounded-md border border-slate-200 p-2">
          <p className="text-sm">주문 1024 · 배송 중</p>
          <DropdownMenu
            label="이 주문 더 보기"
            trigger={<span aria-hidden="true">⋮</span>}
            align="end"
            items={[
              { id: "track", label: "배송 조회" },
              { id: "cancel", label: "주문 취소", tone: "danger" },
            ]}
            onSelect={(id) =>
              setOrderAction(id === "track" ? "배송 조회를 열었어요" : "취소를 요청했어요")
            }
          />
        </div>
        <p role="status" className="text-xs text-slate-600">
          {orderAction || "이 주문에만 해당하는 동작이에요"}
        </p>
      </Panel>
    </Panels>
  );
}

function AlertAndToastSide({ kind }: { readonly kind: "alert" | "toast" }) {
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <p className="text-sm">결제 수단 · 카드 1234</p>
      <button
        type="button"
        className={action}
        onClick={() => {
          if (kind === "alert") setOpen(true);
          else toast("배송지를 저장했어요");
          setMessage("");
        }}
      >
        {kind === "alert" ? "결제하기" : "배송지 저장"}
      </button>
      <p role="status" className="text-xs text-slate-600">
        {message}
      </p>
      {kind === "alert" ? (
        <AlertDialog
          open={open}
          title="카드 유효기간이 지났어요"
          description="다른 결제 수단을 고른 뒤 다시 결제해 주세요."
          actionLabel="확인"
          onAction={() => {
            setOpen(false);
            setMessage("확인을 눌러야 다음으로 넘어가요");
          }}
        />
      ) : null}
    </>
  );
}

function AlertDialogAndToast() {
  return (
    <ToastProvider>
      <Panels>
        <Panel name="얼럿">
          <AlertAndToastSide kind="alert" />
        </Panel>
        <Panel name="토스트">
          <AlertAndToastSide kind="toast" />
        </Panel>
      </Panels>
    </ToastProvider>
  );
}

function CartCounter() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" className={secondary} onClick={() => setCount((value) => value + 1)}>
      장바구니 담기 {count}
    </button>
  );
}

function PopupAndModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Panels>
      <Panel name="팝업">
        <Popover trigger="쿠폰 안내" title="쿠폰 안내">
          <p className="text-sm text-slate-700">3만 원 이상 구매 시 5,000원 할인돼요.</p>
        </Popover>
        <CartCounter />
        <p className="text-xs text-slate-600">열어 둔 채로 뒤의 버튼도 누를 수 있어요</p>
      </Panel>
      <Panel name="모달">
        <button
          type="button"
          className={secondary}
          aria-haspopup="dialog"
          onClick={() => setModalOpen(true)}
        >
          쿠폰 안내
        </button>
        <CartCounter />
        <p className="text-xs text-slate-600">닫기 전에는 뒤의 화면을 쓸 수 없어요</p>
        <ModalDialog
          open={modalOpen}
          title="쿠폰 안내"
          description="3만 원 이상 구매 시 5,000원 할인돼요."
          onClose={() => setModalOpen(false)}
        >
          <button type="button" className={action} onClick={() => setModalOpen(false)} autoFocus>
            닫기
          </button>
        </ModalDialog>
      </Panel>
    </Panels>
  );
}

function SheetAndDrawer() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shared, setShared] = useState("");
  const [category, setCategory] = useState("전체");
  return (
    <Panels>
      <Panel name="바텀시트">
        <p className="text-sm">린넨 셔츠 · 39,000원</p>
        <button
          type="button"
          className={action}
          aria-haspopup="dialog"
          onClick={() => setSheetOpen(true)}
        >
          공유하기
        </button>
        <p role="status" className="text-xs text-slate-600">
          {shared}
        </p>
        <BottomSheet open={sheetOpen} title="공유하기" onClose={() => setSheetOpen(false)}>
          <div className="grid gap-2">
            {["링크 복사", "메시지로 보내기"].map((option) => (
              <button
                key={option}
                type="button"
                className={secondary}
                onClick={() => {
                  setShared(`${option}를 골랐어요`);
                  setSheetOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </BottomSheet>
      </Panel>
      <Panel name="드로어">
        <p className="text-sm">지금 보는 분류 · {category}</p>
        <button
          type="button"
          className={action}
          aria-haspopup="dialog"
          onClick={() => setDrawerOpen(true)}
        >
          카테고리
        </button>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="카테고리" side="left">
          <ul className="grid gap-1">
            {["전체", "상의", "하의", "가방"].map((name) => (
              <li key={name}>
                <button
                  type="button"
                  className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100"
                  onClick={() => {
                    setCategory(name);
                    setDrawerOpen(false);
                  }}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </Drawer>
      </Panel>
    </Panels>
  );
}

function BannerAndPush() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [pushShown, setPushShown] = useState(false);
  return (
    <Panels>
      <Panel name="배너">
        {bannerOpen ? (
          <AlertBanner
            tone="warning"
            title="오늘 밤 2시부터 4시까지 점검해요"
            onDismiss={() => setBannerOpen(false)}
            dismissLabel="배너 닫기"
          />
        ) : (
          <button type="button" className={secondary} onClick={() => setBannerOpen(true)}>
            배너 다시 보기
          </button>
        )}
        <p className="text-xs text-slate-600">앱이나 사이트를 보고 있을 때만 보여요</p>
      </Panel>
      <Panel name="푸시 알림">
        <button type="button" className={action} onClick={() => setPushShown(true)}>
          알림 미리 보기
        </button>
        {pushShown ? (
          <PushNotificationBanner
            appName="동네가게"
            title="주문한 상품이 출발했어요"
            body="오늘 저녁 7시 전에 도착해요"
          />
        ) : null}
        <p role="status" className="text-xs text-slate-600">
          {pushShown
            ? "앱을 닫아 두어도 휴대폰 알림 영역에 와요: 주문한 상품이 출발했어요"
            : "허락한 사람에게만 보낼 수 있어요"}
        </p>
      </Panel>
    </Panels>
  );
}

function ConfirmSide() {
  const confirm = useConfirm();
  const [result, setResult] = useState("");
  return (
    <>
      <p className="text-sm">주문 1024 · 결제 완료</p>
      <button
        type="button"
        className={action}
        onClick={async () => {
          const ok = await confirm({
            title: "주문을 취소할까요?",
            description: "취소하면 결제한 금액은 3일 안에 돌려드려요.",
            confirmLabel: "주문 취소",
            cancelLabel: "유지하기",
            tone: "danger",
          });
          setResult(ok ? "주문을 취소했어요" : "주문을 유지했어요");
        }}
      >
        주문 취소
      </button>
      <p role="status" className="text-xs text-slate-600">
        {result}
      </p>
    </>
  );
}

function AlertAndConfirm() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  return (
    <Panels>
      <Panel name="얼럿">
        <p className="text-sm">쿠폰함 · 5,000원 할인</p>
        <button type="button" className={action} onClick={() => setOpen(true)}>
          쿠폰 쓰기
        </button>
        <p role="status" className="text-xs text-slate-600">
          {seen ? "안내를 확인했어요" : ""}
        </p>
        <AlertDialog
          open={open}
          title="쿠폰 기간이 지났어요"
          description="11월 30일까지 쓸 수 있는 쿠폰이었어요."
          actionLabel="확인"
          onAction={() => {
            setOpen(false);
            setSeen(true);
          }}
        />
      </Panel>
      <Panel name="컨펌">
        <ConfirmationDialogProvider>
          <ConfirmSide />
        </ConfirmationDialogProvider>
      </Panel>
    </Panels>
  );
}

function HelperAndError() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");
  const error =
    submitted === ""
      ? undefined
      : submitted.length < 8
        ? "8자 이상 입력해 주세요"
        : /\d/.test(submitted)
          ? undefined
          : "숫자를 하나 이상 넣어 주세요";
  return (
    <Panels>
      <Panel name="안내 문구">
        <TextField
          label="새 비밀번호"
          type="password"
          description="8자 이상, 숫자를 하나 이상 넣어 주세요"
          autoComplete="new-password"
        />
      </Panel>
      <Panel name="오류 문구">
        <form
          className="grid gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(value);
          }}
        >
          <TextField
            label="새 비밀번호"
            type="password"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            error={error}
            autoComplete="new-password"
          />
          <button type="submit" className={action}>
            변경하기
          </button>
        </form>
      </Panel>
    </Panels>
  );
}

function PlaceholderAndLabel() {
  const [onlyPlaceholder, setOnlyPlaceholder] = useState("");
  const [labelled, setLabelled] = useState("");
  return (
    <Panels>
      <Panel name="플레이스홀더">
        <input
          aria-label="휴대폰 번호"
          placeholder="휴대폰 번호 (010-0000-0000)"
          value={onlyPlaceholder}
          onChange={(event) => setOnlyPlaceholder(event.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <p className="text-xs text-slate-600">입력하면 무엇을 쓰는 칸인지 사라져요</p>
      </Panel>
      <Panel name="라벨">
        <label className="grid gap-1 text-sm font-medium text-slate-800">
          휴대폰 번호
          <input
            placeholder="010-0000-0000"
            value={labelled}
            onChange={(event) => setLabelled(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-normal"
          />
        </label>
        <p className="text-xs text-slate-600">입력한 뒤에도 칸 이름이 남아요</p>
      </Panel>
      <button
        type="button"
        className={`${secondary} sm:col-span-2`}
        onClick={() => {
          setOnlyPlaceholder("010-1234-5678");
          setLabelled("010-1234-5678");
        }}
      >
        두 칸에 입력해 보기
      </button>
    </Panels>
  );
}

const TERMS = ["린넨 셔츠", "린넨 셔츠 반팔", "린넨 바지", "린넨 원피스"];
const RELATED = ["여름 셔츠", "린넨 바지", "반팔 셔츠"];

function AutocompleteAndSuggestions() {
  const [typed, setTyped] = useState("");
  const [searched, setSearched] = useState("");
  const [picked, setPicked] = useState("");
  const query = typed.trim();
  return (
    <Panels>
      <Panel name="자동완성">
        <SearchSuggestions
          label="상품 검색"
          placeholder="린넨을 입력해 보세요"
          value={typed}
          onChange={setTyped}
          onSearch={setSearched}
          suggestions={
            query === "" ? [] : TERMS.filter((term) => term.startsWith(query) && term !== query)
          }
          submitLabel="검색"
        />
        <p role="status" className="text-xs text-slate-600">
          {searched ? `${searched} 검색 결과` : "입력하는 말을 이어서 완성해요"}
        </p>
      </Panel>
      <Panel name="추천 검색어">
        <p className="text-sm">린넨 셔츠 검색 결과 24개</p>
        <div className="grid gap-1.5">
          <p className="text-xs text-slate-600">함께 많이 찾는 검색어</p>
          <div className="flex flex-wrap gap-1.5">
            {RELATED.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setPicked(term)}
                className="rounded-full border border-slate-300 px-2.5 py-1 text-xs text-slate-700"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
        <p role="status" className="text-xs text-slate-600">
          {picked ? `${picked} 검색 결과` : "입력하지 않아도 관련 검색어를 보여 줘요"}
        </p>
      </Panel>
    </Panels>
  );
}

const ORDERS = Array.from({ length: 15 }, (_, index) => `주문 ${1001 + index}`);

function PaginationAndInfinite() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  return (
    <Panels>
      <Panel name="페이지네이션">
        <ul className="grid gap-1 text-sm">
          {ORDERS.slice((page - 1) * 5, page * 5).map((order) => (
            <li key={order}>{order}</li>
          ))}
        </ul>
        <Pagination
          page={page}
          totalPages={3}
          onPageChange={setPage}
          label="주문 내역 페이지"
          previousLabel="이전"
          nextLabel="다음"
          pageLabel={(value) => `${value}쪽`}
        />
      </Panel>
      <Panel name="무한 스크롤">
        <InfiniteScroll
          label="주문 내역"
          hasMore={count < ORDERS.length}
          loading={loading}
          height={150}
          onLoadMore={() => {
            setLoading(true);
            window.setTimeout(() => {
              setCount((value) => Math.min(value + 5, ORDERS.length));
              setLoading(false);
            }, 400);
          }}
          loadingText="더 불러오는 중"
          endText="마지막 주문이에요"
          moreLabel="더 불러오기"
        >
          <ul className="grid gap-1 text-sm">
            {ORDERS.slice(0, count).map((order) => (
              <li key={order}>{order}</li>
            ))}
          </ul>
        </InfiniteScroll>
      </Panel>
    </Panels>
  );
}

const ORDER_STEPS = ["장바구니", "배송지", "결제", "완료"];

function ProgressAndSteps() {
  const [percent, setPercent] = useState(30);
  const [step, setStep] = useState(1);
  return (
    <Panels>
      <Panel name="진행 바">
        <ProgressBar label="사진 올리는 중" percent={percent} />
        <button
          type="button"
          className={secondary}
          disabled={percent >= 100}
          onClick={() => setPercent((value) => Math.min(value + 20, 100))}
        >
          조금 더 올리기
        </button>
        <p className="text-xs text-slate-600">얼마나 끝났는지 비율로 알려요</p>
      </Panel>
      <Panel name="단계 표시">
        <Stepper steps={ORDER_STEPS} current={step} label="주문 단계" doneLabel="완료" />
        <button
          type="button"
          className={secondary}
          disabled={step >= ORDER_STEPS.length - 1}
          onClick={() => setStep((value) => value + 1)}
        >
          다음 단계
        </button>
        <p className="text-xs text-slate-600">이름 있는 단계 중 어디인지 알려요</p>
      </Panel>
    </Panels>
  );
}

function AccordionAndReadMore() {
  return (
    <Panels>
      <Panel name="아코디언">
        <Accordion
          headingLevel={4}
          items={[
            {
              id: "ship",
              title: "배송은 얼마나 걸리나요?",
              content: <p className="text-sm">보통 이틀 안에 도착해요.</p>,
            },
            {
              id: "return",
              title: "반품은 어떻게 하나요?",
              content: <p className="text-sm">주문 내역에서 반품 신청을 눌러 주세요.</p>,
            },
            {
              id: "coupon",
              title: "쿠폰은 어디서 받나요?",
              content: <p className="text-sm">상품 상세에서 쿠폰 받기를 눌러요.</p>,
            },
          ]}
        />
      </Panel>
      <Panel name="더 보기 접기">
        <ReadMore lines={2} moreLabel="더 보기" lessLabel="접기">
          <p className="text-sm text-slate-700">
            가볍고 바람이 잘 통하는 린넨 100% 셔츠예요. 여름 내내 입기 좋고, 세탁 후에도 형태가 쉽게
            무너지지 않아요. 단추는 자개 느낌의 소재를 썼고, 소매는 걷어 입기 좋게 넉넉히
            만들었어요.
          </p>
        </ReadMore>
      </Panel>
    </Panels>
  );
}

const SORTS = [
  { value: "recommended", label: "추천순" },
  { value: "low", label: "낮은 가격순" },
  { value: "reviews", label: "리뷰 많은순" },
];

function FilterAndSort() {
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [order, setOrder] = useState("recommended");
  const filtered = PRODUCTS.filter((product) =>
    selected.every((tag) => product.tags.includes(tag)),
  );
  const sorted =
    order === "low"
      ? [...PRODUCTS].sort((a, b) => a.price - b.price)
      : order === "reviews"
        ? [...PRODUCTS].sort((a, b) => b.reviews - a.reviews)
        : PRODUCTS;
  return (
    <Panels>
      <Panel name="필터">
        <FilterChips
          label="배송 조건"
          options={["새벽배송", "무료배송"]}
          selected={selected}
          onChange={setSelected}
        />
        <ul aria-live="polite" className="grid gap-1 text-sm">
          {filtered.map((product) => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
        <p className="text-xs text-slate-600">결과 {filtered.length}개 · 보이는 항목이 바뀌어요</p>
      </Panel>
      <Panel name="정렬">
        <div className="flex justify-end">
          <SearchSort options={SORTS} value={order} onChange={setOrder} label="정렬" />
        </div>
        <ul aria-live="polite" className="grid gap-1 text-sm">
          {sorted.map((product) => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
        <p className="text-xs text-slate-600">결과 {sorted.length}개 · 순서만 바뀌어요</p>
      </Panel>
    </Panels>
  );
}

export const MORE_COMPARISON_PREVIEWS: Readonly<Record<string, ComponentType>> = {
  "radio-group-checkbox": RadioAndCheckbox,
  "chip-badge": ChipAndBadge,
  "number-stepper-slider": StepperAndSlider,
  "hamburger-kebab": HamburgerAndKebab,
  "alert-dialog-toast": AlertDialogAndToast,
  "non-modal-popup-modal-dialog": PopupAndModal,
  "bottom-sheet-drawer": SheetAndDrawer,
  "alert-banner-push-notification": BannerAndPush,
  "alert-confirmation-dialog": AlertAndConfirm,
  "helper-text-error-message": HelperAndError,
  "placeholder-label": PlaceholderAndLabel,
  "autocomplete-search-suggestion": AutocompleteAndSuggestions,
  "pagination-infinite-scroll": PaginationAndInfinite,
  "progress-bar-step-indicator": ProgressAndSteps,
  "accordion-read-more": AccordionAndReadMore,
  "filter-sort": FilterAndSort,
};
