"use client";

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
    <main className="min-h-screen bg-white">
      {/* Hero / Builder Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2 text-blue-700">
            <FileText className="w-6 h-6" />
            <span className="font-semibold">Resume</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Build a Professional Resume
              </h1>
              <p className="text-gray-600 mt-2">
                Use a clean, ATS-friendly layout that highlights your skills and
                experience.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left controls */}
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Resume Settings
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm text-gray-700">Template</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Classic</option>
                    <option>Modern</option>
                    <option>Compact</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-700">Accent Color</label>
                  <input
                    type="color"
                    defaultValue="#123499"
                    className="mt-1 w-16 h-10 p-1 border rounded"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Font Size</label>
                  <input
                    type="range"
                    min="12"
                    max="18"
                    defaultValue="14"
                    className="mt-1 w-full"
                  />
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Save Settings
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900">Sections</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-center justify-between">
                  <span>Summary</span>
                  <span className="text-gray-400">Visible</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Experience</span>
                  <span className="text-gray-400">Visible</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Education</span>
                  <span className="text-gray-400">Visible</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Skills</span>
                  <span className="text-gray-400">Visible</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Resume preview */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Header block */}
              <div className="bg-[#123499] text-white p-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold">Alex Johnson</h2>
                    <p className="text-blue-100">Senior Software Engineer</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-blue-100 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>alex.johnson@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <span>linkedin.com/in/alexjohnson</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>github.com/alexjohnson</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body grid */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Summary */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Professional Summary
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    Experienced software engineer with 7+ years building
                    scalable web applications. Specialized in React, Node.js,
                    TypeScript, and cloud-native architectures. Passionate about
                    developer experience, performance, and accessible UX. Led
                    cross-functional teams to deliver high-impact products used
                    by millions.
                  </p>
                </div>

                {/* Skills */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Skills
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <li className="bg-gray-100 rounded px-3 py-1">React</li>
                    <li className="bg-gray-100 rounded px-3 py-1">
                      TypeScript
                    </li>
                    <li className="bg-gray-100 rounded px-3 py-1">Next.js</li>
                    <li className="bg-gray-100 rounded px-3 py-1">Node.js</li>
                    <li className="bg-gray-100 rounded px-3 py-1">
                      Tailwind CSS
                    </li>
                    <li className="bg-gray-100 rounded px-3 py-1">AWS</li>
                  </ul>
                </div>

                {/* Experience */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Experience
                  </h3>
                  <div className="mt-3 space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">
                          Lead Frontend Engineer · Acme Inc.
                        </p>
                        <p className="text-sm text-gray-500">2022 – Present</p>
                      </div>
                      <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm space-y-1">
                        <li>
                          Architected Next.js app used by 500k monthly active
                          users.
                        </li>
                        <li>
                          Cut bundle size by 35% via code-splitting and strict
                          typing.
                        </li>
                        <li>
                          Mentored 4 engineers; introduced design system and
                          accessibility checks.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">
                          Senior Software Engineer · Beta Labs
                        </p>
                        <p className="text-sm text-gray-500">2019 – 2022</p>
                      </div>
                      <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm space-y-1">
                        <li>
                          Built microservices in Node.js and deployed on AWS.
                        </li>
                        <li>
                          Implemented CI/CD pipelines reducing release time by
                          50%.
                        </li>
                        <li>
                          Collaborated with designers to improve UX and
                          accessibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Education
                  </h3>
                  <div className="mt-3 space-y-2 text-gray-700">
                    <p className="font-medium">B.Sc. in Computer Science</p>
                    <p className="text-sm">
                      University of California, Berkeley
                    </p>
                    <p className="text-sm text-gray-500">2014 – 2018</p>
                  </div>
                </div>

                {/* Projects */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Projects
                  </h3>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <p className="font-medium text-gray-900">
                        Job Search Copilot
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        AI assistant for auto-applying and optimizing resumes.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="font-medium text-gray-900">Design System</p>
                      <p className="text-sm text-gray-700 mt-1">
                        Reusable component library with accessibility built-in.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="font-medium text-gray-900">
                        DevOps Dashboard
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        Cloud monitoring and alerting with real-time charts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium">
                Preview
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
