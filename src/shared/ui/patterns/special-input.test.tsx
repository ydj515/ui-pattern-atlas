import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CalendarDemo } from "@/entities/pattern/catalog/calendar/CalendarDemo";
import { ColorPickerDemo } from "@/entities/pattern/catalog/color-picker/ColorPickerDemo";
import { DateInputDemo } from "@/entities/pattern/catalog/date-input/DateInputDemo";
import { DatePickerDemo } from "@/entities/pattern/catalog/date-picker/DatePickerDemo";
import { DateRangePickerDemo } from "@/entities/pattern/catalog/date-range-picker/DateRangePickerDemo";
import { FileUploadDemo } from "@/entities/pattern/catalog/file-upload/FileUploadDemo";
import { ImageCropperDemo } from "@/entities/pattern/catalog/image-cropper/ImageCropperDemo";
import { MonthPickerDemo } from "@/entities/pattern/catalog/month-picker/MonthPickerDemo";
import { QuickDateChipsDemo } from "@/entities/pattern/catalog/quick-date-chips/QuickDateChipsDemo";
import { RecurrencePickerDemo } from "@/entities/pattern/catalog/recurrence-picker/RecurrencePickerDemo";
import { SignaturePadDemo } from "@/entities/pattern/catalog/signature-pad/SignaturePadDemo";
import { TimePickerDemo } from "@/entities/pattern/catalog/time-picker/TimePickerDemo";
import { TimeSlotsDemo } from "@/entities/pattern/catalog/time-slots/TimeSlotsDemo";
import { WheelPickerDemo } from "@/entities/pattern/catalog/wheel-picker/WheelPickerDemo";
import { formatDateDigits, parseDate } from "@/shared/ui/patterns/date-input/DateInput";

afterEach(() => {
  vi.useRealTimers();
});

describe("DatePicker", () => {
  it("opens on today, moves with the keyboard and picks a day", async () => {
    const user = userEvent.setup();
    render(<DatePickerDemo />);
    const button = screen.getByRole("button", { name: /방문 날짜/ });

    await user.click(button);
    const grid = screen.getByRole("grid", { name: "2026년 11월" });
    expect(within(grid).getByRole("button", { name: "11월 23일 (월)" })).toHaveFocus();
    expect(within(grid).getByRole("button", { name: "11월 22일 (일)" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    await user.keyboard("{ArrowRight}{ArrowRight}{Enter}");
    expect(button).toHaveFocus();
    expect(button).toHaveAccessibleName("방문 날짜 11월 25일 (수)");
    expect(screen.getByText("11월 25일 (수)에 방문해요")).toBeInTheDocument();
  });

  it("pages months and closes on Escape", async () => {
    const user = userEvent.setup();
    render(<DatePickerDemo />);
    await user.click(screen.getByRole("button", { name: /방문 날짜/ }));
    await user.keyboard("{PageDown}");
    expect(screen.getByRole("grid", { name: "2026년 12월" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("grid")).not.toBeInTheDocument();
  });
});

describe("FileUpload", () => {
  it("accepts images, rejects others with a reason and removes files", async () => {
    const user = userEvent.setup({ applyAccept: false });
    render(<FileUploadDemo />);
    const input = screen.getByLabelText("증빙 사진 파일 고르기");

    await user.upload(input, new File(["x"], "메모.txt", { type: "text/plain" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "메모.txt은(는) 이미지가 아니거나 5MB를 넘어요",
    );

    await user.upload(input, new File(["x"], "사진.png", { type: "image/png" }));
    expect(screen.getByText("사진.png")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "사진.png 삭제" }));
    expect(screen.queryByText("사진.png")).not.toBeInTheDocument();
  });

  it("takes dropped files", () => {
    render(<FileUploadDemo />);
    const zone = screen.getByText("여기로 끌어다 놓거나").closest("label")!;
    const file = new File(["x"], "영수증.jpg", { type: "image/jpeg" });
    fireEvent.drop(zone, { dataTransfer: { files: [file] } });
    expect(screen.getByText("영수증.jpg")).toBeInTheDocument();
  });
});

describe("DateRangePicker", () => {
  it("picks check-in then check-out and counts the nights", async () => {
    const user = userEvent.setup();
    render(<DateRangePickerDemo />);
    await user.click(screen.getByRole("button", { name: "11월 27일 (금)" }));
    expect(screen.getByRole("button", { name: "11월 27일 (금), 체크인" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await user.click(screen.getByRole("button", { name: "11월 29일 (일)" }));
    expect(screen.getByRole("button", { name: "11월 28일 (토), 숙박" })).toBeInTheDocument();
    expect(screen.getByText("11월 27일 (금) – 11월 29일 (일) · 2박")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "11월 20일 (금)" })).toBeDisabled();
  });
});

describe("TimePicker", () => {
  it("offers only the allowed hours and steps", async () => {
    const user = userEvent.setup();
    render(<TimePickerDemo />);
    const group = screen.getByRole("group", { name: "픽업 시간" });
    const hour = within(group).getByRole("combobox", { name: "시" });
    expect(within(hour).getAllByRole("option")).toHaveLength(11);
    await user.selectOptions(hour, "15");
    expect(screen.getByText("15시 30분에 찾으러 와요")).toBeInTheDocument();
  });
});

describe("Calendar", () => {
  it("names event counts and lists a day's events", async () => {
    const user = userEvent.setup();
    render(<CalendarDemo />);
    const today = screen.getByRole("button", { name: "11월 23일 월요일, 일정 2개" });
    expect(today).toHaveAttribute("aria-current", "date");
    expect(screen.getByText("주간 회의")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "11월 27일 금요일, 일정 1개" }));
    expect(screen.getByText("출시 회고")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "11월 26일 목요일" }));
    expect(screen.getByText("일정이 없어요")).toBeInTheDocument();
  });
});

describe("ImageCropper", () => {
  it("moves the photo with arrow keys within the frame", () => {
    const { container } = render(<ImageCropperDemo />);
    const frame = screen.getByRole("group", { name: "사진 위치. 화살표 키로 옮겨요" });
    const image = container.querySelector("img")!;
    fireEvent.keyDown(frame, { key: "ArrowRight" });
    expect(image.style.transform).toMatch(/^translate\(8px(, 0px)?\) scale\(1\.4\)$/);
    for (let step = 0; step < 20; step += 1) fireEvent.keyDown(frame, { key: "ArrowRight" });
    expect(image.style.transform).toMatch(/^translate\(40px(, 0px)?\) scale\(1\.4\)$/);
    fireEvent.change(screen.getByRole("slider", { name: "확대" }), { target: { value: "1" } });
    expect(image.style.transform).toMatch(/^translate\(0px(, 0px)?\) scale\(1\)$/);
  });
});

describe("ColorPicker", () => {
  it("names each swatch and shows the hex value", async () => {
    const user = userEvent.setup();
    render(<ColorPickerDemo />);
    await user.click(screen.getByRole("radio", { name: "초록" }));
    expect(screen.getByText("#16A34A")).toBeInTheDocument();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("radio", { name: "주황" })).toBeChecked();
  });
});

describe("SignaturePad", () => {
  it("offers a typed signature and saves it", async () => {
    const user = userEvent.setup();
    render(<SignaturePadDemo />);
    expect(screen.getByRole("img", { name: "서명, 비어 있음" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "서명 완료" })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: "이름으로 대신하기" }));
    await user.type(screen.getByRole("textbox", { name: "이름 입력" }), "김하늘");
    await user.click(screen.getByRole("button", { name: "서명 완료" }));
    expect(screen.getByRole("status")).toHaveTextContent("서명을 저장했어요");
    expect(screen.getByText("김하늘")).toBeInTheDocument();
  });
});

