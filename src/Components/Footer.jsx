import React from "react";

function Footer() {
  return (
    <footer className="relative w-full mt-20 bg-gray-50">
      <div className="w-full px-8 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid justify-between grid-cols-1 gap-8 md:grid-cols-2">
          <h5 className="mb-6 text-xl font-semibold text-amber-700">
            Eva’s Garden
          </h5>
          <div className="grid justify-between grid-cols-3 gap-6">
            {/* Product / Services */}
            <ul>
              <p className="block mb-1 text-base font-semibold text-slate-800">
                Services
              </p>
              <li>
                <a
                  href="/weddings"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Weddings
                </a>
              </li>
              <li>
                <a
                  href="/corporate"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Corporate Events
                </a>
              </li>
              <li>
                <a
                  href="/private"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Private Parties
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Gallery
                </a>
              </li>
            </ul>

            {/* Company */}
            <ul>
              <p className="block mb-1 text-base font-semibold text-slate-800">
                Company
              </p>
              <li>
                <a
                  href="/about"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  FAQs
                </a>
              </li>
            </ul>

            {/* Resources */}
            <ul>
              <p className="block mb-1 text-base font-semibold text-slate-800">
                Resources
              </p>
              <li>
                <a
                  href="/blog"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Calendar & Updates
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="block text-slate-600 py-1 hover:text-amber-600 text-sm"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center w-full py-6 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
            © {new Date().getFullYear()} Eva’s Garden. All Rights Reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4 text-slate-600 sm:justify-center">
            <a
              href="#"
              className="block transition-opacity hover:opacity-80"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="block transition-opacity hover:opacity-80"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="block transition-opacity hover:opacity-80"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
