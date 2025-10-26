"use client";

import { useEffect, useState } from "react";
import SubscriptionCard from "@/components/shared/SubscriptionCard";

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const res = await fetch("/subscription-plans.json");
        if (!res.ok) return;
        const data = await res.json();
        setPlans(data);
      } catch (e) {
        // silent fail
      }
    };
    loadPlans();
  }, []);
  return (
    <main className="w-full bg-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#123499] mb-12">
            Subscription Plan
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <SubscriptionCard key={idx} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
