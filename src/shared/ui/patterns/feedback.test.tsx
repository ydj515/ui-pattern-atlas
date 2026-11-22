import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ConfirmationMessageDemo } from "@/entities/pattern/catalog/confirmation-message/ConfirmationMessageDemo";
import { ErrorSummaryDemo } from "@/entities/pattern/catalog/error-summary/ErrorSummaryDemo";
import { NotificationCenterDemo } from "@/entities/pattern/catalog/notification-center/NotificationCenterDemo";
import { ProgressToastDemo } from "@/entities/pattern/catalog/progress-toast/ProgressToastDemo";
import { PushNotificationDemo } from "@/entities/pattern/catalog/push-notification/PushNotificationDemo";
import { UndoDemo } from "@/entities/pattern/catalog/undo/UndoDemo";
import { Callout } from "@/shared/ui/patterns/callout/Callout";
import { UndoBar } from "@/shared/ui/patterns/undo/UndoBar";

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("ErrorSummary", () => {
  it("lists every error, takes focus and links each item to its field", async () => {
    const user = userEvent.setup();
    render(<ErrorSummaryDemo />);

    await user.click(screen.getByRole("button", { name: "가입하기" }));

    const summary = screen.getByRole("alert");
    expect(summary).toHaveFocus();
    expect(within(summary).getByRole("heading")).toHaveTextContent("2개 항목을 확인해 주세요");
    expect(screen.getByLabelText("이메일")).toHaveAttribute("aria-invalid", "true");

    await user.click(within(summary).getByRole("link", { name: "이메일 형식이 올바르지 않아요" }));
    expect(screen.getByLabelText("이메일")).toHaveFocus();
  });

  it("goes away once the form is valid", async () => {
    const user = userEvent.setup();
    render(<ErrorSummaryDemo />);

    await user.type(screen.getByLabelText("이메일"), "sky@example.com");
    await user.type(screen.getByLabelText("비밀번호"), "12345678");
    await user.click(screen.getByRole("button", { name: "가입하기" }));

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("가입했어요");
  });
});

describe("Undo", () => {
  it("removes the row at once and puts it back in place on undo", async () => {
    const user = userEvent.setup();
    render(<UndoDemo />);

    await user.click(screen.getByRole("button", { name: "배송이 시작됐어요 삭제" }));
    expect(screen.queryByText("배송이 시작됐어요")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("메일 1개를 삭제했어요");

    await user.click(screen.getByRole("button", { name: "되돌리기" }));
    const rows = screen.getAllByRole("listitem").map((row) => row.textContent);
    expect(rows).toEqual(["주간 회의 안내", "배송이 시작됐어요", "청구서가 도착했어요"]);
    expect(screen.getByRole("status")).toHaveTextContent("삭제를 되돌렸어요");
  });

  it("commits when time runs out, but not while the bar is hovered", () => {
    vi.useFakeTimers();
    const onExpire = vi.fn();
    render(
      <UndoBar
        message="메일 1개를 삭제했어요"
        onUndo={() => {}}
        onExpire={onExpire}
        durationMs={5000}
      />,
    );

    act(() => vi.advanceTimersByTime(3000));
    fireEvent.pointerEnter(screen.getByRole("status"));
    act(() => vi.advanceTimersByTime(10_000));
    expect(onExpire).not.toHaveBeenCalled();

    fireEvent.pointerLeave(screen.getByRole("status"));
    act(() => vi.advanceTimersByTime(1900));
    expect(onExpire).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(200));
    expect(onExpire).toHaveBeenCalledTimes(1);
  });
});

describe("Callout", () => {
  it("is a note with a visible kind label, not colour alone", () => {
    render(<Callout tone="warning">링크를 다른 사람과 공유하지 마세요.</Callout>);
    const note = screen.getByRole("note");
    expect(note).toHaveTextContent("주의");
    expect(note).toHaveTextContent("링크를 다른 사람과 공유하지 마세요.");
  });
});

describe("NotificationCenter", () => {
  it("names the unread count, marks all read and closes with Escape", async () => {
    const user = userEvent.setup();
    render(<NotificationCenterDemo />);

    const bell = screen.getByRole("button", { name: "알림, 안 읽음 3개" });
    await user.click(bell);
    expect(bell).toHaveAttribute("aria-expanded", "true");
    const panel = screen.getByRole("dialog", { name: "알림" });

    await user.click(within(panel).getByRole("button", { name: /배송이 시작됐어요/ }));
    expect(bell).toHaveAccessibleName("알림, 안 읽음 2개");

    await user.click(within(panel).getByRole("button", { name: "모두 읽음" }));
    expect(bell).toHaveAccessibleName("알림");
    expect(within(panel).getByRole("button", { name: "모두 읽음" })).toBeDisabled();

    await user.keyboard("{Escape}");
    expect(bell).toHaveAttribute("aria-expanded", "false");
    expect(bell).toHaveFocus();
  });
});

describe("ProgressToast", () => {
  it("reports progress, then the result, and can be cancelled", () => {
    vi.useFakeTimers();
    const { unmount } = render(<ProgressToastDemo />);

    fireEvent.click(screen.getByRole("button", { name: "파일 올리기" }));
    act(() => vi.advanceTimersByTime(600));
    expect(screen.getByRole("status")).toHaveTextContent("회의록.pdf 올리는 중 24%");
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "24");

    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole("status")).toHaveTextContent("회의록.pdf 올리기 완료");
    unmount();

    render(<ProgressToastDemo />);
    fireEvent.click(screen.getByRole("button", { name: "파일 올리기" }));
    fireEvent.click(screen.getByRole("button", { name: "취소" }));
    expect(screen.getByRole("status")).toHaveTextContent("올리기를 취소했어요");
  });
});

describe("ConfirmationMessage", () => {
  it("replaces the form, focuses the result and offers the next step", async () => {
    const user = userEvent.setup();
    render(<ConfirmationMessageDemo />);

    await user.click(screen.getByRole("button", { name: "보내기" }));
    expect(screen.getByRole("heading", { name: "문의를 보냈어요" })).toHaveFocus();
    expect(screen.getByText(/접수 번호 Q-2048/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "새 문의 쓰기" }));
    expect(screen.getByLabelText("문의 내용")).toHaveValue("");
  });
});

describe("PushNotification", () => {
  it("asks for permission only on click and shows a notification once granted", async () => {
    const shown: string[] = [];
    const requestPermission = vi.fn(async () => {
      FakeNotification.permission = "granted";
      return "granted" as const;
    });
    class FakeNotification {
      static permission: NotificationPermission = "default";
      static requestPermission = requestPermission;
      constructor(title: string) {
        shown.push(title);
      }
    }
    vi.stubGlobal("Notification", FakeNotification);
    const user = userEvent.setup();
    render(<PushNotificationDemo />);

    expect(requestPermission).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "알림 받기" }));
    expect(requestPermission).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: "테스트 알림" }));
    expect(shown).toEqual(["배송이 시작됐어요"]);
  });

  it("explains a denied permission instead of asking again", () => {
    vi.stubGlobal(
      "Notification",
      class {
        static permission: NotificationPermission = "denied";
      },
    );
    render(<PushNotificationDemo />);

    expect(screen.queryByRole("button", { name: "알림 받기" })).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("브라우저 설정에서 알림을 허용해 주세요.");
  });
});
