'use client';

import dynamic from 'next/dynamic';
import BlockErrorBoundary from '@/components/common/BlockErrorBoundary';

const AccordionBlock = dynamic(() => import('@/components/blocks/common/AccordionBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading AccordionBlock...
    </div>
  ),
});
const CertificateBlock = dynamic(() => import('@/components/blocks/about/CertificateBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading CertificateBlock...
    </div>
  ),
});
const ContentImageBlock = dynamic(() => import('@/components/blocks/common/ContentImageBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading ContentImageBlock...
    </div>
  ),
});
const DistributionBlock = dynamic(() => import('@/components/blocks/common/DistributionBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading DistributionBlock...
    </div>
  ),
});
const FaqBlock = dynamic(() => import('@/components/blocks/common/FaqBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading FaqBlock...
    </div>
  ),
});
const GalleryBlock = dynamic(() => import('@/components/blocks/common/GalleryBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading GalleryBlock...
    </div>
  ),
});
const GetInTouchBlock = dynamic(() => import('@/components/blocks/common/GetInTouchBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading GetInTouchBlock...
    </div>
  ),
});
const GlobalBannerBlock = dynamic(() => import('@/components/blocks/common/GlobalBannerBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading GlobalBannerBlock...
    </div>
  ),
});
const HeroBlock = dynamic(() => import('@/components/blocks/home/HeroBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading HeroBlock...
    </div>
  ),
});
const HomeClientBlock = dynamic(() => import('@/components/blocks/home/HomeClientBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading HomeClientBlock...
    </div>
  ),
});
const HomeFeaturesBlock = dynamic(() => import('@/components/blocks/common/HomeFeaturesBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading HomeFeaturesBlock...
    </div>
  ),
});
const HomeHeroBlock = dynamic(() => import('@/components/blocks/home/HomeHeroBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading HomeHeroBlock...
    </div>
  ),
});
const HomeImageSliderBlock = dynamic(
  () => import('@/components/blocks/home/HomeImageSliderBlock'),
  {
    loading: () => (
      <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
        Loading HomeImageSliderBlock...
      </div>
    ),
  }
);
const HomeProductListingBlock = dynamic(
  () => import('@/components/blocks/home/HomeProductListingBlock'),
  {
    loading: () => (
      <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
        Loading HomeProductListingBlock...
      </div>
    ),
  }
);
const HomeStatsBlock = dynamic(() => import('@/components/blocks/home/HomeStatsBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading HomeStatsBlock...
    </div>
  ),
});
const HomeTabBlock = dynamic(() => import('@/components/blocks/home/HomeTabBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading HomeTabBlock...
    </div>
  ),
});
const LatestNews = dynamic(() => import('@/components/blocks/home/LatestNews'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading LatestNews...
    </div>
  ),
});
const LeadershipBlock = dynamic(() => import('@/components/blocks/our-company/LeadershipBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading LeadershipBlock...
    </div>
  ),
});
const LeadershipBlockSlider = dynamic(
  () => import('@/components/blocks/our-company/LeadershipBlockSlider'),
  {
    loading: () => (
      <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
        Loading LeadershipBlockSlider...
      </div>
    ),
  }
);
const MilestonesBlock = dynamic(() => import('@/components/blocks/common/MilestonesBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading MilestonesBlock...
    </div>
  ),
});
const NewsContentBlock = dynamic(() => import('@/components/blocks/news/NewsContentBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading NewsContentBlock...
    </div>
  ),
});
const NewsListingBlock = dynamic(() => import('@/components/blocks/news/NewsListingBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading NewsListingBlock...
    </div>
  ),
});
const RelatedNewsBlock = dynamic(() => import('@/components/blocks/news/RelatedNewsBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading RelatedNewsBlock...
    </div>
  ),
});
const TeamMembersBlock = dynamic(() => import('@/components/blocks/our-company/TeamMembersBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading TeamMembersBlock...
    </div>
  ),
});
const TestLeaderBlock = dynamic(() => import('@/components/blocks/our-company/TestLeaderBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading TestLeaderBlock...
    </div>
  ),
});
const TestimonialsBlock = dynamic(() => import('@/components/blocks/careers/TestimonialsBlock'), {
  loading: () => (
    <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">
      Loading TestimonialsBlock...
    </div>
  ),
});

const BLOCK_COMPONENTS = {
  accordion_block: AccordionBlock,
  certificate_block: CertificateBlock,
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
