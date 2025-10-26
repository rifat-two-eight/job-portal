"use client";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  Plus,
  MapPin,
  Phone,
  Mail,
  Link,
  Briefcase,
  Type,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Minus,
} from "lucide-react";

function TextEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState("14");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (editorRef.current && !isInitialized) {
      if (value) {
        editorRef.current.innerHTML = value;
      }
      setIsInitialized(true);
    }
  }, [isInitialized, value]);

  const executeCommand = (command, commandValue) => {
    document.execCommand(command, false, commandValue);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    executeCommand("fontSize", e.target.value);
  };

  return (
    <div className="border border-gray-300 rounded overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-300 p-3 flex flex-wrap gap-2 items-center">
        <select
          value={fontSize}
          onChange={handleFontSizeChange}
          className="px-2 py-1 border border-gray-300 rounded text-sm"
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="28">28</option>
          <option value="32">32</option>
        </select>
        <div className="w-px h-6 bg-gray-300" />
        <button
          onClick={() => {
            const color = prompt("Enter color (hex or name):");
            if (color) executeCommand("foreColor", color);
          }}
          className="p-2 hover:bg-gray-200 rounded"
          title="Text Color"
        >
          <Type size={18} />
        </button>
        <div className="w-px h-6 bg-gray-300" />
        <button
          onClick={() => executeCommand("bold")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => executeCommand("italic")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => executeCommand("underline")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Underline"
        >
          <Underline size={18} />
        </button>
        <div className="w-px h-6 bg-gray-300" />
        <button
          onClick={() => executeCommand("strikethrough")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Strikethrough"
        >
          <Minus size={18} />
        </button>
        <div className="w-px h-6 bg-gray-300" />
        <button
          onClick={() => executeCommand("justifyLeft")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Left"
        >
          <AlignLeft size={18} />
        </button>
        <button
          onClick={() => executeCommand("justifyCenter")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Center"
        >
          <AlignCenter size={18} />
        </button>
        <button
          onClick={() => executeCommand("justifyRight")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Right"
        >
          <AlignRight size={18} />
        </button>
        <div className="w-px h-6 bg-gray-300" />
        <button
          onClick={() => executeCommand("insertUnorderedList")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          onClick={() => executeCommand("insertOrderedList")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Numbered List"
        >
          <ListOrdered size={18} />
        </button>
        <div className="w-px h-6 bg-gray-300" />
        <button
          onClick={() => {
            const url = prompt("Enter URL:");
            if (url) executeCommand("createLink", url);
          }}
          className="p-2 hover:bg-gray-200 rounded"
          title="Insert Link"
        >
          <Link2 size={18} />
        </button>
        <button
          onClick={() => executeCommand("formatBlock", "<pre>")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Code Block"
        >
          <Code size={18} />
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="min-h-32 p-4 outline-none text-sm leading-relaxed"
        suppressContentEditableWarning
      />
    </div>
  );
}

const AddNewResumeForm = () => {
  const [resumeName, setResumeName] = useState("Resume Of UX Designer");
  const [personalInfo, setPersonalInfo] = useState({
    address: "Seattle, WA",
    contact: "+12345678910",
    email: "User@Gmail.Com",
    socialMedia: "linkedin.Com/Profile",
    portfolio: "Github.Com/Jobname",
  });
  const [summary, setSummary] = useState("");
  const [coreSkills, setCoreSkills] = useState("");
  const [experiences, setExperiences] = useState([
    {
      id: "1",
      title: "Senior Database Administrator",
      company: "Microsoft Corporation, Redmond, WA",
      startDate: "",
      endDate: "SQL Server",
      description: "",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Senior Database Administrator",
      description:
        "Built 9-42 AD Topology With Lifetime, Read-Only Hosting, And Automatic Page Repair.",
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: "1",
      degree: "Bsc In Computer Science",
      university: "University Of Washington, Seattle, WA",
    },
  ]);
  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "Bsc In Computer Science",
      details: "",
    },
  ]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now().toString(),
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const updateExperience = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now().toString(),
        title: "",
        description: "",
      },
    ]);
  };

  const updateProject = (id, field, value) => {
    setProjects(
      projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    );
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: Date.now().toString(),
        degree: "",
        university: "",
      },
    ]);
  };

  const updateEducation = (id, field, value) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: Date.now().toString(),
        name: "",
        details: "",
      },
    ]);
  };

  const updateCertification = (id, field, value) => {
    setCertifications(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#FBFBFB]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button className="p-2 hover:bg-gray-200 rounded">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold mb-2">Add New Resume</h1>
          <input
            type="text"
            value={resumeName}
            onChange={(e) => setResumeName(e.target.value)}
            className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded text-center text-sm"
          />
        </div>
      </div>
      {/* Personal Information */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Personal Information</h2>
        <div className="flex gap-4 mb-4 flex-wrap">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium mb-2">Address</label>
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
              <MapPin size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={personalInfo.address}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, address: e.target.value })
                }
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium mb-2">Contact</label>
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
              <Phone size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={personalInfo.contact}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, contact: e.target.value })
                }
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
              <Mail size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={personalInfo.email}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, email: e.target.value })
                }
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium mb-2">
              Social Media
            </label>
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
              <Link size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={personalInfo.socialMedia}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    socialMedia: e.target.value,
                  })
                }
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium mb-2">Portfolio</label>
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
              <Briefcase size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={personalInfo.portfolio}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    portfolio: e.target.value,
                  })
                }
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Summary</h2>
        <TextEditor value={summary} onChange={setSummary} />
      </section>
      {/* Core Skills */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Core Skills</h2>
        <TextEditor value={coreSkills} onChange={setCoreSkills} />
      </section>
      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Experience</h2>
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="mb-6 p-4 border border-gray-300 rounded bg-white"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) =>
                    updateExperience(exp.id, "title", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="Senior Database Administrator"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, "company", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="Microsoft Corporation, Redmond, WA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "startDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "endDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) =>
                  updateExperience(exp.id, "description", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm min-h-24"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}
        <button
          onClick={addExperience}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2"
        >
          <Plus size={16} /> Add Other Experience
        </button>
      </section>
      {/* Selected Project */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Selected Project</h2>
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="mb-6 p-4 border border-gray-300 rounded bg-white"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  value={proj.title}
                  onChange={(e) =>
                    updateProject(proj.id, "title", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="Senior Database Administrator"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={proj.description}
                  onChange={(e) =>
                    updateProject(proj.id, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="Built 9-42 AD Topology With Lifetime, Read-Only Hosting, And Automatic Page Repair."
                />
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={addProject}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2"
        >
          <Plus size={16} /> Add Other Project
        </button>
      </section>
      {/* Education */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Education</h2>
        {education.map((edu) => (
          <div
            key={edu.id}
            className="mb-6 p-4 border border-gray-300 rounded bg-white"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Degree Name
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, "degree", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="Bsc In Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  University Name
                </label>
                <input
                  type="text"
                  value={edu.university}
                  onChange={(e) =>
                    updateEducation(edu.id, "university", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder="University Of Washington, Seattle, WA"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={addEducation}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2"
        >
          <Plus size={16} /> Add Other Education
        </button>
      </section>
      {/* Certification */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Certification</h2>
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="mb-6 p-4 border border-gray-300 rounded bg-white"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Degree Name
              </label>
              <input
                type="text"
                value={cert.name}
                onChange={(e) =>
                  updateCertification(cert.id, "name", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                placeholder="Bsc In Computer Science"
              />
            </div>
            <div>
              <textarea
                value={cert.details}
                onChange={(e) =>
                  updateCertification(cert.id, "details", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm min-h-20"
                placeholder="Add certification details..."
              />
            </div>
          </div>
        ))}
        <button
          onClick={addCertification}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2"
        >
          <Plus size={16} /> Add
        </button>
      </section>
      {/* Submit Button */}
      <div className="flex justify-end mb-8">
        <button className="px-14 py-3 bg-[#123499] text-white rounded font-medium hover:bg-blue-700">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewResumeForm;
