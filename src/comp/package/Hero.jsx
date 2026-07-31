import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero({ isGold }) {
  return (
    <section className="relative bg-gradient-to-br from-[#5E7332] via-[#6D823B] to-[#879B4C] rounded-b-[38px] px-5 pt-28 pb-12">
      {/* Top Row */}

      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium">
          {isGold ? "👑 Gold" : "🥈 Silver"}
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-white text-3xl font-bold leading-tight mt-4">
          Complete Home
          <br />
          Cleaning
        </h1>

        <p className="text-white/80 text-sm mt-3 max-w-xs leading-6">
          Professional monthly cleaning for a healthier, happier home.
        </p>
      </div>
    </section>
  );
}
