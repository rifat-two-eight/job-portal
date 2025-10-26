"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bell, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (href) =>
    `${
      pathname === href
        ? "text-[#123499] font-semibold underline underline-offset-8 decoration-[2px]"
        : "text-gray-600"
    } hover:text-gray-900 transition`;

  const btnClass = (href) =>
    `${
      pathname === href
        ? "bg-[#123499]"
        : "bg-gradient-to-r from-[#123499] to-[#2A57DE]"
    } px-6 py-2 text-white rounded-lg transition`;

  const iconClass = (href) =>
    `${
      pathname === href ? "text-[#123499]" : "text-gray-600"
    } hover:text-gray-900`;

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Jobarman" className="w-24 h-12" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/jobs" className={linkClass("/jobs")}>
            Jobs
          </Link>
          <Link
            href="/career-spotlight"
            className={linkClass("/career-spotlight")}
          >
            Career Spotlight
          </Link>
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
          <Link href="/faq" className={linkClass("/faq")}>
            FAQ
          </Link>
          <Link href="/history" className={linkClass("/history")}>
            History
          </Link>

          <Link
            href="/notifications"
            aria-label="Notifications"
            className={iconClass("/notifications")}
          >
            <Bell className="w-5 h-5" />
          </Link>

          <Link
            href="/chat"
            aria-label="Messages"
            className={iconClass("/chat")}
          >
            <MessageCircle className="w-5 h-5" />
          </Link>

          {/* Profile avatar with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none"
            >
              <img
                src="/avatar.png"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300 hover:ring-2 hover:ring-[#123499] transition"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link
                  href="/profile/myProfile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Job Seeker
                </Link>
                <Link
                  href="/profile/companyProfile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Recruiter
                </Link>
              </div>
            )}
          </div>

          <Link href="/login" className={btnClass("/login")}>
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col gap-4 px-4 py-4">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/jobs" className={linkClass("/jobs")}>
              Jobs
            </Link>
            <Link
              href="/career-spotlight"
              className={linkClass("/career-spotlight")}
            >
              Career Spotlight
            </Link>
            <Link href="/pricing" className={linkClass("/pricing")}>
              Pricing
            </Link>
            <Link href="/faq" className={linkClass("/faq")}>
              FAQ
            </Link>
            <Link href="/history" className={linkClass("/history")}>
              History
            </Link>

            {/* Mobile Notifications & Messages */}
            <Link href="/notifications" className={linkClass("/notifications")}>
              Notifications
            </Link>
            <Link href="/chat" className={linkClass("/messages")}>
              Messages
            </Link>

            {/* Mobile Profile avatar with dropdown */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img
                  src="/avatar.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                <span className="text-gray-700">Profile</span>
              </button>
              {dropdownOpen && (
                <div className="flex flex-col ml-10 gap-1">
                  <Link
                    href="/profile/jobseeker"
                    className="text-gray-700 hover:text-[#123499]"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Job Seeker
                  </Link>
                  <Link
                    href="/profile/recruiter"
                    className="text-gray-700 hover:text-[#123499]"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Recruiter
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/login"
              className={`${
                pathname === "/login" ? "bg-[#123499]" : "bg-blue-600"
              } px-6 py-2 text-white rounded-lg hover:bg-blue-700 transition w-full`}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
