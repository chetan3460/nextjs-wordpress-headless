import { fetchPageWithACF } from '@/lib/wordpress/client';
import { generateMetadataFromYoast } from '@/lib/utils/yoast-seo';

import HeroBlock from '@/components/blocks/home/HeroBlock';
import ImpactBlock from '@/components/blocks/home/ImpactBlock';
import EmpoweringBlock from '@/components/blocks/home/EmpoweringBlock';
import SolutionsBlock from '@/components/blocks/home/SolutionsBlock';
import PortfolioBlock from '@/components/blocks/home/PortfolioBlock';
import TestimonialsBlock from '@/components/blocks/home/TestimonialsBlock';
import FAQBlock from '@/components/blocks/home/FAQBlock';
import CTA1Block from '@/components/blocks/home/CTA1Block';
import CTA2Block from '@/components/blocks/home/CTA2Block';
import ContactBlock from '@/components/blocks/home/ContactBlock';

export async function generateMetadata() {
  const pageData = await fetchPageWithACF('home');

  return generateMetadataFromYoast(pageData, {
    title: 'NexusPress - AI-Powered WordPress Platform',
    description:
      'NexusPress combines the power of Next.js with WordPress headless CMS for blazing-fast, SEO-optimized websites. Experience the future of content management.',
  });
}

export default async function HomePage() {
  const pageData = await fetchPageWithACF('home');
  // Extract layout blocks from ACF
  const blocks = pageData?.acf?.homepage_blocks || [];
  const panels = pageData?.acf?.home_panels || [];

  // Helper macro to find a block by its ACF layout name
  const getBlockData = (layoutName) => blocks.find(b => b.acf_fc_layout === layoutName) || null;

  const heroData = getBlockData('home_hero_block');
  const impactData = getBlockData('home_impact_block');
  const empoweringData = getBlockData('home_empowering_block');
  const solutionsData = getBlockData('home_solutions_block');
  const portfolioData = getBlockData('home_portfolio_block');
  const testimonialsData = getBlockData('home_testimonials_block');
  const faqData = getBlockData('home_faq_block');
  const cta1Data = getBlockData('home_cta1_block');
  const cta2Data = getBlockData('home_cta2_block');
  const contactData = getBlockData('home_contact_block');

  return (
    <>
      {heroData ? <HeroBlock data={heroData} /> : <HeroBlock />}
      {impactData ? <ImpactBlock data={impactData} /> : <ImpactBlock />}
      {empoweringData ? <EmpoweringBlock data={empoweringData} /> : <EmpoweringBlock />}
      {solutionsData ? <SolutionsBlock data={solutionsData} /> : <SolutionsBlock />}
      {portfolioData ? <PortfolioBlock data={portfolioData} /> : <PortfolioBlock />}
      {testimonialsData ? <TestimonialsBlock data={testimonialsData} /> : <TestimonialsBlock />}
      {faqData ? <FAQBlock data={faqData} /> : <FAQBlock />}
      {cta1Data ? <CTA1Block data={cta1Data} /> : <CTA1Block />}
      {cta2Data ? <CTA2Block data={cta2Data} /> : <CTA2Block />}
      {contactData ? <ContactBlock data={contactData} /> : <ContactBlock />}
    </>
  );
}

// Revalidate every 30 seconds (homepage changes frequently)
export const revalidate = 30;

