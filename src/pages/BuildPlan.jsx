import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import HomeSelector from "../comp/package/HomeSelector";

export default function BuildPlan() {
  const navigate = useNavigate();

  /* =========================
     HOME DATA
  ========================= */

  // Change these prices later.
  const homes = [
    {
      bhk: "1 BHK",
      area: "Up to 700 sq.ft",
      price: 3999,
    },
    {
      bhk: "2 BHK",
      area: "700 - 1100 sq.ft",
      price: 4999,
    },
    {
      bhk: "3 BHK",
      area: "1100 - 1500 sq.ft",
      price: 5999,
    },
  ];

  const [selectedHome, setSelectedHome] = useState(0);

  /* =========================
     SERVICE DATA
  ========================= */

  // Change only the prices later.
  const services = [
    {
      id: 1,
      title: "Dusting",
      price: 399,
      icon: "✨",
    },
    {
      id: 2,
      title: "Sweeping",
      price: 299,
      icon: "🧹",
    },
    {
      id: 3,
      title: "Mopping",
      price: 349,
      icon: "🪣",
    },
    {
      id: 4,
      title: "Dishwashing",
      price: 499,
      icon: "🍽️",
    },
    {
      id: 5,
      title: "Bathroom",
      price: 699,
      icon: "🛁",
    },
    {
      id: 6,
      title: "Laundry",
      price: 599,
      icon: "🧺",
    },
    {
      id: 7,
      title: "Balcony",
      price: 299,
      icon: "🌿",
    },
    {
      id: 8,
      title: "Organising",
      price: 449,
      icon: "📦",
    },
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  /* =========================
     SERVICE SELECTION
  ========================= */

  function toggleService(id) {
    if (selectedServices.includes(id)) {
      setSelectedServices(
        selectedServices.filter((item) => item !== id)
      );
    } else {
      setSelectedServices([
        ...selectedServices,
        id,
      ]);
    }
  }

  function removeService(id) {
    setSelectedServices(
      selectedServices.filter((item) => item !== id)
    );
  }

  /* =========================
     PRICE CALCULATION
  ========================= */

  const basePrice = homes[selectedHome].price;

  const servicesTotal = useMemo(() => {
    return services
      .filter((service) =>
        selectedServices.includes(service.id)
      )
      .reduce(
        (sum, service) => sum + service.price,
        0
      );
  }, [selectedServices]);

  const total = basePrice + servicesTotal;

  /* =========================
     CONTINUE
  ========================= */

  function continueToSubscription() {
    if (selectedServices.length === 0) {
      return;
    }

    const selectedServiceData = services.filter(
      (service) =>
        selectedServices.includes(service.id)
    );

    navigate("/subscription", {
      state: {
        packageType: "custom",
        selectedHome: homes[selectedHome],
        services: selectedServiceData,
        basePrice,
        servicesTotal,
        total,
      },
    });
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-8">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="bg-gradient-to-br from-[#556B2F] via-[#667C37] to-[#7B9150] rounded-b-[30px]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 sm:pt-28 pb-8 sm:pb-12">

          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-sm hover:bg-white/20 transition"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="mt-5 sm:mt-8 max-w-3xl">

            <p className="text-white/70 text-[11px] sm:text-sm font-semibold tracking-wider">
              CUSTOM SUBSCRIPTION
            </p>

            <h1 className="mt-1.5 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05]">
              Build Your Own Plan
            </h1>

            <p className="mt-3 sm:mt-5 text-white/80 text-sm sm:text-lg leading-6 sm:leading-7 max-w-2xl">
              Choose your home size and select the services
              you want your dedicated worker to handle every day.
            </p>

          </div>

        </div>

      </section>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* =================================================
            HOME
        ================================================= */}

        <section className="mt-6 sm:mt-10">

          <div className="mb-3 sm:mb-5">

            <div className="flex items-center gap-2">

              <span className="text-[10px] sm:text-xs font-bold text-[#556B2F] tracking-wider">
                STEP 1
              </span>

              <span className="h-px w-8 bg-[#B8C98A]" />

            </div>

           

          </div>

          <HomeSelector
            homes={homes}
            selected={selectedHome}
            setSelected={setSelectedHome}
          />

        </section>

        {/* =================================================
            BUILDER
        ================================================= */}

        <section className="mt-7 sm:mt-12">

          <div className="mb-4 sm:mb-7">

            <div className="flex items-center gap-2">

              <span className="text-[10px] sm:text-xs font-bold text-[#556B2F] tracking-wider">
                STEP 2
              </span>

              <span className="h-px w-8 bg-[#B8C98A]" />

            </div>

            <h2 className="mt-1 text-xl sm:text-3xl font-bold text-[#222]">
              Build Your Plan
            </h2>

            <p className="mt-1 text-xs sm:text-base text-gray-500">
              Select the services your worker will do daily.
            </p>

          </div>

          {/* =================================================
              DESKTOP TWO COLUMN
          ================================================= */}

          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_420px] lg:gap-8 xl:gap-10 lg:items-start">

            {/* =================================================
                SERVICES
            ================================================= */}

            <div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">

                {services.map((service) => {

                  const active =
                    selectedServices.includes(service.id);

                  return (

                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        toggleService(service.id)
                      }
                      className={`relative h-[125px] sm:h-[155px] lg:h-[170px] rounded-2xl sm:rounded-3xl border p-3.5 sm:p-5 text-left flex flex-col justify-between transition-all duration-300 ${
                        active
                          ? "bg-[#556B2F] border-[#556B2F] shadow-lg"
                          : "bg-white border-gray-200 hover:border-[#556B2F] hover:shadow-md"
                      }`}
                    >

                      {/* CHECK */}

                      <div
                        className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          active
                            ? "bg-white text-[#556B2F]"
                            : "border border-gray-300 text-gray-400"
                        }`}
                      >

                        {active ? (
                          <Check
                            size={13}
                            strokeWidth={3}
                          />
                        ) : (
                          "+"
                        )}

                      </div>

                      {/* ICON */}

                      <div
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl ${
                          active
                            ? "bg-white/20"
                            : "bg-[#EEF5E3]"
                        }`}
                      >
                        {service.icon}
                      </div>

                      {/* INFO */}

                      <div>

                        <h3
                          className={`font-bold text-sm sm:text-lg ${
                            active
                              ? "text-white"
                              : "text-[#222]"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <div className="flex items-center gap-2 mt-0.5">

                          <p
                            className={`text-xs sm:text-sm ${
                              active
                                ? "text-white/80"
                                : "text-gray-500"
                            }`}
                          >
                            ₹{service.price}
                          </p>

                          <span
                            className={`text-[9px] sm:text-xs ${
                              active
                                ? "text-white/60"
                                : "text-gray-400"
                            }`}
                          >
                            Daily
                          </span>

                        </div>

                      </div>

                    </button>

                  );
                })}

              </div>

            </div>

            {/* =================================================
                OVERVIEW
            ================================================= */}

            <aside className="mt-5 mb-15 lg:mt-0">

              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg lg:sticky lg:top-28 overflow-hidden">

                {/* HEADER */}

                <div className="px-5 py-4 sm:p-6">

                  <div className="flex items-center justify-between gap-3">

                    <div>

                      <p className="text-[10px] sm:text-xs font-bold tracking-wider text-[#556B2F]">
                        PLAN OVERVIEW
                      </p>

                      <h2 className="mt-0.5 text-xl sm:text-2xl font-black text-[#222]">
                        Your Plan
                      </h2>

                    </div>

                    <div className="bg-[#EEF5E3] text-[#556B2F] px-3 py-1.5 rounded-full font-bold text-sm sm:text-base">
                      ₹{total}
                    </div>

                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    {selectedServices.length} service
                    {selectedServices.length !== 1 && "s"} selected
                  </p>

                </div>

                {/* HOME */}

                <div className="px-5 sm:px-6">

                  <div className="rounded-2xl bg-[#F8F6F1] px-4 py-3">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[10px] text-gray-500">
                          HOME
                        </p>

                        <p className="mt-0.5 font-bold text-sm sm:text-base">
                          {homes[selectedHome].bhk}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-[10px] text-gray-500">
                          BASE PRICE
                        </p>

                        <p className="mt-0.5 font-bold text-sm text-[#556B2F]">
                          ₹{basePrice}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* SERVICES */}

                <div className="px-5 sm:px-6 mt-4">

                  <div className="flex items-center justify-between">

                    <h3 className="font-bold text-sm sm:text-base">
                      Services
                    </h3>

                    <span className="text-xs text-gray-500">
                      ₹{servicesTotal}
                    </span>

                  </div>

                  {/* COMPACT SERVICE LIST */}

                  <div className="mt-2 max-h-[135px] sm:max-h-[180px] overflow-y-auto pr-1">

                    {selectedServices.length === 0 ? (

                      <div className="h-[90px] rounded-2xl bg-[#F8F6F1] flex items-center justify-center text-center px-4">

                        <p className="text-xs text-gray-500">
                          Select services to build your plan.
                        </p>

                      </div>

                    ) : (

                      <div className="flex flex-wrap gap-2">

                        {selectedServices.map((id) => {

                          const service = services.find(
                            (item) => item.id === id
                          );

                          return (

                            <div
                              key={id}
                              className="flex items-center gap-1.5 bg-[#EEF5E3] text-[#556B2F] rounded-full px-2.5 py-1.5"
                            >

                              <span className="text-sm">
                                {service.icon}
                              </span>

                              <span className="text-xs font-semibold">
                                {service.title}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  removeService(service.id)
                                }
                                className="ml-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center hover:text-red-500"
                                aria-label={`Remove ${service.title}`}
                              >

                                <X size={10} />

                              </button>

                            </div>

                          );

                        })}

                      </div>

                    )}

                  </div>

                </div>

                {/* PRICE */}

                <div className="mt-4 border-t border-gray-200 px-5 sm:px-6 pt-4">

                  <div className="flex justify-between text-xs">

                    <span className="text-gray-500">
                      Base Price
                    </span>

                    <span className="font-medium">
                      ₹{basePrice}
                    </span>

                  </div>

                  <div className="flex justify-between text-xs mt-2">

                    <span className="text-gray-500">
                      Services
                    </span>

                    <span className="font-medium">
                      ₹{servicesTotal}
                    </span>

                  </div>

                  <div className="flex items-end justify-between mt-3">

                    <div>

                      <p className="text-[10px] text-gray-500">
                        ESTIMATED MONTHLY
                      </p>

                      <p className="text-2xl sm:text-3xl font-black text-[#556B2F]">
                        ₹{total}
                      </p>

                    </div>

                  </div>

                </div>

                {/* BUTTON */}

                <div className="p-5 sm:p-6 pt-4 ">

                  <button
                    type="button"
                    disabled={selectedServices.length === 0}
                    onClick={continueToSubscription}
                    className={`w-full rounded-xl sm:rounded-2xl py-3 sm:py-4 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      selectedServices.length === 0
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#556B2F] text-white hover:bg-[#475B28] hover:shadow-lg"
                    }`}
                  >

                    {selectedServices.length === 0
                      ? "Select a Service"
                      : "Continue to Subscription"}

                    {selectedServices.length > 0 && (
                      <ArrowRight size={17} />
                    )}

                  </button>

                </div>

              </div>

            </aside>

          </div>

        </section>

      </main>

    </div>
  );
}