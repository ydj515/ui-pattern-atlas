import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AllCaughtUpDemo } from "@/entities/pattern/catalog/all-caught-up/AllCaughtUpDemo";
import { EmptiedStateDemo } from "@/entities/pattern/catalog/emptied-state/EmptiedStateDemo";
import { LockedContentDemo } from "@/entities/pattern/catalog/locked-content/LockedContentDemo";
import { MaintenancePageDemo } from "@/entities/pattern/catalog/maintenance-page/MaintenancePageDemo";
import { NoFilterResultsDemo } from "@/entities/pattern/catalog/no-filter-results/NoFilterResultsDemo";
import { NoResultsDemo } from "@/entities/pattern/catalog/no-results/NoResultsDemo";
import { NotFoundPageDemo } from "@/entities/pattern/catalog/not-found-page/NotFoundPageDemo";
import { OfflineStateDemo } from "@/entities/pattern/catalog/offline-state/OfflineStateDemo";
import { PermissionDeniedDemo } from "@/entities/pattern/catalog/permission-denied/PermissionDeniedDemo";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("NoResults", () => {
  it("repeats the query and runs the suggested spelling", async () => {
    const user = userEvent.setup();
    render(<NoResultsDemo />);

    expect(screen.getByText("‘아메리가노’ 검색 결과가 없어요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "아메리카노" }));
    expect(screen.getByRole("searchbox", { name: "메뉴 검색" })).toHaveValue("아메리카노");
    expect(screen.getByRole("listitem")).toHaveTextContent("아메리카노");
  });

  it("clears the query back to the full list", async () => {
    const user = userEvent.setup();
    render(<NoResultsDemo />);
    await user.click(screen.getByRole("button", { name: "검색어 지우기" }));
    expect(screen.getAllByRole("listitem")).toHaveLength(5);
  });
});

describe("OfflineState", () => {
  it("shows the offline message and the content once back online", async () => {
    const user = userEvent.setup();
    render(<OfflineStateDemo />);

    expect(screen.getByRole("status")).toHaveTextContent("인터넷 연결이 끊겼어요");
    await user.click(screen.getByRole("button", { name: "다시 시도" }));
    expect(screen.getByText("아직 연결되지 않았어요")).toBeInTheDocument();

    await user.click(screen.getByRole("checkbox", { name: "연결 끊김 흉내" }));
    expect(screen.getByText("점심 메뉴 투표가 열렸어요")).toBeInTheDocument();
  });

  it("follows the browser's offline event", async () => {
    const user = userEvent.setup();
    render(<OfflineStateDemo />);
    await user.click(screen.getByRole("checkbox", { name: "연결 끊김 흉내" }));

    vi.spyOn(navigator, "onLine", "get").mockReturnValue(false);
    act(() => {
      window.dispatchEvent(new Event("offline"));
    });
    expect(screen.getByRole("status")).toHaveTextContent("인터넷 연결이 끊겼어요");
  });
});

describe("NotFoundPage", () => {
  it("offers search and a way home", async () => {
    const user = userEvent.setup();
    render(<NotFoundPageDemo />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("페이지를 찾을 수 없어요");
    await user.type(
      within(screen.getByRole("search")).getByRole("searchbox", { name: "검색" }),
      "패턴{Enter}",
    );
    expect(screen.getByRole("status")).toHaveTextContent("‘패턴’ 검색 결과로 이동해요");

    await user.click(screen.getByRole("button", { name: "홈으로 가기" }));
    expect(screen.getByText("홈")).toBeInTheDocument();
  });
});

describe("PermissionDenied", () => {
  it("turns the request button into a confirmation", async () => {
    const user = userEvent.setup();
    render(<PermissionDeniedDemo />);

    await user.click(screen.getByRole("button", { name: "권한 요청" }));
    expect(screen.getByRole("button", { name: "요청함" })).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("승인되면 메일로 알려 드려요.");
  });
});

describe("MaintenancePage", () => {
  it("shows the window, the time left and the notify step", async () => {
    const user = userEvent.setup();
    render(<MaintenancePageDemo />);

    expect(screen.getByRole("progressbar", { name: "점검 진행" })).toHaveAttribute(
      "aria-valuenow",
      "63",
    );
    expect(screen.getByText("약 1시간 30분 남았어요")).toBeInTheDocument();
    expect(screen.getByText("02:00")).toHaveAttribute("dateTime");

    await user.click(screen.getByRole("button", { name: "끝나면 알림 받기" }));
    expect(screen.getByRole("button", { name: "끝나면 메일로 알려 드릴게요" })).toBeDisabled();
  });
});

describe("NoFilterResults", () => {
  it("lets one filter be removed right from the empty result", async () => {
    const user = userEvent.setup();
    render(<NoFilterResultsDemo />);

    expect(screen.getByText("조건에 맞는 숙소가 없어요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "수영장 필터 빼기" }));
    expect(screen.getByText("바다 앞 민박")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "필터 다시 걸기" }));
    await user.click(screen.getByRole("button", { name: "필터 모두 지우기" }));
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});

describe("AllCaughtUp", () => {
  it("confirms when the last notification is handled", async () => {
    const user = userEvent.setup();
    render(<AllCaughtUpDemo />);

    await user.click(screen.getByRole("button", { name: "배송이 시작됐어요 확인" }));
    await user.click(screen.getByRole("button", { name: "쿠폰이 곧 만료돼요 확인" }));
    expect(screen.getByRole("status")).toHaveTextContent("모두 확인했어요");

    await user.click(screen.getByRole("button", { name: "지난 알림 보기" }));
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});

describe("EmptiedState", () => {
  it("names the removed item, focuses the heading and undoes", async () => {
    const user = userEvent.setup();
    render(<EmptiedStateDemo />);

    await user.click(screen.getByRole("button", { name: "삭제" }));
    expect(screen.getByRole("heading", { name: "장바구니가 비었어요" })).toHaveFocus();
    expect(screen.getByText("방금 ‘무선 이어폰’을 뺐어요.")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "되돌리기" }));
    expect(screen.getByRole("button", { name: "삭제" })).toHaveFocus();
  });
});

describe("LockedContent", () => {
  it("does not render the locked part until unlocked", () => {
    render(<LockedContentDemo />);
    expect(screen.queryByText(/4의 배수로 시작하면/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "멤버십 시작하기" }));
    expect(screen.getByText(/4의 배수로 시작하면/)).toBeInTheDocument();
  });
});
