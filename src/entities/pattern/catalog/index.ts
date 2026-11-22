import { PATTERN_CATEGORIES } from "@/entities/pattern/model/category";
import type { Pattern } from "@/entities/pattern/model/pattern";
import { accordionPattern } from "@/entities/pattern/catalog/accordion/accordion";
import { alertBannerPattern } from "@/entities/pattern/catalog/alert-banner/alertBanner";
import { breadcrumbPattern } from "@/entities/pattern/catalog/breadcrumb/breadcrumb";
import { drawerPattern } from "@/entities/pattern/catalog/drawer/drawer";
import { emptyStatePattern } from "@/entities/pattern/catalog/empty-state/emptyState";
import { errorStatePattern } from "@/entities/pattern/catalog/error-state/pattern";
import { inlineValidationPattern } from "@/entities/pattern/catalog/inline-validation/inlineValidation";
import { modalDialogPattern } from "@/entities/pattern/catalog/modal-dialog/modalDialog";
import { paginationPattern } from "@/entities/pattern/catalog/pagination/pagination";
import { popoverPattern } from "@/entities/pattern/catalog/popover/popover";
import { segmentedControlPattern } from "@/entities/pattern/catalog/segmented-control/segmentedControl";
import { skeletonPattern } from "@/entities/pattern/catalog/skeleton/skeleton";
import { switchPattern } from "@/entities/pattern/catalog/switch/switch";
import { tabsPattern } from "@/entities/pattern/catalog/tabs/tabs";
import { toastPattern } from "@/entities/pattern/catalog/toast/toast";
import { tooltipPattern } from "@/entities/pattern/catalog/tooltip/tooltip";
import { spinnerPattern } from "@/entities/pattern/catalog/spinner/pattern";
import { progressBarPattern } from "@/entities/pattern/catalog/progress-bar/pattern";
import { checkboxPattern } from "@/entities/pattern/catalog/checkbox/pattern";
import { bottomSheetPattern } from "@/entities/pattern/catalog/bottom-sheet/pattern";
import { dropdownMenuPattern } from "@/entities/pattern/catalog/dropdown-menu/pattern";
import { alertDialogPattern } from "@/entities/pattern/catalog/alert-dialog/pattern";
import { contextMenuPattern } from "@/entities/pattern/catalog/context-menu/pattern";
import { commandPalettePattern } from "@/entities/pattern/catalog/command-palette/pattern";
import { hoverCardPattern } from "@/entities/pattern/catalog/hover-card/pattern";
import { confirmationDialogPattern } from "@/entities/pattern/catalog/confirmation-dialog/pattern";
import { pullToRefreshPattern } from "@/entities/pattern/catalog/pull-to-refresh/pattern";
import { pricingPlanComparisonPattern } from "@/entities/pattern/catalog/pricing-plan-comparison/pattern";
import { strikethroughPricePattern } from "@/entities/pattern/catalog/strikethrough-price/pattern";
import { compromiseEffectPattern } from "@/entities/pattern/catalog/compromise-effect/pattern";
import { decoyEffectPattern } from "@/entities/pattern/catalog/decoy-effect/pattern";
import { leftDigitEffectPattern } from "@/entities/pattern/catalog/left-digit-effect/pattern";
import { errorSummaryPattern } from "@/entities/pattern/catalog/error-summary/pattern";
import { undoPattern } from "@/entities/pattern/catalog/undo/pattern";
import { calloutPattern } from "@/entities/pattern/catalog/callout/pattern";
import { notificationCenterPattern } from "@/entities/pattern/catalog/notification-center/pattern";
import { progressToastPattern } from "@/entities/pattern/catalog/progress-toast/pattern";
import { confirmationMessagePattern } from "@/entities/pattern/catalog/confirmation-message/pattern";
import { pushNotificationPattern } from "@/entities/pattern/catalog/push-notification/pattern";
import { progressRingPattern } from "@/entities/pattern/catalog/progress-ring/pattern";
import { optimisticUiPattern } from "@/entities/pattern/catalog/optimistic-ui/pattern";
import { delayedSpinnerPattern } from "@/entities/pattern/catalog/delayed-spinner/pattern";
import { loadingOverlayPattern } from "@/entities/pattern/catalog/loading-overlay/pattern";
import { blurUpImagePattern } from "@/entities/pattern/catalog/blur-up-image/pattern";
import { noResultsPattern } from "@/entities/pattern/catalog/no-results/pattern";
import { offlineStatePattern } from "@/entities/pattern/catalog/offline-state/pattern";
import { notFoundPagePattern } from "@/entities/pattern/catalog/not-found-page/pattern";
import { permissionDeniedPattern } from "@/entities/pattern/catalog/permission-denied/pattern";
import { maintenancePagePattern } from "@/entities/pattern/catalog/maintenance-page/pattern";
import { noFilterResultsPattern } from "@/entities/pattern/catalog/no-filter-results/pattern";
import { allCaughtUpPattern } from "@/entities/pattern/catalog/all-caught-up/pattern";
import { emptiedStatePattern } from "@/entities/pattern/catalog/emptied-state/pattern";
import { lockedContentPattern } from "@/entities/pattern/catalog/locked-content/pattern";
import { textFieldPattern } from "@/entities/pattern/catalog/text-field/pattern";
import { passwordFieldPattern } from "@/entities/pattern/catalog/password-field/pattern";
import { searchFieldPattern } from "@/entities/pattern/catalog/search-field/pattern";
import { otpInputPattern } from "@/entities/pattern/catalog/otp-input/pattern";
import { textareaPattern } from "@/entities/pattern/catalog/textarea/pattern";
import { numberStepperPattern } from "@/entities/pattern/catalog/number-stepper/pattern";
import { inputMaskPattern } from "@/entities/pattern/catalog/input-mask/pattern";
import { tagInputPattern } from "@/entities/pattern/catalog/tag-input/pattern";
import { multiStepFormPattern } from "@/entities/pattern/catalog/multi-step-form/pattern";
import { floatingLabelPattern } from "@/entities/pattern/catalog/floating-label/pattern";
import { radioGroupPattern } from "@/entities/pattern/catalog/radio-group/pattern";
import { selectPattern } from "@/entities/pattern/catalog/select/pattern";
import { comboboxPattern } from "@/entities/pattern/catalog/combobox/pattern";
import { filterChipPattern } from "@/entities/pattern/catalog/filter-chip/pattern";
import { multiSelectPattern } from "@/entities/pattern/catalog/multi-select/pattern";
import { sliderPattern } from "@/entities/pattern/catalog/slider/pattern";
import { rangeSliderPattern } from "@/entities/pattern/catalog/range-slider/pattern";
import { listboxPattern } from "@/entities/pattern/catalog/listbox/pattern";
import { datePickerPattern } from "@/entities/pattern/catalog/date-picker/pattern";
import { fileUploadPattern } from "@/entities/pattern/catalog/file-upload/pattern";
import { dateRangePickerPattern } from "@/entities/pattern/catalog/date-range-picker/pattern";
import { timePickerPattern } from "@/entities/pattern/catalog/time-picker/pattern";
import { calendarPattern } from "@/entities/pattern/catalog/calendar/pattern";
import { imageCropperPattern } from "@/entities/pattern/catalog/image-cropper/pattern";
import { colorPickerPattern } from "@/entities/pattern/catalog/color-picker/pattern";
import { signaturePadPattern } from "@/entities/pattern/catalog/signature-pad/pattern";
import { dateInputPattern } from "@/entities/pattern/catalog/date-input/pattern";
import { quickDateChipsPattern } from "@/entities/pattern/catalog/quick-date-chips/pattern";
import { timeSlotsPattern } from "@/entities/pattern/catalog/time-slots/pattern";
import { monthPickerPattern } from "@/entities/pattern/catalog/month-picker/pattern";
import { wheelPickerPattern } from "@/entities/pattern/catalog/wheel-picker/pattern";
import { recurrencePickerPattern } from "@/entities/pattern/catalog/recurrence-picker/pattern";

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
  dropdownMenuPattern,
  alertDialogPattern,
  contextMenuPattern,
  commandPalettePattern,
  hoverCardPattern,
  confirmationDialogPattern,
  pullToRefreshPattern,
  pricingPlanComparisonPattern,
  strikethroughPricePattern,
  compromiseEffectPattern,
  decoyEffectPattern,
  leftDigitEffectPattern,
  errorSummaryPattern,
  undoPattern,
  calloutPattern,
  notificationCenterPattern,
  progressToastPattern,
  confirmationMessagePattern,
  pushNotificationPattern,
  progressRingPattern,
  optimisticUiPattern,
  delayedSpinnerPattern,
  loadingOverlayPattern,
  blurUpImagePattern,
  noResultsPattern,
  offlineStatePattern,
  notFoundPagePattern,
  permissionDeniedPattern,
  maintenancePagePattern,
  noFilterResultsPattern,
  allCaughtUpPattern,
  emptiedStatePattern,
  lockedContentPattern,
  textFieldPattern,
  passwordFieldPattern,
  searchFieldPattern,
  otpInputPattern,
  textareaPattern,
  numberStepperPattern,
  inputMaskPattern,
  tagInputPattern,
  multiStepFormPattern,
  floatingLabelPattern,
  radioGroupPattern,
  selectPattern,
  comboboxPattern,
  filterChipPattern,
  multiSelectPattern,
  sliderPattern,
  rangeSliderPattern,
  listboxPattern,
  datePickerPattern,
  fileUploadPattern,
  dateRangePickerPattern,
  timePickerPattern,
  calendarPattern,
  imageCropperPattern,
  colorPickerPattern,
  signaturePadPattern,
  dateInputPattern,
  quickDateChipsPattern,
  timeSlotsPattern,
  monthPickerPattern,
  wheelPickerPattern,
  recurrencePickerPattern,
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
