import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentType } from "react";
import { describe, expect, it } from "vitest";

import { AnchoringDemo } from "@/entities/pattern/catalog/anchoring/AnchoringDemo";
import { ChoiceOverloadDemo } from "@/entities/pattern/catalog/choice-overload/ChoiceOverloadDemo";
import { ConfirmshamingDemo } from "@/entities/pattern/catalog/confirmshaming/ConfirmshamingDemo";
import { DefaultEffectDemo } from "@/entities/pattern/catalog/default-effect/DefaultEffectDemo";
import { DisguisedAdsDemo } from "@/entities/pattern/catalog/disguised-ads/DisguisedAdsDemo";
import { FakeScarcityDemo } from "@/entities/pattern/catalog/fake-scarcity/FakeScarcityDemo";
import { FakeUrgencyDemo } from "@/entities/pattern/catalog/fake-urgency/FakeUrgencyDemo";
import { FittsLawDemo } from "@/entities/pattern/catalog/fitts-law/FittsLawDemo";
import { ForcedContinuityDemo } from "@/entities/pattern/catalog/forced-continuity/ForcedContinuityDemo";
import { FramingEffectDemo } from "@/entities/pattern/catalog/framing-effect/FramingEffectDemo";
import { HicksLawDemo } from "@/entities/pattern/catalog/hicks-law/HicksLawDemo";
import { HiddenCostsDemo } from "@/entities/pattern/catalog/hidden-costs/HiddenCostsDemo";
import { JakobsLawDemo } from "@/entities/pattern/catalog/jakobs-law/JakobsLawDemo";
import { LossAversionDemo } from "@/entities/pattern/catalog/loss-aversion/LossAversionDemo";
import { NaggingDemo } from "@/entities/pattern/catalog/nagging/NaggingDemo";
import { PeakEndDemo } from "@/entities/pattern/catalog/peak-end-rule/PeakEndDemo";
import { PreCheckedOptInDemo } from "@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInDemo";
import { RoachMotelDemo } from "@/entities/pattern/catalog/roach-motel/RoachMotelDemo";
import { ScarcityDemo } from "@/entities/pattern/catalog/scarcity/ScarcityDemo";
import { SneakIntoBasketDemo } from "@/entities/pattern/catalog/sneak-into-basket/SneakIntoBasketDemo";
import { SocialProofDemo } from "@/entities/pattern/catalog/social-proof/SocialProofDemo";
import { VonRestorffDemo } from "@/entities/pattern/catalog/von-restorff-effect/VonRestorffDemo";
import { ZeigarnikDemo } from "@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikDemo";

const DEMOS: readonly (readonly [string, ComponentType, string, string, string, string])[] = [
  [
    "Confirmshaming",
    ConfirmshamingDemo,
    "다크 패턴",
    "바른 방법",
    "거절하는 사람을 놀리는 문구예요",
    "두 선택지를 같은 말투로 써요",
  ],
  [
    "PreCheckedOptIn",
    PreCheckedOptInDemo,
    "다크 패턴",
    "바른 방법",
    "마케팅 동의가 미리 켜져 있어요",
    "선택 동의는 직접 켜게 해요",
  ],
  [
    "RoachMotel",
    RoachMotelDemo,
    "다크 패턴",
    "바른 방법",
    "가입은 버튼 하나인데 해지는 전화로만 돼요",
    "가입한 곳에서 같은 방법으로 해지해요",
  ],
  [
    "HiddenCosts",
    HiddenCostsDemo,
    "다크 패턴",
    "바른 방법",
    "마지막 결제 단계에서 처음 붙는 비용이에요",
    "처음부터 모든 비용이 든 가격을 보여 줘요",
  ],
  [
    "FakeUrgency",
    FakeUrgencyDemo,
    "다크 패턴",
    "바른 방법",
    "새로고침하면 시간이 다시 처음부터 시작돼요",
    "실제로 끝나는 날짜와 시간을 알려요",
  ],
  [
    "DisguisedAds",
    DisguisedAdsDemo,
    "다크 패턴",
    "바른 방법",
    "광고가 진짜 다운로드 버튼처럼 보여요",
    "광고에는 광고라고 표시하고 따로 둬요",
  ],
  [
    "Nagging",
    NaggingDemo,
    "다크 패턴",
    "바른 방법",
    "닫아도 다음 화면에서 또 물어요",
    "다시 묻지 않기를 존중해요",
  ],
  [
    "HicksLaw",
    HicksLawDemo,
    "선택지 12개",
    "묶어서 4개",
    "고를 것이 많을수록 결정이 느려져요",
    "자주 찾는 것부터 묶어 줄이면 빨리 골라요",
  ],
  [
    "FittsLaw",
    FittsLawDemo,
    "작고 먼 버튼",
    "크고 가까운 버튼",
    "작고 먼 버튼은 누르는 데 오래 걸려요",
    "크고 엄지 가까이 있는 버튼은 빨리 눌러요",
  ],
  [
    "JakobsLaw",
    JakobsLawDemo,
    "낯선 배치",
    "익숙한 배치",
    "장바구니와 검색 위치가 다른 서비스와 달라 헤매요",
    "다른 서비스에서 익힌 자리에 둬요",
  ],
  [
    "VonRestorff",
    VonRestorffDemo,
    "모두 같게",
    "하나만 다르게",
    "세 요금제가 똑같아 보여 기억에 남지 않아요",
    "하나만 다르게 하면 눈에 띄고 기억돼요",
  ],
  [
    "PeakEnd",
    PeakEndDemo,
    "밋밋한 끝",
    "좋은 끝",
    "배송은 잘 됐지만 끝이 밋밋해 기억에 남지 않아요",
    "마지막 순간을 챙기면 전체 경험이 좋게 기억돼요",
  ],
  [
    "Zeigarnik",
    ZeigarnikDemo,
    "진행률 없음",
    "남은 일 보이기",
    "무엇이 남았는지 몰라 끝까지 하지 않아요",
    "끝내지 못한 일이 보이면 마무리하고 싶어져요",
  ],
  [
    "Anchoring",
    AnchoringDemo,
    "가격만",
    "기준 가격 먼저",
    "49,000원만 보면 싼지 비싼지 판단하기 어려워요",
    "처음 본 숫자가 기준이 돼요. 실제로 판매된 적 있는 가격만 쓰세요",
  ],
  [
    "SneakIntoBasket",
    SneakIntoBasketDemo,
    "다크 패턴",
    "바른 방법",
    "고르지 않은 배송 보험이 자동으로 담겼어요",
    "추가 상품은 직접 고를 때만 담아요",
  ],
  [
    "FakeScarcity",
    FakeScarcityDemo,
    "다크 패턴",
    "바른 방법",
    "재고와 상관없이 늘 1개 남았다고 보여요",
    "실제 재고만 압박 없이 알려요",
  ],
  [
    "ForcedContinuity",
    ForcedContinuityDemo,
    "다크 패턴",
    "바른 방법",
    "체험이 끝나면 알림 없이 바로 결제돼요",
    "결제 날짜와 금액을 알리고 하루 전에 다시 알려요",
  ],
  [
    "LossAversion",
    LossAversionDemo,
    "이득으로 말하기",
    "손실로 말하기",
    "받는 이득으로 말하면 부담 없이 읽혀요",
    "같은 쿠폰도 잃는다고 하면 더 크게 느껴져요. 압박하지 않게 쓰세요",
  ],
  [
    "DefaultEffect",
    DefaultEffectDemo,
    "기본값 없음",
    "기본값 있음",
    "아무것도 골라져 있지 않으면 직접 정해야 해요",
    "미리 정한 값을 그대로 고르는 사람이 많아요. 사용자에게 이로운 값을 기본으로 두세요",
  ],
  [
    "SocialProof",
    SocialProofDemo,
    "정보만",
    "다른 사람의 선택",
    "상품 정보만으로 판단해야 해요",
    "다른 사람의 실제 선택이 판단을 돕지만, 숫자는 사실이어야 해요",
  ],
  [
    "Scarcity",
    ScarcityDemo,
    "제약 없음",
    "실제 제약 알리기",
    "남은 좌석을 모르면 나중에 예매하려다 놓칠 수 있어요",
    "실제 남은 수를 담담하게 알리면 결정을 도와요",
  ],
  [
    "FramingEffect",
    FramingEffectDemo,
    "지방 20%",
    "무지방 80%",
    "지방 20%라고 하면 지방이 많아 보여요",
    "같은 요거트도 무지방 80%라고 하면 더 건강해 보여요",
  ],
  [
    "ChoiceOverload",
    ChoiceOverloadDemo,
    "잼 24가지",
    "6가지와 추천",
    "종류가 너무 많아 비교하다 그냥 지나쳐요",
    "고를 수를 줄이고 처음 고를 것을 추천하면 결정하기 쉬워요",
  ],
];

describe("dark pattern and UX psychology demos", () => {
  it.each(DEMOS)(
    "%s switches between its two versions",
    async (_name, Demo, first, second, firstNote, secondNote) => {
      const user = userEvent.setup();
      render(<Demo />);
      expect(screen.getByRole("radio", { name: first })).toBeChecked();
      expect(screen.getByRole("status")).toHaveTextContent(firstNote);
      await user.click(screen.getByRole("radio", { name: second }));
      expect(screen.getByRole("radio", { name: second })).toBeChecked();
      expect(screen.getByRole("status")).toHaveTextContent(secondNote);
    },
  );
});
