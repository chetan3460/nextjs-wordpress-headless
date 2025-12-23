'use client';

import dynamic from 'next/dynamic';
import BlockErrorBoundary from '@/components/common/BlockErrorBoundary';
import BlockLoadingSkeleton from '@/components/common/BlockLoadingSkeleton';

const AccordionBlock = dynamic(() => import('@/components/blocks/common/AccordionBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Accordion" />,
});
const CertificateBlock = dynamic(() => import('@/components/blocks/about/CertificateBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Certificate" />,
});
const DistributionBlock = dynamic(() => import('@/components/blocks/common/DistributionBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Distribution" />,
});
const GalleryBlock = dynamic(() => import('@/components/blocks/common/GalleryBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Gallery" />,
});
const GetInTouchBlock = dynamic(() => import('@/components/blocks/common/GetInTouchBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Get In Touch" />,
});
const GlobalBannerBlock = dynamic(() => import('@/components/blocks/common/GlobalBannerBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Banner" />,
});
const HeroBlock = dynamic(() => import('@/components/blocks/home/HeroBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Hero" />,
});
const HomeClientBlock = dynamic(() => import('@/components/blocks/home/HomeClientBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Clients" />,
});
const HomeFeaturesBlock = dynamic(() => import('@/components/blocks/common/HomeFeaturesBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Features" />,
});
const HomeImageSliderBlock = dynamic(
  () => import('@/components/blocks/home/HomeImageSliderBlock'),
  {
    loading: () => <BlockLoadingSkeleton blockName="Image Slider" />,
  }
);
const HomeProductListingBlock = dynamic(
  () => import('@/components/blocks/home/HomeProductListingBlock'),
  {
    loading: () => <BlockLoadingSkeleton blockName="Products" />,
  }
);
const HomeSliderBlock = dynamic(() => import('@/components/blocks/common/HomeSliderBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Slider" />,
});
const HomeStatsBlock = dynamic(() => import('@/components/blocks/home/HomeStatsBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Statistics" />,
});
const HomeTabBlock = dynamic(() => import('@/components/blocks/home/HomeTabBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Tabs" />,
});
const LatestNews = dynamic(() => import('@/components/blocks/home/LatestNews'), {
  loading: () => <BlockLoadingSkeleton blockName="Latest News" />,
});
const LeadershipBlock = dynamic(() => import('@/components/blocks/our-company/LeadershipBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Leadership" />,
});
const LeadershipBlockSlider = dynamic(
  () => import('@/components/blocks/our-company/LeadershipBlockSlider'),
  {
    loading: () => <BlockLoadingSkeleton blockName="Leadership Slider" />,
  }
);
const MilestonesBlock = dynamic(() => import('@/components/blocks/common/MilestonesBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Milestones" />,
});
const NewsContentBlock = dynamic(() => import('@/components/blocks/news/NewsContentBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="News Content" />,
});
const NewsListingBlock = dynamic(() => import('@/components/blocks/news/NewsListingBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="News Listing" />,
});
const RelatedNewsBlock = dynamic(() => import('@/components/blocks/news/RelatedNewsBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Related News" />,
});
const TeamMembersBlock = dynamic(() => import('@/components/blocks/our-company/TeamMembersBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Team Members" />,
});
const TestLeaderBlock = dynamic(() => import('@/components/blocks/our-company/TestLeaderBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Test Leader" />,
});
const TestimonialsBlock = dynamic(() => import('@/components/blocks/careers/TestimonialsBlock'), {
  loading: () => <BlockLoadingSkeleton blockName="Testimonials" />,
});

const BLOCK_COMPONENTS = {
  accordion_block: AccordionBlock,
  certificate_block: CertificateBlock,
  distribution_block: DistributionBlock,
  gallery_block: GalleryBlock,
  get_in_touch_block: GetInTouchBlock,
  global_banner_block: GlobalBannerBlock,
  hero_block: HeroBlock,
  home_client_block: HomeClientBlock,
  home_features_block: HomeFeaturesBlock,
  home_image_slider_block: HomeImageSliderBlock,
  home_product_listing_block: HomeProductListingBlock,
  home_slider_block: HomeSliderBlock,
  home_stats_block: HomeStatsBlock,
  home_tab_block: HomeTabBlock,
  latest_news: LatestNews,
  leadership_block: LeadershipBlock,
  leadership_block_slider: LeadershipBlockSlider,
  milestones_block: MilestonesBlock,
  news_content_block: NewsContentBlock,
  news_listing_block: NewsListingBlock,
  related_news_block: RelatedNewsBlock,
  team_members_block: TeamMembersBlock,
  test_leader_block: TestLeaderBlock,
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
