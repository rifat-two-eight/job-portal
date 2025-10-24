"use client";

import {
  Star,
  Code,
  Palette,
  Users,
  Stethoscope,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  FileText,
  Zap,
  Apple,
  Facebook,
  Twitter,
  Linkedin,
  UploadCloud,
  PlusCircle,
  BadgeCheck,
  UserPlus,
  Medal,
  Crown,
  Award,
  Building2,
} from "lucide-react";
import { useState, useEffect } from "react";
import JobCategoryCard from "./components/shared/CategoryCard";
import Link from "next/link";
import ReviewCard from "./components/shared/ReviewCard";
import Footer from "./components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/testimonials.json");
        if (!res.ok) return;
        const data = await res.json();
        setReviews(data);
      } catch (e) {
        // silent fail
      }
    };
    load();
  }, []);

  const jobCategories = [
    { icon: Stethoscope, label: "Healthcare", count: "2.5k jobs" },
    { icon: Code, label: "IT Jobs", count: "5.2k jobs" },
    { icon: Palette, label: "UX Designer", count: "1.8k jobs" },
    { icon: Users, label: "Management", count: "3.1k jobs" },
    { icon: Stethoscope, label: "Healthcare", count: "2.5k jobs" },
    { icon: UtensilsCrossed, label: "Restaurant", count: "1.2k jobs" },
  ];

  // testimonials data moved to shared module: ./components/shared/testimonials

  const howItWorks = [
    {
      step: "Step-1",
      title: "Create Account",
      description:
        "Create Your Account To Access Personalized Job Matches, Build Your Profile, And Start Applying With Ease.",
      icon: UserPlus,
    },
    {
      step: "Step-2",
      title: "Upload CV/Resume",
      description:
        "Our AI Analyzes Your Experience And Skills To Identify The Best Job Opportunities For You.",
      icon: UploadCloud,
    },
    {
      step: "Step-3",
      title: "Auto-Apply With AI",
      description:
        "Let AI Do The Hard Work: It Finds The Right Jobs, Matches Them To Your Skills, And Applies For You Automatically.",
      icon: PlusCircle,
    },
    {
      step: "Step-4",
      title: "Receive Interviews",
      description:
        "Relax While Our AI Brings The Right Opportunities Your Way, Turning Applications Into Interviews.",
      icon: BadgeCheck,
    },
  ];

  const subscriptionPlans = [
    {
      name: "Free",
      price: "$0",
      period: "per month",
      features: [
        "Browse job listings",
        "Limited auto-apply (1–50)",
        "Basic resume templates",
        "No AI cover letters",
        "No ATS score/analysis",
      ],
      cta: "Enable",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "per month",
      features: [
        "Unlimited auto-apply",
        "AI-generated cover letters",
        "ATS analysis & optimization tips",
        "Smart resume & cover letter builder",
        "Application tracking dashboard",
        "No Career Copilot or advanced analytics",
      ],
      cta: "Buy Now",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$69.99",
      period: "per month",
      features: [
        "Everything in Premium",
        "AI Career Copilot (personalized career guidance, skill gap analysis, learning paths)",
        "Recruiter visibility boost",
        "Advanced analytics & insights (resume performance, recruiter engagement, job match score)",
        "Priority support & early access to new features",
      ],
      cta: "Buy Now",
      highlighted: false,
    },
  ];

  return (
    <main className="w-full bg-white">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <img src="/logo.png" alt="Jobarman" className="w-24 h-12" />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Jobs
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              FAQ
            </Link>
            <Link href="/auth/login" className="px-6 py-2 bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white rounded-lg transition">
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
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Jobs
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full">
                Sign In
              </button>
            </nav>
          </div>
        )}
      </header>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                AI-Powered Job Matching
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Land Your Dream Job in IT & Healthcare
              </h1>
              <p className="text-lg text-gray-600 mb-6 text-balance">
                Join thousands of professionals finding their perfect roles with
                our AI-powered platform. Get matched with opportunities that fit
                your skills and ambitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                  Start Job Search
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium">
                  Learn More
                </button>
              </div>
              <div className="flex gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>AI Job Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Auto Apply</span>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/office-professionals.png"
                alt="Professionals working"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="/team-collaboration.png"
                alt="Team collaboration"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-balance">
              Resume Score Generator
            </h2>
            <p className="text-blue-100 text-balance">
              Choose the job title you are targeting
            </p>
          </div>

          <div className="bg-blue-500 rounded-lg p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter job title..."
                className="flex-1 px-4 py-3 rounded-lg border border-blue-400 bg-blue-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold whitespace-nowrap">
                Analyze
              </button>
            </div>

            <div className="bg-blue-600 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">
                  Drop Your Resume Here Or Click To Browse
                </span>
              </div>
              <p className="text-blue-100 text-sm">
                Supported formats: PDF, DOC, DOCX
              </p>
            </div>

            <div className="bg-blue-600 rounded-lg p-4 text-center">
              <p className="text-white font-semibold">Analysis Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
            Job Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobCategories.map((category, index) => (
              <JobCategoryCard
                key={index}
                icon={category.icon}
                label={category.label}
                count={category.count}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/allCategory">
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium flex items-center gap-2">
                Browse All
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Join over 1,000,000 professionals
            </h2>
            <p className="text-xl text-gray-600 mb-4 text-balance">
              already using Jobarman.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto text-balance">
              Explore Personalized Career Opportunities In Your Field With Our
              AI-Driven Platform, Designed To Connect You With The Right Roles
              That Match Your Skills And Ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((t, index) => (
              <ReviewCard
                key={index}
                name={t.name}
                role={t.role}
                rating={t.rating}
                text={t.text}
                image={t.image}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/reviews">
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
                View All Reviews
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works at Jobarman */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              How it works at Jobarman
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-balance">
              Jobarman simplifies hiring with easy job posting, AI-powered
              screening, and smart applicant management. From posting to
              onboarding, everything happens seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-8 bg-rose-50 border border-rose-100 hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-xs text-gray-500 mb-4">{item.step}</p>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#123499] text-white flex items-center justify-center mb-4">
                    {item.icon ? (
                      <item.icon className="w-8 h-8" />
                    ) : (
                      <Star className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-[#123499] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are You Employer Section */}
      <section className="py-12 sm:py-20 bg-[#EFF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#EFF5FF] rounded-lg p-8 sm:p-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Are you employer?
              </h2>
              <p className="text-gray-600 mb-6 text-balance">
                Hiring has never been this easy. With our platform, you can post
                job openings in just a few steps and instantly connect with
                thousands of active job seekers. Manage applications in real
                time, review candidate profiles, and invite the right people for
                interviews directly from your dashboard.
              </p>
              <button className="px-16 py-3 bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white rounded-lg transition font-medium">
                Post a Job
              </button>
            </div>
            <div>
              <img
                src="/areYouEmploy.png"
                alt="Employer"
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[64px] sm:text-4xl font-semibold text-[#123499] mb-4 text-balance">
              Subscription Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col"
              >
                {/* Top badge icon */}
                <div
                  className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md ring-2 ${
                    plan.name === "Free" ? "ring-blue-300" : "ring-orange-300"
                  } flex items-center justify-center`}
                >
                  {plan.name === "Free" ? (
                    <Building2 className="w-5 h-5 text-[#123499]" />
                  ) : plan.name === "Pro" ? (
                    <Award className="w-5 h-5 text-[#123499]" />
                  ) : (
                    <Crown className="w-5 h-5 text-[#123499]" />
                  )}
                </div>

                {/* Header with price */}
                <div className="bg-gradient-to-r from-[#1D4ED8] to-[#1E3A8A] text-white px-8 pt-8 pb-6 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.name === "Free" ? (
                      <span className="text-sm opacity-90">/ Free Plan (Starter)</span>
                    ) : (
                      <span className="text-sm opacity-90">/month</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="px-8 py-6">
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

      <Footer />
    </main>
  );
}
