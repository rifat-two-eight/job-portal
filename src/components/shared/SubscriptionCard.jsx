import { Building2, Award, Crown, Check } from "lucide-react";

export default function SubscriptionCard({ plan }) {
  const Icon =
    plan.name === "Free" ? Building2 : plan.name === "Pro" ? Award : Crown;
  const ringColor =
    plan.name === "Free"
      ? "ring-blue-300"
      : plan.name === "Pro"
      ? "ring-orange-300"
      : "ring-yellow-300";

  return (
    <div className="relative flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Top Badge Icon */}
      <div
        className={`absolute -top-5 left-1/2  transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md ring-2 ${ringColor} flex items-center justify-center`}
      >
        <Icon className="w-6 h-6 text-[#123499]" />
      </div>

      {/* Header with price */}
      <div
        className={`bg-gradient-to-r ${
          plan.highlighted
            ? "from-[#1D4ED8] to-[#1E3A8A]" // Highlighted plan
            : "from-[#3B82F6] to-[#2563EB]" // Normal plan
        } text-white px-6 pt-8 pb-6 text-center rounded-t-xl`}
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
            <span className="text-sm opacity-90">
              {plan.name === "Free"
                ? "/ Free Plan (Starter)"
                : plan.period
                ? `/${plan.period}`
                : "/month"}
            </span>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="px-6 sm:px-8 py-6 flex-1">
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="px-6 sm:px-8 pb-6 pt-3 bg-[#EEF6FB]">
        <button
          className={`w-full py-3 rounded-md font-semibold transition-colors ${
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
