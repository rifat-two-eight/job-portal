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
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const jobCategories = [
    { icon: Stethoscope, label: "Healthcare", count: "2.5k jobs" },
    { icon: Code, label: "IT Jobs", count: "5.2k jobs" },
    { icon: Palette, label: "UX Designer", count: "1.8k jobs" },
    { icon: Users, label: "Management", count: "3.1k jobs" },
    { icon: Stethoscope, label: "Healthcare", count: "2.5k jobs" },
    { icon: UtensilsCrossed, label: "Restaurant", count: "1.2k jobs" },
  ];

  const testimonials = [
    {
      name: "Kristin Watson",
      role: "Product Manager",
      rating: 5,
      text: "This platform made my job search so much easier. I applied to the best matching jobs in no time and landed interviews.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kristin",
    },
    {
      name: "Savannah Nguyen",
      role: "UX Designer",
      rating: 5,
      text: "This Platform Made My Job Search So Much Easier. I Applied To The Best Matching Jobs In No Time And Landed My Dream Role!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Savannah",
    },
    {
      name: "Courtney Henry",
      role: "Account Officer",
      rating: 5,
      text: "Verified Profiles & Secure In Time and Ensures You Connect With The Right Candidates.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Courtney",
    },
    {
      name: "Floyd Miles",
      role: "Product Manager",
      rating: 5,
      text: "And Applying To Jobs Takes Just A Few Clicks.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Floyd",
    },
    {
      name: "Marvin McKinney",
      role: "Web Designer",
      rating: 5,
      text: "Hacking Applications Is A Game Changer. I Have Landed My Dream Job Within Days.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marvin",
    },
    {
      name: "Esther Howard",
      role: "General Manager",
      rating: 5,
      text: "A Perfect Platform For Both Job Seekers And Recruiters. Highly Recommended For Anyone About Their Career Or Hiring Needs.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Esther",
    },
    {
      name: "Theresa Webb",
      role: "President of Sales",
      rating: 5,
      text: "As A Recruiter, I Appreciate The Verified Profiles & Secure In Time and Ensures You Connect With The Right Candidates.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Theresa",
    },
    {
      name: "Dionne Russell",
      role: "Marketing Coordinator",
      rating: 5,
      text: "Its Advanced Filters And Search Options Really Helped Me Find Jobs. And Applying To Jobs Takes Just A Few Clicks.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dionne",
    },
  ];

  const howItWorks = [
    {
      step: "Step 1",
      title: "Create Account",
      description: "Sign up and build your professional profile in minutes",
    },
    {
      step: "Step 2",
      title: "Upload CV/Resume",
      description: "Upload your resume and let AI analyze your skills",
    },
    {
      step: "Step 3",
      title: "Auto Apply",
      description: "AI automatically applies to matching jobs for you",
    },
    {
      step: "Step 4",
      title: "Resume Interview",
      description: "Get interview tips and resume feedback from experts",
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
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              FAQ
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white rounded-lg transition">
              Sign In
            </button>
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
            {jobCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.label}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium flex items-center gap-2">
              Browse All
              <ArrowRight className="w-4 h-4" />
            </button>
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
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
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
              Streamline your job search with our intelligent matching and smart
              application management. From finding to landing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
                className={`rounded-lg p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-gray-50 border border-gray-200 text-gray-900"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      plan.highlighted ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${
                          plan.highlighted ? "text-blue-100" : "text-blue-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-blue-50" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-gray-300 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Jobarman</h3>
              <p className="text-sm text-gray-400">
                Your AI-powered job matching platform connecting talent with
                opportunity.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Get Mobile App</h4>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm">
                  <Apple className="w-4 h-4" />
                  App Store
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm">
                  <Zap className="w-4 h-4" />
                  Google Play
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                &copy; 2025 Jobarman. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
