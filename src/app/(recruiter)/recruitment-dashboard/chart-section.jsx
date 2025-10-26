"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { day: "Sun", Application: 1000, Qualified: 1200, Engagement: 800, Reject: 500 },
    { day: "Mon", Application: 1500, Qualified: 1800, Engagement: 1200, Reject: 600 },
    { day: "Tue", Application: 2000, Qualified: 2200, Engagement: 1500, Reject: 700 },
    { day: "Wed", Application: 1800, Qualified: 2000, Engagement: 1800, Reject: 800 },
    { day: "Thu", Application: 2500, Qualified: 2800, Engagement: 2200, Reject: 900 },
    { day: "Fri", Application: 3200, Qualified: 3500, Engagement: 2800, Reject: 1000 },
    { day: "Sat", Application: 3500, Qualified: 3800, Engagement: 3200, Reject: 1100 },
]


export function ChartSection({ timeframe, setTimeframe }) {
    return (
        <div className="bg-card rounded-lg p-4 sm:p-6 border border-border shadow-sm mb-6 sm:mb-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 sm:gap-4">
                    <select className="px-3 py-2 sm:px-4 sm:py-2 bg-background border border-border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                        <option>UIUX Designer</option>
                        <option>Product Manager</option>
                        <option>Developer</option>
                    </select>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500"></div>
                        <span>Application</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        <span>Qualified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
                        <span>Engagement</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <span>Reject</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setTimeframe("week")}
                        className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg transition-colors font-medium cursor-pointer ${timeframe === "week"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => setTimeframe("month")}
                        className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg transition-colors font-medium cursor-pointer ${timeframe === "month"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        Month
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="w-full h-64 sm:h-80 lg:h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="day" stroke="var(--muted-foreground)" style={{ fontSize: "12px" }} />
                        <YAxis stroke="var(--muted-foreground)" style={{ fontSize: "12px" }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "var(--card)",
                                border: "1px solid var(--border)",
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: "var(--foreground)" }}
                        />
                        <Line type="monotone" dataKey="Application" stroke="#f97316" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="Qualified" stroke="#22c55e" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="Engagement" stroke="#3b82f6" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="Reject" stroke="#ef4444" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
