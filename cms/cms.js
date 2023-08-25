import CMS from 'netlify-cms-app';
import withStyles from './with-styles';
// Collections
import blog from './collections/blog';
import boardBio from './collections/board-bio';
import executiveBio from './collections/executive-bio';
import privateArticles from './collections/private';
import videos from './collections/videos';
import pressRelease from './collections/press-release';
import genericLandingPages from './collections/generic-landing-pages';
import careers from './collections/careers';
import rewardsAndBonuses from './collections/rewards-and-bonuses';
import personalLoans from './collections/personal-loans';
import upgradeCard from './collections/upgrade-card';
import rewardsChecking from './collections/rewards-checking';
import savings from './collections/savings';
import auto from './collections/auto';
import homePageAndOverview from './collections/homepage-and-overview';
import investorPages from './collections/investor-pages';
import legalAndSecurity from './collections/legal-and-security';
import creditHealth from './collections/credit-health';
// Style templates
import BlogPostPreview from './preview-templates/BlogPostPreview';
import BlogVideoPreview from './preview-templates/BlogVideoPreview';
import PressReleasePreview from './preview-templates/PressReleasePreview';
import HomePagePreview from './preview-templates/HomePagePreview';
import PersonalLoansPreview from './preview-templates/PersonalLoansPreview';
import UpgradeCardPreview from './preview-templates/UpgradeCardPreview';
import MarkdownPagePreview from './preview-templates/MarkdownPagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BoardOfDirectorsPreview from './preview-templates/BoardOfDirectorsPreview';
import CreditHealthPagePreview from './preview-templates/CreditHealthPagePreview';
import CreditHealthInsightsPagePreview from './preview-templates/CreditHealthInsightsPagePreview';
import ReviewsPagePreview from './preview-templates/ReviewsPagePreview';
import CareersPagePreview from './preview-templates/CareersPagePreview';
import BankPartnersPreview from './preview-templates/BankPartnersPreview';
import PrivacyPreview from './preview-templates/Privacy';
import ExecutiveBioPreview from './preview-templates/ExecutiveBioPreview';
import AutoRefiPreview from './preview-templates/AutoRefiPreview';
import MobileAppPagePreview from './preview-templates/MobileAppPagePreview';
import PartnershipsPagePreview from './preview-templates/PartnershipsPagePreview';
import WebinarsPagePreview from './preview-templates/WebinarsPagePreview';
import RewardsCheckingPagePreview from './preview-templates/RewardsCheckingPagePreview';
import RewardsCheckingBonusPagePreview from './preview-templates/RewardsCheckingBonusPagePreview';
import RewardConfirmPagePreview from './preview-templates/RewardConfirmPagePreview';
import DbaPagePreview from './preview-templates/DbaPagePreview';
import PhoenixCareersPagePreview from './preview-templates/PhoenixCareersPagePreview';
import UpgradeCardCashRewardsPreview from './preview-templates/UpgradeCardCashRewardsPreview';
import TeamPagePreview from './preview-templates/TeamPagePreview';
import GenericLandingPagePreview from './preview-templates/GenericLandingPagePreview';
import AccessibilityPagePreview from './preview-templates/AccessibilityPagePreview';
import TripleCashRewardsPagePreview from './preview-templates/TripleCashRewardsPagePreview';
import TripleCashCategoriesPagePreview from './preview-templates/TripleCashCategoriesPagePreview';
import UpgradeOneCardPagePreview from './preview-templates/UpgradeOneCardPagePreview';
import UpgradeOneCardCategoriesPagePreview from './preview-templates/UpgradeOneCardCategoriesPagePreview';
import ActivateCardPagePreview from './preview-templates/ActivateCardPagePreview';
import PlainTextPagePreview from './preview-templates/PlainTextPagePreview';
import RewardsCheckingPlusPagePreview from './preview-templates/RewardsCheckingPlusPagePreview';
// custom widgets
import Palette from './widgets/common/palette';
import MultiSelect from './widgets/common/multi-select';
import RelatedArticles from './widgets/common/related-articles';

window.CMS_MANUAL_INIT = true;
// Note: When you register a collection, the name of the folder and collection should be the same
CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'upgradecms/public-site-cms-ui',
      base_url: 'https://ui-public.kube.usw2.ondemand.upgrade.com',
      auth_endpoint: '/oauth',
      branch: 'master',
      site_domain: 'ui-public.kube.usw2.ondemand.upgrade.com'
    },
    local_backend: true,
    media_folder: '/static/img',
    publish_mode: 'editorial_workflow',
    public_folder: '/img',
    collections: [
      auto,
      boardBio,
      careers,
      creditHealth,
      blog,
      videos,
      executiveBio,
      genericLandingPages,
      homePageAndOverview,
      investorPages,
      legalAndSecurity,
      personalLoans,
      pressRelease,
      privateArticles,
      rewardsAndBonuses,
      rewardsChecking,
      savings,
      upgradeCard
    ]
  }
});

CMS.registerPreviewStyle('/css/preview-styles.css');

CMS.registerWidget('palette', Palette);
CMS.registerWidget('multiSelectComponent', MultiSelect);
CMS.registerWidget('relatedArticlesComponent', RelatedArticles);

