"use client";

import { Heart, FileText, Star, Settings, LogOut, X, Lock, HelpCircle, Trash2, User, MapPin, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function FavoriteListPage() {
  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto -mb-10 pt-10">
        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Profile</span>
        </div>
      </div>

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
            <div>
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-gradient-to-r from-[#123499] to-[#2A57DE] text-left">
                <User className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">My Profile</span>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-gradient-to-r from-[#123499] to-[#2A57DE] text-left">
                <Heart className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">Favorite List</span>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left">
                <FileText className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Payment History</span>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left">
                <Star className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Platform Review</span>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left">
                <Settings className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Settings</span>
                <span className="ml-auto text-gray-400">›</span>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left">
                <LogOut className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Log Out</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-8">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Favorite List</h1>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Job Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex">
                <div className="w-52">
                  <Image
                    src="/cardpic.png"
                    alt="Sr. UX Designer image"
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-2 flex-1">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Sr. UX Designer</h3>
                          <p className="text-sm text-gray-600">Design Lab</p>
                        </div>
                      </div>
                      <div className="text-red-500">
                        <Heart size={20} fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1 flex-shrink-0" />
                      California, United States
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-400 text-xs font-semibold rounded">Full Time</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-400 text-xs font-semibold rounded">80-120k</span>
                        </div>
                      </div>
                      <div>
                        <Image src="/calendar.svg" alt="Calendar icon" width={13} height={16} className="mr-1 inline-block" />
                        <span className="text-[#FF8C00] text-xs font-semibold rounded">10 Oct 25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex">
                <div className="w-52">
                  <Image
                    src="/cardpic.png"
                    alt="Sr. UX Designer image"
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-2 flex-1">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Sr. UX Designer</h3>
                          <p className="text-sm text-gray-600">Design Lab</p>
                        </div>
                      </div>
                      <div className="text-red-500">
                        <Heart size={20} fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1 flex-shrink-0" />
                      California, United States
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-400 text-xs font-semibold rounded">Full Time</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-400 text-xs font-semibold rounded">80-120k</span>
                        </div>
                      </div>
                      <div>
                        <Image src="/calendar.svg" alt="Calendar icon" width={13} height={16} className="mr-1 inline-block" />
                        <span className="text-[#FF8C00] text-xs font-semibold rounded">10 Oct 25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more static cards as needed */}
              {/* Job Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex">
                <div className="w-52">
                  <Image
                    src="/cardpic.png"
                    alt="Sr. UX Designer image"
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-2 flex-1">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Sr. UX Designer</h3>
                          <p className="text-sm text-gray-600">Design Lab</p>
                        </div>
                      </div>
                      <div className="text-red-500">
                        <Heart size={20} fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1 flex-shrink-0" />
                      California, United States
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-400 text-xs font-semibold rounded">Full Time</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-400 text-xs font-semibold rounded">80-120k</span>
                        </div>
                      </div>
                      <div>
                        <Image src="/calendar.svg" alt="Calendar icon" width={13} height={16} className="mr-1 inline-block" />
                        <span className="text-[#FF8C00] text-xs font-semibold rounded">10 Oct 25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}