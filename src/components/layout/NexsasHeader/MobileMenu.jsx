'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronDown } from 'lucide-react';

export default function MobileMenu({ isOpen, items, onClose, logo }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-9998 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[350px] bg-background-2 border-l border-white/10 z-9999 transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={onClose} className="block w-24">
              <Image src={logo} alt="Logo" width={100} height={40} className="w-full h-auto" />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 text-white/90 hover:text-white"
              aria-label="Close Mobile Menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1">
              {items.map(item => (
                <MobileNavItem key={item.id} item={item} onClose={onClose} />
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-6 border-t border-white/5">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-full bg-opai-purple py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function MobileNavItem({ item, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.url}
          onClick={onClose}
          className="block py-3 text-base text-white/90 hover:text-white transition-colors font-sora"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5 text-base text-white/90 hover:text-white transition-colors font-sora"
      >
        <span>{item.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
      >
        <ul className="mobile-submenu block pl-2 border-l border-white/10">
          {item.children.map(child => (
            <li key={child.id}>
              <Link
                href={child.url}
                onClick={onClose}
                className="text-tagline-3 text-white/80 hover:text-white/90 ml-4 block py-2.5 text-left font-normal transition-colors duration-200 font-sora"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