CMS.registerPreviewTemplate('blog', withStyles(BlogPostPreview));
CMS.registerPreviewTemplate('private', withStyles(BlogPostPreview));
CMS.registerPreviewTemplate('videos', withStyles(BlogVideoPreview));
CMS.registerPreviewTemplate('press-release', withStyles(PressReleasePreview));
CMS.registerPreviewTemplate('home-page', withStyles(HomePagePreview));
CMS.registerPreviewTemplate('personal-loans', withStyles(PersonalLoansPreview));
CMS.registerPreviewTemplate('refinance-credit-cards', withStyles(PersonalLoansPreview));
CMS.registerPreviewTemplate('debt-consolidation', withStyles(PersonalLoansPreview));
CMS.registerPreviewTemplate('home-improvement', withStyles(PersonalLoansPreview));
CMS.registerPreviewTemplate('major-purchase', withStyles(PersonalLoansPreview));
CMS.registerPreviewTemplate('upgrade-card', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('upgrade-bitcoin-rewards-card', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('upgrade-bitcoin-bonus', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('everyday-savings', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('premier-savings', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('win-card', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('upgrade-bitcoin-program-terms', withStyles(MarkdownPagePreview));
CMS.registerPreviewTemplate('board-bio', withStyles(BoardOfDirectorsPreview));
CMS.registerPreviewTemplate('about', withStyles(AboutPagePreview));
CMS.registerPreviewTemplate('credit-health-monitoring', withStyles(CreditHealthPagePreview));
CMS.registerPreviewTemplate('credit-health-insights', withStyles(CreditHealthInsightsPagePreview));
CMS.registerPreviewTemplate('reviews', withStyles(ReviewsPagePreview));
CMS.registerPreviewTemplate('careers', withStyles(CareersPagePreview));
CMS.registerPreviewTemplate('benefits', withStyles(CareersPagePreview));
CMS.registerPreviewTemplate('belonging', withStyles(CareersPagePreview));
CMS.registerPreviewTemplate('phoenix', withStyles(PhoenixCareersPagePreview));
CMS.registerPreviewTemplate('bank-partners', withStyles(BankPartnersPreview));
CMS.registerPreviewTemplate('privacy', withStyles(PrivacyPreview));
CMS.registerPreviewTemplate('executive-bio', withStyles(ExecutiveBioPreview));
CMS.registerPreviewTemplate('auto-refi', withStyles(AutoRefiPreview));
CMS.registerPreviewTemplate('mobile-app', withStyles(MobileAppPagePreview));
CMS.registerPreviewTemplate('institutions', withStyles(PartnershipsPagePreview));
CMS.registerPreviewTemplate('credit-unions', withStyles(PartnershipsPagePreview));
CMS.registerPreviewTemplate('webinars', withStyles(WebinarsPagePreview));
CMS.registerPreviewTemplate('upgrade-bonus', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('reward-confirm', withStyles(RewardConfirmPagePreview));
CMS.registerPreviewTemplate('dba', withStyles(DbaPagePreview));
CMS.registerPreviewTemplate('rewards-checking', withStyles(RewardsCheckingPagePreview));
CMS.registerPreviewTemplate('rewards-checking-plus', withStyles(RewardsCheckingPlusPagePreview));
CMS.registerPreviewTemplate('rewards-checking-bonus', withStyles(RewardsCheckingBonusPagePreview));
CMS.registerPreviewTemplate('cash-rewards', withStyles(UpgradeCardCashRewardsPreview));
CMS.registerPreviewTemplate('cash-rewards-program-terms', withStyles(MarkdownPagePreview));
CMS.registerPreviewTemplate('cash-rewards-transfer-promotion', withStyles(UpgradeCardPreview));
CMS.registerPreviewTemplate('team', withStyles(TeamPagePreview));
CMS.registerPreviewTemplate('generic-landing-pages', withStyles(GenericLandingPagePreview));
CMS.registerPreviewTemplate('accessibility', withStyles(AccessibilityPagePreview));
CMS.registerPreviewTemplate('triple-cash', withStyles(TripleCashRewardsPagePreview));
CMS.registerPreviewTemplate('active-account', withStyles(PlainTextPagePreview));
CMS.registerPreviewTemplate('active-account-deposit', withStyles(PlainTextPagePreview));
CMS.registerPreviewTemplate('triple-cash-categories', withStyles(TripleCashCategoriesPagePreview));
CMS.registerPreviewTemplate('triple-cash-categories-3-0', withStyles(TripleCashCategoriesPagePreview));
CMS.registerPreviewTemplate('life-rewards', withStyles(TripleCashRewardsPagePreview));
CMS.registerPreviewTemplate('life-rewards-categories', withStyles(TripleCashCategoriesPagePreview));
CMS.registerPreviewTemplate('life-rewards-categories-3-0', withStyles(TripleCashCategoriesPagePreview));
CMS.registerPreviewTemplate('one-card', withStyles(UpgradeOneCardPagePreview));
CMS.registerPreviewTemplate('one-card-categories', withStyles(UpgradeOneCardCategoriesPagePreview));
CMS.registerPreviewTemplate('activate-card', withStyles(ActivateCardPagePreview));
