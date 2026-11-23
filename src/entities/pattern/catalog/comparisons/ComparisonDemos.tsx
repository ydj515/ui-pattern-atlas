import { useEffect, useState, type ComponentType } from "react";

import { MORE_COMPARISON_DEMOS } from "@/entities/pattern/catalog/comparisons/ComparisonDemosMore";
import { REST_COMPARISON_DEMOS } from "@/entities/pattern/catalog/comparisons/ComparisonDemosRest";
import {
  Panel,
  Panels,
  action,
  secondary,
} from "@/entities/pattern/catalog/comparisons/ComparisonPanels";

import { BottomSheet } from "@/shared/ui/patterns/bottom-sheet/BottomSheet";
import { Checkbox } from "@/shared/ui/patterns/checkbox/Checkbox";
import { ModalDialog } from "@/shared/ui/patterns/modal-dialog/ModalDialog";
import { Popover } from "@/shared/ui/patterns/popover/Popover";
import { SegmentedControl } from "@/shared/ui/patterns/segmented-control/SegmentedControl";
import { Skeleton, SkeletonRegion } from "@/shared/ui/patterns/skeleton/Skeleton";
import { Spinner } from "@/shared/ui/patterns/spinner/Spinner";
import { Switch } from "@/shared/ui/patterns/switch/Switch";
import { Tabs } from "@/shared/ui/patterns/tabs/Tabs";
import { ToastProvider, useToast } from "@/shared/ui/patterns/toast/Toast";
import { Tooltip } from "@/shared/ui/patterns/tooltip/Tooltip";

function SwitchAndCheckbox() {
  const [immediate, setImmediate] = useState(false);
  const [draft, setDraft] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <Panels>
      <Panel name="토글">
        <Switch label="이벤트 소식 받기" checked={immediate} onCheckedChange={setImmediate} />
        <p role="status" className="text-xs text-slate-600">
          {immediate ? "수신 켜짐" : "수신 꺼짐"}
        </p>
      </Panel>
      <Panel name="체크박스">
        <form
          className="grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(draft);
          }}
        >
          <Checkbox label="이벤트 소식 받기" checked={draft} onCheckedChange={setDraft} />
          <button type="submit" className={action}>
            설정 저장
          </button>
          <p role="status" className="text-xs text-slate-600">
            {saved ? "수신 켜짐" : "수신 꺼짐"}
            {draft !== saved ? " · 저장되지 않은 변경" : ""}
          </p>
        </form>
      </Panel>
    </Panels>
  );
}

const INBOX = [
  { id: "notice", label: "공지", content: "다음 주 배송 일정이 바뀌어요.", unread: true },
  { id: "event", label: "이벤트", content: "이번 달 적립 이벤트가 열렸어요.", unread: false },
];

const inboxFilters = [
  { value: "all", label: "전체" },
  { value: "unread", label: "읽지 않음" },
] as const;

function TabsAndSegmentedControl() {
  const [filter, setFilter] = useState<(typeof inboxFilters)[number]["value"]>("all");
  return (
    <Panels>
      <Panel name="탭">
        <Tabs
          label="알림 분류"
          items={INBOX.map((item) => ({
            ...item,
            content: <p className="text-sm text-slate-700">{item.content}</p>,
          }))}
        />
      </Panel>
      <Panel name="세그먼트">
        <SegmentedControl
          label="읽음 상태"
          options={inboxFilters}
          value={filter}
          onValueChange={setFilter}
        />
        <ul className="divide-y divide-slate-100 text-sm text-slate-700">
          {INBOX.filter((item) => filter === "all" || item.unread).map((item) => (
            <li key={item.id} className="py-1.5">
              {item.content}
            </li>
          ))}
        </ul>
      </Panel>
    </Panels>
  );
}

function ModalAndSheet() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [archived, setArchived] = useState(false);
  return (
    <Panels>
      <Panel name="모달">
        <p className="text-sm">배송 일정 안내</p>
        <button
          type="button"
          className={action}
          disabled={deleted}
          aria-haspopup="dialog"
          onClick={() => setModalOpen(true)}
        >
          알림 삭제
        </button>
        <p role="status" className="text-xs text-slate-600">
          {deleted ? "알림을 삭제했어요" : ""}
        </p>
        <ModalDialog
          open={modalOpen}
          title="알림을 삭제할까요?"
          description="이 알림은 복원할 수 없어요."
          onClose={() => setModalOpen(false)}
        >
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className={secondary}
              onClick={() => setModalOpen(false)}
              autoFocus
            >
              취소
            </button>
            <button
              type="button"
              className={action}
              onClick={() => {
                setDeleted(true);
                setModalOpen(false);
              }}
            >
              삭제
            </button>
          </div>
        </ModalDialog>
      </Panel>
      <Panel name="바텀시트">
        <p className="text-sm">배송 일정 안내</p>
        <button
          type="button"
          className={action}
          aria-haspopup="dialog"
          onClick={() => setSheetOpen(true)}
        >
          알림 옵션
        </button>
        <p role="status" className="text-xs text-slate-600">
          {archived ? "보관함에 옮겼어요" : ""}
        </p>
        <BottomSheet open={sheetOpen} title="알림 옵션" onClose={() => setSheetOpen(false)}>
          <button
            type="button"
            className={secondary}
            onClick={() => {
              setArchived(!archived);
              setSheetOpen(false);
            }}
          >
            {archived ? "보관 취소" : "보관함으로 옮기기"}
          </button>
        </BottomSheet>
      </Panel>
    </Panels>
  );
}

