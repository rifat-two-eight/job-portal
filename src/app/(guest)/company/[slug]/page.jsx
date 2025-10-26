"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ChevronLeft } from "lucide-react"

// Mock company data keyed by slug
const companies = {
  "design-lab": {
    name: "Design-Lab",
    tagline:
      "Marketing that performs. Web, Social, and Paid Ads by a Google Partner & B Corp agency.",
    logo: "/logo.png",
    cover: "/company.jpg",
    gallery: [
      "/alljobs.png",
      "/cardpic.png",
      "/next.svg",
      "/premiumplan.svg",
      "/otp.svg",
      "/register.svg",
      "/reset.svg",
      "/globe.svg",
      "/file.svg",
      "/window.svg",
      "/boyanim.svg",
      "/girlanim.svg",
    ],
  },
  "design-hill": {
    name: "Design-Hill",
    tagline:
      "Marketing that performs. Web, Social, and Paid Ads by a Google Partner & B Corp agency.",
    logo: "/logo.png",
    cover: "/cardpic.png",
    gallery: [
      "/alljobs.png",
      "/cardpic.png",
      "/next.svg",
      "/premiumplan.svg",
      "/otp.svg",
      "/register.svg",
      "/reset.svg",
      "/globe.svg",
      "/file.svg",
      "/window.svg",
      "/boyanim.svg",
      "/girlanim.svg",
    ],
  },
}

export default function CompanyPage({ params }) {
  const { slug } = params
  const company = companies[slug] || companies["design-hill"]

  const tabs = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "jobs", label: "Jobs" },
  ]
  const [activeTab, setActiveTab] = useState("home")

  const gallery = useMemo(() => company.gallery, [company])

  return (
    <div className="min-h-screen bg-white">
      {/* Back button over cover image */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        <Image src={company.cover} alt="Company cover" fill priority className="object-cover" />
        <div className="absolute left-4 top-4">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </Link>
        </div>
      </div>

      {/* Header: centered logo, name, tagline, tabs */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 sm:-mt-12">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg ring-1 ring-gray-200 mx-auto grid place-items-center overflow-hidden">
          <Image src={company.logo} alt={`${company.name} logo`} width={96} height={96} className="object-contain" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mt-3">{company.name}</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-1 text-sm">
          {company.tagline}
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={
                activeTab === t.key
                  ? "px-5 py-2 rounded-md bg-orange-500 text-white font-semibold"
                  : "px-5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {activeTab === "home" && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {gallery.map((img, i) => (
                <div key={i} className="relative w-full aspect-square overflow-hidden rounded-lg border">
                  <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <section className="text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
            <p>
              We are a creative, performance-focused agency delivering web, social, and paid media solutions for brands.
              Our team partners with clients to strategize, design, and execute campaigns that drive measurable growth.
            </p>
          </section>
        )}

        {activeTab === "jobs" && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Jobs</h2>
            <p className="text-gray-600">Open roles from this company will appear here.</p>
          </section>
        )}
      </div>
    </div>
  )
}