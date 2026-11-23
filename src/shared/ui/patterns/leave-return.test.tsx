import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { DormantAccountDemo } from "@/entities/pattern/catalog/dormant-account/DormantAccountDemo";
import { ResumePromptDemo } from "@/entities/pattern/catalog/resume-prompt/ResumePromptDemo";
import { SessionTimeoutDemo } from "@/entities/pattern/catalog/session-timeout/SessionTimeoutDemo";
import { SubscriptionCancellationDemo } from "@/entities/pattern/catalog/subscription-cancellation/SubscriptionCancellationDemo";
import { UpdatePromptDemo } from "@/entities/pattern/catalog/update-prompt/UpdatePromptDemo";

describe("SessionTimeout", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("counts down, extends, and signs back in after expiring", () => {
    vi.useFakeTimers();
    const click = (name: string) => act(() => screen.getByRole("button", { name }).click());
    render(<SessionTimeoutDemo />);
    expect(screen.getByText(/1:00 뒤 로그아웃돼요/)).toBeInTheDocument();
    for (let second = 0; second < 3; second += 1) {
      act(() => vi.advanceTimersByTime(1000));
    }
    expect(screen.getByText(/0:57 뒤 로그아웃돼요/)).toBeInTheDocument();
    click("계속 이용하기");
    expect(screen.getByText(/1:00 뒤 로그아웃돼요/)).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("로그인을 30분 더 유지해요");
    click("지금 로그아웃");
    expect(
      screen.getByRole("alertdialog", { name: "오래 쉬어 로그아웃했어요" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "다시 로그인" })).toHaveFocus();
    click("다시 로그인");
    expect(screen.getByRole("status")).toHaveTextContent("쓰던 내용을 불러왔어요");
  });
});

describe("ResumePrompt", () => {
  it("shows where it stopped and resumes there", async () => {
    const user = userEvent.setup();
    render(<ResumePromptDemo />);
    expect(screen.getByText("3강 12:40에서 멈췄어요")).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "서울 야경 사진 강의 40%" })).toHaveValue(40);
    await user.click(screen.getByRole("button", { name: "이어서 보기" }));
    expect(screen.getByRole("status")).toHaveTextContent("3강 12:40부터 재생해요");
  });

  it("can start over or be closed", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<ResumePromptDemo />);
    await user.click(screen.getByRole("button", { name: "처음부터" }));
    expect(screen.getByRole("status")).toHaveTextContent("1강 처음부터");
    unmount();
    render(<ResumePromptDemo />);
    await user.click(screen.getByRole("button", { name: "닫기" }));
    expect(screen.getByRole("status")).toHaveTextContent("홈 화면으로");
  });
});

describe("SubscriptionCancellation", () => {
  it("cancels without a reason and offers a pause beside it", async () => {
    const user = userEvent.setup();
    render(<SubscriptionCancellationDemo />);
    expect(screen.getByText("6월 30일까지는 지금처럼 쓸 수 있어요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "해지하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("해지했어요");
    await user.click(screen.getByRole("button", { name: "다시 구독하기" }));
    await user.click(screen.getByRole("radio", { name: "잘 쓰지 않아요" }));
    await user.click(screen.getByRole("button", { name: "한 달 쉬기" }));
    expect(screen.getByRole("status")).toHaveTextContent("7월 한 달 쉬어요");
  });
});

describe("DormantAccount", () => {
  it("says what was kept and reactivates in one step", async () => {
    const user = userEvent.setup();
    render(<DormantAccountDemo />);
    expect(screen.getByText("haneul@kakao.com")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    await user.click(screen.getByRole("button", { name: "휴면 풀고 이어서 쓰기" }));
    expect(screen.getByRole("status")).toHaveTextContent("다시 오신 걸 환영해요");
  });
});

describe("UpdatePrompt", () => {
  it("lets an optional update wait but not a required one", async () => {
    const user = userEvent.setup();
    render(<UpdatePromptDemo />);
    expect(screen.getByRole("dialog", { name: "새 버전(4.2)이 나왔어요" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "나중에" }));
    expect(screen.getByRole("status")).toHaveTextContent("언제든 업데이트할 수 있어요");
    await user.click(screen.getByRole("radio", { name: "필수 업데이트" }));
    expect(
      screen.getByRole("alertdialog", { name: "4.2 버전으로 업데이트해야 쓸 수 있어요" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "나중에" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "업데이트" }));
    expect(screen.getByRole("status")).toHaveTextContent("앱 스토어로 이동해 업데이트해요");
  });
});
