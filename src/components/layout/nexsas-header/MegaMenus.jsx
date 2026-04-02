'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, HelpCircle, BookText, Headset, Phone, BadgeCheck, Circle } from 'lucide-react';

export function MegaMenuCompany({ items = [] }) {
  const listItems = items;

  return (
    <div className="flex w-full items-start gap-y-6 md:gap-x-8">
      <ul className="w-full space-y-2 md:max-w-[284px]">
        {listItems.length > 0 ? (
          listItems.map(item => (
            <MenuLink
              key={item.id}
              href={item.url}
              title={item.label}
              description={item.description || 'Learn more about our ' + item.label.toLowerCase()}
              icon={<DefaultIcon />}
            />
          ))
        ) : (
          <p className="text-white/40 text-xs p-4 italic">No items found in WordPress menu.</p>
        )}
      </ul>
      <figure className="flex-1 space-y-3">
        <p className="text-[12px] font-sora text-white/60 font-medium uppercase tracking-wider">
          What&apos;s New
        </p>
        <Link
          href="/news/investment-management"
          className="group block relative overflow-hidden rounded-[14px]"
        >
          <div className="relative min-h-[220px] w-full">
            <Image
              src="/images/nexsas/opai-img-22.jpg"
              alt="What's New"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 space-y-1">
              <p className="text-sm font-sora text-white/90 font-medium">Investment Management</p>
              <p className="text-xs text-white/80 max-w-[180px]">
                Platform that helps you manage your investments.
              </p>
            </div>
          </div>
        </Link>
      </figure>
    </div>
  );
}

export function MegaMenuPlatform({ items = [] }) {
  return (
    <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
      <div className="col-span-12 lg:col-span-4">
        <p className="text-xs text-white/40 pb-3 pl-2 font-medium uppercase tracking-wider">
          Overview
        </p>
        <ul className="space-y-1">
          {items.map(item => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="group relative block p-2 rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                <span className="text-sm text-white/90 font-sora group-hover:text-white">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-x-4 lg:col-span-8 h-full">
        <FeaturedCard
          image="/images/nexsas/opai-img-1.jpg"
          title="Merge Unified"
          description="One API. Countless product integrations."
        />
        <FeaturedCard
          image="/images/nexsas/opai-img-2.jpg"
          title="Combine Unified"
          description="One API. Countless product integrations."
        />
      </div>
    </div>
  );
}

export function MegaMenuResources({ items = [] }) {
  const getIcon = label => {
    const l = label.toLowerCase();
    if (l.includes('project')) return <Lightbulb size={18} />;
    if (l.includes('faq')) return <HelpCircle size={18} />;
    if (l.includes('glossary')) return <BookText size={18} />;
    if (l.includes('support')) return <Headset size={18} />;
    if (l.includes('contact')) return <Phone size={18} />;
    if (l.includes('tutorial')) return <BadgeCheck size={18} />;
    return <Circle size={18} />;
  };

  return (
    <ul className="w-full space-y-1">
      {items.map(item => (
        <MenuLink
          key={item.id}
          href={item.url}
          title={item.label}
          description={item.description}
          icon={getIcon(item.label)}
        />
      ))}
    </ul>
  );
}

function MenuLink({ href, title, description, icon }) {
  return (
    <li>
      <Link
        href={href}
        className="group relative flex items-start gap-4 rounded-[12px] p-3 transition-all duration-300 hover:bg-white/5 text-white/90"
      >
        <div className="relative z-10 mt-0.5 text-white/70 group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="relative z-10 space-y-0.5">
          <p className="text-[16px] font-sora font-normal leading-normal text-white/90 group-hover:text-white transition-colors">
            {title}
          </p>
          {description && (
            <p className="text-[12px] font-inter-tight text-white/60 font-normal leading-normal group-hover:text-white/90 transition-colors">
              {description}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}

function FeaturedCard({ image, title, description }) {
  return (
    <Link href="#" className="block group h-full">
      <article className="border border-white/10 flex h-full flex-col space-y-3 rounded-2xl p-3 transition-colors hover:border-white/20">
        <figure className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
        <div className="space-y-1 pb-1">
          <p className="text-sm text-white/90 font-sora font-normal">{title}</p>
          <p className="text-xs text-white/90 font-sora font-normal opacity-60">{description}</p>
        </div>
      </article>
    </Link>
  );
}

function DefaultIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
