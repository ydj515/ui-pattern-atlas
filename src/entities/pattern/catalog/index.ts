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
import { buttonPattern } from "@/entities/pattern/catalog/button/pattern";
import { iconButtonPattern } from "@/entities/pattern/catalog/icon-button/pattern";
import { loadingButtonPattern } from "@/entities/pattern/catalog/loading-button/pattern";
import { disabledButtonPattern } from "@/entities/pattern/catalog/disabled-button/pattern";
import { toggleButtonPattern } from "@/entities/pattern/catalog/toggle-button/pattern";
import { fabPattern } from "@/entities/pattern/catalog/fab/pattern";
import { copyButtonPattern } from "@/entities/pattern/catalog/copy-button/pattern";
import { splitButtonPattern } from "@/entities/pattern/catalog/split-button/pattern";
import { holdToConfirmPattern } from "@/entities/pattern/catalog/hold-to-confirm/pattern";
import { navbarPattern } from "@/entities/pattern/catalog/navbar/pattern";
import { sidebarNavigationPattern } from "@/entities/pattern/catalog/sidebar-navigation/pattern";
import { bottomTabBarPattern } from "@/entities/pattern/catalog/bottom-tab-bar/pattern";
import { stepperPattern } from "@/entities/pattern/catalog/stepper/pattern";
import { mobileMenuPattern } from "@/entities/pattern/catalog/mobile-menu/pattern";
import { infiniteScrollPattern } from "@/entities/pattern/catalog/infinite-scroll/pattern";
import { loadMorePattern } from "@/entities/pattern/catalog/load-more/pattern";
import { megaMenuPattern } from "@/entities/pattern/catalog/mega-menu/pattern";
import { tableOfContentsPattern } from "@/entities/pattern/catalog/table-of-contents/pattern";
import { backToTopPattern } from "@/entities/pattern/catalog/back-to-top/pattern";
import { backNavigationPattern } from "@/entities/pattern/catalog/back-navigation/pattern";
import { horizontalScrollPattern } from "@/entities/pattern/catalog/horizontal-scroll/pattern";
import { readMorePattern } from "@/entities/pattern/catalog/read-more/pattern";
import { disclosurePattern } from "@/entities/pattern/catalog/disclosure/pattern";
import { treeViewPattern } from "@/entities/pattern/catalog/tree-view/pattern";
import { collapsiblePanelPattern } from "@/entities/pattern/catalog/collapsible-panel/pattern";
import { scrollableTabsPattern } from "@/entities/pattern/catalog/scrollable-tabs/pattern";
import { listPattern } from "@/entities/pattern/catalog/list/pattern";
import { dataTablePattern } from "@/entities/pattern/catalog/data-table/pattern";
import { selectableTablePattern } from "@/entities/pattern/catalog/selectable-table/pattern";
import { descriptionListPattern } from "@/entities/pattern/catalog/description-list/pattern";
import { timelinePattern } from "@/entities/pattern/catalog/timeline/pattern";
import { kanbanBoardPattern } from "@/entities/pattern/catalog/kanban-board/pattern";
import { sortableListPattern } from "@/entities/pattern/catalog/sortable-list/pattern";
import { groupedListPattern } from "@/entities/pattern/catalog/grouped-list/pattern";
import { virtualizedListPattern } from "@/entities/pattern/catalog/virtualized-list/pattern";
import { cardPattern } from "@/entities/pattern/catalog/card/pattern";
import { carouselPattern } from "@/entities/pattern/catalog/carousel/pattern";
import { imageGalleryPattern } from "@/entities/pattern/catalog/image-gallery/pattern";
import { lightboxPattern } from "@/entities/pattern/catalog/lightbox/pattern";
import { masonryGridPattern } from "@/entities/pattern/catalog/masonry-grid/pattern";
import { beforeAfterSliderPattern } from "@/entities/pattern/catalog/before-after-slider/pattern";
import { storiesPattern } from "@/entities/pattern/catalog/stories/pattern";
import { topLoadingBarPattern } from "@/entities/pattern/catalog/top-loading-bar/pattern";
import { badgePattern } from "@/entities/pattern/catalog/badge/pattern";
import { statusDotPattern } from "@/entities/pattern/catalog/status-dot/pattern";
import { tagPattern } from "@/entities/pattern/catalog/tag/pattern";
import { avatarPattern } from "@/entities/pattern/catalog/avatar/pattern";
import { avatarGroupPattern } from "@/entities/pattern/catalog/avatar-group/pattern";
import { pageIndicatorPattern } from "@/entities/pattern/catalog/page-indicator/pattern";
import { unreadIndicatorPattern } from "@/entities/pattern/catalog/unread-indicator/pattern";
import { presencePattern } from "@/entities/pattern/catalog/presence/pattern";
import { featureDotPattern } from "@/entities/pattern/catalog/feature-dot/pattern";
import { scrollProgressPattern } from "@/entities/pattern/catalog/scroll-progress/pattern";
import { passwordStrengthMeterPattern } from "@/entities/pattern/catalog/password-strength-meter/pattern";
import { stickyHeaderPattern } from "@/entities/pattern/catalog/sticky-header/pattern";
import { stickyActionBarPattern } from "@/entities/pattern/catalog/sticky-action-bar/pattern";
import { splitViewPattern } from "@/entities/pattern/catalog/split-view/pattern";
import { sidebarLayoutPattern } from "@/entities/pattern/catalog/sidebar-layout/pattern";
import { responsiveGridPattern } from "@/entities/pattern/catalog/responsive-grid/pattern";
import { bentoGridPattern } from "@/entities/pattern/catalog/bento-grid/pattern";
import { safeAreaPattern } from "@/entities/pattern/catalog/safe-area/pattern";
import { heroSectionPattern } from "@/entities/pattern/catalog/hero-section/pattern";
import { cardGridPattern } from "@/entities/pattern/catalog/card-grid/pattern";
import { dashboardLayoutPattern } from "@/entities/pattern/catalog/dashboard-layout/pattern";
import { magazineLayoutPattern } from "@/entities/pattern/catalog/magazine-layout/pattern";
import { zPatternPattern } from "@/entities/pattern/catalog/z-pattern/pattern";
import { fullBleedPattern } from "@/entities/pattern/catalog/full-bleed/pattern";
import { swipeToDeletePattern } from "@/entities/pattern/catalog/swipe-to-delete/pattern";
import { dragAndDropPattern } from "@/entities/pattern/catalog/drag-and-drop/pattern";
import { longPressPattern } from "@/entities/pattern/catalog/long-press/pattern";
import { swipeToDismissPattern } from "@/entities/pattern/catalog/swipe-to-dismiss/pattern";
import { pinchToZoomPattern } from "@/entities/pattern/catalog/pinch-to-zoom/pattern";
import { swipeNavigationPattern } from "@/entities/pattern/catalog/swipe-navigation/pattern";
import { doubleTapPattern } from "@/entities/pattern/catalog/double-tap/pattern";
import { tapPattern } from "@/entities/pattern/catalog/tap/pattern";
import { edgeSwipePattern } from "@/entities/pattern/catalog/edge-swipe/pattern";
import { momentumScrollingPattern } from "@/entities/pattern/catalog/momentum-scrolling/pattern";
import { scrollBouncePattern } from "@/entities/pattern/catalog/scroll-bounce/pattern";
import { slideToUnlockPattern } from "@/entities/pattern/catalog/slide-to-unlock/pattern";
import { reducedMotionPattern } from "@/entities/pattern/catalog/reduced-motion/pattern";
import { pageTransitionPattern } from "@/entities/pattern/catalog/page-transition/pattern";
import { expandCollapseMotionPattern } from "@/entities/pattern/catalog/expand-collapse-motion/pattern";
import { microInteractionPattern } from "@/entities/pattern/catalog/micro-interaction/pattern";
import { shakeOnErrorPattern } from "@/entities/pattern/catalog/shake-on-error/pattern";
import { sharedElementTransitionPattern } from "@/entities/pattern/catalog/shared-element-transition/pattern";
import { scrollRevealPattern } from "@/entities/pattern/catalog/scroll-reveal/pattern";
import { parallaxPattern } from "@/entities/pattern/catalog/parallax/pattern";
import { easeInOutPattern } from "@/entities/pattern/catalog/ease-in-out/pattern";
import { fadePattern } from "@/entities/pattern/catalog/fade/pattern";
import { slidePattern } from "@/entities/pattern/catalog/slide/pattern";
import { springPattern } from "@/entities/pattern/catalog/spring/pattern";
import { bouncePattern } from "@/entities/pattern/catalog/bounce/pattern";
import { staggerPattern } from "@/entities/pattern/catalog/stagger/pattern";
import { zoomTransitionPattern } from "@/entities/pattern/catalog/zoom-transition/pattern";
import { countUpPattern } from "@/entities/pattern/catalog/count-up/pattern";
import { typewriterPattern } from "@/entities/pattern/catalog/typewriter/pattern";
import { rotatingWordsPattern } from "@/entities/pattern/catalog/rotating-words/pattern";
import { marqueePattern } from "@/entities/pattern/catalog/marquee/pattern";
import { textScramblePattern } from "@/entities/pattern/catalog/text-scramble/pattern";
import { staggeredTextRevealPattern } from "@/entities/pattern/catalog/staggered-text-reveal/pattern";
import { fadeUpPattern } from "@/entities/pattern/catalog/fade-up/pattern";
import { animatedHighlightPattern } from "@/entities/pattern/catalog/animated-highlight/pattern";
import { maskRevealPattern } from "@/entities/pattern/catalog/mask-reveal/pattern";
import { blurInPattern } from "@/entities/pattern/catalog/blur-in/pattern";
import { onboardingCarouselPattern } from "@/entities/pattern/catalog/onboarding-carousel/pattern";
import { coachMarkPattern } from "@/entities/pattern/catalog/coach-mark/pattern";
import { productTourPattern } from "@/entities/pattern/catalog/product-tour/pattern";
import { setupChecklistPattern } from "@/entities/pattern/catalog/setup-checklist/pattern";
import { permissionPrimingPattern } from "@/entities/pattern/catalog/permission-priming/pattern";
import { welcomeScreenPattern } from "@/entities/pattern/catalog/welcome-screen/pattern";
import { whatsNewPattern } from "@/entities/pattern/catalog/whats-new/pattern";
import { splashScreenPattern } from "@/entities/pattern/catalog/splash-screen/pattern";
import { socialSignInPattern } from "@/entities/pattern/catalog/social-sign-in/pattern";
import { termsAgreementPattern } from "@/entities/pattern/catalog/terms-agreement/pattern";
import { profileSetupPattern } from "@/entities/pattern/catalog/profile-setup/pattern";
import { systemPermissionDialogPattern } from "@/entities/pattern/catalog/system-permission-dialog/pattern";
import { permissionRecoveryPattern } from "@/entities/pattern/catalog/permission-recovery/pattern";
import { limitedAccessPattern } from "@/entities/pattern/catalog/limited-access/pattern";
import { successScreenPattern } from "@/entities/pattern/catalog/success-screen/pattern";
import { successCheckmarkPattern } from "@/entities/pattern/catalog/success-checkmark/pattern";
import { confettiPattern } from "@/entities/pattern/catalog/confetti/pattern";
import { receiptSummaryPattern } from "@/entities/pattern/catalog/receipt-summary/pattern";
import { streakPattern } from "@/entities/pattern/catalog/streak/pattern";
import { achievementBadgePattern } from "@/entities/pattern/catalog/achievement-badge/pattern";
import { completedTaskStrikethroughPattern } from "@/entities/pattern/catalog/completed-task-strikethrough/pattern";
import { completionStampPattern } from "@/entities/pattern/catalog/completion-stamp/pattern";
import { sendAnimationPattern } from "@/entities/pattern/catalog/send-animation/pattern";
import { starRatingPattern } from "@/entities/pattern/catalog/star-rating/pattern";
import { likeButtonPattern } from "@/entities/pattern/catalog/like-button/pattern";
import { shareSheetPattern } from "@/entities/pattern/catalog/share-sheet/pattern";
import { emojiReactionPattern } from "@/entities/pattern/catalog/emoji-reaction/pattern";
import { thumbsFeedbackPattern } from "@/entities/pattern/catalog/thumbs-feedback/pattern";
import { ratingSummaryPattern } from "@/entities/pattern/catalog/rating-summary/pattern";
import { copyLinkPattern } from "@/entities/pattern/catalog/copy-link/pattern";
import { npsScalePattern } from "@/entities/pattern/catalog/nps-scale/pattern";
import { inviteDialogPattern } from "@/entities/pattern/catalog/invite-dialog/pattern";
import { mentionPattern } from "@/entities/pattern/catalog/mention/pattern";
import { commentThreadPattern } from "@/entities/pattern/catalog/comment-thread/pattern";
import { emojiRatingPattern } from "@/entities/pattern/catalog/emoji-rating/pattern";
import { writtenReviewPattern } from "@/entities/pattern/catalog/written-review/pattern";
import { ratingSliderPattern } from "@/entities/pattern/catalog/rating-slider/pattern";
import { ratingTagsPattern } from "@/entities/pattern/catalog/rating-tags/pattern";
import { ratingBadgePattern } from "@/entities/pattern/catalog/rating-badge/pattern";
import { wishlistBookmarkPattern } from "@/entities/pattern/catalog/wishlist-bookmark/pattern";
import { qrSharingPattern } from "@/entities/pattern/catalog/qr-sharing/pattern";
import { sendForwardPattern } from "@/entities/pattern/catalog/send-forward/pattern";
import { repostPattern } from "@/entities/pattern/catalog/repost/pattern";
import { nearbySharePattern } from "@/entities/pattern/catalog/nearby-share/pattern";
import { chatInterfacePattern } from "@/entities/pattern/catalog/chat-interface/pattern";
import { streamingTextPattern } from "@/entities/pattern/catalog/streaming-text/pattern";
import { promptInputPattern } from "@/entities/pattern/catalog/prompt-input/pattern";
import { suggestedPromptsPattern } from "@/entities/pattern/catalog/suggested-prompts/pattern";
import { thinkingIndicatorPattern } from "@/entities/pattern/catalog/thinking-indicator/pattern";
import { responseFeedbackPattern } from "@/entities/pattern/catalog/response-feedback/pattern";
import { citationPattern } from "@/entities/pattern/catalog/citation/pattern";
import { modelPickerPattern } from "@/entities/pattern/catalog/model-picker/pattern";
import { regenerateResponsePattern } from "@/entities/pattern/catalog/regenerate-response/pattern";
import { editPromptPattern } from "@/entities/pattern/catalog/edit-prompt/pattern";
import { fileAttachmentPattern } from "@/entities/pattern/catalog/file-attachment/pattern";
import { agentStepsPattern } from "@/entities/pattern/catalog/agent-steps/pattern";
import { hamburgerPattern } from "@/entities/pattern/catalog/hamburger/pattern";
import { kebabPattern } from "@/entities/pattern/catalog/kebab/pattern";
import { meatballsPattern } from "@/entities/pattern/catalog/meatballs/pattern";
import { bentoPattern } from "@/entities/pattern/catalog/bento/pattern";
import { chevronPattern } from "@/entities/pattern/catalog/chevron/pattern";
import { caretPattern } from "@/entities/pattern/catalog/caret/pattern";
import { gripPattern } from "@/entities/pattern/catalog/grip/pattern";
import { sparklesPattern } from "@/entities/pattern/catalog/sparkles/pattern";
import { donerPattern } from "@/entities/pattern/catalog/doner/pattern";
import { wafflePattern } from "@/entities/pattern/catalog/waffle/pattern";
import { veggieBurgerPattern } from "@/entities/pattern/catalog/veggie-burger/pattern";
import { stairsPattern } from "@/entities/pattern/catalog/stairs/pattern";
import { slidersPattern } from "@/entities/pattern/catalog/sliders/pattern";
import { flatDesignPattern } from "@/entities/pattern/catalog/flat-design/pattern";
import { materialDesignPattern } from "@/entities/pattern/catalog/material-design/pattern";
import { glassmorphismPattern } from "@/entities/pattern/catalog/glassmorphism/pattern";
import { neumorphismPattern } from "@/entities/pattern/catalog/neumorphism/pattern";
import { skeuomorphismPattern } from "@/entities/pattern/catalog/skeuomorphism/pattern";
import { claymorphismPattern } from "@/entities/pattern/catalog/claymorphism/pattern";
import { brutalismPattern } from "@/entities/pattern/catalog/brutalism/pattern";
import { minimalismPattern } from "@/entities/pattern/catalog/minimalism/pattern";
import { neoBrutalismPattern } from "@/entities/pattern/catalog/neo-brutalism/pattern";
import { threeDIconPattern } from "@/entities/pattern/catalog/three-d-icon/pattern";
import { liquidGlassPattern } from "@/entities/pattern/catalog/liquid-glass/pattern";
import { confirmshamingPattern } from "@/entities/pattern/catalog/confirmshaming/pattern";
import { preCheckedOptInPattern } from "@/entities/pattern/catalog/pre-checked-opt-in/pattern";
import { roachMotelPattern } from "@/entities/pattern/catalog/roach-motel/pattern";
import { hiddenCostsPattern } from "@/entities/pattern/catalog/hidden-costs/pattern";
import { fakeUrgencyPattern } from "@/entities/pattern/catalog/fake-urgency/pattern";
import { disguisedAdsPattern } from "@/entities/pattern/catalog/disguised-ads/pattern";
import { naggingPattern } from "@/entities/pattern/catalog/nagging/pattern";
import { hicksLawPattern } from "@/entities/pattern/catalog/hicks-law/pattern";
import { fittsLawPattern } from "@/entities/pattern/catalog/fitts-law/pattern";
import { jakobsLawPattern } from "@/entities/pattern/catalog/jakobs-law/pattern";
import { vonRestorffEffectPattern } from "@/entities/pattern/catalog/von-restorff-effect/pattern";
import { peakEndRulePattern } from "@/entities/pattern/catalog/peak-end-rule/pattern";
import { zeigarnikEffectPattern } from "@/entities/pattern/catalog/zeigarnik-effect/pattern";
import { anchoringPattern } from "@/entities/pattern/catalog/anchoring/pattern";
import { sneakIntoBasketPattern } from "@/entities/pattern/catalog/sneak-into-basket/pattern";
import { fakeScarcityPattern } from "@/entities/pattern/catalog/fake-scarcity/pattern";
import { forcedContinuityPattern } from "@/entities/pattern/catalog/forced-continuity/pattern";
import { lossAversionPattern } from "@/entities/pattern/catalog/loss-aversion/pattern";
import { defaultEffectPattern } from "@/entities/pattern/catalog/default-effect/pattern";
import { socialProofPattern } from "@/entities/pattern/catalog/social-proof/pattern";
import { scarcityPattern } from "@/entities/pattern/catalog/scarcity/pattern";
import { framingEffectPattern } from "@/entities/pattern/catalog/framing-effect/pattern";
import { choiceOverloadPattern } from "@/entities/pattern/catalog/choice-overload/pattern";
import { acidGraphicPattern } from "@/entities/pattern/catalog/acid-graphic/pattern";
import { glitchPattern } from "@/entities/pattern/catalog/glitch/pattern";
import { bauhausPattern } from "@/entities/pattern/catalog/bauhaus/pattern";
import { artDecoPattern } from "@/entities/pattern/catalog/art-deco/pattern";
import { outlinePattern } from "@/entities/pattern/catalog/outline/pattern";
import { monospacePattern } from "@/entities/pattern/catalog/monospace/pattern";
import { handLetteringPattern } from "@/entities/pattern/catalog/hand-lettering/pattern";
import { minimalTypographyPattern } from "@/entities/pattern/catalog/minimal-typography/pattern";
import { brutalistTypographyPattern } from "@/entities/pattern/catalog/brutalist-typography/pattern";
import { neoBrutalistTypographyPattern } from "@/entities/pattern/catalog/neo-brutalist-typography/pattern";
import { swissStylePattern } from "@/entities/pattern/catalog/swiss-style/pattern";
import { editorialTypographyPattern } from "@/entities/pattern/catalog/editorial-typography/pattern";
import { chunkyPattern } from "@/entities/pattern/catalog/chunky/pattern";
import { retroGroovyPattern } from "@/entities/pattern/catalog/retro-groovy/pattern";
import { pixelTypographyPattern } from "@/entities/pattern/catalog/pixel-typography/pattern";
import { kineticTypographyPattern } from "@/entities/pattern/catalog/kinetic-typography/pattern";
import { neonSignPattern } from "@/entities/pattern/catalog/neon-sign/pattern";
import { graffitiPattern } from "@/entities/pattern/catalog/graffiti/pattern";
import { blackletterPattern } from "@/entities/pattern/catalog/blackletter/pattern";
import { stencilPattern } from "@/entities/pattern/catalog/stencil/pattern";
import { comicPopArtPattern } from "@/entities/pattern/catalog/comic-pop-art/pattern";
import { cutoutCollagePattern } from "@/entities/pattern/catalog/cutout-collage/pattern";
import { threeDExtrudePattern } from "@/entities/pattern/catalog/three-d-extrude/pattern";
import { gradientTypographyPattern } from "@/entities/pattern/catalog/gradient-typography/pattern";
import { embossPattern } from "@/entities/pattern/catalog/emboss/pattern";
import { inflatedThreeDPattern } from "@/entities/pattern/catalog/inflated-three-d/pattern";
import { chromeTypographyPattern } from "@/entities/pattern/catalog/chrome-typography/pattern";
import { discountBadgePattern } from "@/entities/pattern/catalog/discount-badge/pattern";
import { countdownPattern } from "@/entities/pattern/catalog/countdown/pattern";
import { couponClaimPattern } from "@/entities/pattern/catalog/coupon-claim/pattern";
import { bundleDealPattern } from "@/entities/pattern/catalog/bundle-deal/pattern";
import { lowStockIndicatorPattern } from "@/entities/pattern/catalog/low-stock-indicator/pattern";
import { lowestPriceLabelPattern } from "@/entities/pattern/catalog/lowest-price-label/pattern";
import { rewardPointsPattern } from "@/entities/pattern/catalog/reward-points/pattern";
import { freeShippingProgressPattern } from "@/entities/pattern/catalog/free-shipping-progress/pattern";
import { searchSuggestionsPattern } from "@/entities/pattern/catalog/search-suggestions/pattern";
import { recentSearchesPattern } from "@/entities/pattern/catalog/recent-searches/pattern";
import { trendingSearchesPattern } from "@/entities/pattern/catalog/trending-searches/pattern";
import { searchFiltersPattern } from "@/entities/pattern/catalog/search-filters/pattern";
import { searchSortPattern } from "@/entities/pattern/catalog/search-sort/pattern";
import { searchTermHighlightPattern } from "@/entities/pattern/catalog/search-term-highlight/pattern";
import { searchScopeTabsPattern } from "@/entities/pattern/catalog/search-scope-tabs/pattern";
import { barChartPattern } from "@/entities/pattern/catalog/bar-chart/pattern";
import { lineChartPattern } from "@/entities/pattern/catalog/line-chart/pattern";
import { donutChartPattern } from "@/entities/pattern/catalog/donut-chart/pattern";
import { sparklinePattern } from "@/entities/pattern/catalog/sparkline/pattern";
import { gaugePattern } from "@/entities/pattern/catalog/gauge/pattern";
import { heatmapPattern } from "@/entities/pattern/catalog/heatmap/pattern";
import { kpiCardPattern } from "@/entities/pattern/catalog/kpi-card/pattern";
import { stackedBarChartPattern } from "@/entities/pattern/catalog/stacked-bar-chart/pattern";
import { userInterviewPattern } from "@/entities/pattern/catalog/user-interview/pattern";
import { usabilityTestPattern } from "@/entities/pattern/catalog/usability-test/pattern";
import { abTestPattern } from "@/entities/pattern/catalog/ab-test/pattern";
import { cardSortingPattern } from "@/entities/pattern/catalog/card-sorting/pattern";
import { treeTestingPattern } from "@/entities/pattern/catalog/tree-testing/pattern";
import { surveyPattern } from "@/entities/pattern/catalog/survey/pattern";
import { diaryStudyPattern } from "@/entities/pattern/catalog/diary-study/pattern";
import { behavioralHeatmapPattern } from "@/entities/pattern/catalog/behavioral-heatmap/pattern";
import { funnelAnalysisPattern } from "@/entities/pattern/catalog/funnel-analysis/pattern";
import { columnChartPattern } from "@/entities/pattern/catalog/column-chart/pattern";
import { pieChartPattern } from "@/entities/pattern/catalog/pie-chart/pattern";
import { vennDiagramPattern } from "@/entities/pattern/catalog/venn-diagram/pattern";
import { bubbleChartPattern } from "@/entities/pattern/catalog/bubble-chart/pattern";
import { radarChartPattern } from "@/entities/pattern/catalog/radar-chart/pattern";
import { scatterPlotPattern } from "@/entities/pattern/catalog/scatter-plot/pattern";
import { areaChartPattern } from "@/entities/pattern/catalog/area-chart/pattern";
import { histogramPattern } from "@/entities/pattern/catalog/histogram/pattern";
import { treemapPattern } from "@/entities/pattern/catalog/treemap/pattern";
import { waterfallChartPattern } from "@/entities/pattern/catalog/waterfall-chart/pattern";
import { boxPlotPattern } from "@/entities/pattern/catalog/box-plot/pattern";
import { bulletChartPattern } from "@/entities/pattern/catalog/bullet-chart/pattern";
import { waffleChartPattern } from "@/entities/pattern/catalog/waffle-chart/pattern";
import { calendarHeatmapPattern } from "@/entities/pattern/catalog/calendar-heatmap/pattern";
import { slopeChartPattern } from "@/entities/pattern/catalog/slope-chart/pattern";
import { polarAreaChartPattern } from "@/entities/pattern/catalog/polar-area-chart/pattern";
import { loginFormPattern } from "@/entities/pattern/catalog/login-form/pattern";
import { signupFormPattern } from "@/entities/pattern/catalog/signup-form/pattern";
import { emailVerificationPattern } from "@/entities/pattern/catalog/email-verification/pattern";
import { passwordResetPattern } from "@/entities/pattern/catalog/password-reset/pattern";
import { twoFactorAuthPattern } from "@/entities/pattern/catalog/two-factor-auth/pattern";
import { accountDeletionPattern } from "@/entities/pattern/catalog/account-deletion/pattern";
import { cartPattern } from "@/entities/pattern/catalog/cart/pattern";
import { checkoutSummaryPattern } from "@/entities/pattern/catalog/checkout-summary/pattern";
import { addressFormPattern } from "@/entities/pattern/catalog/address-form/pattern";
import { paymentMethodPattern } from "@/entities/pattern/catalog/payment-method/pattern";
import { orderTrackingPattern } from "@/entities/pattern/catalog/order-tracking/pattern";
import { orderCancellationPattern } from "@/entities/pattern/catalog/order-cancellation/pattern";
import { settingsListPattern } from "@/entities/pattern/catalog/settings-list/pattern";
import { notificationSettingsPattern } from "@/entities/pattern/catalog/notification-settings/pattern";
import { themeSwitcherPattern } from "@/entities/pattern/catalog/theme-switcher/pattern";
import { languagePickerPattern } from "@/entities/pattern/catalog/language-picker/pattern";
import { privacySettingsPattern } from "@/entities/pattern/catalog/privacy-settings/pattern";
import { connectedAccountsPattern } from "@/entities/pattern/catalog/connected-accounts/pattern";

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
  buttonPattern,
  iconButtonPattern,
  loadingButtonPattern,
  disabledButtonPattern,
  toggleButtonPattern,
  fabPattern,
  copyButtonPattern,
  splitButtonPattern,
  holdToConfirmPattern,
  navbarPattern,
  sidebarNavigationPattern,
  bottomTabBarPattern,
  stepperPattern,
  mobileMenuPattern,
  infiniteScrollPattern,
  loadMorePattern,
  megaMenuPattern,
  tableOfContentsPattern,
  backToTopPattern,
  backNavigationPattern,
  horizontalScrollPattern,
  readMorePattern,
  disclosurePattern,
  treeViewPattern,
  collapsiblePanelPattern,
  scrollableTabsPattern,
  listPattern,
  dataTablePattern,
  selectableTablePattern,
  descriptionListPattern,
  timelinePattern,
  kanbanBoardPattern,
  sortableListPattern,
  groupedListPattern,
  virtualizedListPattern,
  cardPattern,
  carouselPattern,
  imageGalleryPattern,
  lightboxPattern,
  masonryGridPattern,
  beforeAfterSliderPattern,
  storiesPattern,
  topLoadingBarPattern,
  badgePattern,
  statusDotPattern,
  tagPattern,
  avatarPattern,
  avatarGroupPattern,
  pageIndicatorPattern,
  unreadIndicatorPattern,
  presencePattern,
  featureDotPattern,
  scrollProgressPattern,
  passwordStrengthMeterPattern,
  stickyHeaderPattern,
  stickyActionBarPattern,
  splitViewPattern,
  sidebarLayoutPattern,
  responsiveGridPattern,
  bentoGridPattern,
  safeAreaPattern,
  heroSectionPattern,
  cardGridPattern,
  dashboardLayoutPattern,
  magazineLayoutPattern,
  zPatternPattern,
  fullBleedPattern,
  swipeToDeletePattern,
  dragAndDropPattern,
  longPressPattern,
  swipeToDismissPattern,
  pinchToZoomPattern,
  swipeNavigationPattern,
  doubleTapPattern,
  tapPattern,
  edgeSwipePattern,
  momentumScrollingPattern,
  scrollBouncePattern,
  slideToUnlockPattern,
  reducedMotionPattern,
  pageTransitionPattern,
  expandCollapseMotionPattern,
  microInteractionPattern,
  shakeOnErrorPattern,
  sharedElementTransitionPattern,
  scrollRevealPattern,
  parallaxPattern,
  easeInOutPattern,
  fadePattern,
  slidePattern,
  springPattern,
  bouncePattern,
  staggerPattern,
  zoomTransitionPattern,
  countUpPattern,
  typewriterPattern,
  rotatingWordsPattern,
  marqueePattern,
  textScramblePattern,
  staggeredTextRevealPattern,
  fadeUpPattern,
  animatedHighlightPattern,
  maskRevealPattern,
  blurInPattern,
  onboardingCarouselPattern,
  coachMarkPattern,
  productTourPattern,
  setupChecklistPattern,
  permissionPrimingPattern,
  welcomeScreenPattern,
  whatsNewPattern,
  splashScreenPattern,
  socialSignInPattern,
  termsAgreementPattern,
  profileSetupPattern,
  systemPermissionDialogPattern,
  permissionRecoveryPattern,
  limitedAccessPattern,
  successScreenPattern,
  successCheckmarkPattern,
  confettiPattern,
  receiptSummaryPattern,
  streakPattern,
  achievementBadgePattern,
  completedTaskStrikethroughPattern,
  completionStampPattern,
  sendAnimationPattern,
  starRatingPattern,
  likeButtonPattern,
  shareSheetPattern,
  emojiReactionPattern,
  thumbsFeedbackPattern,
  ratingSummaryPattern,
  copyLinkPattern,
  npsScalePattern,
  inviteDialogPattern,
  mentionPattern,
  commentThreadPattern,
  emojiRatingPattern,
  writtenReviewPattern,
  ratingSliderPattern,
  ratingTagsPattern,
  ratingBadgePattern,
  wishlistBookmarkPattern,
  qrSharingPattern,
  sendForwardPattern,
  repostPattern,
  nearbySharePattern,
  chatInterfacePattern,
  streamingTextPattern,
  promptInputPattern,
  suggestedPromptsPattern,
  thinkingIndicatorPattern,
  responseFeedbackPattern,
  citationPattern,
  modelPickerPattern,
  regenerateResponsePattern,
  editPromptPattern,
  fileAttachmentPattern,
  agentStepsPattern,
  hamburgerPattern,
  kebabPattern,
  meatballsPattern,
  bentoPattern,
  chevronPattern,
  caretPattern,
  gripPattern,
  sparklesPattern,
  donerPattern,
  wafflePattern,
  veggieBurgerPattern,
  stairsPattern,
  slidersPattern,
  flatDesignPattern,
  materialDesignPattern,
  glassmorphismPattern,
  neumorphismPattern,
  skeuomorphismPattern,
  claymorphismPattern,
  brutalismPattern,
  minimalismPattern,
  neoBrutalismPattern,
  threeDIconPattern,
  liquidGlassPattern,
  confirmshamingPattern,
  preCheckedOptInPattern,
  roachMotelPattern,
  hiddenCostsPattern,
  fakeUrgencyPattern,
  disguisedAdsPattern,
  naggingPattern,
  hicksLawPattern,
  fittsLawPattern,
  jakobsLawPattern,
  vonRestorffEffectPattern,
  peakEndRulePattern,
  zeigarnikEffectPattern,
  anchoringPattern,
  sneakIntoBasketPattern,
  fakeScarcityPattern,
  forcedContinuityPattern,
  lossAversionPattern,
  defaultEffectPattern,
  socialProofPattern,
  scarcityPattern,
  framingEffectPattern,
  choiceOverloadPattern,
  acidGraphicPattern,
  glitchPattern,
  bauhausPattern,
  artDecoPattern,
  outlinePattern,
  monospacePattern,
  handLetteringPattern,
  minimalTypographyPattern,
  brutalistTypographyPattern,
  neoBrutalistTypographyPattern,
  swissStylePattern,
  editorialTypographyPattern,
  chunkyPattern,
  retroGroovyPattern,
  pixelTypographyPattern,
  kineticTypographyPattern,
  neonSignPattern,
  graffitiPattern,
  blackletterPattern,
  stencilPattern,
  comicPopArtPattern,
  cutoutCollagePattern,
  threeDExtrudePattern,
  gradientTypographyPattern,
  embossPattern,
  inflatedThreeDPattern,
  chromeTypographyPattern,
  discountBadgePattern,
  countdownPattern,
  couponClaimPattern,
  bundleDealPattern,
  lowStockIndicatorPattern,
  lowestPriceLabelPattern,
  rewardPointsPattern,
  freeShippingProgressPattern,
  searchSuggestionsPattern,
  recentSearchesPattern,
  trendingSearchesPattern,
  searchFiltersPattern,
  searchSortPattern,
  searchTermHighlightPattern,
  searchScopeTabsPattern,
  barChartPattern,
  lineChartPattern,
  donutChartPattern,
  sparklinePattern,
  gaugePattern,
  heatmapPattern,
  kpiCardPattern,
  stackedBarChartPattern,
  userInterviewPattern,
  usabilityTestPattern,
  abTestPattern,
  cardSortingPattern,
  treeTestingPattern,
  surveyPattern,
  diaryStudyPattern,
  behavioralHeatmapPattern,
  funnelAnalysisPattern,
  columnChartPattern,
  pieChartPattern,
  vennDiagramPattern,
  bubbleChartPattern,
  radarChartPattern,
  scatterPlotPattern,
  areaChartPattern,
  histogramPattern,
  treemapPattern,
  waterfallChartPattern,
  boxPlotPattern,
  bulletChartPattern,
  waffleChartPattern,
  calendarHeatmapPattern,
  slopeChartPattern,
  polarAreaChartPattern,
  loginFormPattern,
  signupFormPattern,
  emailVerificationPattern,
  passwordResetPattern,
  twoFactorAuthPattern,
  accountDeletionPattern,
  cartPattern,
  checkoutSummaryPattern,
  addressFormPattern,
  paymentMethodPattern,
  orderTrackingPattern,
  orderCancellationPattern,
  settingsListPattern,
  notificationSettingsPattern,
  themeSwitcherPattern,
  languagePickerPattern,
  privacySettingsPattern,
  connectedAccountsPattern,
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
