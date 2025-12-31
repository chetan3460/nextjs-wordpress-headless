'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * AI Agency Style Header Component
 * Floating pill design with glassmorphism effect
 */
export default function HeaderNew({ menuItems = [], siteLogo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Normalize logo
  const logoSrc =
    typeof siteLogo === 'string' ? siteLogo : siteLogo?.url || '/images/logo-light.png';

  // Build menu tree
  const buildMenuTree = items => {
    if (!items || !items.length) return [];

    const itemMap = {};
    const tree = [];

    items.forEach(item => {
      itemMap[item.id] = {
        ...item,
        children: [],
      };
    });

    items.forEach(item => {
      const node = itemMap[item.id];
      const parentId = item.parentId === '0' || item.parentId === 0 ? null : item.parentId;

      if (parentId && itemMap[parentId]) {
        itemMap[parentId].children.push(node);
      } else {
        tree.push(node);
      }
    });

    return tree;
  };

  const menuTree =
    menuItems.length > 0
      ? buildMenuTree(menuItems)
      : [
          { id: 1, label: 'Home', url: '/', children: [] },
          { id: 2, label: 'About', url: '/about', children: [] },
          { id: 3, label: 'Products', url: '/products', children: [] },
          { id: 4, label: 'News', url: '/news', children: [] },
          { id: 5, label: 'Contact', url: '/contact', children: [] },
        ];

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (newState) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <>
      <header>
        <div
          className={`header-one rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[350px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2.5 xl:py-0 py-2.5 border top-5 backdrop-blur-lg transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-100'} border-gray-200 dark:border-gray-700`}
          style={{
            backgroundColor: 'rgba(252, 252, 252, 0.6)',
          }}
        >
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="sr-only">Home</span>
              {/* Desktop Logo */}
              <figure className="lg:max-w-[198px] lg:block hidden">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={198}
                  height={40}
                  className="dark:invert"
                  priority
                />
              </figure>
              {/* Mobile Logo */}
              <figure className="max-w-[44px] lg:hidden block">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={44}
                  height={44}
                  className="w-full"
                  priority
                />
              </figure>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center">
              {menuTree.map(item => (
                <NavItem
                  key={item.id}
                  item={item}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="xl:flex hidden items-center justify-center">
            <Link
              href="/contact"
              className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent"
            >
              <span>Get started</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden block">
            <button
              onClick={toggleMobileMenu}
              className="nav-hamburger flex flex-col gap-[5px] size-12 bg-gray-100 dark:bg-gray-800 rounded-full items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <aside
        className={`sidebar fixed top-0 right-0 w-full sm:w-1/2 h-screen bg-white dark:bg-gray-900 rounded-l-3xl xl:hidden z-[9999] overflow-y-auto transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="lg:p-9 sm:p-8 p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <Image src={logoSrc} alt="Logo" width={44} height={44} className="w-full" />
              </figure>
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-2">
            {menuTree.map(item => (
              <MobileMenuItem
                key={item.id}
                item={item}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </nav>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full justify-center"
            >
              <span>Get started</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div onClick={toggleMobileMenu} className="fixed inset-0 bg-black/50 z-[9998] xl:hidden" />
      )}
    </>
  );
}

// Navigation Item Component
function NavItem({ item, activeMenu, setActiveMenu }) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeMenu === item.id;

  if (!hasChildren) {
    return (
      <li className="relative nav-item cursor-pointer py-2.5">
        <Link
          href={item.url || '#'}
          className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent"
        >
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative nav-item cursor-pointer py-2.5"
      onMouseEnter={() => setActiveMenu(item.id)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
        <span>{item.label}</span>
        <span
          className="block origin-center transition-transform duration-300 translate-y-px"
          style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      {isActive && (
        <>
          {/* Bridge for smooth hover */}
          <div className="dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[320px] pointer-events-auto bg-transparent" />

          {/* Dropdown Content */}
          <ul className="dropdown-menu mt-2 w-[320px] rounded-3xl p-2 bg-white dark:bg-background-6 shadow-xl absolute left-1/2 -translate-x-1/2 top-full z-50 border border-stroke-1 dark:border-background-7 opacity-100 pointer-events-auto">
            {item.children.map(child => (
              <li key={child.id}>
                <Link
                  href={child.url || '#'}
                  className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group"
                >
                  {/* Hover Background */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400" />

                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    <p className="text-tagline-1 font-normal text-secondary">{child.label}</p>
                    {child.description && (
                      <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60 mt-0.5">
                        {child.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

// Mobile Menu Item Component
function MobileMenuItem({ item, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.url || '#'}
        onClick={closeMenu}
        className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2.5 cursor-pointer"
      >
        <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1 block">
          {item.label}
        </span>
        <span
          className="transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1 py-2">
          {item.children.map(child => (
            <Link
              key={child.id}
              href={child.url || '#'}
              onClick={closeMenu}
              className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block ml-4"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
