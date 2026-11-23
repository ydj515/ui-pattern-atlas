import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { BoxPlotDemo } from "@/entities/pattern/catalog/box-plot/BoxPlotDemo";
import { BulletChartDemo } from "@/entities/pattern/catalog/bullet-chart/BulletChartDemo";
import { CalendarHeatmapDemo } from "@/entities/pattern/catalog/calendar-heatmap/CalendarHeatmapDemo";
import { PolarAreaChartDemo } from "@/entities/pattern/catalog/polar-area-chart/PolarAreaChartDemo";
import { SlopeChartDemo } from "@/entities/pattern/catalog/slope-chart/SlopeChartDemo";
import { TreemapDemo } from "@/entities/pattern/catalog/treemap/TreemapDemo";
import { WaffleChartDemo } from "@/entities/pattern/catalog/waffle-chart/WaffleChartDemo";
import { WaterfallChartDemo } from "@/entities/pattern/catalog/waterfall-chart/WaterfallChartDemo";
import { boxStats } from "@/shared/ui/patterns/box-plot/BoxPlot";

describe("Treemap", () => {
  it("lays the items out by area and lists them biggest first", async () => {
    const user = userEvent.setup();
    const { container } = render(<TreemapDemo />);
    const rects = [...container.querySelectorAll("rect")];
    const area = (rect: Element) =>
      Number(rect.getAttribute("width")) * Number(rect.getAttribute("height"));
    expect(area(rects[0]!) / area(rects[1]!)).toBeGreaterThan(1.3);
    expect(within(screen.getByRole("table")).getAllByRole("row")[0]).toHaveTextContent(
      "사진42GB42%",
    );
    await user.click(screen.getByRole("radio", { name: "태블릿" }));
    expect(within(screen.getByRole("table")).getAllByRole("row")[0]).toHaveTextContent(
      "동영상48GB48%",
    );
    fireEvent.pointerEnter(container.querySelectorAll("svg g")[4]!);
    expect(screen.getByText("기타 · 6GB (6%)")).toBeInTheDocument();
  });
});

describe("WaterfallChart", () => {
  it("adds and subtracts each step on the way to the result", async () => {
    const user = userEvent.setup();
    render(<WaterfallChartDemo />);
    const rows = () => within(screen.getByRole("table")).getAllByRole("row");
    expect(rows()[1]).toHaveTextContent("원가−480720");
    expect(rows().at(-1)).toHaveTextContent("순이익330330");
    await user.click(screen.getByRole("radio", { name: "10월" }));
    expect(screen.getByRole("figure", { name: "10월 손익(만 원)" })).toBeInTheDocument();
    expect(rows().at(-1)).toHaveTextContent("순이익8080");
  });
});

describe("BoxPlot", () => {
  it("computes quartiles, whiskers and far-off values", () => {
    expect(boxStats([6, 8, 9, 10, 11, 12, 12, 14, 15, 18, 40])).toEqual({
      low: 6,
      q1: 9.5,
      median: 12,
      q3: 14.5,
      high: 18,
      outliers: [40],
    });
    render(<BoxPlotDemo />);
    expect(screen.getByRole("row", { name: /서울/ })).toHaveTextContent("129.5~14.56~1840");
    expect(screen.getByRole("row", { name: /강원/ })).toHaveTextContent("-");
  });
});

describe("BulletChart", () => {
  it("is a meter with its value and target", async () => {
    const user = userEvent.setup();
    render(<BulletChartDemo />);
    expect(screen.getByRole("meter", { name: "매출 달성률" })).toHaveAttribute(
      "aria-valuetext",
      "82%, 목표 90%",
    );
    await user.click(screen.getByRole("radio", { name: "지난달" }));
    expect(screen.getByRole("meter", { name: "재구매율" })).toHaveAttribute("aria-valuenow", "70");
  });
});

describe("WaffleChart", () => {
  it("fills one square per percent and writes every share", async () => {
    const user = userEvent.setup();
    const { container } = render(<WaffleChartDemo />);
    expect(container.querySelectorAll(".aspect-square.bg-blue-600")).toHaveLength(68);
    expect(screen.getByText("나머지").parentElement).toHaveTextContent("32%");
    await user.click(screen.getByRole("radio", { name: "배송 만족" }));
    expect(container.querySelectorAll(".aspect-square.bg-teal-500")).toHaveLength(18);
    expect(screen.queryByText("나머지")).toBeNull();
  });
});

describe("CalendarHeatmap", () => {
  it("starts the month on its weekday and reads days with the arrow keys", async () => {
    const user = userEvent.setup();
    render(<CalendarHeatmapDemo />);
    expect(screen.getByText("30일 중 17일 운동, 한 번에 평균 40분")).toBeInTheDocument();
    screen.getByRole("group", { name: /11월 운동 기록/ }).focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByText("11월 1일 · 30분")).toBeInTheDocument();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByText("11월 2일 · 쉰 날")).toBeInTheDocument();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByText("11월 9일 · 쉰 날")).toBeInTheDocument();
  });
});

describe("SlopeChart", () => {
  it("keeps close labels apart and lists both values", () => {
    const { container } = render(<SlopeChartDemo />);
    const right = [...container.querySelectorAll("text")].filter(
      (text) => text.getAttribute("x") === "216",
    );
    const ys = right.map((text) => Number(text.getAttribute("y"))).sort((a, b) => a - b);
    ys.slice(1).forEach((y, index) => expect(y - (ys[index] ?? 0)).toBeGreaterThanOrEqual(12));
    expect(screen.getByText("간편결제: 작년 22%, 올해 41%")).toBeInTheDocument();
  });
});

describe("PolarAreaChart", () => {
  it("reads the wedge under the pointer", () => {
    const { container } = render(<PolarAreaChartDemo />);
    fireEvent.pointerEnter(container.querySelectorAll("path")[6]!);
    expect(screen.getByText("7월 · 380mm")).toBeInTheDocument();
    expect(within(screen.getByRole("table")).getAllByRole("row")).toHaveLength(12);
  });
});
