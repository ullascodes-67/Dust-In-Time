import { Car, Sparkles, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft} from "lucide-react";

export default function Packages() {
  const comingSoon = [
    {
      title: "Car Wash",
      icon: Car,
      description:
        "Professional car cleaning and washing service for your vehicle.",
    },
    {
      title: "Build Your Own Plan",
      icon: Sparkles,
      description:
        "Create a personalized cleaning plan by choosing the services your home needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-25">
      {/* =========================
          HERO
      ========================= */}

      <section className="bg-gradient-to-br from-[#556B2F] via-[#667C37] to-[#7B9150] rounded-b-[35px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl hover:bg-white/20 transition "
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <div className="mt-7 max-w-3xl">
            <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wider">
              DUSTINTIME
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              More Services
              <br />
              Coming Soon
            </h1>

            <p className="mt-5 text-white/80 text-sm sm:text-lg leading-7 max-w-2xl">
              We're working on more services to make DustInTime
              your complete home and vehicle care solution.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          COMING SOON
      ========================= */}

      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <section className="mt-10">
          <div className="mb-6">
            <p className="text-xs sm:text-sm font-semibold text-[#556B2F] tracking-wider">
              COMING SOON
            </p>

            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#222]">
              We're Expanding
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              These services will be available soon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {comingSoon.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="relative bg-white rounded-3xl border border-gray-200 p-6 sm:p-7 shadow-sm overflow-hidden"
                >
                  {/* Badge */}
                  <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-[#EEF5E3] text-[#556B2F] px-3 py-1.5 rounded-full text-xs font-bold">
                    <Clock3 size={13} />
                    Coming Soon
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">
                    <Icon
                      size={30}
                      className="text-[#556B2F]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 pr-20">
                    <h3 className="text-2xl font-bold text-[#222]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-500 leading-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-7 pt-5 border-t border-gray-100">
                    <button
                      type="button"
                      disabled
                      className="w-full bg-gray-100 text-gray-400 py-3.5 rounded-2xl font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}