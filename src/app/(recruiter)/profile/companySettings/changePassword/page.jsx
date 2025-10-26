"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Settings, LogOut, Lock, Trash2, User, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Swal from "sweetalert2"

export default function CompanyChangePasswordPage() {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState("Change Password")
  const [isSettingsOpen, setIsSettingsOpen] = useState(true)

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const menuItems = [
    { icon: User, label: "Company Profile", href: "/profile/recruiterProfile" },
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

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all password fields",
      })
      return
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "New Password and Confirm Password do not match",
      })
      return
    }

    if (newPassword.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password must be at least 8 characters long",
      })
      return
    }

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Password updated successfully",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    })
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

        {/* Main Content - Change Password Form */}
        <div className="flex-1 ml-8 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full border border-gray-200">
            <h2 className="text-2xl text-center font-bold text-[#123499] mb-8">Change Password</h2>

            {/* Current Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#123499] focus:ring-1 focus:ring-[#123499]"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* New Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#123499] focus:ring-1 focus:ring-[#123499]"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#123499] focus:ring-1 focus:ring-[#123499]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Update Button */}
            <button
              onClick={handleUpdatePassword}
              className="w-full bg-gradient-to-r from-[#123499] to-[#2A57DE] hover:from-[#0f2670] hover:to-[#1f42b8] text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}