"use client";

import { CheckCircle, Crown, Award, Building2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    priceLabel: "$0/",
    subLabel: "1st 50 Aplication", // keeping original spelling from screenshot
    badgeIcon: Building2,
    cta: "Enable",
  },
  {
    name: "Pro",
    priceLabel: "$49.99/",
    subLabel: "month",
    badgeIcon: Award,
    cta: "Buy Now",
  },
  {
    name: "Premium",
    priceLabel: "$49.99/",
    subLabel: "Yearly",
    badgeIcon: Crown,
    cta: "Buy Now",
  },
];

const features = [
  "Unlimited Job Applications",
  "Top Ranking In Recruiter Search Results",
  "Exclusive & Early Access To Premium Job Posts",
  "AI-Powered CV Review & Optimization Tips",
  "Free Monthly Skill Test & Certification",
  "Direct Chat + Video Call With Employers",
  "1x Mock Interview Preparation Session",
  "24/7 Priority Support",
];

export default function Pricing() {
  return (
    <main className="w-full bg-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#123499] mb-12">
            Subscription Plan
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col">
                {/* Top badge icon */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md ring-2 ring-blue-300 flex items-center justify-center">
                  {plan.badgeIcon ? <plan.badgeIcon className="w-6 h-6 text-[#123499]" /> : null}
                </div>

                {/* Header with price */}
                <div className="bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white px-8 pt-10 pb-6 text-center">
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold">{plan.priceLabel}</span>
                    <span className="text-base opacity-90">{plan.subLabel}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-8 py-6">
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent strip */}
                <div className="bg-blue-50 border-t border-blue-100 h-14" />

                {/* Footer CTA */}
                <div className="px-8 pb-6">
                  <button
                    className={`w-full py-3 rounded-md font-semibold transition ${
                      plan.name === "Free"
                        ? "bg-blue-50 text-[#123499] border border-blue-300 hover:bg-blue-100"
                        : "bg-[#123499] text-white hover:bg-blue-700"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
