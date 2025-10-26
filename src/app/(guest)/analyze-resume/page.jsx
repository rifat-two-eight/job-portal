"use client";

import ResumeContent from "@/components/resume/ResumeContent";
import ScoreGauge from "@/components/resume/ScoreGauge";
import {
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="max-w-7xl mx-auto min-h-scree">
      {/* Header */}

      {/* Main Content */}
      <div className="flex gap-14 px-8 py-8">
        {/* Left Column - Score Section */}
        <div className="w-1/2 flex flex-col gap-8">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold text-[#123499] ">
              Your Resume Scorecard & Insights
            </h1>
          </div>
          {/* Score Card */}
          <div className="">
            <h2 className="text-5xl font-semibold text-center mb-8">
              Your Score
            </h2>
            <ScoreGauge score={52} />
          </div>

          {/* Score Breakdown */}
          <div className="">
            <h3 className="text-5xl font-semibold mb-6">Score Breakdown</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-[32px] font-semibold text-black">
                      Keyword Score
                    </h4>
                    <p className="text-black">
                      This score reflects the effectiveness of the keywords used
                      in your resume. Your score is 0.
                    </p>
                  </div>
                  <span className="text-lg font-bold text-black">20</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-[32px] font-semibold text-black">
                      Experience Score
                    </h4>
                    <p className="text-black">
                      This score reflects your level of relevant experience in
                      the field.
                    </p>
                  </div>
                  <span className="text-lg font-bold text-red-600">0</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-[32px] font-semibold text-black">
                      Education Score
                    </h4>
                    <p className="text-black">
                      This score measures how your educational background aligns{" "}
                      <br />
                      with job requirements.
                    </p>
                  </div>
                  <span className="text-lg font-bold text-black">20</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-[32px] font-semibold text-black">
                      Skills Match
                    </h4>
                    <p className="text-black">
                      This score shows how well your skills match the job
                      description.
                    </p>
                  </div>
                  <span className="text-lg font-bold text-black">20</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-[32px] font-semibold text-black">
                      Formatting & Readability
                    </h4>
                    <p className="text-black">
                      This score measures clarity, structure, and overall
                      presentation <br /> quality.
                    </p>
                  </div>
                  <span className="text-lg font-bold text-black">20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Resume Content */}
        <div className="w-1/2">
          <ResumeContent />
        </div>
      </div>
    </main>
  );
}
