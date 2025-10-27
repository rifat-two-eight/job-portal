

const colorMap = {
    orange: "text-orange-500",
    green: "text-green-500",
    blue: "text-blue-600",
    red: "text-red-500",
}

export function MetricsCard({ label, value, color }) {
    return (
        <div className="bg-card rounded-lg p-4 sm:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className={`text-3xl sm:text-4xl font-bold mb-2 ${colorMap[color]}`}>{value}</div>
            <p className="text-sm sm:text-base text-muted-foreground">{label}</p>
        </div>
    )
}
