"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header({ menuItems = [], siteLogo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  // Use CMS logo if available, otherwise fallback to local assets
  const logoSrc = siteLogo || "/images/logo-light.png";

  // Transform flat menu items into tree structure
  const buildMenuTree = (items) => {
    if (!items || !items.length) return [];

    const itemMap = {};
    const tree = [];

    // Normalize and map items
    items.forEach((item) => {
      itemMap[item.id] = {
        ...item,
        children: [],
        // Ensure classes is an array
        cssClasses: Array.isArray(item.cssClasses)
          ? item.cssClasses
          : (item.cssClasses || "").split(" "),
      };
    });

    // Build hierarchy
    items.forEach((item) => {
      const node = itemMap[item.id];
      // Handle parentId being 0 or "0" or null for root items
      const parentId =
        item.parentId === "0" || item.parentId === 0 ? null : item.parentId;

      if (parentId && itemMap[parentId]) {
        itemMap[parentId].children.push(node);
      } else {
        tree.push(node);
      }
    });

    return tree;
  };

  const menuTree = menuItems.length > 0 ? buildMenuTree(menuItems) : [];

  // Fallback if no menu (dev mode or error)
  const finalMenu =
    menuTree.length > 0
      ? menuTree
      : [
          { id: 1, label: "Home", url: "/", children: [] },
          { id: 2, label: "About", url: "/about", children: [] },
          { id: 3, label: "Products", url: "/products", children: [] },
          { id: 4, label: "News", url: "/news", children: [] },
          { id: 5, label: "Contact", url: "/contact", children: [] },
        ];

  // Sticky header on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY >= 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);

    if (newState && !hasBeenOpened) {
      setHasBeenOpened(true);
    }

    // Toggle body scroll
    if (newState) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  // Close menu on desktop resize
  useEffect(() => {
    const closeOnDesktop = () => {
      const isDesktop = window.matchMedia("(min-width: 992px)").matches;
      if (isDesktop && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("resize", closeOnDesktop, { passive: true });
    window.addEventListener("orientationchange", closeOnDesktop, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", closeOnDesktop);
      window.removeEventListener("orientationchange", closeOnDesktop);
    };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      {/* Scroll to Top Button */}
      <ScrollToTop />

      <header id="header" data-component="Header" data-load="eager">
        <nav
          id="topnav"
          className={`defaultscroll is-sticky ${isSticky ? "nav-sticky" : ""}`}
        >
          <div className="container-fluid relative flex items-center lg:justify-between gap-2">
            {/* Mobile Menu Toggle */}
            <div className="menu-extras lg:hidden">
              <div className="menu-item">
                <button
                  id="isToggle"
                  className="navbar-toggle"
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                  aria-expanded={isMenuOpen}
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>

            {/* Logo */}
            <div className="site-logo logo">
              <Link href="/" className="focus:outline-none">
                <img
                  src={logoSrc}
                  alt="Resins & Plastics Ltd"
                  className="max-lg:w-[225px] w-[250px] h-[40px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div id="navigation" className="flex items-center justify-end">
              <ul className="navigation-menu flex items-center justify-end flex-wrap">
                {finalMenu.map((item) => (
                  <DesktopMenuItem key={item.id || item.url} item={item} />
                ))}
              </ul>
            </div>

            {/* Language Dropdown - Placeholder for GTranslate */}
            <div className="gtranslate-wrapper">
              {/* GTranslate will be integrated here */}
            </div>

            {/* Contact CTA Button */}
            <Link
              href="/contact"
              aria-label="Contact us"
              className="max-sl:!hidden btn"
            >
              <span className="z-10">Contact Us</span>
            </Link>

            {/* Mobile overlay */}
            <div
              id="nav-overlay"
              className={isMenuOpen ? "active" : ""}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.classList.remove("menu-open");
              }}
              aria-hidden="true"
            ></div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="navigation-mobile"
          className={`${isMenuOpen ? "open" : ""} ${
            hasBeenOpened && isMenuOpen ? "first-open" : ""
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-header flex items-center  px-5 py-4">
            <button
              id="mobileClose"
              className="mobile-close navbar-toggle"
              onClick={toggleMenu}
              aria-label="Close navigation"
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="site-logo logo flex items-center gap-2 ">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <img
                  src={siteLogo || "/images/logo-dark.png"}
                  alt="Resins & Plastics Ltd"
                  className="l-dark h-10 w-auto"
                />
              </Link>
            </div>
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 text-sm text-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="font-medium">EN</span>
            </div>
          </div>

          <ul id="menu-mobile-menu" className="navigation-menu">
            {finalMenu.map((item) => (
              <MobileMenuItem
                key={item.id || item.url}
                item={item}
                closeMenu={() => setIsMenuOpen(false)}
              />
            ))}

            {/* Mobile Contact Button */}
            <li>
              <Link
                href="/contact"
                className="btn !py-3 !px-4 !text-white !inline-block"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.classList.remove("menu-open");
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

// ----------------------------------------------------------------------
// Desktop Menu Item
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// Desktop Menu Item
// ----------------------------------------------------------------------
function DesktopMenuItem({ item }) {
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <li
        key={item.id || item.url}
        className={`has-submenu group relative ${item.cssClasses?.join(" ")}`}
      >
        <Link
          href={item.url || "#"}
          className="sub-menu-item"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {item.label}
          <span className="menu-arrow w-4 h-4 flex items-center justify-center flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              className="group-hover:rotate-180 transition-transform duration-300"
            >
              <path
                d="M11.3538 1.35403L6.35378 6.35403C6.30735 6.40052 6.2522 6.4374 6.1915 6.46256C6.13081 6.48772 6.06574 6.50067 6.00003 6.50067C5.93433 6.50067 5.86926 6.48772 5.80856 6.46256C5.74786 6.4374 5.69272 6.40052 5.64628 6.35403L0.646284 1.35403C0.552464 1.26021 0.499756 1.13296 0.499756 1.00028C0.499756 0.867596 0.552464 0.740348 0.646284 0.646528C0.740104 0.552707 0.867352 0.5 1.00003 0.5C1.13272 0.5 1.25996 0.552707 1.35378 0.646528L6.00003 5.2934L10.6463 0.646528C10.6927 0.600073 10.7479 0.563222 10.8086 0.538081C10.8693 0.51294 10.9343 0.5 11 0.5C11.0657 0.5 11.1308 0.51294 11.1915 0.538081C11.2522 0.563222 11.3073 0.600073 11.3538 0.646528C11.4002 0.692983 11.4371 0.748133 11.4622 0.80883C11.4874 0.869526 11.5003 0.934581 11.5003 1.00028C11.5003 1.06598 11.4874 1.13103 11.4622 1.19173C11.4371 1.25242 11.4002 1.30757 11.3538 1.35403Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </Link>

        {/* Regular Submenu (No Mega Menu) */}
        <ul className="submenu">
          {item.children.map((child) => (
            <DesktopMenuItem key={child.id || child.url} item={child} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li key={item.id || item.url} className={item.cssClasses?.join(" ")}>
      <Link href={item.url || "#"} className="sub-menu-item">
        {item.label}
      </Link>
    </li>
  );
}

// ----------------------------------------------------------------------
// Mobile Menu Item
// ----------------------------------------------------------------------
function MobileMenuItem({ item, closeMenu }) {
  const hasChildren = item.children && item.children.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  if (hasChildren) {
    return (
      <li
        className={`menu-item  menu-item-has-children has-submenu last:border-0 ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href={item.url || "#"}
            className="sub-menu-item flex-1"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
          <span
            className="menu-arrow cursor-pointer p-2"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                d="M13.25 1.5L7 7.75L0.75 1.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <ul className={`submenu ${isOpen ? "open" : ""}`}>
          {item.children.map((child) => (
            <li key={child.id || child.url} className="menu-item">
              <Link
                href={child.url || "#"}
                className="sub-menu-item"
                onClick={closeMenu}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="menu-item">
      <Link
        href={item.url || "#"}
        className="sub-menu-item"
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    </li>
  );
}

// Scroll to Top Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrollToTop scrollToTop-3 active-progress ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToTop();
        }
      }}
    >
      <div className="arrowUp">
        <svg
          className="w-[20px] h-[20px]"
          data-name="1-Arrow Up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
        </svg>
      </div>
      <div
        className="water"
        style={{ transform: `translate(0px, ${100 - scrollProgress}%)` }}
      >
        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 560 20"
          style={{ display: "none" }}
        >
          <symbol id="wave">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </symbol>
        </svg>
      </div>
    </div>
  );
}
