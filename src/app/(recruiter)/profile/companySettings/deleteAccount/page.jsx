"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Settings, LogOut, Lock, Trash2, User } from "lucide-react"
import Image from "next/image"
import Swal from "sweetalert2"

export default function CompanyDeleteAccountPage() {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState("Delete Account")
  const [isSettingsOpen, setIsSettingsOpen] = useState(true)

  const menuItems = [
    { icon: User, label: "Company Profile", href: "/profile/companyProfile" },
    {
      icon: Settings,
      label: "Settings",
      subItems: [
        { icon: Lock, label: "Change Password", href: "/profile/companySettings/changePassword" },
        { icon: Trash2, label: "Delete Account", href: "/profile/companySettings/deleteAccount" },
      ],
    },
    { icon: LogOut, label: "Log Out", href: "/profile/companyLogout" },
  ]

  const handleMenuClick = (item) => {
    if (item.label === "Settings") {
      setIsSettingsOpen(!isSettingsOpen)
    } else if (item.href) {
      router.push(item.href)
    }
  }

  const handleSubMenuClick = (href, label) => {
    setActiveMenu(label)
    router.push(href)
  }

  const handleDeleteConfirm = (confirmed) => {
    if (confirmed) {
      Swal.fire({
        icon: "success",
        title: "Account Deleted Successfully",
        text: "Your company account has been deleted. Redirecting to home page...",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        router.push("/")
      })
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
              <span className="text-4xl">🏢</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Design Hill</h2>
            <p className="text-sm text-gray-600 mt-2">
              Marketing that Performs. Web, Social, and Paid Ads by a Google Partner & B Corp Agency.
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Image src="/premiumplan.svg" width={24} height={24} alt="Profile" className="w-6 h-6" />
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
                  onClick={() => handleMenuClick(item)}
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
                        onClick={() => handleSubMenuClick(subItem.href, subItem.label)}
                      >
                        <subItem.icon
                          className={`w-5 h-5 ${activeMenu === subItem.label ? "text-white" : "text-black"}`}
                        />
                        <span className="text-sm font-medium">{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content - Delete Account Confirmation Modal */}
        <div className="flex-1 ml-8 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md w-full border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Are you sure you want to Delete Account?
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => handleDeleteConfirm(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                No
              </button>
              <button
                onClick={() => handleDeleteConfirm(true)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}