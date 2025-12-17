"use client";

import { useState, useRef, useEffect } from "react";

export default function FilterDropdown({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="inline-flex items-center gap-2 border border-[#D6D6D6] font-semibold! rounded-[12px] px-4 py-3 text-xs bg-white! text-grey-7! focus:outline-none hover:bg-transparent!"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="dd-label">{label}</span>
        <svg
          className="h-4 w-4 text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="dd-menu absolute z-20 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg p-1 max-h-64 overflow-auto">
          <ul role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className="dd-item px-3 py-2 rounded-md md:text-base text-sm text-black hover:text-primary! hover:bg-[#CCD9EF]/20 cursor-pointer hover:font-semibold"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={value === option.value}
              >
                {option.label}
                {option.count !== undefined && option.count !== null && (
                  <span className="ml-2 text-xs text-gray-400">
                    ({option.count})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
