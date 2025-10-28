import Link from "next/link";

export default function CareerSpotlight() {
  const recentAds = [
    {
      id: 1,
      title: "Sr. UI/UX Designer",
      subtitle: "Creative & Modern Designer",
      image: "/cardpic.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Sr. UI/UX Designer",
      subtitle: "Creative & Modern Designer",
      image: "/cardpic.png",
      status: "Pending",
    },
    {
      id: 3,
      title: "Sr. UI/UX Designer",
      subtitle: "Creative & Modern Designer",
      image: "/cardpic.png",
      status: "Active",
    },
  ];

  const statusStyle = (s) =>
    s === "Active"
      ? "border border-green-200 bg-green-100 text-green-700"
      : "border border-orange-200 bg-orange-100 text-orange-700";

  return (
    <main className="w-full bg-white">
      {/* Header */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Career Spotlight</h1>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-green-600">05</p>
                <p className="mt-2 font-medium text-gray-800">Active Ads</p>
              </div>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-orange-500">02</p>
                <p className="mt-2 font-medium text-gray-800">Pending Approval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Add */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Add</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentAds.map((ad) => (
              <div key={ad.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <img src={ad.image} alt={ad.title} className="w-full h-40 object-cover" />
                <div className="p-4 flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold">{ad.title}</p>
                    <p className="text-sm text-gray-700">{ad.subtitle}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-lg whitespace-nowrap ${statusStyle(ad.status)}`}>
                    {ad.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <button className="px-10 py-3 bg-gradient-to-r from-[#123499] to-[#2A57DE] text-white rounded-lg font-semibold">
              Create Add
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}