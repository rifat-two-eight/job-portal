"use client";

import { Star, Share2, Bookmark, Clock } from "lucide-react";

const items = [
  {
    id: 1,
    text:
      "Prime Works Ltd has started following your profile. Visit their page to see their latest job postings and company updates just now.",
    pill: { label: "Message", color: "gray" },
    time: "22:14 AM",
  },
  {
    id: 2,
    text:
      "Your resume has been successfully submitted for Tech Nova Inc.check out your dashboard for real time status updates",
    pill: { label: "Apply Result", color: "green" },
    time: "22:14 AM",
  },
  {
    id: 3,
    text:
      "Your profile is almost complete! Add a few more details to increase your visibility to employers and get personalized job suggestions.",
    pill: { label: "Message", color: "gray" },
    time: "22:14 AM",
  },
  {
    id: 4,
    text:
      "Your resume has been successfully submitted for the ‘Product Design’ position at Global Crop Solution. We’ll keep you updated on the next steps.",
    pill: { label: "Apply Result", color: "green" },
    time: "22:14 AM",
  },
  {
    id: 5,
    text:
      "Google's service, offered free of charge, instantly translates words, phrases, and web pages between English and over 100 other languages.",
    pill: { label: "Messages", color: "gray" },
    time: "22:14 AM",
  },
  {
    id: 6,
    text:
      "Exciting opportunity! A 'Digital Marketing Specialist' role has just been posted at Bright Solutions Group. Check your dashboard for more  information and apply now.",
    pill: { label: "New job", color: "blue" },
    time: "22:14 AM",
  },
  {
    id: 7,
    text:
      "Google's service, offered free of charge, instantly translates words, phrases, and web pages between English and over 100 other languages.",
    pill: { label: "New job", color: "blue" },
    time: "22:14 AM",
  },
  {
    id: 8,
    text:
      "Your resume has been successfully submitted for the ‘Product Design’ position at Global Crop Solution. We’ll keep you updated on the next steps.",
    pill: { label: "Apply Result", color: "green" },
    time: "22:14 AM",
  },
];

const Pill = ({ label, color }) => {
  const styles =
    color === "green"
      ? "bg-green-50 text-green-700 border border-green-200"
      : color === "blue"
      ? "bg-blue-50 text-blue-700 border border-blue-200"
      : "bg-gray-50 text-gray-700 border border-gray-200";
  return (
    <span className={`text-xs px-2 py-1 rounded ${styles}`}>{label}</span>
  );
};

export default function NotificationsPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-6">
          <button onClick={() => history.back()} className="text-gray-500 hover:text-gray-700">←</button>
          <h1 className="text-3xl font-semibold">Notifications</h1>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="rounded-md border border-gray-200 bg-white p-4 flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-800 leading-relaxed">{item.text}</p>
                <div className="mt-3">
                  <Pill label={item.pill.label} color={item.pill.color} />
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Star className="w-5 h-5 cursor-pointer hover:text-yellow-500" />
                <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                <Bookmark className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}