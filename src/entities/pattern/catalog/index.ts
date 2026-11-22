import { PATTERN_CATEGORIES } from "../model/category";
import type { Pattern } from "../model/pattern";
import { accordionPattern } from "./accordion/accordion";
import { alertBannerPattern } from "./alert-banner/alertBanner";
import { breadcrumbPattern } from "./breadcrumb/breadcrumb";
import { drawerPattern } from "./drawer/drawer";
import { emptyStatePattern } from "./empty-state/emptyState";
import { errorStatePattern } from "./error-state/pattern";
import { inlineValidationPattern } from "./inline-validation/inlineValidation";
import { modalDialogPattern } from "./modal-dialog/modalDialog";
import { paginationPattern } from "./pagination/pagination";
import { popoverPattern } from "./popover/popover";
import { segmentedControlPattern } from "./segmented-control/segmentedControl";
import { skeletonPattern } from "./skeleton/skeleton";
import { switchPattern } from "./switch/switch";
import { tabsPattern } from "./tabs/tabs";
import { toastPattern } from "./toast/toast";
import { tooltipPattern } from "./tooltip/tooltip";
import { spinnerPattern } from "./spinner/pattern";
import { progressBarPattern } from "./progress-bar/pattern";
import { checkboxPattern } from "./checkbox/pattern";
import { bottomSheetPattern } from "./bottom-sheet/pattern";
import { pullToRefreshPattern } from "./pull-to-refresh/pattern";
import { pricingPlanComparisonPattern } from "./pricing-plan-comparison/pattern";
import { strikethroughPricePattern } from "./strikethrough-price/pattern";
import { compromiseEffectPattern } from "./compromise-effect/pattern";
import { decoyEffectPattern } from "./decoy-effect/pattern";
import { leftDigitEffectPattern } from "./left-digit-effect/pattern";

const UNORDERED_PATTERNS: readonly Pattern[] = [
  modalDialogPattern,
  drawerPattern,
  popoverPattern,
  tooltipPattern,
  toastPattern,
  alertBannerPattern,
  inlineValidationPattern,
  breadcrumbPattern,
  paginationPattern,
  tabsPattern,
  accordionPattern,
  switchPattern,
  segmentedControlPattern,
  skeletonPattern,
  emptyStatePattern,
  errorStatePattern,
  spinnerPattern,
  progressBarPattern,
  checkboxPattern,
  bottomSheetPattern,
  pullToRefreshPattern,
  pricingPlanComparisonPattern,
  strikethroughPricePattern,
  compromiseEffectPattern,
  decoyEffectPattern,
  leftDigitEffectPattern,
];

const categoryOrder = new Map<string, number>(
  PATTERN_CATEGORIES.map((category, index) => [category.id, index]),
);

/** Every catalog pattern, ordered by category and then by declaration order. */
export const PATTERNS: readonly Pattern[] = UNORDERED_PATTERNS.toSorted(
  (left, right) =>
    (categoryOrder.get(left.category) ?? 0) - (categoryOrder.get(right.category) ?? 0),
);

export function findPatternBySlug(slug: string): Pattern | undefined {
  return PATTERNS.find((pattern) => pattern.slug === slug);
}
