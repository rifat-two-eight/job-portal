"use client"

import { useState } from "react"
import { Heart, FileText, Star, Settings, LogOut, X, Lock, HelpCircle, Trash2, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  const [activeMenu, setActiveMenu] = useState("My Profile") // Track active menu item
  const [isSettingsOpen, setIsSettingsOpen] = useState(false) // Track Settings submenu toggle

  const menuItems = [
    { icon: User, label: "My Profile" },
    { icon: Heart, label: "Favorite List" },
    { icon: FileText, label: "Payment History" },
    { icon: Star, label: "Platform Review" },
    { icon: Settings, label: "Settings", subItems: [
      { icon: Lock, label: "Change Password" },
      { icon: HelpCircle, label: "Help and Support" },
      { icon: Trash2, label: "Delete Account" },
    ]},
    { icon: LogOut, label: "Log Out" },
  ]

  const infoItems = [
    { label: "Gender", value: "Male" },
    { label: "Date Of Birth", value: "01 January 2000" },
    { label: "Nationality", value: "American" },
    { label: "Language", value: "English" },
    { label: "Address", value: "Derby Ave, Strubens Valley, Gauteng" },
    { label: "Mobile", value: "+99123456789" },
    { label: "Email", value: "User@Gmail.Com" },
    { label: "LinkedIn", value: "LinkedIn.Com/Profile" },
  ]

  const educations = [
    {
      degree: "PHD in Design",
      university: "Oxford University",
      session: "Session: 2020-2024",
      passingYear: "Passing Year: 2025",
      gpa: "Grade Point: GPA 5.00",
    },
    {
      degree: "PHD in Design",
      university: "Oxford University",
      session: "Session: 2020-2024",
      passingYear: "Passing Year: 2025",
      gpa: "Grade Point: GPA 5.00",
    },
  ]

  const experiences = [
    {
      title: "Sr. UIUX Designer",
      company: "Design Hill",
      period: "2024-Present",
      description: "Designing Mobile & Web Apps With Developers For Smooth, User-Friendly Experiences.",
    },
    {
      title: "Sr. UIUX Designer",
      company: "Design Hill",
      period: "2024-Present",
      description: "Designing Mobile & Web Apps With Developers For Smooth, User-Friendly Experiences.",
    },
  ]

  const skills = ["Figma", "UX Design", "Website"]

  const handleMenuClick = (label) => {
    if (label === "Settings") {
      setIsSettingsOpen(!isSettingsOpen)
    } else {
      setActiveMenu(label)
      setIsSettingsOpen(false) // Close settings submenu if another item is clicked
    }
  }

  return (
    <div className="w-full bg-[#FBFBFB]">
      <div className="flex min-h-screen max-w-7xl mx-auto py-10">
        {/* Sidebar */}
        <div className="w-72 bg-white rounded-xl p-6 flex flex-col">
          {/* Profile Card */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Atiqur Rifat</h2>
            <p className="text-sm text-gray-600">UX Designer</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Image src="/premiumplan.svg" width={24} height={24} alt="Profile" className="w-6 h-6 rounded-full" />
              <span className="text-sm font-semibold text-[#FF8F27]">Premium Plan</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left ${
                    activeMenu === item.label ? "bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white" : ""
                  }`}
                  onClick={() => handleMenuClick(item.label)}
                >
                  <item.icon className={`w-5 h-5 ${activeMenu === item.label ? "text-white" : "text-black"}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.label === "Settings" && (
                    <span className="ml-auto text-gray-400">{isSettingsOpen ? "⌄" : "›"}</span>
                  )}
                </button>
                {item.label === "Settings" && isSettingsOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left ${
                          activeMenu === subItem.label ? "bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white" : ""
                        }`}
                        onClick={() => setActiveMenu(subItem.label)}
                      >
                        <subItem.icon className={`w-5 h-5 ${activeMenu === subItem.label ? "text-white" : "text-black"}`} />
                        <span className="text-sm font-medium">{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-8">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Personal Information</h1>

            <div className="grid gap-8" style={{ gridTemplateColumns: "536px 1fr" }}>
              {/* Left Column */}
              <div className="w-[536px] space-y-6 flex flex-col">
                {/* Personal Information - Group 1 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  {infoItems.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4 last:mb-0">
                      <label className="text-sm font-medium text-gray-600">{item.label}</label>
                      <p className="text-gray-600 font-medium">{item.value}</p>
                      
                    </div>
                    
                  ))}
                  
                </div>

                {/* Personal Information - Group 2 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  {infoItems.slice(5).map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4 last:mb-0">
                      <label className="text-sm font-medium text-gray-600">{item.label}</label>
                      <p className="text-gray-600 font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Summary Section */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Summary</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Creative And Detail-Oriented UI/UX Designer With Expertise in Crafting Intuitive Mobile And Web
                    Experiences. Skilled in Wireframing, Prototyping, And Design Systems
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Education Qualification */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Education Qualification</h3>
                  <div className="space-y-6">
                    {educations.map((edu, index) => (
                      <div key={index} className={index !== educations.length - 1 ? "pb-6 border-b border-gray-200" : ""}>
                        <div className="pl-4 border-l-4 border-[#B0DCC1]">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-[#008F37] font-semibold text-md mt-2">{edu.university}</p>
                          <div className="mt-3 space-y-1 text-xs text-gray-600">
                            <p>{edu.session}</p>
                            <p>{edu.passingYear}</p>
                            <p>{edu.gpa}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Work Experience</h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className={index !== experiences.length - 1 ? "pb-6 border-b border-gray-200" : ""}
                      >
                        <div className="pl-4 border-l-4 border-[#B0CCE2]">
                          <h4 className="font-semibold">{exp.title}</h4>
                          <p className="text-[#147FC7] font-semibold text-md mt-2">{exp.company}</p>
                          <p className="text-gray-600 text-xs mt-1">{exp.period}</p>
                          <p className="text-gray-600 text-xs mt-3">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                        <X className="w-3 h-3 cursor-pointer hover:text-purple-900" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <Link href="/profile/editProfile">
              <button className="w-full mt-8 bg-gradient-to-r from-[#123499] to-[#2A57DE] hover:from-[#0f2f85] hover:to-[#2247b6] text-white font-bold py-3 px-4 rounded-lg">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}