import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CommentThreadDemo } from "@/entities/pattern/catalog/comment-thread/CommentThreadDemo";
import { CopyLinkDemo } from "@/entities/pattern/catalog/copy-link/CopyLinkDemo";
import { EmojiRatingDemo } from "@/entities/pattern/catalog/emoji-rating/EmojiRatingDemo";
import { EmojiReactionDemo } from "@/entities/pattern/catalog/emoji-reaction/EmojiReactionDemo";
import { InviteDialogDemo } from "@/entities/pattern/catalog/invite-dialog/InviteDialogDemo";
import { LikeButtonDemo } from "@/entities/pattern/catalog/like-button/LikeButtonDemo";
import { MentionInputDemo } from "@/entities/pattern/catalog/mention/MentionInputDemo";
import { NearbyShareDemo } from "@/entities/pattern/catalog/nearby-share/NearbyShareDemo";
import { NpsScaleDemo } from "@/entities/pattern/catalog/nps-scale/NpsScaleDemo";
import { QrShareDemo } from "@/entities/pattern/catalog/qr-sharing/QrShareDemo";
import { RatingBadgeDemo } from "@/entities/pattern/catalog/rating-badge/RatingBadgeDemo";
import { RatingSliderDemo } from "@/entities/pattern/catalog/rating-slider/RatingSliderDemo";
import { RatingSummaryDemo } from "@/entities/pattern/catalog/rating-summary/RatingSummaryDemo";
import { RatingTagsDemo } from "@/entities/pattern/catalog/rating-tags/RatingTagsDemo";
import { RepostMenuDemo } from "@/entities/pattern/catalog/repost/RepostMenuDemo";
import { ForwardDialogDemo } from "@/entities/pattern/catalog/send-forward/ForwardDialogDemo";
import { ShareSheetDemo } from "@/entities/pattern/catalog/share-sheet/ShareSheetDemo";
import { StarRatingDemo } from "@/entities/pattern/catalog/star-rating/StarRatingDemo";
import { ThumbsFeedbackDemo } from "@/entities/pattern/catalog/thumbs-feedback/ThumbsFeedbackDemo";
import { WishlistButtonDemo } from "@/entities/pattern/catalog/wishlist-bookmark/WishlistButtonDemo";
import { WrittenReviewDemo } from "@/entities/pattern/catalog/written-review/WrittenReviewDemo";
import { encodeQr } from "@/shared/ui/patterns/qr-sharing/QrShare";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("StarRating", () => {
  it("rates with radio buttons, in whole or half stars", async () => {
    const user = userEvent.setup();
    render(<StarRatingDemo />);
    await user.click(screen.getByRole("radio", { name: "4점" }));
    expect(screen.getByRole("radio", { name: "4점" })).toBeChecked();
    await user.click(screen.getByRole("checkbox", { name: "반 단위로 주기" }));
    expect(screen.getAllByRole("radio")).toHaveLength(10);
    await user.click(screen.getByRole("radio", { name: "3.5점" }));
    expect(screen.getByRole("radio", { name: "3.5점" })).toBeChecked();
  });
});

describe("LikeButton", () => {
  it("toggles and updates the count", async () => {
    const user = userEvent.setup();
    render(<LikeButtonDemo />);
    const like = screen.getByRole("button", { name: /좋아요/ });
    await user.click(like);
    expect(like).toHaveAttribute("aria-pressed", "true");
    expect(like).toHaveTextContent("129");
  });
});

describe("ShareSheet", () => {
  it("falls back to its own sheet without navigator.share", async () => {
    const user = userEvent.setup();
    render(<ShareSheetDemo />);
    await user.click(screen.getByRole("button", { name: "공유" }));
    const sheet = screen.getByRole("dialog", { name: "공유" });
    await user.click(within(sheet).getByRole("button", { name: "링크 복사" }));
    expect(screen.getByRole("status")).toHaveTextContent("링크를 복사했어요");
  });

  it("uses the device share sheet when there is one", async () => {
    const user = userEvent.setup();
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", { value: share, configurable: true });
    render(<ShareSheetDemo />);
    await user.click(screen.getByRole("button", { name: "공유" }));
    expect(share).toHaveBeenCalledWith({
      title: "가을 산책 코스 5곳",
      url: "https://atlas.example/p/42",
    });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    Reflect.deleteProperty(navigator, "share");
  });
});

describe("EmojiReaction", () => {
  it("adds a reaction from the picker and toggles your own", async () => {
    const user = userEvent.setup();
    render(<EmojiReactionDemo />);
    await user.click(screen.getByRole("button", { name: "좋아요 3명" }));
    expect(screen.getByRole("button", { name: "좋아요 4명" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await user.click(screen.getByRole("button", { name: "반응 추가" }));
    await user.click(
      within(screen.getByRole("group", { name: "반응 추가" })).getByRole("button", {
        name: "고마워요",
      }),
    );
    expect(screen.getByRole("button", { name: "고마워요 1명" })).toBeInTheDocument();
  });
});

describe("ThumbsFeedback", () => {
  it("asks why only after a no", async () => {
    const user = userEvent.setup();
    render(<ThumbsFeedbackDemo />);
    await user.click(screen.getByRole("button", { name: "아니요" }));
    await user.click(screen.getByRole("button", { name: "설명이 어려워요" }));
    expect(screen.getByRole("button", { name: "설명이 어려워요" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await user.click(screen.getByRole("button", { name: "보내기" }));
    expect(screen.getByRole("status")).toHaveTextContent("의견 고마워요");
  });
});

describe("RatingSummary", () => {
  it("filters reviews from a bar", async () => {
    const user = userEvent.setup();
    render(<RatingSummaryDemo />);
    await user.click(screen.getByRole("button", { name: "5점 812개" }));
    expect(screen.getByRole("status")).toHaveTextContent("5점 리뷰만 보는 중");
    expect(screen.queryByText(/배송이 늦었어요/)).not.toBeInTheDocument();
  });
});

describe("CopyLink", () => {
  it("copies the link and says so", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue();
    render(<CopyLinkDemo />);
    await user.click(screen.getByRole("button", { name: "복사" }));
    expect(writeText).toHaveBeenCalledWith("https://atlas.example/i/7KQ2");
    expect(screen.getByRole("status")).toHaveTextContent("링크를 복사했어요");
  });

  it("asks for a manual copy when the clipboard is blocked", async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(new Error("denied"));
    render(<CopyLinkDemo />);
    await user.click(screen.getByRole("button", { name: "복사" }));
    expect(screen.getByRole("status")).toHaveTextContent("직접 복사해 주세요");
  });
});

describe("NpsScale", () => {
  it("asks a follow-up that fits the score", async () => {
    const user = userEvent.setup();
    render(<NpsScaleDemo />);
    await user.click(screen.getByRole("radio", { name: "9" }));
    expect(
      screen.getByRole("textbox", { name: "가장 좋았던 점은 무엇인가요?" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "3" }));
    expect(screen.getByRole("textbox", { name: "어떤 점이 아쉬웠나요?" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "보내기" }));
    expect(screen.getByRole("status")).toHaveTextContent("의견 고마워요");
  });
});

describe("InviteDialog", () => {
  it("turns valid addresses into chips and rejects invalid ones", async () => {
    const user = userEvent.setup();
    render(<InviteDialogDemo />);
    const field = screen.getByRole("textbox", { name: "이메일" });
    await user.type(field, "not-an-email{Enter}");
    expect(field).toHaveAttribute("aria-invalid", "true");
    await user.clear(field);
    await user.type(field, "sky@example.com{Enter}");
    expect(screen.getByRole("button", { name: "sky@example.com 빼기" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "1명 초대하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("1명에게 초대를 보냈어요");
  });
});

describe("Mention", () => {
  it("suggests people after @ and inserts the chosen name", async () => {
    const user = userEvent.setup();
    render(<MentionInputDemo />);
    const field = screen.getByRole("combobox", { name: "댓글" });
    await user.type(field, "@하");
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "하하늘",
      "하하준",
    ]);
    await user.keyboard("{ArrowDown}{Enter}");
    expect(field).toHaveValue("@하준 ");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});

describe("CommentThread", () => {
  it("shows folded replies and adds a reply under its comment", async () => {
    const user = userEvent.setup();
    render(<CommentThreadDemo />);
    await user.click(screen.getByRole("button", { name: "답글 1개 보기" }));
    expect(screen.getByText("고마워요")).toBeInTheDocument();
    await user.click(screen.getAllByRole("button", { name: "답글" })[1]!);
    await user.type(screen.getByRole("textbox", { name: "답글 쓰기" }), "서울숲이에요{Enter}");
    expect(screen.getByText("서울숲이에요")).toBeInTheDocument();
  });
});

describe("EmojiRating", () => {
  it("names each face and shows the chosen label", async () => {
    const user = userEvent.setup();
    render(<EmojiRatingDemo />);
    await user.click(screen.getByRole("radio", { name: "만족" }));
    expect(screen.getByRole("radio", { name: "만족" })).toBeChecked();
    expect(screen.getAllByText("만족").length).toBeGreaterThan(0);
  });
});

describe("WrittenReview", () => {
  it("points to what is missing, then posts", async () => {
    const user = userEvent.setup();
    render(<WrittenReviewDemo />);
    await user.click(screen.getByRole("button", { name: "후기 올리기" }));
    expect(screen.getByText("별점을 골라 주세요")).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "1점" })).toHaveFocus();
    await user.click(screen.getByRole("radio", { name: "5점" }));
    await user.type(screen.getByRole("textbox", { name: "후기" }), "핏이 딱 좋고 색도 예뻐요");
    await user.click(screen.getByRole("button", { name: "후기 올리기" }));
    expect(screen.getByRole("status")).toHaveTextContent("후기를 올렸어요");
  });
});

describe("RatingSlider", () => {
  it("announces the score as text", () => {
    render(<RatingSliderDemo />);
    const slider = screen.getByRole("slider", { name: "오늘 수업 만족도" });
    fireEvent.change(slider, { target: { value: "8" } });
    expect(slider).toHaveAttribute("aria-valuetext", "8점");
  });
});

describe("RatingTags", () => {
  it("swaps the tags between good and bad scores", async () => {
    const user = userEvent.setup();
    render(<RatingTagsDemo />);
    await user.click(screen.getByRole("radio", { name: "5점" }));
    await user.click(screen.getByRole("button", { name: "친절해요" }));
    expect(screen.getByRole("button", { name: /친절해요/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await user.click(screen.getByRole("radio", { name: "2점" }));
    expect(screen.getByRole("group", { name: "아쉬운 점" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "친절해요" })).not.toBeInTheDocument();
  });
});

describe("RatingBadge", () => {
  it("reads as one sentence and reorders by review count", async () => {
    const user = userEvent.setup();
    render(<RatingBadgeDemo />);
    expect(screen.getByText("평점 5점 만점에 4.6점, 리뷰 1,284개")).toHaveClass("sr-only");
    await user.click(screen.getByRole("button", { name: "리뷰 많은 순" }));
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("한강 브루어리");
  });
});

describe("WishlistBookmark", () => {
  it("saves to the list and updates the count", async () => {
    const user = userEvent.setup();
    render(<WishlistButtonDemo />);
    await user.click(screen.getByRole("button", { name: "린넨 셔츠 찜하기" }));
    expect(screen.getByText("찜 2")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("찜 목록에 담았어요: 린넨 셔츠");
    expect(screen.getByRole("button", { name: "린넨 셔츠 찜 해제" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});

describe("QrSharing", () => {
  it("encodes short links into a valid-sized matrix with finder squares", () => {
    for (const [text, size] of [
      ["hi", 21],
      ["HELLO WORLD 123", 25],
      ["https://atlas.example/i/7KQ2", 29],
    ] as const) {
      const matrix = encodeQr(text);
      expect(matrix).toHaveLength(size);
      expect(matrix[0]!.slice(0, 7).every(Boolean)).toBe(true);
      expect(matrix[1]![1]).toBe(false);
      expect(matrix[3]![3]).toBe(true);
    }
    expect(() => encodeQr("x".repeat(43))).toThrow();
  });

  it("shows the code with the link as text", async () => {
    const user = userEvent.setup();
    render(<QrShareDemo />);
    await user.click(screen.getByRole("button", { name: "QR 코드로 초대하기" }));
    expect(screen.getByRole("img", { name: "모임 초대 QR 코드" })).toBeInTheDocument();
    expect(screen.getByText("https://atlas.example/i/7KQ2")).toBeInTheDocument();
  });
});

describe("SendForward", () => {
  it("sends to the picked people", async () => {
    const user = userEvent.setup();
    render(<ForwardDialogDemo />);
    await user.click(screen.getByRole("button", { name: "전달" }));
    await user.type(screen.getByRole("searchbox", { name: "이름 검색" }), "하");
    expect(screen.getAllByRole("checkbox")).toHaveLength(1);
    await user.click(screen.getByRole("checkbox", { name: /하늘/ }));
    await user.clear(screen.getByRole("searchbox", { name: "이름 검색" }));
    await user.click(screen.getByRole("checkbox", { name: /도윤/ }));
    await user.click(screen.getByRole("button", { name: "2명에게 보내기" }));
    expect(screen.getByRole("status")).toHaveTextContent("2명에게 보냈어요");
  });
});

describe("Repost", () => {
  it("reposts from the menu and can undo it", async () => {
    const user = userEvent.setup();
    render(<RepostMenuDemo />);
    await user.click(screen.getByRole("button", { name: "리포스트 12" }));
    expect(screen.getByRole("menuitem", { name: "리포스트" })).toHaveFocus();
    await user.click(screen.getByRole("menuitem", { name: "리포스트" }));
    expect(screen.getByRole("status")).toHaveTextContent("내 피드에 리포스트했어요");
    await user.click(screen.getByRole("button", { name: "리포스트 13" }));
    await user.click(screen.getByRole("menuitem", { name: "리포스트 취소" }));
    expect(screen.getByRole("status")).toHaveTextContent("리포스트를 취소했어요");
  });
});

describe("NearbyShare", () => {
  it("finds devices, waits for acceptance and reports the result", () => {
    vi.useFakeTimers();
    render(<NearbyShareDemo />);
    expect(screen.getByText("주변 기기를 찾는 중")).toBeInTheDocument();
    for (let step = 0; step < 3; step++) act(() => vi.advanceTimersByTime(700));
    expect(screen.getAllByRole("button")).toHaveLength(3);
    act(() => screen.getByRole("button", { name: /하늘의 태블릿/ }).click());
    expect(screen.getByRole("status")).toHaveTextContent("수락을 기다리는 중");
    act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByRole("status")).toHaveTextContent("보냈어요");
  });
});
