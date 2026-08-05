import { ArrowRight } from "lucide-react";

import { useNavigate } from "react-router-dom";


export default function StickyFooter({ home, packageType }) {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-5 py-2 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Selected Plan</p>

          <h3 className="font-semibold text-base">{home.bhk}</h3>

          <p className="text-[#556B2F] font-bold text-lg">
            ₹{home.price}
            <span className="text-sm text-gray-500 font-normal"> /month</span>
          </p>
        </div>

        <button
          className="bg-[#556B2F] hover:bg-[#475b28] transition px-5 py-2.5 rounded-2xl text-white font-semibold flex items-center gap-2"
          onClick={() =>
            navigate("/subscription", {
              state: {
                packageType,
                selectedHome: home,
              },
            })
          }
        >
          Subscribe
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
