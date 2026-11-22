import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ComboboxDemo } from "@/entities/pattern/catalog/combobox/ComboboxDemo";
import { FilterChipDemo } from "@/entities/pattern/catalog/filter-chip/FilterChipDemo";
import { ListboxDemo } from "@/entities/pattern/catalog/listbox/ListboxDemo";
import { MultiSelectDemo } from "@/entities/pattern/catalog/multi-select/MultiSelectDemo";
import { RadioGroupDemo } from "@/entities/pattern/catalog/radio-group/RadioGroupDemo";
import { RangeSliderDemo } from "@/entities/pattern/catalog/range-slider/RangeSliderDemo";
import { SelectDemo } from "@/entities/pattern/catalog/select/SelectDemo";
import { SliderDemo } from "@/entities/pattern/catalog/slider/SliderDemo";

describe("RadioGroup", () => {
  it("groups native radios under the legend and updates the total", async () => {
    const user = userEvent.setup();
    render(<RadioGroupDemo />);
    const group = screen.getByRole("group", { name: "배송 방법" });
    await user.click(within(group).getByRole("radio", { name: /빠른 배송/ }));
    expect(screen.getByText("결제 금액 23,000원")).toBeInTheDocument();
  });
});

describe("Select", () => {
  it("starts on the placeholder and reacts to a choice", async () => {
    const user = userEvent.setup();
    render(<SelectDemo />);
    const select = screen.getByRole("combobox", { name: "지역" });
    expect(select).toHaveValue("");
    expect(select).toHaveAccessibleDescription("배송비가 지역마다 달라요");
    await user.selectOptions(select, "울릉도");
    expect(screen.getByRole("status")).toHaveTextContent("울릉도는 배송비 3,000원이 더 붙어요");
  });
});

describe("Combobox", () => {
  it("filters while typing and picks with the keyboard", async () => {
    const user = userEvent.setup();
    render(<ComboboxDemo />);
    const input = screen.getByRole("combobox", { name: "도시" });

    await user.click(input);
    await user.keyboard("대");
    const list = screen.getByRole("listbox", { name: "도시" });
    expect(
      within(list)
        .getAllByRole("option")
        .map((option) => option.textContent),
    ).toEqual(["대구", "대전"]);

    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      within(list).getByRole("option", { name: "대전" }).id,
    );
    await user.keyboard("{Enter}");
    expect(input).toHaveValue("대전");
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("선택한 도시: 대전")).toBeInTheDocument();
  });

  it("closes on Escape, then clears", async () => {
    const user = userEvent.setup();
    render(<ComboboxDemo />);
    const input = screen.getByRole("combobox", { name: "도시" });
    await user.type(input, "부");
    await user.keyboard("{Escape}");
    expect(input).toHaveAttribute("aria-expanded", "false");
    await user.keyboard("{Escape}");
    expect(input).toHaveValue("");
  });
});

describe("FilterChip", () => {
  it("toggles chips and narrows the list", async () => {
    const user = userEvent.setup();
    render(<FilterChipDemo />);
    const wifi = screen.getByRole("button", { name: "와이파이" });
    await user.click(wifi);
    expect(wifi).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "콘센트" }));
    expect(screen.getByText("카페 2곳")).toBeInTheDocument();
    await user.click(wifi);
    expect(screen.getByText("카페 2곳")).toBeInTheDocument();
  });
});

describe("MultiSelect", () => {
  it("toggles options from the keyboard and shows removable chips", async () => {
    const user = userEvent.setup();
    render(<MultiSelectDemo />);
    const button = screen.getByRole("button", { name: /담당 팀/ });

    await user.click(button);
    const list = screen.getByRole("listbox", { name: "담당 팀" });
    expect(list).toHaveFocus();
    await user.keyboard("{ArrowDown}{Enter}{ArrowDown}{ }");
    expect(within(list).getByRole("option", { name: /개발/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.keyboard("{Escape}");
    expect(button).toHaveFocus();
    expect(button).toHaveAccessibleName("담당 팀 2개 선택");

    await user.click(screen.getByRole("button", { name: "개발 빼기" }));
    expect(button).toHaveAccessibleName("담당 팀 1개 선택");
  });
});

describe("Slider", () => {
  it("reads the value with its unit and updates the count", () => {
    render(<SliderDemo />);
    const slider = screen.getByRole("slider", { name: "최대 가격" });
    expect(slider).toHaveAttribute("aria-valuetext", "30,000원");
    fireEvent.change(slider, { target: { value: "70000" } });
    expect(slider).toHaveAttribute("aria-valuetext", "70,000원");
    expect(screen.getByText("조건에 맞는 상품 8개")).toBeInTheDocument();
  });
});

describe("RangeSlider", () => {
  it("names both thumbs and keeps them from crossing", () => {
    render(<RangeSliderDemo />);
    const low = screen.getByRole("slider", { name: "가격대 최솟값" });
    const high = screen.getByRole("slider", { name: "가격대 최댓값" });
    fireEvent.change(low, { target: { value: "50000" } });
    expect(screen.getByText("5만원 – 12만원")).toBeInTheDocument();
    fireEvent.change(high, { target: { value: "20000" } });
    expect(high).toHaveAttribute("aria-valuetext", "6만원");
  });
});

describe("Listbox", () => {
  it("moves the selection with arrows, Home/End and type-ahead", async () => {
    const user = userEvent.setup();
    render(<ListboxDemo />);
    const list = screen.getByRole("listbox", { name: "알림 소리" });
    list.focus();
    await user.keyboard("{ArrowDown}");
    expect(within(list).getByRole("option", { name: /맑은 종소리/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.keyboard("{End}");
    expect(within(list).getByRole("option", { name: /무음/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.keyboard("짧");
    expect(within(list).getByRole("option", { name: /짧은 진동/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(list).toHaveAttribute(
      "aria-activedescendant",
      within(list).getByRole("option", { name: /짧은 진동/ }).id,
    );
  });
});
