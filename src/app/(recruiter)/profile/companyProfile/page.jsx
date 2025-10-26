"use client";

import { useState, useEffect } from "react";
import { Heart, FileText, Star, Settings, LogOut, X, Lock, Trash2, User, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RecruiterProfilePage() {
  const [activeMenu, setActiveMenu] = useState("Company Profile"); // Track active menu item
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Track Settings submenu toggle
  const pathname = usePathname(); // Get the current route

  const menuItems = [
    { icon: User, label: "Company Profile", path: "/profile/companyProfile" },
    { icon: Settings, label: "Settings", subItems: [
      { icon: Lock, label: "Change Password", path: "/profile/companySettings/changePassword" },
      { icon: Trash2, label: "Delete Account", path: "/profile/companySettings/deleteAccount" },
    ]},
    { icon: LogOut, label: "Log Out", path: "/profile/companyLogout" },
  ];

  const infoItems = [
    { label: "Gender", value: "Male" },
    { label: "Date Of Birth", value: "01 January 2000" },
    { label: "Nationality", value: "American" },
    { label: "Language", value: "English" },
    { label: "Address", value: "Derby Ave, Strubens Valley, Gauteng" },
    { label: "Mobile", value: "+99123456789" },
    { label: "Email", value: "User@Gmail.Com" },
    { label: "LinkedIn", value: "LinkedIn.Com/Profile" },
  ];

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
  ];

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
  ];

  const skills = ["Figma", "UX Design", "Website"];

  const jobs = [
    {
      title: "Sr. UX Designer",
      company: "Design Lab",
      location: "California, United States",
      salary: "80-120k",
      date: "10 Oct 25",
      image: "/cardpic.png",
    },
    {
      title: "Sr. UI Designer",
      company: "Creative Studio",
      location: "New York, United States",
      salary: "70-100k",
      date: "12 Oct 25",
      image: "/cardpic.png",
    },
  ];

  // Update activeMenu based on the current route
  useEffect(() => {
    const currentPath = pathname;
    const matchingItem = menuItems.find((item) =>
      item.path === currentPath || (item.subItems && item.subItems.some((sub) => sub.path === currentPath))
    );
    if (matchingItem) {
      setActiveMenu(matchingItem.label);
      if (matchingItem.label === "Settings") {
        setIsSettingsOpen(true);
      } else {
        setIsSettingsOpen(false);
      }
    }
  }, [pathname]);

  const handleMenuClick = (label) => {
    if (label === "Settings") {
      setIsSettingsOpen(!isSettingsOpen);
    } else {
      setActiveMenu(label);
      setIsSettingsOpen(false); // Close settings submenu if another item is clicked
    }
  };

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
            <h2 className="text-xl font-bold text-gray-900">Design Hill</h2>
            <p className="text-sm text-gray-600">Marketing that Performs. Web, Social, and Paid Ads by a Google Partner & B Corp Agency.</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Image src="/premiumplan.svg" width={24} height={24} alt="Profile" className="w-6 h-6 rounded-full" />
              <span className="text-sm font-semibold text-[#FF8F27]">Premium Plan</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link href={item.path || "#"}>
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
                </Link>
                {item.label === "Settings" && isSettingsOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.path}>
                        <button
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left ${
                            activeMenu === subItem.label ? "bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white" : ""
                          }`}
                          onClick={() => setActiveMenu(subItem.label)}
                        >
                          <subItem.icon className={`w-5 h-5 ${activeMenu === subItem.label ? "text-white" : "text-black"}`} />
                          <span className="text-sm font-medium">{subItem.label}</span>
                        </button>
                      </Link>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Company Profile</h1>

            <div className="grid gap-8" style={{ gridTemplateColumns: "536px 1fr" }}>
              {/* Left Column */}
              <div className="w-[536px] space-y-6 flex flex-col">
                {/* Image-Type Content (1st) */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <Image
                    src="/company-image.jpg" // Placeholder image, replace with actual path
                    alt="Company Image"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>

                {/* Company Profile About (2nd) */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">About</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Design Hill is a creative agency specializing in marketing that performs. We offer expertise in web
                    design, social media, and paid ads, proudly operating as a Google Partner and B Corp certified
                    organization. Our mission is to deliver innovative solutions that drive business success.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Jobs (3rd with Image) */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Jobs</h3>
                  <div className="space-y-6">
                    {jobs.map((job, index) => (
                      <div key={index} className={index !== jobs.length - 1 ? "pb-6 border-b border-gray-200" : ""}>
                        <div className="flex items-center gap-4">
                          <Image
                            src={job.image}
                            alt={`${job.title} image`}
                            width={100}
                            height={100}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-semibold">{job.title}</h4>
                            <p className="text-[#147FC7] font-semibold text-md mt-2">{job.company}</p>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin size={16} className="mr-1 flex-shrink-0" />
                              {job.location}
                            </div>
                            <div className="flex gap-2 mt-2">
                              <span className="text-gray-400 text-xs font-semibold">{job.salary}</span>
                              <span className="text-[#FF8C00] text-xs font-semibold">{job.date}</span>
                            </div>
                          </div>
                        </div>
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
  );
}