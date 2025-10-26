"use client";

import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Users,
  Briefcase,
  BookOpen,
  Award,
  GraduationCap,
  BriefcaseBusiness,
  FolderOpenDot,
  Settings,
} from "lucide-react";

const ResumeContent = () => {
  return (
    <div className="space-y-8">
      {/* Contact Info */}
      <div className="border-b border-gray-300 pb-6">
        <h2 className="text-center text-2xl font-semibold text-black mb-2">
          Shakir Ahmed
        </h2>
        <div className="flex flex-wrap gap-4 text-sm text-black mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Seattle, WA</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>+1(234)5678</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>User@Gmail.Com</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn.Com/User</span>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>GitHub.Com/Adiraman</span>
          </div>
        </div>
        <div className="text-sm text-black">
          <span className="font-semibold">Work Authentication:</span> UF
          Citizen, Clearance: DoD Secret,{" "}
          <span className="font-semibold">Open To:</span> Remote
        </div>
      </div>

      {/* Summary */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-8 h-8 text-[#123499]" />
          <h3 className="text-2xl font-semibold text-[#123499]">SUMMARY</h3>
        </div>
        <p className="text-sm text-black  leading-6">
          Database Administrator With 8+ Years Managing Large IaaS, Environments
          Across On-Prem And Cloud (Azure/AWS). Expert In HADR, Performance
          Tuning, Security, Automation, And Disaster Recovery. Proven Record
          Improving Query Performance, Hardening Data Security, And Delivering
          Resilient Platforms Supporting 80+ Critical Apps / SRTB Data At 99.97%
          Availability.
        </p>
        <p className="text-sm text-black leading-relaxed mt-2">
          <span className="font-semibold leading-6">Highlights:</span> Reduced
          FRB Query Times By 65%, Cut Storage/Costs 45% Via Compression/Tiering,
          Met RPO Metric / RTO 30min For Business-Critical Databases.
        </p>
      </div>

      {/* Core Skills */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Settings className="w-8 h-8 text-[#123499]" />
          <h3 className="text-2xl font-semibold text-[#123499]">CORE SKILLS</h3>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Platform:</h4>
            <p className="text-sm text-black leading-6">
              SQL Server (2019-2022), Azure SQL/MI, AWS RDS, SQL Server
              Failover/SQL, MySQL, Oracle
            </p>
            <h4 className="font-semibold text-gray-900 mt-3 mb-2">HA/DR:</h4>
            <p className="text-sm text-black leading-6">
              Always On AGs, Log Shipping, Failover Clustering, Replication,
              Backups, DR Sandboxes
            </p>
            <h4 className="font-semibold text-gray-900 mt-3 mb-2">
              Performance:
            </h4>
            <p className="text-sm text-black leading-6">
              Wait Stats, Query Store, Execution Plans, Indexing, Partitioning,
              Tempdb/Latch Tuning
            </p>
            <h4 className="font-semibold text-gray-900 mt-3 mb-2">
              Security/Compliance:
            </h4>
            <p className="text-sm text-black leading-6">
              TDE, Always Encrypted, RBAC, Auditing, Data Masking,
              HIPAA/PCI/SOC2 Practices
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Automation/DevOps:
            </h4>
            <p className="text-sm text-black leading-6">
              PowerShell, Databricks, T-SQL, CI/CD For DB Deployments,
              Infrastructure-As-Code
            </p>
            <h4 className="font-semibold text-gray-900 mt-3 mb-2">
              Monitoring/Tools:
            </h4>
            <p className="text-sm text-black leading-6">
              SQL Server Mgmt Studio, DPA, Alerts, Redgates, Perfmon, Extended
              Events
            </p>
            <h4 className="font-semibold text-gray-900 mt-3 mb-2">
              Cloud & Soft:
            </h4>
            <p className="text-sm text-black leading-6">
              Azure (VMs, Storage, Key Vault), AWS (EC2/RDS), Networking,
              Backups, Cost Control
            </p>
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
          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-[18px] font-semibold text-gray-900">
                Senior Database Administrator
              </h4>
              <span className="text-sm text-gray-600">03/2020–Present</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Microsoft Corporation, Redmond, WA
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Environment: SQL Server 2016-2022, 45 instances, 200 databases,
              50TB, Azure/AWS
            </p>
            <ul className="text-sm text-black space-y-2 list-disc list-inside leading-6">
              <li>
                Designed and Operated Always On AGs Across 8 Nodes / 3 Regions
                Delivering 99.97% Uptime, Automated Failover Testing And DR
                Drills, Reduced RTO By 40% Via Optimized Failover Procedures
              </li>
              <li>
                Implemented TDE + Row-Level Security + Auditing, Closed 15
                High-Risk Findings, Passed SOC 2 Compliance Audit, Reduced
                Vulnerability Scan Findings By 60%
              </li>
              <li>
                Optimized 200+ Queries Via Index Tuning, Execution Plans, Tempdb
                Contention Fixes, Achieved 65% Query Time Reduction, Improved
                User Experience And Reduced Infrastructure Costs
              </li>
              <li>
                Architected Disaster Recovery On-Prem – Azure 02 Failover
                Scenarios, Tested Quarterly, Reduced RTO To 4 Hours, Ensured
                Business Continuity And Reduced Downtime Risk
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-[18px] font-semibold text-gray-900">
                Database Administrator
              </h4>
              <span className="text-sm text-gray-600">06/2008–02/2020</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Amazon Web Services, Seattle, WA
            </p>
            <ul className="text-sm text-black space-y-1.5 list-disc list-inside leading-6">
              <li>
                Consolidated 20 Servers To 5 With Resource Governor And Standard
                Costing, Reduced 95% Infra Cost
              </li>
              <li>
                Implemented Maintenance Plans, Index Rebuilds, Statistics
                Updates, Backups, Reduced Fragmentation From 80% To 5%, Improved
                Query Performance By 50%
              </li>
              <li>
                Developed PowerShell Scripts For Monitoring, Permission Reviews,
                And Patching, Automated 40+ Manual Tasks, Saved 200+ Hours
                Annually
              </li>
            </ul>
          </div>
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
        <div className="grid grid-cols-3 gap-16">
          <div className="border border-gray-200 rounded-lg p-4 w-52">
            <h4 className="font-semibold text-gray-900 mb-2">
              Enterprise AO/DR Modernization
            </h4>
            <p className="text-sm text-gray-600">
              Built 3-Tier AG Topology With Automatic Page Repair, DR Failovers,
              Extended Events
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 w-52">
            <h4 className="font-semibold text-gray-900 mb-2">
              Performance Blitz
            </h4>
            <p className="text-sm text-gray-600 ">
              Identified 100+ Slow Queries, Optimized Indexes, Reduced Execution
              Times By 300%
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 w-52">
            <h4 className="font-semibold text-gray-900 mb-2">
              Cloud Migration Factory
            </h4>
            <p className="text-sm text-gray-600">
              Migrated 50+ Databases For Lift-And-Shift, Configured Replication,
              Automated Remediation
            </p>
          </div>
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
            <h4 className="font-semibold text-gray-900">
              B.S. In Computer Science
            </h4>
            <p className="text-sm text-gray-600">University of Washington</p>
            <p className="text-sm text-gray-600">Seattle, WA</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-9 h-9 text-[#123499]" />
            <h3 className="text-2xl font-semibold text-[#123499]">
              CERTIFICATIONS
            </h3>
          </div>
          <div className="w-[450px] border border-gray-200 rounded-lg p-4">
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>
                Microsoft DP-300 Administering Relational Databases On Microsoft
                Azure
              </li>
              <li>Azure Administrator (AZ-104)</li>
              <li>AWS Certified Solutions Architect</li>
              <li>MCSE Data Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
