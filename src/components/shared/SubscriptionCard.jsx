import { Building2, Award, Crown, CheckCircle } from "lucide-react";

export default function SubscriptionCard({ plan }) {
  const Icon = plan.name === "Free" ? Building2 : plan.name === "Pro" ? Award : Crown;
  const ringColor = plan.name === "Free" ? "ring-blue-300" : "ring-orange-300";

  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col">
      {/* Top badge icon */}
      <div
        className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md ring-2 ${ringColor} flex items-center justify-center`}
      >
        <Icon className="w-5 h-5 text-[#123499]" />
      </div>

      {/* Header with price */}
      <div className={`bg-gradient-to-r ${plan.highlighted ? "from-[#1D4ED8] to-[#1E3A8A]" : "from-[#1D4ED8] to-[#1E3A8A]"} text-white px-6 sm:px-8 pt-8 pb-6 text-center`}>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
          <span className="text-sm opacity-90">
            {plan.name === "Free" ? "/ Free Plan (Starter)" : "/month"}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 sm:px-8 py-6">
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent strip */}
      <div className="bg-blue-50 border-t border-blue-100 h-12 sm:h-14" />

      {/* Footer CTA */}
      <div className="px-6 sm:px-8 pb-6">
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
  );
}