import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AreaChartDemo } from "@/entities/pattern/catalog/area-chart/AreaChartDemo";
import { BubbleChartDemo } from "@/entities/pattern/catalog/bubble-chart/BubbleChartDemo";
import { ColumnChartDemo } from "@/entities/pattern/catalog/column-chart/ColumnChartDemo";
import { HistogramDemo } from "@/entities/pattern/catalog/histogram/HistogramDemo";
import { PieChartDemo } from "@/entities/pattern/catalog/pie-chart/PieChartDemo";
import { RadarChartDemo } from "@/entities/pattern/catalog/radar-chart/RadarChartDemo";
import { ScatterPlotDemo } from "@/entities/pattern/catalog/scatter-plot/ScatterPlotDemo";
import { VennDiagramDemo } from "@/entities/pattern/catalog/venn-diagram/VennDiagramDemo";

describe("ColumnChart", () => {
  it("keeps the same scale when the period changes and lists every value", async () => {
    const user = userEvent.setup();
    const { container } = render(<ColumnChartDemo />);
    const column = () => container.querySelector<HTMLElement>(".rounded-t")!;
    expect(column().style.height).toBe("30%");
    await user.click(screen.getByRole("radio", { name: "하반기" }));
    expect(column().style.height).toBe("57.5%");
    expect(screen.getByRole("row", { name: /12월/ })).toHaveTextContent("350명");
    fireEvent.pointerEnter(column().parentElement!);
    expect(screen.getByText("7월 · 230명")).toBeInTheDocument();
  });
});

describe("PieChart", () => {
  it("writes value and share for every part and switches the metric", async () => {
    const user = userEvent.setup();
    const { container } = render(<PieChartDemo />);
    expect(screen.getByRole("button", { name: /검색/ })).toHaveTextContent("4,500명 · 45%");
    await user.click(screen.getByRole("radio", { name: "구매" }));
    expect(screen.getByRole("button", { name: /검색/ })).toHaveTextContent("550건 · 55%");
    expect(container.querySelectorAll("path")[3]).toHaveClass("fill-slate-400");
    await user.tab();
    await user.tab();
    await user.tab();
    expect(container.querySelectorAll("g")[0]).toHaveStyle({ opacity: "0.35" });
  });
});

describe("VennDiagram", () => {
  it("reads the total of a chosen set and lists every region", async () => {
    const user = userEvent.setup();
    render(<VennDiagramDemo />);
    await user.click(screen.getByRole("button", { name: "이메일" }));
    expect(screen.getByRole("button", { name: "이메일" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("이메일 동의 540명, 세 가지 모두 40명")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "문자" }));
    expect(screen.getByText("문자 동의 340명, 세 가지 모두 40명")).toBeInTheDocument();
    expect(screen.getByText("이메일, 앱 푸시, 문자: 40명")).toBeInTheDocument();
  });
});

describe("BubbleChart", () => {
  it("reads out the bubble under the pointer and keeps a table", () => {
    const { container } = render(<BubbleChartDemo />);
    const knit = [...container.querySelectorAll("svg g")].find((g) => g.textContent === "니트")!;
    fireEvent.pointerEnter(knit);
    expect(screen.getByText("니트 · 6만 원 · 610개 · 리뷰 410개")).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /가방/ })).toHaveTextContent("918090");
  });
});

describe("RadarChart", () => {
  it("adds the second shape and its column in the table", async () => {
    const user = userEvent.setup();
    const { container } = render(<RadarChartDemo />);
    expect(container.querySelectorAll("polygon.stroke-blue-600")).toHaveLength(1);
    await user.click(screen.getByRole("checkbox", { name: "에어 14와 비교" }));
    expect(container.querySelectorAll("polygon.stroke-orange-500")).toHaveLength(1);
    expect(screen.getByRole("row", { name: /배터리/ })).toHaveTextContent("3 / 55 / 5");
  });
});

describe("ScatterPlot", () => {
  it("shows mean lines on request", async () => {
    const user = userEvent.setup();
    const { container } = render(<ScatterPlotDemo />);
    expect(container.querySelectorAll("circle")).toHaveLength(14);
    await user.click(screen.getByRole("checkbox", { name: "평균선 보기" }));
    expect(screen.getByText("평균 16.7km · 5.7시간")).toBeInTheDocument();
    expect(
      container.querySelectorAll("line[stroke-dasharray], g[stroke-dasharray] line"),
    ).toHaveLength(2);
  });
});

describe("AreaChart", () => {
  it("reads each day with the arrow keys", async () => {
    const user = userEvent.setup();
    render(<AreaChartDemo />);
    screen.getByRole("group", { name: /일별 방문자/ }).focus();
    await user.keyboard("{ArrowRight}{ArrowRight}");
    expect(screen.getByText("2일 · 900")).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "14일" }));
    expect(within(screen.getByRole("table")).getAllByRole("row")).toHaveLength(14);
  });
});

describe("Histogram", () => {
  it("counts the same orders into narrower or wider bins", async () => {
    const user = userEvent.setup();
    render(<HistogramDemo />);
    const rows = () => within(screen.getByRole("table")).getAllByRole("row");
    expect(rows()).toHaveLength(10);
    expect(rows()[2]).toHaveTextContent("2~3만 원27건");
    await user.click(screen.getByRole("radio", { name: "2만 원씩" }));
    expect(rows()).toHaveLength(5);
    expect(rows()[1]).toHaveTextContent("2~4만 원43건");
  });
});
