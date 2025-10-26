"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { MetricsCard } from "./metrics-card"
import { ChartSection } from "./chart-section"
import { RecentApplicants } from "./recent-applicants"

export default function RecruitmentDashboard() {
    const [timeframe, setTimeframe] = useState("week");

    return (
        <div className=" max-w-7xl mx-auto bg-background p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-1 hover:bg-muted rounded-lg transition-colors">
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <nav className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            Interview
                        </a>
                        <span className="text-muted-foreground">/</span>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            Short Listed
                        </a>
                        <span className="text-muted-foreground">/</span>
                        <span className="font-semibold text-primary">Best Insight</span>
                    </nav>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <MetricsCard label="Application" value="776" color="orange" />
                <MetricsCard label="Qualified" value="520" color="green" />
                <MetricsCard label="Engagement" value="90%" color="blue" />
                <MetricsCard label="Rejected" value="400" color="red" />
            </div>

            {/* Chart Section */}
            <ChartSection timeframe={timeframe} setTimeframe={setTimeframe} />

            {/* Recent Applicants Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <RecentApplicants title="Recent Applicant" type="applicant" />
                <RecentApplicants title="Recent Qualified" type="qualified" />
            </div>
        </div>
    )
}
