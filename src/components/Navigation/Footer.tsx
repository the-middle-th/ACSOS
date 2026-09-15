'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">AsianCoding</h3>
            <p className="text-gray-400 text-sm">
              B2B barcode scanning, RFID warehouse, and retail POS solutions for Thailand.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/barcode-scanner-thailand" className="hover:text-white">
                  Barcode Scanner
                </Link>
              </li>
              <li>
                <Link href="/rfid-warehouse-system" className="hover:text-white">
                  RFID Warehouse
                </Link>
              </li>
              <li>
                <Link href="/warehouse-automation-thailand" className="hover:text-white">
                  Warehouse Automation
                </Link>
              </li>
              <li>
                <Link href="/retail-pos-barcode-system" className="hover:text-white">
                  Retail POS
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+66XXX" className="hover:text-white">
                  +66-XXX-XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@asiancoding.com" className="hover:text-white">
                  info@asiancoding.com
                </a>
              </li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} AsianCoding. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
