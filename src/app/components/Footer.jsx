import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin as LinkedinIcon,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Apple,
  Play,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0B2A7A] via-[#1D3FAF] to-[#2A57DE] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Jobarman" className="w-12 h-12" />
              <span className="text-2xl font-semibold tracking-wide">JOBARMAN</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition">Resume</a></li>
              <li><a href="#" className="hover:text-white transition">History</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (684) 555–0102</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> Michael.Mitc@example.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> 2715 Ash Dr. San Jose, South Dakota 83475</li>
              <li className="flex items-center gap-2"><LinkedinIcon className="w-4 h-4" /> LinkedIn.Com/Jobarman</li>
            </ul>
          </div>

          {/* Mobile App + Social */}
          <div>
            <h4 className="font-semibold mb-4">Our Mobile App</h4>
            <div className="flex flex-col gap-3">
              {/* App Store badge */}
              <a href="#" className="flex items-center gap-3 bg-white text-gray-900 rounded-lg px-4 py-2 shadow-sm">
                <Apple className="w-6 h-6" />
                <div>
                  <div className="text-xs leading-tight">Download on the</div>
                  <div className="text-sm font-semibold">Apple Store</div>
                </div>
              </a>
              {/* Google Play badge */}
              <a href="#" className="flex items-center gap-3 bg-white text-gray-900 rounded-lg px-4 py-2 shadow-sm">
                <Play className="w-6 h-6" />
                <div>
                  <div className="text-xs leading-tight">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Connect With Us</h4>
              <div className="flex items-center gap-3 text-blue-100">
                <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><LinkedinIcon className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-blue-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-blue-100 flex items-center justify-between">
          <span>© 2024 Exemple.Com. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}