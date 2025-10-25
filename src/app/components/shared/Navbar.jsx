"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bell } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `${
      pathname === href ? "text-[#123499] font-semibold" : "text-gray-600"
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
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
          <Link href="/faq" className={linkClass("/faq")}>
            FAQ
          </Link>
          {/* Notifications icon */}
          <Link
            href="/notifications"
            aria-label="Notifications"
            className={iconClass("/notifications")}
          >
            <Bell className="w-5 h-5" />
          </Link>
          <Link href="/auth/login" className={btnClass("/auth/login")}>
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
            <Link href="/pricing" className={linkClass("/pricing")}>
              Pricing
            </Link>
            <Link href="/faq" className={linkClass("/faq")}>
              FAQ
            </Link>
            <Link href="/notifications" className={linkClass("/notifications")}>
              Notifications
            </Link>
            <Link
              href="/auth/login"
              className={`${
                pathname === "/auth/login" ? "bg-[#123499]" : "bg-blue-600"
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
