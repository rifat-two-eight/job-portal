import { Phone, Mail, MapPin, Linkedin as LinkedinIcon } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2B4CB8] via-[#3B5FD9] to-[#4A6EFA] text-white">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1️⃣ Company Branding (Only Logo) */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="Jobarman"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* 2️⃣ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 underline underline-offset-[10px] decoration-[2px]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Jobs", "Resume", "History", "Pricing"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 3️⃣ Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 underline underline-offset-[10px] decoration-[2px]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (684) 555–0102
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                Michael.Mitc@example.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                2715 Ash Dr. San Jose, South Dakota 83475
              </li>
              <li className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 flex-shrink-0" />
                Linkedin.com/Jobarman
              </li>
            </ul>
          </div>

          {/* 4️⃣ Mobile App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 underline underline-offset-[10px] decoration-[2px]">
              Our Mobile App
            </h3>

            {/* App Store Buttons */}
            <div className="space-y-3 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-gray-900 rounded-xl px-4 py-3 hover:bg-gray-50 shadow-sm transition-colors duration-200"
              >
                <FaApple className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-600">Download On The</p>
                  <p className="text-sm font-semibold">Apple Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white text-gray-900 rounded-xl px-4 py-3 hover:bg-gray-50 shadow-sm transition-colors duration-200"
              >
                <FaGooglePlay className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-600">Get it On</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-blue-200/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4">
          {/* Left Side - Copyright */}
          <div className="text-sm text-blue-100 text-center md:text-left">
            © 2024 Example.com. All Rights Reserved.
          </div>

          {/* Right Side - Icons + Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaFacebookF, color: "text-blue-600" },
                { Icon: FaLinkedinIn, color: "text-blue-600" },
                { Icon: FaInstagram, color: "text-pink-500" },
                { Icon: FaYoutube, color: "text-red-600" },
                { Icon: FaTiktok, color: "text-gray-800" },
              ].map(({ Icon, color }, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                </Link>
              ))}
            </div>

            {/* Terms and Privacy Links */}
            <div className="flex items-center gap-3 text-sm">
              <Link
                href="/terms-and-conditions"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <span className="text-blue-200/50">•</span>
              <Link
                href="/privacy-policy"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
