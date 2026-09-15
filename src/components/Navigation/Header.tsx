'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          AsianCoding
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 lg:static lg:border-0 lg:flex lg:items-center lg:gap-8 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            href="/barcode-scanner-thailand"
            className="block lg:inline px-4 py-2 lg:p-0 text-gray-700 hover:text-primary"
          >
            Barcode Scanner
          </Link>
          <Link
            href="/rfid-warehouse-system"
            className="block lg:inline px-4 py-2 lg:p-0 text-gray-700 hover:text-primary"
          >
            RFID Warehouse
          </Link>
          <Link
            href="/warehouse-automation-thailand"
            className="block lg:inline px-4 py-2 lg:p-0 text-gray-700 hover:text-primary"
          >
            Warehouse Automation
          </Link>
          <Link
            href="/retail-pos-barcode-system"
            className="block lg:inline px-4 py-2 lg:p-0 text-gray-700 hover:text-primary"
          >
            Retail POS
          </Link>
          <Link
            href="/contact"
            className="block lg:inline px-4 py-2 lg:p-0 bg-primary text-white rounded hover:bg-blue-700 font-semibold"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
