"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, MapPin, DollarSign, ChevronLeft, ChevronRight, Search } from "lucide-react"

const JobsPage = () => {
  const [searchTitle, setSearchTitle] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedJobTypes, setSelectedJobTypes] = useState([])
  const [selectedExperience, setSelectedExperience] = useState([])
  const [selectedDatePosted, setSelectedDatePosted] = useState("")
  const [salaryRange, setSalaryRange] = useState([0, 9999])
  const [currentPage, setCurrentPage] = useState(1)
  const [savedJobs, setSavedJobs] = useState([])
  const [showMoreCategories, setShowMoreCategories] = useState(false)

  const allCategories = [
    "Healthcare",
    "Information Technology",
    "Hotels & Tourism",
    "Education",
    "Financial Services",
    "Engineering",
    "Marketing",
    "Sales",
    "HR",
    "Operations",
  ]
  const visibleCategories = showMoreCategories ? allCategories : allCategories.slice(0, 4)

  const jobTypes = ["Full Time", "Part Time", "Contract", "Remote", "Hybrid"]
  const experienceLevels = ["No experience", "Fresher", "Intermediate", "Expert"]
  const datePostedOptions = ["All", "Last hour", "Last 24 hours", "Last 7 days", "Last 30 days"]
  const locations = ["All Cities", "New York", "San Francisco", "Los Angeles", "Chicago", "Boston"]

  const mockJobs = [
    {
      id: 1,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png", // Placeholder image URL
    },
    {
      id: 2,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 3,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 4,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 5,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 6,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 7,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 8,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 9,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 10,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 11,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
    {
      id: 12,
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      type: "Full Time",
      date: "10 Oct 25",
      image: "/job-image-placeholder.png",
    },
  ]

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleJobType = (type) => {
    setSelectedJobTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleExperience = (level) => {
    setSelectedExperience((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <Image
          className="bg-gradient-to-r from-[#123499] to-[#2A57DE]"
          width={1621}
          height={264}
          src="/alljobs.png"
          alt="Job Image"
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-[#E6EFF6] rounded-lg p-6 sticky top-8">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Search by Job Title</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title or company"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] appearance-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc === "All Cities" ? "Choose city" : loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Category</label>
                <div className="space-y-2">
                  {visibleCategories.map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 text-[#0066CC] rounded focus:ring-2 focus:ring-[#0066CC]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{cat}</span>
                      <span className="ml-auto text-xs text-gray-500">10</span>
                    </label>
                  ))}
                </div>
                {!showMoreCategories && allCategories.length > 4 && (
                  <button
                    onClick={() => setShowMoreCategories(true)}
                    className="mt-3 w-full py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#123499] to-[#2A57DE] hover:from-[#0F2C80] hover:to-[#1F45B8] transition"
                  >
                    Show More
                  </button>
                )}
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Job Type</label>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedJobTypes.includes(type)}
                        onChange={() => toggleJobType(type)}
                        className="w-4 h-4 text-[#0066CC] rounded focus:ring-2 focus:ring-[#0066CC]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                      <span className="ml-auto text-xs text-gray-500">10</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Experience Level</label>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedExperience.includes(level)}
                        onChange={() => toggleExperience(level)}
                        className="w-4 h-4 text-[#0066CC] rounded focus:ring-2 focus:ring-[#0066CC]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{level}</span>
                      <span className="ml-auto text-xs text-gray-500">10</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Posted */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Date Posted</label>
                <div className="space-y-2">
                  {datePostedOptions.map((date) => (
                    <label key={date} className="flex items-center">
                      <input
                        type="radio"
                        name="datePosted"
                        checked={selectedDatePosted === date}
                        onChange={() => setSelectedDatePosted(date)}
                        className="w-4 h-4 text-[#0066CC] focus:ring-2 focus:ring-[#0066CC]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{date}</span>
                      <span className="ml-auto text-xs text-gray-500">10</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Salary Range</label>
                <input
                  type="range"
                  min="0"
                  max="9999"
                  value={salaryRange[1]}
                  onChange={(e) => setSalaryRange([salaryRange[0], Number.parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#0066CC]"
                />
                <div className="flex justify-between text-xs text-[#0066CC] mt-2">
                  <span>${salaryRange[0].toLocaleString()}</span>
                  <span>${salaryRange[1].toLocaleString()}</span>
                </div>
                <button className="mt-3 w-full py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#123499] to-[#2A57DE] hover:from-[#0F2C80] hover:to-[#1F45B8] transition">
                  Apply
                </button>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {["engineering", "design", "ux/ui", "marketing", "management", "construction"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-[#0066CC] text-xs rounded-full cursor-pointer hover:bg-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex"
                >
                  {/* Left Side Image */}
                  <div className="w-52">
                    <Image
                      src="/cardpic.png"
                      alt={`${job.title} image`}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Right Side Text and Details */}
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-start gap-2 flex-1">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                            <p className="text-sm text-gray-600">{job.company}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleSaveJob(job.id)}
                          className="text-gray-400 hover:text-red-500 transition flex-shrink-0"
                        >
                          <Heart
                            size={20}
                            fill={savedJobs.includes(job.id) ? "currentColor" : "none"}
                            className={savedJobs.includes(job.id) ? "text-red-500" : ""}
                          />
                        </button>
                      </div>

                      {/* Location */}
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin size={16} className="mr-1 flex-shrink-0" />
                        {job.location}
                      </div>

                      {/* Job Details */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <div  className="flex items-center gap-1">
                                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            <span className=" text-gray-400 text-xs font-semibold rounded">
                          {job.type}
                        </span>
                            </div>
                        <div  className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            <span className=" text-gray-400 text-xs font-semibold rounded">
                          {job.type}
                        </span>
                        </div>
                        </div>
                        <div>
                            <Image src="/calendar.svg" alt="Calendar icon" width={13} height={16} className="mr-1 inline-block" />
                            <span className=" b text-[#FF8C00] text-xs font-semibold rounded">
                          {job.date}
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center gap-2 mt-8">
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                <ChevronLeft size={20} />
              </button>
              <button className="px-4 py-2 bg-[#0066CC] text-white rounded font-semibold">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsPage