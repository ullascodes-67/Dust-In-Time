import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Crown, Home } from "lucide-react";
import { useState } from "react";

export default function Subscription() {
  const [selectedTime, setSelectedTime] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const packageType = state?.packageType || "silver";

  const selectedHome = state?.selectedHome || {
    bhk: "2 BHK",
    area: "700 - 1100 sq.ft",
    price: 5599,
  };

  const packageData = {
    silver: {
      title: "Silver Package",
      icon: "🥈",
      color: "bg-gray-100",
      price: selectedHome.price,
    },

    gold: {
      title: "Gold Package",
      icon: "👑",
      color: "bg-[#EEF5E3]",
      price: selectedHome.price,
    },

    custom: {
      title: "Build Your Own Plan",
      icon: "✨",
      color: "bg-[#EEF5E3]",
      price: selectedHome.price,
    },
  };

  const currentPackage = packageData[packageType];

  const [subscriptionType, setSubscriptionType] = useState("monthly");

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-28">
      {/* Hero */}

      <section className="bg-white rounded-b-[35px] shadow-sm px-5 pt-24 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#556B2F] font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="mt-6 text-4xl font-black text-[#222]">
          Complete Your
          <br />
          Subscription
        </h1>

        <p className="mt-3 text-gray-500 leading-7">
          You're almost done. Choose your subscription duration, preferred
          cleaning time and continue to payment.
        </p>
      </section>

      {/* Package */}

      <section className="px-5 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${currentPackage.color}`}
            >
              {currentPackage.icon}
            </div>

            <div>
              <h2 className="text-xl font-bold">{currentPackage.title}</h2>

              <p className="text-gray-500">₹{currentPackage.price}/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home */}

      <section className="px-5 mt-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Your Home</p>

              <div className="flex items-center gap-3 mt-2">
                <Home className="text-[#556B2F]" size={22} />

                <div>
                  <h3 className="font-bold text-lg">{selectedHome.bhk}</h3>

                  <p className="text-sm text-gray-500">{selectedHome.area}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="text-[#556B2F] font-semibold"
            >
              Change
            </button>
          </div>
        </div>
      </section>

      {/* ===== PART 2 STARTS HERE ===== */}
      {/* Subscription Type */}

      <section className="px-5 mt-8">
        <h2 className="text-2xl font-bold">Subscription</h2>

        <p className="text-gray-500 mt-2">Choose how you'd like to pay.</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Monthly */}

          <button
            onClick={() => setSubscriptionType("monthly")}
            className={`rounded-3xl border p-5 text-left transition-all duration-300 ${
              subscriptionType === "monthly"
                ? "bg-[#556B2F] border-[#556B2F] text-white shadow-xl"
                : "bg-white border-gray-200 hover:border-[#556B2F]"
            }`}
          >
            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Monthly</h3>

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  subscriptionType === "monthly"
                    ? "bg-white text-[#556B2F]"
                    : "border border-gray-300"
                }`}
              >
                {subscriptionType === "monthly" ? "✓" : ""}
              </div>
            </div>

            <p
              className={`mt-4 ${
                subscriptionType === "monthly"
                  ? "text-white/80"
                  : "text-gray-500"
              }`}
            >
              Pay every month.
            </p>
          </button>

          {/* Yearly */}

          <button
            onClick={() => setSubscriptionType("yearly")}
            className={`relative rounded-3xl border p-5 text-left transition-all duration-300 ${
              subscriptionType === "yearly"
                ? "bg-[#556B2F] border-[#556B2F] text-white shadow-xl"
                : "bg-white border-gray-200 hover:border-[#556B2F]"
            }`}
          >
            {/* Badge */}

            <span className="absolute top-4 right-4 bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded-full">
              SAVE
            </span>

            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Yearly</h3>

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  subscriptionType === "yearly"
                    ? "bg-white text-[#556B2F]"
                    : "border border-gray-300"
                }`}
              >
                {subscriptionType === "yearly" ? "✓" : ""}
              </div>
            </div>

            <p
              className={`mt-4 ${
                subscriptionType === "yearly"
                  ? "text-white/80"
                  : "text-gray-500"
              }`}
            >
              Best value for long-term plans.
            </p>
          </button>
        </div>
      </section>

      {/* ===== PART 3 STARTS HERE ===== */}
      {/* Time Slots */}

      <section className="px-5 mt-8">
        <h2 className="text-2xl font-bold">Preferred Time</h2>

        <p className="text-gray-500 mt-2">
          Select a daily time slot for your cleaning.
        </p>

        {[
          {
            title: "Morning",
            slots: [
              "6:00 - 7:00 AM",
              "7:00 - 8:00 AM",
              "8:00 - 9:00 AM",
              "9:00 - 10:00 AM",
            ],
          },
          {
            title: "Afternoon",
            slots: ["10:00 - 11:00 AM", "11:00 - 12:00 PM", "12:00 - 1:00 PM"],
          },
        ].map((group) => (
          <div key={group.title} className="mt-7">
            <h3 className="font-semibold text-lg">{group.title}</h3>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {group.slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`rounded-2xl py-4 px-3 font-medium transition border ${
                    selectedTime === slot
                      ? "bg-[#556B2F] text-white border-[#556B2F]"
                      : "bg-white border-gray-200 hover:border-[#556B2F] hover:text-[#556B2F]"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Address */}

      <section className="px-5 mt-10">
        <h2 className="text-2xl font-bold">Address</h2>

        <div className="mt-5 bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-bold text-lg">No Address Added</h3>

          <p className="text-gray-500 mt-2">
            Add your address before proceeding to payment.
          </p>

          <button className="mt-5 w-full bg-[#556B2F] text-white py-4 rounded-2xl font-semibold hover:bg-[#465826] transition">
            + Add Address
          </button>
        </div>
      </section>

      {/* Order Summary */}

      <section className="px-5 mt-10">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Package</span>

              <span className="font-semibold">{currentPackage.title}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Home</span>

              <span className="font-semibold">{selectedHome.bhk}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Subscription</span>

              <span className="font-semibold capitalize">
                {subscriptionType}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Time Slot</span>

              <span className="font-semibold">{selectedTime || "--"}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span className="text-[#556B2F]">₹{currentPackage.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PART 4 STARTS HERE ===== */}
      {/* Sticky Footer */}

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total Amount</p>

            <h2 className="text-3xl font-black text-[#556B2F]">
              ₹{currentPackage.price}
            </h2>
          </div>

          <button
            disabled={!selectedTime}
            onClick={() =>
              navigate("/payment", {
                state: {
                  packageType,
                  selectedHome,
                  subscriptionType,
                  selectedTime,
                  total: currentPackage.price,
                },
              })
            }
            className={`rounded-2xl px-7 py-4 font-semibold transition-all duration-300 ${
              !selectedTime
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#556B2F] text-white hover:bg-[#465826]"
            }`}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