function ToastAction({ undo }: { readonly undo: boolean }) {
  const toast = useToast();
  const [archived, setArchived] = useState(false);
  function archive() {
    setArchived(true);
    toast(
      "배송 알림을 보관했어요",
      undo ? { action: { label: "되돌리기", onAction: () => setArchived(false) } } : undefined,
    );
  }
  return (
    <>
      <p role="status" className="text-sm">
        {archived ? "보관함 · 배송 일정 안내" : "받은 알림 · 배송 일정 안내"}
      </p>
      <button type="button" className={action} disabled={archived} onClick={archive}>
        알림 보관
      </button>
    </>
  );
}

function ToastAndSnackbar() {
  return (
    <ToastProvider>
      <Panels>
        <Panel name="토스트">
          <ToastAction undo={false} />
        </Panel>
        <Panel name="스낵바">
          <ToastAction undo />
        </Panel>
      </Panels>
    </ToastProvider>
  );
}

function TooltipAndPopover() {
  const [includeWeekends, setIncludeWeekends] = useState(false);
  return (
    <Panels>
      <Panel name="툴팁">
        <div className="flex items-center gap-2">
          <p className="text-sm">예상 배송일 · 월요일</p>
          <Tooltip content="주말을 뺀 예상 날짜예요.">
            {(props) => (
              <button
                {...props}
                type="button"
                aria-label="예상 배송일 설명"
                className="grid size-6 place-items-center rounded-full border border-slate-300 text-xs"
              >
                ?
              </button>
            )}
          </Tooltip>
        </div>
      </Panel>
      <Panel name="팝오버">
        <p role="status" className="text-sm">
          예상 배송일 · {includeWeekends ? "토요일" : "월요일"}
        </p>
        <Popover trigger="배송일 옵션" title="예상 배송일 옵션">
          <Checkbox
            label="주말 포함"
            checked={includeWeekends}
            onCheckedChange={setIncludeWeekends}
          />
        </Popover>
      </Panel>
    </Panels>
  );
}

function ProfileRequest({ skeletal }: { readonly skeletal: boolean }) {
  const [state, setState] = useState<"idle" | "loading" | "ready">("idle");

  useEffect(() => {
    if (state !== "loading") return;
    const timer = window.setTimeout(() => setState("ready"), 1600);
    return () => window.clearTimeout(timer);
  }, [state]);

  const profile =
    state === "ready" ? (
      <div className="space-y-1 text-sm">
        <p className="font-medium">김하늘</p>
        <p className="text-slate-600">프로덕트 디자이너</p>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        className={action}
        disabled={state === "loading"}
        onClick={() => setState("loading")}
      >
        프로필 불러오기
      </button>
      {skeletal ? (
        <SkeletonRegion
          loading={state === "loading"}
          loadingLabel="프로필을 불러오고 있어요"
          fallback={
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          }
        >
          {profile}
        </SkeletonRegion>
      ) : state === "loading" ? (
        <Spinner label="프로필을 불러오고 있어요" />
      ) : (
        profile
      )}
    </>
  );
}

function SpinnerAndSkeleton() {
  return (
    <Panels>
      <Panel name="스피너">
        <ProfileRequest skeletal={false} />
      </Panel>
      <Panel name="스켈레톤">
        <ProfileRequest skeletal />
      </Panel>
    </Panels>
  );
}

export interface ComparisonDemo {
  readonly scenario: string;
  readonly Preview: ComponentType;
}

export const COMPARISON_DEMOS: Readonly<Record<string, ComparisonDemo>> = {
  "switch-checkbox": {
    scenario: "이벤트 소식 수신을 켜고 저장이 필요한지 확인해 보세요.",
    Preview: SwitchAndCheckbox,
  },
  "tabs-segmented-control": {
    scenario: "받은 알림의 분류를 바꾸거나 읽지 않은 항목만 모아 보세요.",
    Preview: TabsAndSegmentedControl,
  },
  "modal-dialog-bottom-sheet": {
    scenario: "배송 알림에 되돌릴 수 없는 삭제를 요청하거나 보관 옵션을 열어 보세요.",
    Preview: ModalAndSheet,
  },
  "toast-snackbar": {
    scenario: "같은 알림을 보관한 뒤 되돌릴 수 있는지 확인해 보세요.",
    Preview: ToastAndSnackbar,
  },
  "tooltip-popover": {
    scenario: "예상 배송일의 기준을 읽거나 배송일 계산 옵션을 바꿔 보세요.",
    Preview: TooltipAndPopover,
  },
  "spinner-skeleton": {
    scenario: "같은 프로필을 요청하고 기다리는 동안 표시되는 내용을 비교해 보세요.",
    Preview: SpinnerAndSkeleton,
  },
  ...MORE_COMPARISON_DEMOS,
  ...REST_COMPARISON_DEMOS,
};
