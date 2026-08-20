import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function IndividualServiceCard() {
  const navigate = useNavigate();

  return (
    <div className="w-[calc(100%-2rem)] sm:w-full max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-lg p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-[#EEF5E3] flex items-center justify-center text-2xl shrink-0">
          ✨
        </div>

        <div>

          <p className="text-gray-500 text-xs sm:text-sm">
            One-time cleaning
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Individual Services
          </h3>

        </div>

      </div>

      <hr className="my-5 sm:my-6 border-gray-100" />

      {/* Description */}

      <p className="text-gray-600 text-sm sm:text-base leading-6">
        Need only a specific cleaning service?
        Choose exactly what you need and book it
        whenever you want.
      </p>

      {/* Service Preview */}

      <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">

        {/* Bathroom */}

        <div className="rounded-2xl bg-[#F8F6F1] py-4 px-2 text-center">

          <div className="text-2xl">
            🛁
          </div>

          <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
            Bathroom
          </p>

        </div>

        {/* Sofa */}

        <div className="rounded-2xl bg-[#F8F6F1] py-4 px-2 text-center">

          <div className="text-2xl">
            🛋️
          </div>

          <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
            Sofa
          </p>

        </div>

        {/* Kitchen */}

        <div className="rounded-2xl bg-[#F8F6F1] py-4 px-2 text-center">

          <div className="text-2xl">
            🍳
          </div>

          <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
            Kitchen
          </p>

        </div>

      </div>

      {/* Info */}

      <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-gray-500">

        <span className="w-2 h-2 rounded-full bg-[#556B2F] shrink-0" />

        No monthly subscription required

      </div>

      {/* Button */}

      <button
        onClick={() => navigate("/services")}
        className="mt-5 w-full border-2 border-[#556B2F] rounded-full py-3 font-semibold text-[#556B2F] flex items-center justify-center gap-2 hover:bg-[#556B2F] hover:text-white transition"
      >
        View Details

        <ArrowRight size={18} />

      </button>

    </div>
  );
}