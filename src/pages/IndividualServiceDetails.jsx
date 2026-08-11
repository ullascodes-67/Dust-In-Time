import { ArrowLeft, Check, Clock3 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function IndividualServiceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  /* =========================
     SERVICE DATA
  ========================= */

  // Keep this data the same as IndividualServices.jsx.
  // Prices and details can be changed later.
  const services = [
    {
      id: 1,
      title: "Bathroom Cleaning",
      price: 699,
      icon: "🛁",
      description:
        "Deep cleaning service to keep your bathroom fresh, clean and hygienic.",

      duration: "1 - 2 hours",

      includes: [
        "Bathroom floor cleaning",
        "Tile cleaning",
        "Sink cleaning",
        "Toilet cleaning",
        "Mirror cleaning",
        "General surface cleaning",
      ],
    },

    {
      id: 2,
      title: "Sofa Cleaning",
      price: 999,
      icon: "🛋️",
      description:
        "Professional cleaning to remove dust, dirt and stains from your sofa.",

      duration: "1 - 2 hours",

      includes: [
        "Surface dust removal",
        "Sofa vacuuming",
        "Fabric cleaning",
        "Stain treatment",
        "Cushion cleaning",
      ],
    },

    {
      id: 3,
      title: "Kitchen Cleaning",
      price: 899,
      icon: "🍳",
      description:
        "Detailed cleaning of your kitchen surfaces, cabinets and surrounding areas.",

      duration: "1 - 2 hours",

      includes: [
        "Countertop cleaning",
        "Sink cleaning",
        "Cabinet exterior cleaning",
        "Stove cleaning",
        "Floor cleaning",
      ],
    },

    {
      id: 4,
      title: "Window Cleaning",
      price: 599,
      icon: "🪟",
      description:
        "Professional window cleaning to remove dust, marks and buildup.",

      duration: "1 - 2 hours",

      includes: [
        "Glass cleaning",
        "Window frame cleaning",
        "Dust removal",
        "Accessible exterior cleaning",
      ],
    },

    {
      id: 5,
      title: "Balcony Cleaning",
      price: 499,
      icon: "🌿",
      description:
        "Thorough cleaning of your balcony floor, corners and accessible areas.",

      duration: "1 hour",

      includes: [
        "Floor sweeping",
        "Mopping",
        "Corner cleaning",
        "Dust removal",
        "Accessible surface cleaning",
      ],
    },

    {
      id: 6,
      title: "Deep Cleaning",
      price: 1499,
      icon: "✨",
      description:
        "A detailed one-time cleaning service for a fresher and cleaner home.",

      duration: "2 - 4 hours",

      includes: [
        "Dusting",
        "Sweeping",
        "Mopping",
        "Surface cleaning",
        "Kitchen cleaning",
        "Bathroom cleaning",
      ],
    },
  ];

  /* =========================
     FIND SERVICE
  ========================= */

  const service = services.find(
    (item) => item.id === Number(id)
  );

  /* =========================
     INVALID SERVICE
  ========================= */

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-5">

        <div className="text-center">

          <h1 className="text-3xl font-black">
            Service Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The service you're looking for doesn't exist.
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-6 bg-[#556B2F] text-white px-6 py-3 rounded-xl font-semibold"
          >
            <ArrowLeft size={17} />

            Back to Services
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-28">

      {/* =========================
          HERO
      ========================= */}

      <section className="bg-gradient-to-br from-[#556B2F] via-[#667C37] to-[#7B9150] rounded-b-[35px]">

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-12">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl hover:bg-white/20 transition"
          >
            <ArrowLeft size={18} />

            Back
          </Link>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">

            <div className="w-10 h-10 rounded-3xl bg-white/15 flex items-center justify-center text-2xl">

              {service.icon}

            </div>

            <div>

              <p className="text-white/70 text-sm font-semibold">
                INDIVIDUAL SERVICE
              </p>

              <h1 className="mt-1 text-4xl sm:text-5xl font-black text-white">
                {service.title}
              </h1>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          DETAILS
      ========================= */}

      <main className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="mt-8 lg:grid lg:grid-cols-[1fr_350px] gap-8 items-start">

          {/* LEFT */}

          <div className="space-y-6">

            {/* ABOUT */}

            <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">

              <p className="text-xs font-bold tracking-wider text-[#556B2F]">
                ABOUT THIS SERVICE
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Professional {service.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

            </section>

            {/* INCLUDED */}

            <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm mb-5">

              <p className="text-xs font-bold tracking-wider text-[#556B2F]">
                WHAT'S INCLUDED
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Service Includes
              </h2>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">

                {service.includes.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="w-7 h-7 rounded-full bg-[#EEF5E3] text-[#556B2F] flex items-center justify-center shrink-0">

                      <Check size={15} strokeWidth={3} />

                    </div>

                    <p className="text-gray-700 text-sm">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </section>

          </div>

          {/* RIGHT */}

          <aside>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 lg:sticky lg:top-28">

              <p className="text-xs font-bold tracking-wider text-[#556B2F]">
                SERVICE DETAILS
              </p>

              <div className="mt-5">

                <p className="text-sm text-gray-500">
                  Starting from
                </p>

                <p className="mt-1 text-4xl font-black text-[#556B2F]">
                  ₹{service.price}
                </p>

              </div>

              <div className="mt-6 flex items-center gap-3 bg-[#F8F6F1] rounded-2xl p-4">

                <Clock3
                  size={21}
                  className="text-[#556B2F]"
                />

                <div>

                  <p className="text-xs text-gray-500">
                    Estimated Duration
                  </p>

                  <p className="font-semibold">
                    {service.duration}
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  navigate("/individual-booking", {
                    state: {
                      service,
                    },
                  })
                }
                className="mt-6 w-full bg-[#556B2F] text-white py-4 rounded-2xl font-semibold hover:bg-[#475B28] transition"
              >
                Book This Service
              </button>

              <p className="mt-4 text-xs text-gray-400 text-center leading-5">
                This is a one-time service and is separate
                from our monthly subscription plans.
              </p>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}