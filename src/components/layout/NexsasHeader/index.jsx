'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { MegaMenuCompany, MegaMenuPlatform, MegaMenuResources } from './MegaMenus';
import MobileMenu from './MobileMenu';

export default function NexsasHeader({ menuItems = [], siteLogo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const headerRef = useRef(null);

  // Logo fallback
  const siteLogoUrl = typeof siteLogo === 'string' ? siteLogo : siteLogo?.url || siteLogo?.source_url;
  const logoSrc = siteLogoUrl || '/images/logo/logo-white-small.svg';

  // Build tree from flat WP menu
  const buildMenuTree = items => {
    const itemMap = {};
    const tree = [];
    if (!items || items.length === 0) return [];

    items.forEach(item => {
      itemMap[item.id] = { ...item, children: [] };
    });

    items.forEach(item => {
      const parentId = item.parentId === '0' || item.parentId === 0 ? null : item.parentId;
      if (parentId && itemMap[parentId]) {
        itemMap[parentId].children.push(itemMap[item.id]);
      } else {
        tree.push(itemMap[item.id]);
      }
    });
    return tree;
  };

  const menuTree =
    menuItems.length > 0
      ? buildMenuTree(menuItems)
      : [
          { id: '1', label: 'Company', url: '#', children: [], hasMega: true, megaType: 'company' },
          { id: '2', label: 'About', url: '/about', children: [] },
          {
            id: '3',
            label: 'Platform',
            url: '#',
            children: [],
            hasMega: true,
            megaType: 'platform',
          },
          { id: '4', label: 'Services', url: '/services', children: [] },
          {
            id: '5',
            label: 'Resources',
            url: '#',
            children: [],
            hasMega: true,
            megaType: 'resources',
          },
        ];

  const activeItem = menuTree.find(item => {
    const label = item.label;
    const type = item.megaType || label.toLowerCase();
    return activeMegaMenu === type;
  });

  // GSAP Entrance
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
      );
    }
  }, []);

  return (
    <>
      <header className="ai-solutions-scope fixed top-6 left-1/2 z-70 w-full px-4 -translate-x-1/2 pointer-events-none">
        <nav
          ref={headerRef}
          className="header-pill mx-auto flex w-full max-w-[350px] items-center justify-between rounded-full border border-stroke-3-18 py-1.5 pr-2 pl-2 md:max-w-[640px] lg:max-w-[818px] lg:gap-12 lg:py-0 pointer-events-auto"
        >
          {/* Logo */}
          <Link href="/" className="block size-11 p-1">
            <Image
              src={logoSrc}
              alt="Nexsas"
              width={typeof siteLogo === 'object' ? siteLogo?.width || 44 : 44}
              height={typeof siteLogo === 'object' ? siteLogo?.height || 44 : 44}
              className="size-full object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
            {menuTree.map(item => (
              <NavItem
                key={item.id}
                item={item}
                activeMegaMenu={activeMegaMenu}
                setActiveMegaMenu={setActiveMegaMenu}
              />
            ))}
          </ul>

          {/* Contact Button & Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-opai-purple px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex size-11 items-center justify-center rounded-full bg-white/5 text-white lg:hidden"
              aria-label="Open Mobile Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Mega Menu Containers for Full Width items */}
          <div
            className={`absolute top-full left-1/2 w-full mt-4 -translate-x-1/2 transition-all duration-300 origin-top z-10 ${
              activeMegaMenu === 'company' || activeMegaMenu === 'platform'
                ? 'opacity-100 scale-100 visible'
                : 'opacity-0 scale-95 invisible'
            }`}
            onMouseEnter={() => activeMegaMenu && setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            {/* Bridge to prevent hover loss */}
            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />

            <div className="dropdown-menu mx-auto w-full max-w-[818px] rounded-[24px] border border-white/10 p-6 shadow-2xl overflow-hidden">
              {activeMegaMenu === 'company' && <MegaMenuCompany items={activeItem?.children} />}
              {activeMegaMenu === 'platform' && <MegaMenuPlatform items={activeItem?.children} />}
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={menuTree}
        logo={logoSrc}
      />
    </>
  );
}

function NavItem({ item, activeMegaMenu, setActiveMegaMenu }) {
  const label = item.label;
  const isMega =
    item.hasMega ||
    label === 'Company' ||
    label === 'Platform' ||
    label === 'Resources' ||
    (item.children && item.children.length > 0);
  const type = item.megaType || label.toLowerCase();
  const isActive = activeMegaMenu === type;

  return (
    <li
      className="group relative cursor-pointer py-4"
      onMouseEnter={() => isMega && setActiveMegaMenu(type)}
      onMouseLeave={() => isMega && setActiveMegaMenu(null)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`nav-item-line absolute top-0 left-1/2 h-px -translate-x-1/2 rounded-full transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
        />
        <div
          className={`nav-item-gradient absolute top-0 left-1/2 h-full w-[calc(100%+40px)] -translate-x-1/2 blur-lg transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'}`}
        />
      </div>

      <Link
        href={item.url}
        className={`relative z-10 flex items-center gap-1 text-sm font-ibm-plex-mono transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`}
      >
        {label}
        {isMega && (
          <ChevronDown
            size={12}
            className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
          />
        )}
      </Link>

      {/* Local Dropdown for Resources */}
      {isMega && type === 'resources' && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-[22px] transition-all duration-300 origin-top z-60 ${
            isActive ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
        >
          <div className="dropdown-menu w-[280px] rounded-[20px] border border-white/10 shadow-2xl p-4">
            <MegaMenuResources items={item.children} />
          </div>
        </div>
      )}
    </li>
  );
}
