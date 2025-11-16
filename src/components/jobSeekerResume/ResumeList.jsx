"use client";

import { FileText, Edit2, Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function ResumeList({ resumes, selectedId, onSelectResume }) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4">
      {/* Title */}
      <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
        My Resumes
      </h1>

      {/* Scrollable list */}
      <div className="flex-1 space-y-2 sm:space-y-3 overflow-y-auto pr-1">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            onClick={() => onSelectResume(resume.id)}
            className={`p-2.5 sm:p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-2.5 sm:gap-3 ${
              selectedId === resume.id
                ? "border-blue-600 bg-blue-50 shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            {/* Icon */}
            <div className="bg-orange-500 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                {resume.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-1">
                {resume.summary || "No summary"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-1 sm:gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // edit handler
                }}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // delete handler
                }}
                className="p-1.5 hover:bg-red-100 rounded transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add button */}
      <Link href="/add-new-resume" className="block mt-3 sm:mt-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 px-3 rounded-lg font-medium text-sm transition-all shadow-sm hover:shadow">
          <Plus className="w-5 h-5" />
          Add New Resume
        </button>
      </Link>
    </div>
  );
}