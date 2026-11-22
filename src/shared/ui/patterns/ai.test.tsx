import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AgentStepsDemo } from "@/entities/pattern/catalog/agent-steps/AgentStepsDemo";
import { ChatInterfaceDemo } from "@/entities/pattern/catalog/chat-interface/ChatInterfaceDemo";
import { CitationDemo } from "@/entities/pattern/catalog/citation/CitationDemo";
import { EditPromptDemo } from "@/entities/pattern/catalog/edit-prompt/EditPromptDemo";
import { AttachmentTrayDemo } from "@/entities/pattern/catalog/file-attachment/AttachmentTrayDemo";
import { ModelPickerDemo } from "@/entities/pattern/catalog/model-picker/ModelPickerDemo";
import { PromptInputDemo } from "@/entities/pattern/catalog/prompt-input/PromptInputDemo";
import { RegenerateResponseDemo } from "@/entities/pattern/catalog/regenerate-response/RegenerateResponseDemo";
import { ResponseFeedbackDemo } from "@/entities/pattern/catalog/response-feedback/ResponseFeedbackDemo";
import { StreamingTextDemo } from "@/entities/pattern/catalog/streaming-text/StreamingTextDemo";
import { SuggestedPromptsDemo } from "@/entities/pattern/catalog/suggested-prompts/SuggestedPromptsDemo";
import { ThinkingIndicatorDemo } from "@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorDemo";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("ChatInterface", () => {
  it("adds my message and the reply to the log", () => {
    vi.useFakeTimers();
    render(<ChatInterfaceDemo />);
    const log = screen.getByRole("log");
    fireEvent.change(screen.getByRole("textbox", { name: "메시지" }), {
      target: { value: "예약 되는 곳만 알려 줘" },
    });
    fireEvent.click(screen.getByRole("button", { name: "보내기" }));
    expect(log).toHaveTextContent("나: 예약 되는 곳만 알려 줘");
    act(() => vi.advanceTimersByTime(800));
    expect(log).toHaveTextContent("답변: 좋아요. 예약이 되는 곳만 다시 골라 볼게요.");
  });
});

describe("StreamingText", () => {
  it("streams the answer, stays busy until done, and can stop", () => {
    vi.useFakeTimers();
    render(<StreamingTextDemo />);
    act(() => screen.getByRole("button", { name: "답변 받기" }).click());
    const answer = screen.getByText((_, element) => element?.getAttribute("aria-busy") === "true");
    act(() => vi.advanceTimersByTime(200));
    expect(answer.textContent!.length).toBeGreaterThan(0);
    act(() => screen.getByRole("button", { name: "멈추기" }).click());
    const partial = answer.textContent;
    act(() => vi.advanceTimersByTime(2000));
    expect(answer.textContent).toBe(partial);
    expect(answer).toHaveAttribute("aria-busy", "false");
  });
});

describe("PromptInput", () => {
  it("sends with Enter, keeps Shift+Enter for new lines, and swaps to stop", async () => {
    const user = userEvent.setup();
    render(<PromptInputDemo />);
    const box = screen.getByRole("textbox", { name: "메시지" });
    expect(screen.getByRole("button", { name: "보내기" })).toBeDisabled();
    await user.type(box, "첫 줄{Shift>}{Enter}{/Shift}둘째 줄");
    expect(box).toHaveValue("첫 줄\n둘째 줄");
    await user.keyboard("{Enter}");
    expect(screen.getByText("첫 줄\n둘째 줄", { normalizer: (text) => text })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "멈추기" }));
    expect(screen.getByRole("button", { name: "보내기" })).toBeInTheDocument();
  });
});

describe("SuggestedPrompts", () => {
  it("asks a suggestion right away", async () => {
    const user = userEvent.setup();
    render(<SuggestedPromptsDemo />);
    await user.click(screen.getByRole("button", { name: "회의록을 세 줄로 요약해 줘" }));
    expect(screen.getByText("회의록을 세 줄로 요약해 줘")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("답변을 준비하고 있어요");
  });
});

describe("ThinkingIndicator", () => {
  it("shows the elapsed time on long waits, then the answer", () => {
    vi.useFakeTimers();
    render(<ThinkingIndicatorDemo />);
    act(() => screen.getByRole("button", { name: "질문하기" }).click());
    expect(screen.getByRole("status")).toHaveTextContent("생각하는 중");
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole("status")).toHaveTextContent("3초");
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByText("서울숲 근처 세 곳을 골라 봤어요.")).toBeInTheDocument();
  });
});

describe("ResponseFeedback", () => {
  it("toggles good and bad exclusively and regenerates", async () => {
    const user = userEvent.setup();
    render(<ResponseFeedbackDemo />);
    await user.click(screen.getByRole("button", { name: "좋은 답변" }));
    expect(screen.getByRole("button", { name: "좋은 답변" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await user.click(screen.getByRole("button", { name: "아쉬운 답변" }));
    expect(screen.getByRole("button", { name: "좋은 답변" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await user.click(screen.getByRole("button", { name: "다시 생성" }));
    expect(screen.getByText(/다시 만든 답변이에요/)).toBeInTheDocument();
  });
});

describe("Citation", () => {
  it("opens the source card from its number", async () => {
    const user = userEvent.setup();
    render(<CitationDemo />);
    const marker = screen.getByRole("button", { name: "출처 1: 서울숲 주말 행사" });
    await user.click(marker);
    expect(marker).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("note")).toHaveTextContent("원문 열기");
    expect(screen.getByRole("region", { name: "출처" })).toHaveTextContent("주차 안내");
  });
});

describe("ModelPicker", () => {
  it("picks a model from the menu with the keyboard", async () => {
    const user = userEvent.setup();
    render(<ModelPickerDemo />);
    await user.click(screen.getByRole("button", { name: "모델: 빠른 모델" }));
    expect(screen.getByRole("menuitemradio", { name: /빠른 모델/ })).toHaveFocus();
    await user.keyboard("{ArrowDown}{Enter}");
    expect(screen.getByRole("status")).toHaveTextContent("깊은 모델로 답해요");
    expect(screen.getByRole("button", { name: "모델: 깊은 모델" })).toHaveFocus();
  });
});

describe("RegenerateResponse", () => {
  it("keeps earlier answers and moves between them", () => {
    vi.useFakeTimers();
    render(<RegenerateResponseDemo />);
    act(() => screen.getByRole("button", { name: "다시 생성" }).click());
    expect(screen.getByText("새 답변을 만드는 중")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(900));
    expect(screen.getByText("토요일 아침")).toBeInTheDocument();
    expect(screen.getByText("2 / 2")).toBeInTheDocument();
    act(() => screen.getByRole("button", { name: "이전 답변" }).click());
    expect(screen.getByText("숲속 한 접시")).toBeInTheDocument();
  });
});

describe("EditPrompt", () => {
  it("edits the question in place and answers again", async () => {
    const user = userEvent.setup();
    render(<EditPromptDemo />);
    await user.click(screen.getByRole("button", { name: "수정" }));
    const field = screen.getByRole("textbox", { name: "질문 수정" });
    expect(field).toHaveFocus();
    await user.clear(field);
    await user.type(field, "아이와 가기 좋은 주말 브런치 추천해 줘");
    await user.click(screen.getByRole("button", { name: "보내기" }));
    expect(screen.getByText("아이와 가기 좋은 주말 브런치 추천해 줘")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("이 질문부터 새로 답했어요");
  });

  it("cancels with Escape", async () => {
    const user = userEvent.setup();
    render(<EditPromptDemo />);
    await user.click(screen.getByRole("button", { name: "수정" }));
    await user.keyboard("{Escape}");
    expect(screen.getByText("주말 브런치 추천해 줘")).toBeInTheDocument();
  });
});

describe("FileAttachment", () => {
  it("finishes uploads and blocks sending until the bad file is removed", () => {
    vi.useFakeTimers();
    render(<AttachmentTrayDemo />);
    expect(screen.getByRole("button", { name: "보내기" })).toBeDisabled();
    for (let step = 0; step < 5; step++) act(() => vi.advanceTimersByTime(300));
    expect(screen.getByText("1.2MB")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("보낼 수 없는 파일을 빼 주세요");
    act(() => screen.getByRole("button", { name: "사진.png 빼기" }).click());
    expect(screen.getByRole("button", { name: "보내기" })).toBeEnabled();
  });
});

describe("AgentSteps", () => {
  it("moves through the steps and announces each state", () => {
    vi.useFakeTimers();
    render(<AgentStepsDemo />);
    expect(screen.getByRole("list", { name: "작업 단계" })).toHaveTextContent("자료 찾기, 진행 중");
    for (let step = 0; step < 3; step++) act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByRole("list", { name: "작업 단계" })).toHaveTextContent("요약 쓰기, 완료");
    expect(screen.getByRole("status")).toHaveTextContent("작업을 마쳤어요");
  });
});
