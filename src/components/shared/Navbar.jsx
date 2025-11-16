"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bell, MessageCircle, User } from "lucide-react";

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
        ? "text-[#123499] font-semibold underline underline-offset-4 lg:underline-offset-8"
        : "text-gray-600"
    } hover:text-gray-900 transition-colors text-sm lg:text-base`;

  const btnClass = (href) =>
    `${
      pathname === href
        ? "bg-[#123499]"
        : "bg-gradient-to-r from-[#123499] to-[#2A57DE]"
    } px-4 py-2 lg:px-6 lg:py-2.5 text-sm lg:text-base text-white rounded-lg transition-all hover:shadow-md`;

  const iconClass = (href) =>
    `${
      pathname === href ? "text-[#123499]" : "text-gray-600"
    } hover:text-gray-900 transition-colors`;

  return (
    <header className="border-b-2 border-[#C7DEF2] sticky top-0 bg-white z-50">
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img src="/logo.png" alt="Jobarman" className="w-20 h-10 sm:w-22 lg:w-24 lg:h-12" />
        </Link>

        {/* Desktop Navigation - Only visible on large screens (lg: 1024px+) */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/jobs" className={linkClass("/jobs")}>
            Jobs
          </Link>
          <Link href="/my-job" className={linkClass("/my-job")}>
            My Job
          </Link>
          <Link href="/career-spotlight" className={linkClass("/career-spotlight")}>
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
          <Link href="/my-resume" className={linkClass("/my-resume")}>
            My Resume
          </Link>
          <Link href="/analyze-resume" className={linkClass("/analyze-resume")}>
            Analyze Resume
          </Link>

          {/* Icons */}
          <Link href="/notifications" aria-label="Notifications" className={iconClass("/notifications")}>
            <Bell className="w-5 h-5" />
          </Link>
          <Link href="/chat" aria-label="Messages" className={iconClass("/chat")}>
            <MessageCircle className="w-5 h-5" />
          </Link>

          {/* Profile Avatar */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none p-1 rounded-full hover:bg-white/50 transition"
            >
              <User className="w-7 h-7 lg:w-8 lg:h-8 text-gray-500 border border-gray-300 rounded-full p-1 hover:ring-2 hover:ring-[#123499] transition" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 lg:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                <Link
                  href="/profile/myProfile"
                  className="block px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Job Seeker
                </Link>
                <Link
                  href="/profile/companyProfile"
                  className="block px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base text-gray-700 hover:bg-gray-100 transition"
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

        {/* Mobile/Tablet Menu Button - Visible on <lg (1024px) */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Navigation - Fullscreen dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col gap-3 px-3 py-4 sm:px-4">
            <Link href="/" className={linkClass("/")} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/jobs" className={linkClass("/jobs")} onClick={() => setMobileMenuOpen(false)}>
              Jobs
            </Link>
            <Link href="/my-job" className={linkClass("/my-job")} onClick={() => setMobileMenuOpen(false)}>
              My Job
            </Link>
            <Link href="/career-spotlight" className={linkClass("/career-spotlight")} onClick={() => setMobileMenuOpen(false)}>
              Career Spotlight
            </Link>
            <Link href="/pricing" className={linkClass("/pricing")} onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/faq" className={linkClass("/faq")} onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/history" className={linkClass("/history")} onClick={() => setMobileMenuOpen(false)}>
              History
            </Link>
            <Link href="/my-resume" className={linkClass("/my-resume")} onClick={() => setMobileMenuOpen(false)}>
              My Resume
            </Link>
            <Link href="/analyze-resume" className={linkClass("/analyze-resume")} onClick={() => setMobileMenuOpen(false)}>
              Analyze Resume
            </Link>

            {/* Icons as Links */}
            <Link href="/notifications" className={`${linkClass("/notifications")} flex items-center gap-2`} onClick={() => setMobileMenuOpen(false)}>
              <Bell className="w-5 h-5" /> Notifications
            </Link>
            <Link href="/chat" className={`${linkClass("/chat")} flex items-center gap-2`} onClick={() => setMobileMenuOpen(false)}>
              <MessageCircle className="w-5 h-5" /> Messages
            </Link>

            {/* Mobile/Tablet Profile Dropdown */}
            <div className="flex flex-col gap-2 py-2">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none text-left w-full"
              >
                <User className="w-7 h-7 text-gray-500 border border-gray-300 rounded-full p-1" />
                <span className="text-sm sm:text-base text-gray-700 font-medium">Profile</span>
              </button>
              {dropdownOpen && (
                <div className="flex flex-col ml-9 gap-1.5">
                  <Link
                    href="/profile/jobseeker"
                    className="text-sm sm:text-base text-gray-700 hover:text-[#123499] transition"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Job Seeker
                  </Link>
                  <Link
                    href="/profile/recruiter"
                    className="text-sm sm:text-base text-gray-700 hover:text-[#123499] transition"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Recruiter
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/login"
              className={`w-full text-center ${btnClass("/login")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}