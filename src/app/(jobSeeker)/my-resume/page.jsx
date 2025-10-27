"use client";

import ResumeDetails from "@/components/jobSeekerResume/ResumeDetails";
import ResumeList from "@/components/jobSeekerResume/ResumeList";
import { resumeData } from "@/lib/resume-data";
import { useState } from "react";

const MyResume = () => {
  const [selectedResumeId, setSelectedResumeId] = useState("uiux");

  const selectedResume = resumeData.find((r) => r.id === selectedResumeId);
  return (
    <div className="max-w-7xl mx-auto min-h-screen mb-10">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-96 overflow-y-auto">
          <ResumeList
            resumes={resumeData}
            selectedId={selectedResumeId}
            onSelectResume={setSelectedResumeId}
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 overflow-y-auto p-12 border rounded-lg">
          {selectedResume && <ResumeDetails resume={selectedResume} />}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
