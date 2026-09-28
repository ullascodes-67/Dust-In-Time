import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StickyFooter({ home, packageType }) {
  const navigate = useNavigate();

  const packageName =
    packageType === "gold"
      ? "Gold Package"
      : "Silver Package";

  const handleSubscribe = () => {
    navigate("/subscription", {
      state: {
        packageType,
        selectedHome: home,
      },
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-5 py-2.5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs text-gray-500">
            {packageName}
          </p>

          <p className="font-bold text-[#556B2F] truncate">
            {home.bhk} · ₹{home.price}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSubscribe}
          className="bg-[#556B2F] hover:bg-[#475B28] transition px-5 py-2.5 rounded-2xl text-white font-semibold flex items-center gap-2 flex-shrink-0"
        >
          Subscribe
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}