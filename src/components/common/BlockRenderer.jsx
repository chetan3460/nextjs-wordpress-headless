'use client';

import dynamic from 'next/dynamic';
import BlockErrorBoundary from '@/components/common/BlockErrorBoundary';

const AccordionBlock = dynamic(() => import('@/components/blocks/common/AccordionBlock'), {
  ssr: true,
});
const CaseStudiesBlock = dynamic(() => import('@/components/blocks/common/CaseStudiesBlock'), {
  ssr: true,
});
const CertificateBlock = dynamic(() => import('@/components/blocks/about/CertificateBlock'), {
  ssr: true,
});
const ChecklistSection = dynamic(() => import('@/components/blocks/common/ChecklistSection'), {
  ssr: true,
});
const ContentImageBlock = dynamic(() => import('@/components/blocks/common/ContentImageBlock'), {
  ssr: true,
});
const DistributionBlock = dynamic(() => import('@/components/blocks/common/DistributionBlock'), {
  ssr: true,
});
const FaqBlock = dynamic(() => import('@/components/blocks/common/FaqBlock'), { ssr: true });
const GalleryBlock = dynamic(() => import('@/components/blocks/common/GalleryBlock'), {
  ssr: true,
});
const GetInTouchBlock = dynamic(() => import('@/components/blocks/common/GetInTouchBlock'), {
  ssr: true,
});
const GlobalBannerBlock = dynamic(() => import('@/components/blocks/common/GlobalBannerBlock'), {
  ssr: true,
});
const HeroBlock = dynamic(() => import('@/components/blocks/home/HeroBlock'), { ssr: true });
const HomeClientBlock = dynamic(() => import('@/components/blocks/home/HomeClientBlock'), {
  ssr: true,
});
const HomeFeaturesBlock = dynamic(() => import('@/components/blocks/common/HomeFeaturesBlock'), {
  ssr: true,
});
const HomeHeroBlock = dynamic(() => import('@/components/blocks/home/HomeHeroBlock'), {
  ssr: true,
});
const HomeImageSliderBlock = dynamic(
  () => import('@/components/blocks/home/HomeImageSliderBlock'),
  { ssr: true }
);
const HomeProductListingBlock = dynamic(
  () => import('@/components/blocks/home/HomeProductListingBlock'),
  { ssr: true }
);
const HomeStatsBlock = dynamic(() => import('@/components/blocks/home/HomeStatsBlock'), {
  ssr: true,
});
const HomeTabBlock = dynamic(() => import('@/components/blocks/home/HomeTabBlock'), { ssr: true });
const ImageBlock = dynamic(() => import('@/components/blocks/common/ImageBlock'), { ssr: true });
const LatestNews = dynamic(() => import('@/components/blocks/home/LatestNews'), { ssr: true });
const LeadershipBlock = dynamic(() => import('@/components/blocks/our-company/LeadershipBlock'), {
  ssr: true,
});
const LeadershipBlockSlider = dynamic(
  () => import('@/components/blocks/our-company/LeadershipBlockSlider'),
  { ssr: true }
);
const MilestonesBlock = dynamic(() => import('@/components/blocks/common/MilestonesBlock'), {
  ssr: true,
});
const NewsContentBlock = dynamic(() => import('@/components/blocks/news/NewsContentBlock'), {
  ssr: true,
});
const NewsListingBlock = dynamic(() => import('@/components/blocks/news/NewsListingBlock'), {
  ssr: true,
});
const RelatedNewsBlock = dynamic(() => import('@/components/blocks/news/RelatedNewsBlock'), {
  ssr: true,
});
const RichText = dynamic(() => import('@/components/blocks/common/RichText'), { ssr: true });
const TeamMembersBlock = dynamic(() => import('@/components/blocks/our-company/TeamMembersBlock'), {
  ssr: true,
});
const TestLeaderBlock = dynamic(() => import('@/components/blocks/our-company/TestLeaderBlock'), {
  ssr: true,
});
const Testimonial = dynamic(() => import('@/components/blocks/common/Testimonial'), { ssr: true });
const TestimonialsBlock = dynamic(() => import('@/components/blocks/careers/TestimonialsBlock'), {
  ssr: true,
});

const BLOCK_COMPONENTS = {
  accordion_block: AccordionBlock,
  case_studies_block: CaseStudiesBlock,
  certificate_block: CertificateBlock,
  checklist_section: ChecklistSection,
  content_image_block: ContentImageBlock,
  distribution_block: DistributionBlock,
  faq_block: FaqBlock,
  gallery_block: GalleryBlock,
  get_in_touch_block: GetInTouchBlock,
  global_banner_block: GlobalBannerBlock,
  hero_block: HeroBlock,
  home_client_block: HomeClientBlock,
  home_features_block: HomeFeaturesBlock,
  home_hero_block: HomeHeroBlock,
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
