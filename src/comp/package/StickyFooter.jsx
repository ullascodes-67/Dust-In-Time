import { ArrowRight } from "lucide-react";

export default function StickyFooter({ home, packageType }) {
  const whatsappNumber = "9481435040"; // replace with your DIT WhatsApp number

  const packageName =
    packageType === "gold" ? "Gold Package" : "Silver Package";

  const message = `Hi DIT 👋

I would like to subscribe to the ${packageName}.

Home Size: ${home.bhk}
Price: ₹${home.price}/month

I would like to continue with the subscription.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-5 py-2 flex items-center justify-between">

        <div>
          <p className="text-xs text-gray-500">
            Selected Plan
          </p>

          <h3 className="font-semibold text-base">
            {home.bhk}
          </h3>

          <p className="text-[#556B2F] font-bold text-lg">
            ₹{home.price}
            <span className="text-sm text-gray-500 font-normal">
              {" "}
              /month
            </span>
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#556B2F] hover:bg-[#475b28] transition px-5 py-2.5 rounded-2xl text-white font-semibold flex items-center gap-2"
        >
          Subscribe
          <ArrowRight size={18} />
        </a>

      </div>
    </div>
  );
}