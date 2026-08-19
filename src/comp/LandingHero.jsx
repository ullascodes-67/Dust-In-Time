import {
  ArrowRight,
  Phone,
  Star,
  ShieldCheck,
  Clock3,
  Leaf,
  HeartPulse,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F6F1]">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#556B2F]/10 blur-[140px]" />
      <div className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full bg-[#B8C98A]/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT ================= */}

          <div className="relative z-10">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E3] px-4 py-2">
              <Star size={16} fill="#556B2F" className="text-[#556B2F]" />

              <span className="text-sm font-semibold text-[#556B2F]">
                Trusted by 500+ Homes
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#222]">
              Professional
              <br />
              Cleaning
              <br />
              For Every Home
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Experience premium home cleaning with trained
              professionals,flexible cleaning plans and on-demand servicesand
              quality service designed to keep your home fresh, spotless and
              stress-free.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/packages")}
                className="bg-[#556B2F] hover:bg-[#465826] transition-all duration-300 text-white rounded-2xl px-8 py-4 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Packages
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-[#556B2F] rounded-2xl px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#556B2F] hover:text-white transition-all duration-300"
              >
                <Phone size={18} />
                Contact Us
              </button>
            </div>

            {/* Trust Strip */}

            <div className="mt-9 flex flex-wrap gap-4 pb-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#556B2F]" />

                <span className="font-medium text-gray-700">
                  Police Verified Staff
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} className="text-[#556B2F]" />

                <span className="font-medium text-gray-700">
                  On-Time Service
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Leaf size={18} className="text-[#556B2F]" />

                <span className="font-medium text-gray-700">Eco-Friendly</span>
              </div>

              <div className="flex items-center gap-2">
                <HeartPulse size={18} className="text-[#556B2F]" />

                <span className="font-medium text-gray-700">
                  Health-Screened Workers
                </span>
              </div>
            </div>
          </div>

          {/* ======== PART 2 STARTS HERE ======== */}
          {/* ================= RIGHT ================= */}

          <div className="relative hidden lg:flex justify-end mt-0">
            {/* Background Circle */}

            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[580px] lg:h-[580px] rounded-full bg-[#556B2F]/10 blur-3xl" />

            {/* Hero Image */}

            <img
              src="/Hero-Logo.png"
              alt="DIT Cleaning"
              draggable="false"
              className="
      relative
      z-10
      w-[320px]
      sm:w-[430px]
      lg:w-[620px]
      xl:w-[700px]
      object-contain
      select-none
      drop-shadow-[0_35px_60px_rgba(85,107,47,0.25)]
      transition-all
      duration-500
      hover:scale-105
    "
            />

            {/* Floating Card */}

            <div className="hidden lg:flex absolute top-10 right-0 bg-white rounded-3xl shadow-2xl border border-gray-100 px-5 py-4 items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">
                <ShieldCheck size={22} className="text-[#556B2F]" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Verified Staff</h4>

                <p className="text-xs text-gray-500">Background Checked</p>
              </div>
            </div>

            {/* Floating Rating */}

            <div className="hidden lg:flex absolute bottom-10 left-0 bg-white rounded-3xl shadow-xl border border-gray-100 px-5 py-4 items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="#FACC15"
                    className="text-[#FACC15]"
                  />
                ))}
              </div>

              <div>
                <h4 className="font-bold text-gray-800">4.8 / 5</h4>

                <p className="text-xs text-gray-500">500+ Happy Homes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
