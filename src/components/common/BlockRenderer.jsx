'use client';

import dynamic from 'next/dynamic';
import BlockErrorBoundary from './BlockErrorBoundary';

const AccordionBlock = dynamic(() => import('../blocks/common/AccordionBlock'), { ssr: true });
const CertificateBlock = dynamic(() => import('../blocks/about/CertificateBlock'), { ssr: true });
const ChecklistSection = dynamic(() => import('../blocks/common/ChecklistSection'), { ssr: true });
const DistributionBlock = dynamic(() => import('../blocks/common/DistributionBlock'), {
  ssr: true,
});
const FaqBlock = dynamic(() => import('../blocks/common/FaqBlock'), { ssr: true });
const GalleryBlock = dynamic(() => import('../blocks/common/GalleryBlock'), { ssr: true });
const GetInTouchBlock = dynamic(() => import('../blocks/common/GetInTouchBlock'), { ssr: true });
const GlobalBannerBlock = dynamic(() => import('../blocks/common/GlobalBannerBlock'), {
  ssr: true,
});
const HeroBlock = dynamic(() => import('../blocks/home/HeroBlock'), { ssr: true });
const HomeClientBlock = dynamic(() => import('../blocks/home/HomeClientBlock'), { ssr: true });
const HomeFeaturesBlock = dynamic(() => import('../blocks/common/HomeFeaturesBlock'), {
  ssr: true,
});
const HomeImageSliderBlock = dynamic(() => import('../blocks/home/HomeImageSliderBlock'), {
  ssr: true,
});
const HomeProductListingBlock = dynamic(() => import('../blocks/home/HomeProductListingBlock'), {
  ssr: true,
});
const HomeStatsBlock = dynamic(() => import('../blocks/home/HomeStatsBlock'), { ssr: true });
const HomeTabBlock = dynamic(() => import('../blocks/home/HomeTabBlock'), { ssr: true });
const ImageBlock = dynamic(() => import('../blocks/common/ImageBlock'), { ssr: true });
const LatestNews = dynamic(() => import('../blocks/home/LatestNews'), { ssr: true });
const LeadershipBlock = dynamic(() => import('../blocks/our-company/LeadershipBlock'), {
  ssr: true,
});
const LeadershipBlockSlider = dynamic(() => import('../blocks/our-company/LeadershipBlockSlider'), {
  ssr: true,
});
const MilestonesBlock = dynamic(() => import('../blocks/common/MilestonesBlock'), { ssr: true });
const NewsContentBlock = dynamic(() => import('../blocks/news/NewsContentBlock'), { ssr: true });
const NewsListingBlock = dynamic(() => import('../blocks/news/NewsListingBlock'), { ssr: true });
const RelatedNewsBlock = dynamic(() => import('../blocks/news/RelatedNewsBlock'), { ssr: true });
const RichText = dynamic(() => import('../blocks/common/RichText'), { ssr: true });
const TeamMembersBlock = dynamic(() => import('../blocks/our-company/TeamMembersBlock'), {
  ssr: true,
});
const TestLeaderBlock = dynamic(() => import('../blocks/our-company/TestLeaderBlock'), {
  ssr: true,
});
const Testimonial = dynamic(() => import('../blocks/common/Testimonial'), { ssr: true });
const TestimonialsBlock = dynamic(() => import('../blocks/careers/TestimonialsBlock'), {
  ssr: true,
});

const BLOCK_COMPONENTS = {
  accordion_block: AccordionBlock,
  certificate_block: CertificateBlock,
  checklist_section: ChecklistSection,
  distribution_block: DistributionBlock,
  faq_block: FaqBlock,
  gallery_block: GalleryBlock,
  get_in_touch_block: GetInTouchBlock,
  global_banner_block: GlobalBannerBlock,
  hero_block: HeroBlock,
  home_client_block: HomeClientBlock,
  home_features_block: HomeFeaturesBlock,
  home_image_slider_block: HomeImageSliderBlock,
  home_product_listing_block: HomeProductListingBlock,
  home_stats_block: HomeStatsBlock,
  home_tab_block: HomeTabBlock,
  image_block: ImageBlock,
  latest_news: LatestNews,
  leadership_block: LeadershipBlock,
  leadership_block_slider: LeadershipBlockSlider,
  milestones_block: MilestonesBlock,
  news_content_block: NewsContentBlock,
  news_listing_block: NewsListingBlock,
  related_news_block: RelatedNewsBlock,
  rich_text: RichText,
  team_members_block: TeamMembersBlock,
  test_leader_block: TestLeaderBlock,
  testimonial: Testimonial,
  testimonials_block: TestimonialsBlock,
};

export default function BlockRenderer({ block, index }) {
  if (!block || block.hide_block) return null;

  const Component = BLOCK_COMPONENTS[block.acf_fc_layout];

  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className="bg-yellow-50 border-2 border-dashed border-yellow-200 p-8 text-center m-4 rounded-xl">
          <p className="text-yellow-700 font-mono text-sm">
            Unknown Block Type: <strong>{block.acf_fc_layout}</strong>
          </p>
          <p className="text-yellow-600 text-xs mt-2">
            Run <code>npm run sync-acf-blocks</code> to generate this component.
          </p>
        </div>
      );
    }
    return null;
  }

  return (
    <BlockErrorBoundary blockName={block.acf_fc_layout}>
      <Component data={block} key={block.id || index} />
    </BlockErrorBoundary>
  );
}
