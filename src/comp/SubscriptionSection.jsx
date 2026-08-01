import React from "react";
import { useNavigate } from "react-router-dom";

const SubscriptionSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-[#F8F6F1] pt-24 md:pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className="text-center mb-12">
            <span className="inline-block bg-[#556B2F]/10 text-[#556B2F] px-4 py-2 rounded-full font-medium text-sm">
              Our Plans
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Choose the <span className="text-[#556B2F]">perfect plan</span>{" "}
              for your home
            </h2>

            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-base">
              Flexible monthly cleaning subscriptions designed to keep your home
              spotless without the hassle.
            </p>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Silver */}

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                  🥈
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Silver Package</h3>

                  <p className="text-gray-500 text-sm">
                    Essential monthly cleaning
                  </p>
                </div>
              </div>

              <hr className="my-6" />

              <div className="flex items-end gap-2">
                <h1 className="text-5xl font-bold text-[#556B2F]">₹5599</h1>

                <span className="text-gray-500 mb-2">/ month</span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Dishwashing",
                  "Sweeping & Mopping",
                  "Dusting",
                  "Organising",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#556B2F] text-white flex items-center justify-center text-[10px]">
                      ✓
                    </div>

                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/package/silver")}
                className="mt-6 w-full border-2 border-[#556B2F] rounded-full py-3 font-semibold text-[#556B2F] hover:bg-[#556B2F] hover:text-white transition"
              >
                View Details →
              </button>
            </div>

            {/* Gold */}

            <div className="relative rounded-3xl bg-gradient-to-br from-[#6D823B] to-[#556B2F] text-white shadow-xl p-6 overflow-hidden hover:-translate-y-1 transition">
              <span className="absolute right-6 top-6 bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-semibold hidden lg:visible">
                ⭐ Popular
              </span>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  👑
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Gold Package</h3>

                  <p className="text-white/80 text-sm">Complete home care</p>
                </div>
              </div>

              <hr className="my-6 border-white/20" />

              <div className="flex items-end gap-2">
                <h1 className="text-5xl font-bold">₹6999</h1>

                <span className="mb-2">/ month</span>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-3 mt-6 ">
                {[
                  "Dishwashing",
                  "Sweeping",
                  "Dusting",
                  "Organising",
                  "Bathroom Cleaning",
                  "Laundry",
                  "Priority Support",
                  "Flexible Schedule",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white text-[#556B2F] flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>

                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/package/gold")}
                className="mt-6 w-full bg-white text-[#556B2F] rounded-full py-3 font-semibold hover:scale-[1.02] transition"
              >
                View Details →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionSection;