describe("DateInput", () => {
  it("formats, parses and rejects impossible days", async () => {
    expect(formatDateDigits("19950314")).toBe("1995.03.14");
    expect(parseDate("2026.02.30")).toBeNull();

    const user = userEvent.setup();
    render(<DateInputDemo />);
    const input = screen.getByRole("textbox", { name: "생년월일" });
    await user.type(input, "19950314");
    expect(input).toHaveValue("1995.03.14");
    expect(screen.getByText("1995년 3월 14일")).toBeInTheDocument();

    await user.clear(input);
    await user.type(input, "20260230");
    await user.tab();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("없는 날짜예요");
  });
});

describe("QuickDateChips", () => {
  it("resolves relative chips to real dates", async () => {
    const user = userEvent.setup();
    render(<QuickDateChipsDemo />);
    await user.click(screen.getByRole("button", { name: "이번 주말" }));
    expect(screen.getByRole("button", { name: "이번 주말" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText("11월 28일 (토)에 받아요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "다음 주 월요일" }));
    expect(screen.getByText("11월 30일 (월)에 받아요")).toBeInTheDocument();
  });
});

describe("TimeSlots", () => {
  it("disables taken slots and books the chosen one", async () => {
    const user = userEvent.setup();
    render(<TimeSlotsDemo />);
    expect(screen.getByRole("radio", { name: /10:30/ })).toBeDisabled();
    await user.click(screen.getByRole("radio", { name: "11:00" }));
    await user.click(screen.getByRole("button", { name: "11:00 예약하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("11월 24일 11:00로 예약했어요");
  });
});

describe("MonthPicker", () => {
  it("blocks future months and picks a past one", async () => {
    const user = userEvent.setup();
    render(<MonthPickerDemo />);
    expect(screen.getByRole("button", { name: "2026년 12월" })).toBeDisabled();
    expect(screen.getByRole("button", { name: /다음 해/ })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "2026년 10월" }));
    expect(screen.getByText("2026년 10월 정산 내역을 보여 드려요")).toBeInTheDocument();
  });
});

describe("WheelPicker", () => {
  it("changes a column with the arrow keys", async () => {
    const user = userEvent.setup();
    render(<WheelPickerDemo />);
    const hours = screen.getByRole("listbox", { name: "시" });
    hours.focus();
    await user.keyboard("{ArrowDown}");
    expect(within(hours).getByRole("option", { name: "8" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("오전 8:30에 알람이 울려요")).toBeInTheDocument();
  });

  it("reads the value from the scroll position once it settles", () => {
    vi.useFakeTimers();
    render(<WheelPickerDemo />);
    const minutes = screen.getByRole("listbox", { name: "분" });
    minutes.scrollTop = 36 * 9;
    fireEvent.scroll(minutes);
    act(() => vi.advanceTimersByTime(150));
    expect(screen.getByText("오전 7:45에 알람이 울려요")).toBeInTheDocument();
  });
});

describe("RecurrencePicker", () => {
  it("toggles weekdays and describes the rule", async () => {
    const user = userEvent.setup();
    render(<RecurrencePickerDemo />);
    expect(screen.getByText("매주 월, 수요일마다 · 10회 반복해요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "금" }));
    expect(screen.getByText("매주 월, 수, 금요일마다 · 10회 반복해요")).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "계속 반복" }));
    expect(screen.getByText("매주 월, 수, 금요일마다 · 끝없이 반복해요")).toBeInTheDocument();
    await user.selectOptions(screen.getByRole("combobox", { name: "반복" }), "매일");
    expect(screen.queryByRole("button", { name: "금" })).not.toBeInTheDocument();
  });
});
