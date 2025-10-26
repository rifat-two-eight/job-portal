"use client"

import { useState } from "react"
import { Heart, FileText, Star, Settings, LogOut, X, Lock, HelpCircle, Trash2, User, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PaymentHistoryPage() {
  const [activeMenu, setActiveMenu] = useState("Payment History")
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(true)
  const [showOTPModal, setShowOTPModal] = useState(false)
  const [showPaymentHistory, setShowPaymentHistory] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const menuItems = [
    { icon: User, label: "My Profile", path: "/profile/myProfile" },
    { icon: Heart, label: "Favorite List", path: "/profile/favourite" },
    { icon: FileText, label: "Payment History", path: "/profile/payment" },
    { icon: Star, label: "Platform Review", path: "/profile/platformReview" },
    {
      icon: Settings,
      label: "Settings",
      subItems: [
        { icon: Lock, label: "Change Password", path: "/profile/settings/changePassword" },
        { icon: HelpCircle, label: "Help and Support", path: "/profile/settings/helpSupport" },
        { icon: Trash2, label: "Delete Account", path: "/profile/settings/deleteAccount" },
      ],
    },
    { icon: LogOut, label: "Log Out", path: "/profile/logout" },
  ]

  const transactions = [
    { id: 1, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 2, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 3, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 4, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 5, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 6, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 7, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
    { id: 8, service: "Premium Plan", date: "01 Dec 2025 At 10:30pm", amount: "$19.99", status: "Successful" },
  ]

  const handlePasswordContinue = () => {
    if (password.trim()) {
      setShowPasswordModal(false)
      setShowOTPModal(true)
    }
  }

  const handleOTPChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus()
      }
    }
  }

  const handleOTPVerify = () => {
    if (otp.every((digit) => digit !== "")) {
      setShowOTPModal(false)
      setShowPaymentHistory(true)
      setSelectedTransaction(transactions[0])
    }
  }

  const handleMenuClick = (label) => {
    if (label === "Settings") {
      setIsSettingsOpen(!isSettingsOpen)
    } else {
      setActiveMenu(label)
      setIsSettingsOpen(false)
    }
  }

  return (
    <div className="w-full bg-[#FBFBFB]">
      <div className="flex min-h-screen max-w-7xl mx-auto py-10">
        {/* Sidebar */}
        <div className="w-72 bg-white rounded-xl p-6 flex flex-col">
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
                            activeMenu === subItem.label
                              ? "bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white"
                              : ""
                          }`}
                          onClick={() => setActiveMenu(subItem.label)}
                        >
                          <subItem.icon
                            className={`w-5 h-5 ${activeMenu === subItem.label ? "text-white" : "text-black"}`}
                          />
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
          {!showPaymentHistory ? (
            <div className="flex items-center justify-center min-h-screen">
              {/* Password Modal */}
              {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-8 w-96 relative">
                    <button
                      onClick={() => setShowPasswordModal(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="text-center mb-6">
                      <Image className="flex justify-self-center" src="/authlogo.svg" alt="Auth Logo" width={150} height={150} />
                    </div>

                    <p className="text-center text-gray-700 mb-6 text-sm">
                      For Security, Enter Your Account Password To Continue To Payment History.
                    </p>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your password"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handlePasswordContinue}
                      className="w-full bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white font-bold py-3 px-4 rounded-lg hover:from-[#0f2f85] hover:to-[#2247b6]"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* OTP Modal */}
              {showOTPModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-8 w-96 relative">
                    <button
                      onClick={() => setShowOTPModal(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">OTP Verification</h2>
                    <p className="text-center text-gray-600 text-sm mb-6">
                      Enter The 6-Digit Code We Sent To Your Email To Verify Your Payment.
                    </p>

                    <div className="flex gap-3 justify-center mb-6">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleOTPChange(index, e.target.value)}
                          className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-bold focus:outline-none focus:border-blue-500"
                        />
                      ))}
                    </div>

                    <p className="text-end text-md text-gray-600 mb-6">
                      Didn't receive a code?{" "}
                      <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Resend</span>
                    </p>

                    <button
                      onClick={handleOTPVerify}
                      className="w-full bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white font-bold py-3 px-4 rounded-lg hover:from-[#0f2f85] hover:to-[#2247b6]"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Payment History Display */
            <div className="max-w-6xl mx-auto">
              

              <div className="grid gap-8" style={{ gridTemplateColumns: "1fr 1fr" }}>
                {/* Transaction List */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-4">Payment History</h1>
                  <div className="space-y-3">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        onClick={() => setSelectedTransaction(transaction)}
                        className={`p-4 rounded-lg cursor-pointer transition-colors ${
                          selectedTransaction?.id === transaction.id
                            ? "bg-[#FEF3E6] border"
                            : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{transaction.service}</p>
                            <p className="text-xs text-gray-600">{transaction.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">{transaction.amount}</p>
                            <p className="text-xs text-green-600 font-semibold">{transaction.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 max-h-full overflow-y-auto">
                  {selectedTransaction && (
                    <div>
                      <div className="mb-6">
                        <p className="text-3xl font-bold text-[#FF8F27]">{selectedTransaction.amount}</p>
                        <p className="text-sm text-gray-600 mt-1">Service Information</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">{selectedTransaction.service}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {selectedTransaction.status}
                        </span>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-bold text-gray-900 mb-4">User Information</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name</span>
                            <span className="font-semibold text-gray-900">Shakir Ahmed</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Location</span>
                            <span className="font-semibold text-gray-900">247 Derby Ave, Strubens Valley</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">E-Mail</span>
                            <span className="font-semibold text-gray-900">User@Gmail.Com</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6 mt-6">
                        <h3 className="font-bold text-gray-900 mb-4">Payment Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service Fee</span>
                            <span className="font-semibold text-gray-900">{selectedTransaction.amount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Trx ID</span>
                            <span className="font-semibold text-gray-900">1234567891001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date & Time</span>
                            <span className="font-semibold text-gray-900">01 Jan 25, 10:30 Am</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="font-semibold text-gray-900">0.00</span>
                          </div>
                          <div className="flex justify-between border-t border-gray-200 pt-3 mt-3">
                            <span className="font-bold text-gray-900">Total:</span>
                            <span className="font-bold text-gray-900">{selectedTransaction.amount}</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-blue-50">
                        Download Payment History
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}