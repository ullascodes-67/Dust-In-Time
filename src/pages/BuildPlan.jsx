import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import HomeSelector from "../comp/package/HomeSelector";

export default function BuildPlan() {
  /* Home Data */

  const homes = [
    {
      bhk: "1 BHK",
      area: "Up to 700 sq.ft",
      price: 0,
    },
    {
      bhk: "2 BHK",
      area: "700 - 1100 sq.ft",
      price: 0,
    },
    {
      bhk: "3 BHK",
      area: "1100 - 1500 sq.ft",
      price: 0,
    },
    {
      bhk: "4 BHK",
      area: "1500+ sq.ft",
      price: 0,
    },
  ];

  const [selectedHome, setSelectedHome] = useState(0);

  /* Services */

  const services = [
    {
      id: 1,
      title: "Dusting",
      price: 0,
      icon: "✨",
    },
    {
      id: 2,
      title: "Sweeping",
      price: 0,
      icon: "🧹",
    },
    {
      id: 3,
      title: "Mopping",
      price: 0,
      icon: "🪣",
    },
    {
      id: 4,
      title: "Dishwashing",
      price: 0,
      icon: "🍽️",
    },
    {
      id: 5,
      title: "Bathroom",
      price: 0,
      icon: "🛁",
    },
    {
      id: 6,
      title: "Laundry",
      price: 0,
      icon: "🧺",
    },
    {
      id: 7,
      title: "Balcony",
      price: 0,
      icon: "🌿",
    },
    {
      id: 8,
      title: "Organising",
      price: 0,
      icon: "📦",
    },
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  function toggleService(id) {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((item) => item !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  }

  const total = useMemo(() => {
    const servicesTotal = services
      .filter((service) => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);

    return servicesTotal + homes[selectedHome].price;
  }, [selectedServices, selectedHome]);

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-32">
      {/* Hero */}

      <section className="bg-gradient-to-br from-[#556B2F] via-[#667C37] to-[#7B9150] rounded-b-[40px] px-5 pt-28 pb-10">
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1 className="mt-7 text-4xl font-black text-white leading-tight">
          Build Your
          <br />
          Own Plan
        </h1>

        <p className="mt-4 text-white/80 leading-7 max-w-sm">
          Create your own monthly cleaning subscription by choosing exactly the
          services your home needs.
        </p>
      </section>

      {/* Home Selector */}

      <HomeSelector
        homes={homes}
        selected={selectedHome}
        setSelected={setSelectedHome}
      />

      {/* ===== PART 2 STARTS HERE ===== */}
      {/* Services */}

      <section className="px-5 mt-10">
        <h2 className="text-2xl font-bold">Choose Services</h2>

        <p className="text-sm text-gray-500 mt-2">
          Select all the services you'd like to include.
        </p>

        <div className="mt-6 h-[420px] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => {
              const active = selectedServices.includes(service.id);

              return (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`relative rounded-3xl p-5 transition-all duration-300 border text-left aspect-square flex flex-col justify-between ${
                    active
                      ? "bg-[#556B2F] border-[#556B2F] shadow-xl"
                      : "bg-white border-gray-200 hover:border-[#556B2F]"
                  }`}
                >
                  {/* Check */}

                  <div
                    className={`absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                      active
                        ? "bg-white text-[#556B2F]"
                        : "border border-gray-300 text-gray-400"
                    }`}
                  >
                    {active ? "✓" : "+"}
                  </div>

                  {/* Icon */}

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${
                      active ? "bg-white/20" : "bg-[#EEF5E3]"
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}

                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        active ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-1 ${
                        active ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      ₹{service.price}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PART 3 STARTS HERE ===== */}
      {/* Selected Plan */}

      <section className="px-5 mt-10">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Selected Plan</h2>

              <p className="text-sm text-gray-500 mt-1">
                {selectedServices.length} Service
                {selectedServices.length !== 1 && "s"} Selected
              </p>
            </div>

            <div className="bg-[#EEF5E3] text-[#556B2F] px-4 py-2 rounded-full font-semibold">
              ₹{total}
            </div>
          </div>

          {/* Selected Services */}

          <div className="mt-6">
            {selectedServices.length === 0 ? (
              <div className="rounded-2xl bg-[#F8F6F1] py-8 text-center">
                <p className="text-gray-500">No services selected yet.</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {selectedServices.map((id) => {
                  const service = services.find((item) => item.id === id);

                  return (
                    <div
                      key={id}
                      className="flex items-center gap-2 bg-[#EEF5E3] text-[#556B2F] rounded-full px-4 py-2 font-medium"
                    >
                      <span>{service.icon}</span>

                      <span>{service.title}</span>
                    </div>
                  );
                })}
                <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">
                      Estimated Monthly Cost
                    </p>

                    <h2 className="text-2xl font-black text-[#556B2F]">
                      ₹{total}
                    </h2>
                  </div>

                  <button
                    disabled={selectedServices.length === 0}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                      selectedServices.length === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#556B2F] text-white hover:bg-[#475B28]"
                    }`}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Footer */}

      <div className=" bg-white/95 backdrop-blur-xl border-t border-gray-200"></div>
    </div>
  );
}
