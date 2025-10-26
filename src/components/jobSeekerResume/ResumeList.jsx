"use client";

import { FileText, Edit2, Trash2, Plus } from "lucide-react";

const ResumeList = ({ resumes, selectedId, onSelectResume }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-foreground mb-8">My Resume</h1>

      <div className="space-y-4 mb-8">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            onClick={() => onSelectResume(resume.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedId === resume.id
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="bg-orange-500 p-2 rounded-lg mt-1">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    {resume.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {resume.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 ml-2">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <Edit2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-red-100 rounded transition-colors">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className=" flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
        <Plus className="w-8 h-8 mr-2" />
        Add New Resume
      </button>
    </div>
  );
};

export default ResumeList;
