"use client";

import dynamic from "next/dynamic";
import BlockErrorBoundary from "@/components/common/BlockErrorBoundary";

const AccordionBlock = dynamic(() => import("@/components/blocks/common/AccordionBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading AccordionBlock...</div>
});
const CardBlock = dynamic(() => import("@/components/blocks/common/CardBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading CardBlock...</div>
});
const CertificateBlock = dynamic(() => import("@/components/blocks/about/CertificateBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading CertificateBlock...</div>
});
const CertificationBlock = dynamic(() => import("@/components/blocks/common/CertificationBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading CertificationBlock...</div>
});
const DistributionBlock = dynamic(() => import("@/components/blocks/common/DistributionBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading DistributionBlock...</div>
});
const DistributorSalesTeamBlock = dynamic(() => import("@/components/blocks/common/DistributorSalesTeamBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading DistributorSalesTeamBlock...</div>
});
const EsgCsrBlock = dynamic(() => import("@/components/blocks/common/EsgCsrBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading EsgCsrBlock...</div>
});
const GalleryBlock = dynamic(() => import("@/components/blocks/common/GalleryBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading GalleryBlock...</div>
});
const GetInTouchBlock = dynamic(() => import("@/components/blocks/common/GetInTouchBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading GetInTouchBlock...</div>
});
const GlobalBannerBlock = dynamic(() => import("@/components/blocks/common/GlobalBannerBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading GlobalBannerBlock...</div>
});
const GlobalFeaturesBlock = dynamic(() => import("@/components/blocks/common/GlobalFeaturesBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading GlobalFeaturesBlock...</div>
});
const GlobalFeaturesBlockLayout2 = dynamic(() => import("@/components/blocks/common/GlobalFeaturesBlockLayout2"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading GlobalFeaturesBlockLayout2...</div>
});
const HeroBlock = dynamic(() => import("@/components/blocks/home/HeroBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HeroBlock...</div>
});
const HomeClientBlock = dynamic(() => import("@/components/blocks/home/HomeClientBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeClientBlock...</div>
});
const HomeFeaturesBlock = dynamic(() => import("@/components/blocks/common/HomeFeaturesBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeFeaturesBlock...</div>
});
const HomeImageSliderBlock = dynamic(() => import("@/components/blocks/home/HomeImageSliderBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeImageSliderBlock...</div>
});
const HomeProductListingBlock = dynamic(() => import("@/components/blocks/home/HomeProductListingBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeProductListingBlock...</div>
});
const HomeStatsBlock = dynamic(() => import("@/components/blocks/home/HomeStatsBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeStatsBlock...</div>
});
const HomeTabBlock = dynamic(() => import("@/components/blocks/home/HomeTabBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeTabBlock...</div>
});
const HomeTestBlock = dynamic(() => import("@/components/blocks/common/HomeTestBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading HomeTestBlock...</div>
});
const LatestNews = dynamic(() => import("@/components/blocks/home/LatestNews"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading LatestNews...</div>
});
const LeadershipBlock = dynamic(() => import("@/components/blocks/common/LeadershipBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading LeadershipBlock...</div>
});
const MilestonesBlock = dynamic(() => import("@/components/blocks/common/MilestonesBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading MilestonesBlock...</div>
});
const NewsBlock = dynamic(() => import("@/components/blocks/common/NewsBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading NewsBlock...</div>
});
const NewsContentBlock = dynamic(() => import("@/components/blocks/news/NewsContentBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading NewsContentBlock...</div>
});
const NewsFeaturedBlock = dynamic(() => import("@/components/blocks/news/NewsFeaturedBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading NewsFeaturedBlock...</div>
});
const NewsListingBlock = dynamic(() => import("@/components/blocks/news/NewsListingBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading NewsListingBlock...</div>
});
const PrivacyAccordionBlock = dynamic(() => import("@/components/blocks/common/PrivacyAccordionBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading PrivacyAccordionBlock...</div>
});
const RelatedNewsBlock = dynamic(() => import("@/components/blocks/news/RelatedNewsBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading RelatedNewsBlock...</div>
});
const ServiceListBlock = dynamic(() => import("@/components/blocks/common/ServiceListBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading ServiceListBlock...</div>
});
const ServicePageTestBlock = dynamic(() => import("@/components/blocks/common/ServicePageTestBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading ServicePageTestBlock...</div>
});
const SustainabilityImpactBlock = dynamic(() => import("@/components/blocks/common/SustainabilityImpactBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading SustainabilityImpactBlock...</div>
});
const TeamMembersBlock = dynamic(() => import("@/components/blocks/common/TeamMembersBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading TeamMembersBlock...</div>
});
const TestBlcok = dynamic(() => import("@/components/blocks/common/TestBlcok"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading TestBlcok...</div>
});
const TestBlock = dynamic(() => import("@/components/blocks/common/TestBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading TestBlock...</div>
});
const TestCc = dynamic(() => import("@/components/blocks/common/TestCc"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading TestCc...</div>
});
const TestJs = dynamic(() => import("@/components/blocks/common/TestJs"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading TestJs...</div>
});
const TestimonialsBlock = dynamic(() => import("@/components/blocks/careers/TestimonialsBlock"), { 
  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading TestimonialsBlock...</div>
});

const BLOCK_COMPONENTS = {
  "accordion_block": AccordionBlock,
  "card_block": CardBlock,
  "certificate_block": CertificateBlock,
  "certification_block": CertificationBlock,
  "distribution_block": DistributionBlock,
  "distributor_sales_team_block": DistributorSalesTeamBlock,
  "esg_csr_block": EsgCsrBlock,
  "gallery_block": GalleryBlock,
  "get_in_touch_block": GetInTouchBlock,
  "global_banner_block": GlobalBannerBlock,
  "global_features_block": GlobalFeaturesBlock,
  "global_features_block_layout_2": GlobalFeaturesBlockLayout2,
  "hero_block": HeroBlock,
  "home_client_block": HomeClientBlock,
  "home_features_block": HomeFeaturesBlock,
  "home_image_slider_block": HomeImageSliderBlock,
  "home_product_listing_block": HomeProductListingBlock,
  "home_stats_block": HomeStatsBlock,
  "home_tab_block": HomeTabBlock,
  "home_test_block": HomeTestBlock,
  "latest_news": LatestNews,
  "leadership_block": LeadershipBlock,
  "milestones_block": MilestonesBlock,
  "news_block": NewsBlock,
  "news_content_block": NewsContentBlock,
  "news_featured_block": NewsFeaturedBlock,
  "news_listing_block": NewsListingBlock,
  "privacy_accordion_block": PrivacyAccordionBlock,
  "related_news_block": RelatedNewsBlock,
  "service_list_block": ServiceListBlock,
  "service_page_test_block": ServicePageTestBlock,
  "sustainability_impact_block": SustainabilityImpactBlock,
  "team_members_block": TeamMembersBlock,
  "test_blcok": TestBlcok,
  "test_block": TestBlock,
  "test_cc": TestCc,
  "test_js": TestJs,
  "testimonials_block": TestimonialsBlock,
};

export default function BlockRenderer({ block, index }) {
  if (!block || block.hide_block) return null;

  const Component = BLOCK_COMPONENTS[block.acf_fc_layout];

  if (!Component) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="bg-yellow-50 border-2 border-dashed border-yellow-200 p-8 text-center m-4 rounded-xl">
          <p className="text-yellow-700 font-mono text-sm">Unknown Block Type: <strong>{block.acf_fc_layout}</strong></p>
          <p className="text-yellow-600 text-xs mt-2">Run <code>npm run sync-acf-blocks</code> to generate this component.</p>
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
