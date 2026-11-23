import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { BarChartDemo } from "@/entities/pattern/catalog/bar-chart/BarChartDemo";
import { DonutChartDemo } from "@/entities/pattern/catalog/donut-chart/DonutChartDemo";
import { GaugeDemo } from "@/entities/pattern/catalog/gauge/GaugeDemo";
import { HeatmapDemo } from "@/entities/pattern/catalog/heatmap/HeatmapDemo";
import { KpiCardDemo } from "@/entities/pattern/catalog/kpi-card/KpiCardDemo";
import { LineChartDemo } from "@/entities/pattern/catalog/line-chart/LineChartDemo";
import { SparklineDemo } from "@/entities/pattern/catalog/sparkline/SparklineDemo";
import { StackedBarChartDemo } from "@/entities/pattern/catalog/stacked-bar-chart/StackedBarChartDemo";

describe("BarChart", () => {
  it("lists every value as text and keeps the same scale across periods", async () => {
    const user = userEvent.setup();
    render(<BarChartDemo />);
    const chart = screen.getByRole("figure", { name: "요일별 주문 수" });
    expect(within(chart).getAllByRole("listitem")[4]).toHaveTextContent("금64건");
    await user.click(screen.getByRole("radio", { name: "지난주" }));
    expect(within(chart).getAllByRole("listitem")[4]).toHaveTextContent("금52건");
    const bar = within(chart).getAllByRole("listitem")[4]!.querySelector("[aria-hidden]");
    expect(bar).toHaveStyle({ width: `${(52 / 70) * 85}%` });
  });
});

describe("StackedBarChart", () => {
  it("switches between counts and shares and keeps every number in a table", async () => {
    const user = userEvent.setup();
    const { container } = render(<StackedBarChartDemo />);
    const rows = () =>
      container.querySelectorAll<HTMLElement>("figure > div[aria-hidden] > div > span:last-child");
    expect(rows()[0]!.style.width).not.toBe("100%");
    await user.click(screen.getByRole("radio", { name: "비율" }));
    expect([...rows()].every((row) => row.style.width === "100%")).toBe(true);
    fireEvent.pointerEnter(rows()[2]!.children[2]!);
    expect(screen.getByText("11월 · 대기 12건 (23%)")).toBeInTheDocument();
    const table = screen.getByRole("table");
    expect(within(table).getByRole("row", { name: /10월/ })).toHaveTextContent("41건12건5건");
  });
});

describe("LineChart", () => {
  it("reads out every series at a point with the arrow keys", async () => {
    const user = userEvent.setup();
    render(<LineChartDemo />);
    const plot = screen.getByRole("group", { name: /월별 방문자 수/ });
    plot.focus();
    await user.keyboard("{ArrowRight}{ArrowRight}");
    expect(screen.getByText("7월 · 올해 1,500, 작년 1,100")).toBeInTheDocument();
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByText("6월 · 올해 1,200, 작년 1,000")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "작년과 비교" }));
    expect(screen.queryByRole("columnheader", { name: "작년" })).toBeNull();
  });
});

describe("DonutChart", () => {
  it("shows the total, or the share of the part in focus", async () => {
    const user = userEvent.setup();
    const { container } = render(<DonutChartDemo />);
    const centre = container.querySelector("figure p")!;
    expect(centre).toHaveTextContent("합계100만 원");
    await user.tab();
    await user.tab();
    await user.tab();
    expect(screen.getByRole("button", { name: /교통/ })).toHaveFocus();
    expect(centre).toHaveTextContent("교통18%");
    expect(container.querySelectorAll("circle")[3]).toHaveClass("stroke-slate-400");
  });
});

describe("Sparkline", () => {
  it("describes each trend and redraws it for the period", async () => {
    const user = userEvent.setup();
    render(<SparklineDemo />);
    expect(
      screen.getByRole("img", { name: "최근 7일 홈 방문 추이, 120에서 180까지" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "30일" }));
    expect(
      screen.getByRole("img", { name: "최근 30일 홈 방문 추이, 90에서 180까지" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /홈/ })).toHaveTextContent("+100%");
  });
});

describe("Gauge", () => {
  it("is a meter that reaches its target", async () => {
    const user = userEvent.setup();
    render(<GaugeDemo />);
    const meter = screen.getByRole("meter", { name: "오늘 걸음 수" });
    expect(meter).toHaveAttribute("aria-valuetext", "6,200 / 10,000");
    await user.click(screen.getByRole("button", { name: "1,000걸음 더하기" }));
    await user.click(screen.getByRole("button", { name: "1,000걸음 더하기" }));
    expect(meter).toHaveAttribute("aria-valuenow", "8200");
    expect(screen.getByRole("status")).toHaveTextContent("목표를 채웠어요");
    await user.click(screen.getByRole("button", { name: "1,000걸음 더하기" }));
    await user.click(screen.getByRole("button", { name: "1,000걸음 더하기" }));
    expect(screen.getByRole("button", { name: "1,000걸음 더하기" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "처음부터" }));
    expect(meter).toHaveAttribute("aria-valuenow", "6200");
  });
});

describe("Heatmap", () => {
  it("moves a highlighted cell with the arrow keys and reads it out", async () => {
    const user = userEvent.setup();
    render(<HeatmapDemo />);
    screen.getByRole("group", { name: /시간대별 주문/ }).focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByText("월 9시 · 4건")).toBeInTheDocument();
    await user.keyboard("{ArrowDown}{ArrowRight}");
    expect(screen.getByText("화 12시 · 20건")).toBeInTheDocument();
    await user.keyboard("{ArrowUp}{ArrowUp}{ArrowLeft}{ArrowLeft}");
    expect(screen.getByText("월 9시 · 4건")).toBeInTheDocument();
    expect(screen.getByRole("row", { name: /금/ })).toHaveTextContent("925144838");
  });
});

describe("KpiCard", () => {
  it("says the change in words and colours it by what is good for the metric", async () => {
    const user = userEvent.setup();
    render(<KpiCardDemo />);
    const returns = screen.getByRole("region", { name: "반품률" });
    expect(returns).toHaveTextContent("지난주 대비 8% 감소");
    expect(within(returns).getByText("지난주 대비 8% 감소").parentElement).toHaveClass(
      "text-emerald-700",
    );
    await user.click(screen.getByRole("radio", { name: "이번 달" }));
    const sales = screen.getByRole("region", { name: "매출" });
    expect(sales).toHaveTextContent("4,870만 원");
    expect(within(sales).getByText("지난달 대비 3% 감소").parentElement).toHaveClass(
      "text-rose-700",
    );
  });
});
