import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function IndividualServices() {
  const navigate = useNavigate();

  /* =========================
     SERVICE DATA
  ========================= */

  // Change prices and descriptions here later.
  const services = [
    {
      id: 1,
      title: "Bathroom Cleaning",
      price: 699,
      icon: "🛁",
      description:
        "Deep cleaning service to keep your bathroom fresh, clean and hygienic.",
    },

    {
      id: 2,
      title: "Sofa Cleaning",
      price: 999,
      icon: "🛋️",
      description:
        "Professional cleaning to remove dust, dirt and stains from your sofa.",
    },

    {
      id: 3,
      title: "Kitchen Cleaning",
      price: 899,
      icon: "🍳",
      description:
        "Detailed cleaning of your kitchen surfaces, cabinets and surrounding areas.",
    },

    {
      id: 4,
      title: "Window Cleaning",
      price: 599,
      icon: "🪟",
      description:
        "Professional window cleaning to remove dust, marks and buildup.",
    },

    {
      id: 5,
      title: "Balcony Cleaning",
      price: 499,
      icon: "🌿",
      description:
        "Thorough cleaning of your balcony floor, corners and accessible areas.",
    },

    {
      id: 6,
      title: "Deep Cleaning",
      price: 1499,
      icon: "✨",
      description:
        "A detailed one-time cleaning service for a fresher and cleaner home.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-16 mb-3">

      {/* =========================
          HERO
      ========================= */}

      <section className="bg-gradient-to-br from-[#556B2F] via-[#667C37] to-[#7B9150] rounded-b-[35px]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-12">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl hover:bg-white/20 transition"
          >
            <ArrowLeft size={18} />

            Back
          </Link>

          <div className="mt-7 max-w-3xl">

            <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wider">
              ONE-TIME SERVICES
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Individual
              <br className="sm:hidden" />
              Services
            </h1>

            <p className="mt-5 text-white/80 text-sm sm:text-lg leading-7 max-w-2xl">
              Need a specific cleaning service?
              Choose exactly what you need and book it
              whenever you want.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <section className="mt-10">

          <div className="mb-6">

            <p className="text-xs sm:text-sm font-semibold text-[#556B2F] tracking-wider">
              OUR SERVICES
            </p>

            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#222]">
              Choose a Service
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore our one-time cleaning services.
            </p>

          </div>

          {/* SERVICE GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.map((service) => (

              <div
                key={service.id}
                className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* ICON */}

                <div className="w-16 h-16 rounded-2xl bg-[#EEF5E3] flex items-center justify-center text-3xl">

                  {service.icon}

                </div>

                {/* CONTENT */}

                <div className="mt-6">

                  <h3 className="text-xl font-bold text-[#222]">

                    {service.title}

                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">

                    {service.description}

                  </p>

                </div>

                {/* PRICE + BUTTON */}

                <div className="mt-6 pt-5 border-t border-gray-100">

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <p className="text-xs text-gray-400">
                        Starting from
                      </p>

                      <p className="text-2xl font-black text-[#556B2F]">
                        ₹{service.price}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        navigate(`/services/${service.id}`)
                      }
                      className="inline-flex items-center gap-2 bg-[#556B2F] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#475B28] transition"
                    >

                      View Details

                      <ArrowRight size={17} />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}