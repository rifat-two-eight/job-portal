"use client";

import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Users,
  Settings,
  BriefcaseBusiness,
  FolderOpenDot,
  GraduationCap,
  Award,
} from "lucide-react";

const ResumeDetails = ({ resume }) => {
  return (
    <div className="space-y-8">
      {/* Contact Info */}
      <div className="border-b border-gray-300 pb-6">
        <h2 className="text-center text-2xl font-semibold text-black mb-2">
          {resume.name}
        </h2>
        <div className="flex flex-wrap gap-4 text-sm text-black mb-3 justify-center">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{resume.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>{resume.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>{resume.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>{resume.linkedin}</span>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>{resume.github}</span>
          </div>
        </div>
        <div className="text-sm text-black text-center">
          <span className="font-semibold">Work Authentication:</span>{" "}
          {resume.workAuth}, <span className="font-semibold">Clearance:</span>{" "}
          {resume.clearance}, <span className="font-semibold">Open To:</span>{" "}
          {resume.openTo}
        </div>
      </div>

      {/* Summary */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-8 h-8 text-[#123499]" />
          <h3 className="text-2xl font-semibold text-[#123499]">SUMMARY</h3>
        </div>
        <p className="text-sm text-black leading-6">{resume.summary}</p>
        {resume.highlights && (
          <p className="text-sm text-black leading-relaxed mt-2">
            <span className="font-semibold leading-6">Highlights:</span>{" "}
            {resume.highlights}
          </p>
        )}
      </div>

      {/* Core Skills */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Settings className="w-8 h-8 text-[#123499]" />
          <h3 className="text-2xl font-semibold text-[#123499]">CORE SKILLS</h3>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            {resume.skills.platform && (
              <>
                <h4 className="font-semibold text-gray-900 mb-2">Platform:</h4>
                <p className="text-sm text-black leading-6">
                  {resume.skills.platform}
                </p>
              </>
            )}
            {resume.skills.hadr && (
              <>
                <h4 className="font-semibold text-gray-900 mt-3 mb-2">
                  HA/DR:
                </h4>
                <p className="text-sm text-black leading-6">
                  {resume.skills.hadr}
                </p>
              </>
            )}
            {resume.skills.performance && (
              <>
                <h4 className="font-semibold text-gray-900 mt-3 mb-2">
                  Performance:
                </h4>
                <p className="text-sm text-black leading-6">
                  {resume.skills.performance}
                </p>
              </>
            )}
            {resume.skills.security && (
              <>
                <h4 className="font-semibold text-gray-900 mt-3 mb-2">
                  Security/Compliance:
                </h4>
                <p className="text-sm text-black leading-6">
                  {resume.skills.security}
                </p>
              </>
            )}
          </div>
          <div>
            {resume.skills.automation && (
              <>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Automation/DevOps:
                </h4>
                <p className="text-sm text-black leading-6">
                  {resume.skills.automation}
                </p>
              </>
            )}
            {resume.skills.major && (
              <>
                <h4 className="font-semibold text-gray-900 mt-3 mb-2">
                  Monitoring/Tools:
                </h4>
                <p className="text-sm text-black leading-6">
                  {resume.skills.major}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <BriefcaseBusiness className="w-8 h-8 text-[#123499]" />
          <h3 className="text-2xl font-semibold text-[#123499]">EXPERIENCE</h3>
        </div>
        <div className="space-y-4">
          {resume.experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-[18px] font-semibold text-gray-900">
                  {exp.title}
                </h4>
                <span className="text-sm text-gray-600">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {exp.company}, {exp.location}
              </p>
              {exp.environment && (
                <p className="text-sm text-gray-600 mb-4">
                  Environment: {exp.environment}
                </p>
              )}
              <ul className="text-sm text-black space-y-2 list-disc list-inside leading-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Projects */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <FolderOpenDot className="w-8 h-8 text-[#123499]" />
          <h3 className="text-2xl font-semibold text-[#123499]">
            SELECTED PROJECTS
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {resume.projects.map((project, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                {project.name}
              </h4>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-9 h-9 text-[#123499]" />
            <h3 className="text-2xl font-semibold text-[#123499]">EDUCATION</h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            {resume.education.map((edu, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.school}</p>
                <p className="text-sm text-gray-600">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-9 h-9 text-[#123499]" />
            <h3 className="text-2xl font-semibold text-[#123499]">
              CERTIFICATIONS
            </h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              {resume.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetails;
