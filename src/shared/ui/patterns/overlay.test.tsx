import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AlertDialogDemo } from "@/entities/pattern/catalog/alert-dialog/AlertDialogDemo";
import { ConfirmationDialogDemo } from "@/entities/pattern/catalog/confirmation-dialog/ConfirmationDialogDemo";
import { AlertDialog } from "@/shared/ui/patterns/alert-dialog/AlertDialog";
import { CommandPalette } from "@/shared/ui/patterns/command-palette/CommandPalette";
import {
  ConfirmationDialogProvider,
  useConfirm,
} from "@/shared/ui/patterns/confirmation-dialog/ConfirmationDialog";
import { ContextMenu } from "@/shared/ui/patterns/context-menu/ContextMenu";
import { DropdownMenu } from "@/shared/ui/patterns/dropdown-menu/DropdownMenu";
import { HoverCard } from "@/shared/ui/patterns/hover-card/HoverCard";

afterEach(() => {
  vi.useRealTimers();
});

const MENU_ITEMS = [
  { id: "rename", label: "이름 바꾸기" },
  { id: "duplicate", label: "복제" },
  { id: "share", label: "공유", disabled: true },
  { id: "delete", label: "삭제", tone: "danger", separatorBefore: true },
] as const;

describe("DropdownMenu", () => {
  it("opens on the first item, moves with arrows, skips disabled items and selects", async () => {
    const onSelect = vi.fn();
    render(
      <DropdownMenu label="기획서 더보기" trigger="⋯" items={MENU_ITEMS} onSelect={onSelect} />,
    );
    const trigger = screen.getByRole("button", { name: "기획서 더보기" });
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");

    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menuitem", { name: "이름 바꾸기" })).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}{ArrowDown}");
    // "공유" is disabled, so focus jumps from 복제 to 삭제.
    expect(screen.getByRole("menuitem", { name: "삭제" })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    expect(screen.getByRole("menuitem", { name: "이름 바꾸기" })).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}{Enter}");
    expect(onSelect).toHaveBeenCalledWith("duplicate");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("opens on the last item with ArrowUp and closes with Escape", async () => {
    render(<DropdownMenu label="더보기" trigger="⋯" items={MENU_ITEMS} onSelect={() => {}} />);
    const trigger = screen.getByRole("button", { name: "더보기" });
    trigger.focus();
    await userEvent.keyboard("{ArrowUp}");
    expect(screen.getByRole("menuitem", { name: "삭제" })).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("jumps to an item by its first letter and closes on an outside click", async () => {
    render(
      <div>
        <p>바깥</p>
        <DropdownMenu
          label="정렬"
          trigger="정렬"
          items={[
            { id: "name", label: "Name" },
            { id: "date", label: "Date" },
            { id: "size", label: "Size" },
          ]}
          onSelect={() => {}}
        />
      </div>,
    );
    await userEvent.click(screen.getByRole("button", { name: "정렬" }));
    await userEvent.keyboard("s");
    expect(screen.getByRole("menuitem", { name: "Size" })).toHaveFocus();
    await userEvent.click(screen.getByText("바깥"));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});

describe("ContextMenu", () => {
  function FileTile({ onSelect }: { readonly onSelect: (id: string) => void }) {
    return (
      <ContextMenu
        label="사진.png 메뉴"
        items={[
          { id: "open", label: "열기" },
          { id: "download", label: "다운로드" },
        ]}
        onSelect={onSelect}
      >
        <button type="button">사진.png</button>
      </ContextMenu>
    );
  }

  it("opens at the pointer on right click and runs the chosen action", async () => {
    const onSelect = vi.fn();
    render(<FileTile onSelect={onSelect} />);
    fireEvent.contextMenu(screen.getByRole("button", { name: "사진.png" }), {
      clientX: 40,
      clientY: 60,
    });
    const menu = screen.getByRole("menu", { name: "사진.png 메뉴" });
    expect(menu).toHaveStyle({ left: "40px", top: "60px" });
    expect(within(menu).getByRole("menuitem", { name: "열기" })).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}{Enter}");
    expect(onSelect).toHaveBeenCalledWith("download");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens from the keyboard with Shift+F10 and returns focus on Escape", async () => {
    render(<FileTile onSelect={() => {}} />);
    const file = screen.getByRole("button", { name: "사진.png" });
    file.focus();
    await userEvent.keyboard("{Shift>}{F10}{/Shift}");
    expect(screen.getByRole("menuitem", { name: "열기" })).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(file).toHaveFocus();
  });
});

describe("AlertDialog", () => {
  it("is an alertdialog that focuses the resolving action", () => {
    render(
      <AlertDialog
        open
        title="곧 로그아웃돼요"
        description="한동안 아무 동작이 없었어요."
        actionLabel="로그인 유지"
        onAction={() => {}}
      />,
    );
    const dialog = screen.getByRole("alertdialog", { name: "곧 로그아웃돼요" });
    expect(dialog).toHaveAccessibleDescription("한동안 아무 동작이 없었어요.");
    expect(within(dialog).getByRole("button", { name: "로그인 유지" })).toHaveFocus();
  });

  it("runs the cancel response on Escape only when there is one", () => {
    const onCancel = vi.fn();
    const { rerender } = render(
      <AlertDialog open title="경고" description="설명" actionLabel="확인" onAction={() => {}} />,
    );
    const dialog = screen.getByRole("alertdialog");
    dialog.dispatchEvent(new Event("cancel", { cancelable: true }));
    expect(dialog).toHaveAttribute("open");

    rerender(
      <AlertDialog
        open
        title="경고"
        description="설명"
        actionLabel="확인"
        onAction={() => {}}
        cancelLabel="로그아웃"
        onCancel={onCancel}
      />,
    );
    dialog.dispatchEvent(new Event("cancel", { cancelable: true }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("logs out automatically when the demo countdown runs out", () => {
    vi.useFakeTimers();
    render(<AlertDialogDemo />);
    act(() => screen.getByRole("button", { name: "자리 비움 보기" }).click());
    expect(screen.getByRole("timer")).toHaveTextContent("남은 시간 15초");

    act(() => vi.advanceTimersByTime(5000));
    expect(screen.getByRole("timer")).toHaveTextContent("남은 시간 10초");

    act(() => vi.advanceTimersByTime(10000));
    expect(screen.getByRole("status")).toHaveTextContent("자동으로 로그아웃됐어요");
    expect(screen.getByRole("button", { name: "다시 로그인" })).toBeInTheDocument();
  });
});

describe("ConfirmationDialog", () => {
  function Harness({ onAnswer }: { readonly onAnswer: (answer: boolean) => void }) {
    const confirm = useConfirm();
    return (
      <button
        type="button"
        onClick={async () =>
          onAnswer(
            await confirm({ title: "나갈까요?", confirmLabel: "나가기", cancelLabel: "계속 작성" }),
          )
        }
      >
        목록으로
      </button>
    );
  }

  it("resolves true on confirm and focuses cancel first", async () => {
    const onAnswer = vi.fn();
    render(
      <ConfirmationDialogProvider>
        <Harness onAnswer={onAnswer} />
      </ConfirmationDialogProvider>,
    );
    await userEvent.click(screen.getByRole("button", { name: "목록으로" }));
    const dialog = screen.getByRole("dialog", { name: "나갈까요?" });
    expect(within(dialog).getByRole("button", { name: "계속 작성" })).toHaveFocus();

    await userEvent.click(within(dialog).getByRole("button", { name: "나가기" }));
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("resolves false on cancel and on Escape", async () => {
    const onAnswer = vi.fn();
    render(
      <ConfirmationDialogProvider>
        <Harness onAnswer={onAnswer} />
      </ConfirmationDialogProvider>,
    );
    await userEvent.click(screen.getByRole("button", { name: "목록으로" }));
    await userEvent.click(screen.getByRole("button", { name: "계속 작성" }));
    expect(onAnswer).toHaveBeenLastCalledWith(false);

    await userEvent.click(screen.getByRole("button", { name: "목록으로" }));
    await act(async () => {
      screen.getByRole("dialog").dispatchEvent(new Event("cancel", { cancelable: true }));
    });
    expect(onAnswer).toHaveBeenCalledTimes(2);
    expect(onAnswer).toHaveBeenLastCalledWith(false);
  });

  it("asks only when there are unsaved changes in the demo", async () => {
    render(<ConfirmationDialogDemo />);
    await userEvent.click(screen.getByRole("button", { name: "목록으로" }));
    await userEvent.click(screen.getByRole("button", { name: "나가기" }));
    expect(screen.getByText("회의록 목록")).toBeInTheDocument();
    expect(screen.getByText("저장된 회의록이 없어요")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "새로 작성" }));
    await userEvent.click(screen.getByRole("button", { name: "저장" }));
    await userEvent.click(screen.getByRole("button", { name: "목록으로" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByText("다음 주 출시 일정 정리")).toBeInTheDocument();
  });
});

describe("CommandPalette", () => {
  function Harness({ onRun }: { readonly onRun: (id: string) => void }) {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onRun={onRun}
        commands={[
          { id: "new-doc", label: "새 문서 만들기", group: "문서" },
          { id: "invite", label: "팀원 초대", group: "팀", keywords: ["멤버"] },
          { id: "settings", label: "설정 열기", group: "설정" },
        ]}
      />
    );
  }

  it("filters by keyword, keeps groups, and runs the highlighted command", async () => {
    const onRun = vi.fn();
    render(<Harness onRun={onRun} />);
    const input = screen.getByRole("combobox");
    expect(input).toHaveFocus();
    expect(screen.getAllByRole("group")).toHaveLength(3);

    await userEvent.type(input, "멤버");
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent("팀원 초대");
    expect(input).toHaveAttribute("aria-activedescendant", options[0]?.id);

    await userEvent.keyboard("{Enter}");
    expect(onRun).toHaveBeenCalledWith("invite");
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });

  it("ignores Enter while Korean input is still composing", () => {
    const onRun = vi.fn();
    render(<Harness onRun={onRun} />);
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "Enter", isComposing: true });
    expect(onRun).not.toHaveBeenCalled();
  });

  it("says when nothing matches", async () => {
    render(<Harness onRun={() => {}} />);
    await userEvent.type(screen.getByRole("combobox"), "zzz");
    expect(screen.getByText("'zzz'에 맞는 명령이 없어요")).toBeInTheDocument();
  });
});

describe("HoverCard", () => {
  function Mention() {
    return (
      <HoverCard content={<span>김하늘 · 프로덕트 디자이너</span>}>
        <a href="#profile">@김하늘</a>
      </HoverCard>
    );
  }

  it("waits before opening on hover and hides the card from assistive technology", () => {
    vi.useFakeTimers();
    render(<Mention />);
    fireEvent.pointerEnter(screen.getByRole("link", { name: "@김하늘" }).parentElement as Element);
    act(() => vi.advanceTimersByTime(400));
    expect(screen.queryByText(/프로덕트 디자이너/)).not.toBeInTheDocument();

    act(() => vi.advanceTimersByTime(100));
    expect(screen.getByText(/프로덕트 디자이너/).closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("opens right away on keyboard focus and closes on Escape", async () => {
    render(<Mention />);
    await userEvent.tab();
    expect(await screen.findByText(/프로덕트 디자이너/)).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await vi.waitFor(() => expect(screen.queryByText(/프로덕트 디자이너/)).not.toBeInTheDocument());
  });
});
