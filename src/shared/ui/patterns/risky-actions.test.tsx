import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AutosaveIndicatorDemo } from "@/entities/pattern/catalog/autosave-indicator/AutosaveIndicatorDemo";
import { BulkActionsDemo } from "@/entities/pattern/catalog/bulk-actions/BulkActionsDemo";
import { TrashDemo } from "@/entities/pattern/catalog/trash/TrashDemo";
import { TypeToConfirmDemo } from "@/entities/pattern/catalog/type-to-confirm/TypeToConfirmDemo";
import { UnsavedChangesDialogDemo } from "@/entities/pattern/catalog/unsaved-changes/UnsavedChangesDialogDemo";
import { VersionHistoryDemo } from "@/entities/pattern/catalog/version-history/VersionHistoryDemo";

describe("TypeToConfirm", () => {
  it("unlocks the delete only for the exact name", async () => {
    const user = userEvent.setup();
    render(<TypeToConfirmDemo />);
    const button = screen.getByRole("button", { name: "영구 삭제" });
    const input = screen.getByRole("textbox", { name: /봄 사진첩을 입력하세요/ });
    await user.type(input, "봄 사진");
    expect(button).toBeDisabled();
    await user.type(input, "첩");
    expect(button).toBeEnabled();
    await user.click(button);
    expect(screen.getByRole("status")).toHaveTextContent("봄 사진첩을 지웠어요");
  });
});

describe("Trash", () => {
  it("restores an item and empties at the end", async () => {
    const user = userEvent.setup();
    render(<TrashDemo />);
    expect(screen.getByText("2일 뒤 영구 삭제")).toHaveClass("text-rose-600");
    await user.click(screen.getByRole("button", { name: "성수동 맛집 목록 복원" }));
    expect(screen.queryByText("성수동 맛집 목록")).toBeNull();
    expect(screen.getByRole("status")).toHaveTextContent("성수동 맛집 목록을 원래 폴더로");
    await user.click(screen.getByRole("button", { name: "회의록 복원" }));
    await user.click(screen.getByRole("button", { name: "이사 체크리스트 복원" }));
    expect(screen.getByText("휴지통이 비어 있어요")).toBeInTheDocument();
  });
});

describe("AutosaveIndicator", () => {
  it("shows saving while typing, then saved or saved on this device", async () => {
    const user = userEvent.setup();
    render(<AutosaveIndicatorDemo />);
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent("방금 저장됨");
    await user.type(screen.getByRole("textbox", { name: "메모" }), "!");
    expect(status).toHaveTextContent("저장 중…");
    expect(await screen.findByText("방금 저장됨")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "인터넷 연결 끊어 보기" }));
    await user.type(screen.getByRole("textbox", { name: "메모" }), "!");
    expect(await screen.findByText("연결이 끊겨 이 기기에만 저장했어요")).toBeInTheDocument();
  });
});

describe("UnsavedChangesDialog", () => {
  it("asks only when something changed and focuses keep editing", async () => {
    const user = userEvent.setup();
    render(<UnsavedChangesDialogDemo />);
    await user.click(screen.getByRole("button", { name: /뒤로/ }));
    expect(screen.queryByRole("alertdialog")).toBeNull();
    expect(screen.getByRole("status")).toHaveTextContent("목록으로 나갔어요");
    await user.type(screen.getByRole("textbox", { name: "소개" }), "!");
    await user.click(screen.getByRole("button", { name: /뒤로/ }));
    expect(screen.getByRole("alertdialog", { name: "저장하지 않은 내용이 있어요" })).toBeVisible();
    expect(screen.getByRole("button", { name: "계속 편집" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("alertdialog")).toBeNull();
    await user.click(screen.getByRole("button", { name: /뒤로/ }));
    await user.click(screen.getByRole("button", { name: "저장하지 않고 나가기" }));
    expect(screen.getByRole("textbox", { name: "소개" })).toHaveValue(
      "망원동에 사는 사진 찍는 사람",
    );
    await user.type(screen.getByRole("textbox", { name: "소개" }), "!");
    await user.click(screen.getByRole("button", { name: /뒤로/ }));
    await user.click(screen.getByRole("button", { name: "저장하고 나가기" }));
    expect(screen.getByRole("status")).toHaveTextContent("소개를 저장하고 목록으로 나갔어요");
  });
});

describe("BulkActions", () => {
  it("acts on the checked rows and can be undone", async () => {
    const user = userEvent.setup();
    render(<BulkActionsDemo />);
    expect(screen.queryByRole("toolbar")).toBeNull();
    await user.click(screen.getByRole("checkbox", { name: /영수증_3월/ }));
    await user.click(screen.getByRole("checkbox", { name: /영수증_4월/ }));
    expect(screen.getByRole("toolbar", { name: "선택한 파일 작업" })).toHaveTextContent("2개 선택");
    await user.click(screen.getByRole("button", { name: "삭제" }));
    expect(screen.queryByText("영수증_3월.pdf")).toBeNull();
    expect(screen.getByText("파일 2개를 지웠어요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "되돌리기" }));
    expect(screen.getAllByRole("checkbox")).toHaveLength(4);
    await user.click(screen.getByRole("checkbox", { name: /계약서/ }));
    await user.click(screen.getByRole("button", { name: "선택 해제" }));
    expect(screen.queryByRole("toolbar")).toBeNull();
    await user.click(screen.getByRole("checkbox", { name: /견적서/ }));
    await user.click(screen.getByRole("button", { name: "보관" }));
    expect(screen.getByText("파일 1개를 보관했어요")).toBeInTheDocument();
  });
});

describe("VersionHistory", () => {
  it("previews an older version and restores it as a new one", async () => {
    const user = userEvent.setup();
    render(<VersionHistoryDemo />);
    expect(screen.queryByRole("button", { name: "이 버전으로 되돌리기" })).toBeNull();
    await user.click(screen.getByRole("radio", { name: /오늘 11:05/ }));
    expect(screen.getByText(/숙소: 을지로/)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "이 버전으로 되돌리기" }));
    expect(screen.getAllByRole("radio")).toHaveLength(4);
    expect(screen.getByRole("radio", { name: /방금/ })).toBeChecked();
    expect(screen.getByRole("status")).toHaveTextContent("오늘 11:05 버전으로 되돌렸어요");
  });
});
