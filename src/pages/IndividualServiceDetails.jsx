import { ArrowLeft, Check, X, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Kitchen Cleaning",
    price: "999–1,499",
    icon: "🍳",
    description: "Price depends on kitchen size and condition.",

    includes: [
      "Countertop and kitchen platform cleaning",
      "Sink and tap cleaning",
      "Cabinet/external shutter wiping",
      "Backsplash/tiles wiping",
      "Hob/stove surface cleaning",
      "Accessible appliance exterior cleaning",
      "Floor sweeping and mopping",
      "Dust and grease removal from accessible surfaces",
    ],

    notIncludes: [
      "Inside cabinets/drawers",
      "Inside chimney/exhaust fan",
      "Heavy grease or carbon removal",
      "Oven/microwave deep cleaning",
      "Pest-control treatment",
      "Removal of very heavy stains/rust",
      "Moving heavy appliances",
    ],
  },

  {
    id: 2,
    title: "Fridge Cleaning",
    price: 799,
    icon: "🧊",
    description:
      "Professional fridge cleaning including accessible interior and exterior surfaces.",

    includes: [
      "Emptying and wiping accessible shelves (customer should remove food/items)",
      "Shelf and tray cleaning",
      "Interior wall cleaning",
      "Door and gasket cleaning",
      "Exterior cleaning",
      "Basic stain and spill removal",
    ],

    notIncludes: [
      "Repair or dismantling of refrigerator",
      "Deep cleaning of condenser/back coils",
      "Removal of very stubborn mould/rust",
      "Disposal of expired food",
      "Electrical/mechanical work",
    ],
  },

  {
    id: 3,
    title: "Wardrobe Cleaning",
    price: "399–699",
    icon: "👔",
    description: "Price depends on wardrobe size.",

    includes: [
      "Empty-surface dusting",
      "Interior shelf wiping",
      "Exterior panel cleaning",
      "Doors and handles cleaning",
      "Basic organisation assistance",
      "Floor/base area cleaning around wardrobe",
    ],

    notIncludes: [
      "Washing clothes",
      "Full decluttering",
      "Disposal of unwanted items",
      "Heavy mould treatment",
      "Moving/dismantling wardrobe",
      "Repair work",
    ],
  },

  {
    id: 4,
    title: "Fans & Windows Cleaning",
    price: 599,
    icon: "🪟",
    description:
      "Cleaning of accessible fans and windows including basic dust and cobweb removal.",

    includes: [
      "Dusting of accessible fan blades",
      "Fan body cleaning",
      "Window glass cleaning",
      "Window frame cleaning",
      "Window sill cleaning",
      "Basic cobweb removal",
    ],

    notIncludes: [
      "High-risk/exterior window cleaning",
      "Cleaning windows requiring special equipment",
      "Ladder/scaffolding work beyond safe working height",
      "Removal of paint/cement/plaster",
      "Heavy stain/rust removal",
      "Fan electrical repair or dismantling",
    ],
  },

  {
    id: 5,
    title: "Balcony Cleaning",
    price: 299,
    icon: "🌿",
    description:
      "Basic balcony cleaning including sweeping, mopping, dust and cobweb removal.",

    includes: [
      "Sweeping",
      "Mopping",
      "Dust removal",
      "Cobweb removal",
      "Railing wiping",
      "Basic floor stain cleaning",
      "Accessible surface cleaning",
    ],

    notIncludes: [
      "Heavy cement/paint removal",
      "Severe algae/moss treatment",
      "Pest control",
      "Drain blockage removal",
      "Moving heavy furniture/items",
      "Exterior/high-risk areas",
    ],
  },
  {
    id: 6,
    title: "Bathroom & Toilet Cleaning",
    price: 299,
    icon: "🚽",
    description:
    "Basic bathroom and toilet cleaning including floor, toilet, sink, dust and stain removal.",

    includes: [
      "Sweeping",
      "Mopping",
      "Dust removal",
      "Cobweb removal",
      "Railing wiping",
      "Basic floor stain cleaning",
      "Accessible surface cleaning",
    ],

    notIncludes: [
      "Heavy cement/paint removal",
      "Severe algae/moss treatment",
      "Pest control",
      "Drain blockage removal",
      "Moving heavy furniture/items",
      "Exterior/high-risk areas",
    ],
  },
];

const terms = [
  "Services will be provided as per the selected subscription plan and schedule.",
  "Customers must provide access to the home at the scheduled service time.",
  "Services not included in the selected plan will be charged separately.",
  "Rescheduling requests must be made in advance and are subject to availability.",
  "Customers are responsible for keeping valuables and fragile items safely stored before service.",
  "Subscription payments, cancellations and refunds are subject to DustInTime’s applicable policies.",
  "By subscribing, you agree to these Terms & Conditions and the details of your selected plan.",
];

export default function IndividualServiceDetails() {
  const { id } = useParams();

  const service = services.find((item) => item.id === Number(id));

  const [showBookingFlow, setShowBookingFlow] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [registrationAccepted, setRegistrationAccepted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    area: "",
    apartment: "",
    houseNo: "",
    email: "",
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-6 bg-[#556B2F] text-white px-5 py-3 rounded-2xl"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAgreeTerms = () => {
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to continue.");
      return;
    }

    setShowBookingFlow(true);

    setTimeout(() => {
      document.getElementById("customer-registration")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registrationAccepted) {
      alert(
        "Please confirm your information and agree to the Terms & Conditions.",
      );
      return;
    }

    const { fullName, phone, area, apartment, houseNo, email } = formData;

    const whatsappNumber = "919481435040";
    // Replace this with your actual DIT WhatsApp number.

    const message = `Hi DustInTime 👋

I would like to book an individual service.

SERVICE DETAILS
----------------------
Service: ${service.title}
Price: ₹${service.price}

CUSTOMER REGISTRATION
----------------------
Full Name: ${fullName}
Phone Number: ${phone}
Area / Locality: ${area}
Apartment / Community Name: ${apartment}
Flat / House No.: ${houseNo}
Email Address: ${email || "Not provided"}

CONSENT
----------------------
I confirm that the information provided is correct and agree to the DustInTime Terms & Conditions.

Please confirm my booking and let me know the available schedule.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-32">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#556B2F] to-[#6B7F3B] text-white px-5 pt-28 pb-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-7"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-md flex items-center justify-center text-4xl">
              {service.icon}
            </div>

            <div>
              <p className="text-white/70 text-sm mb-1">Individual Service</p>

              <h1 className="text-3xl sm:text-5xl font-bold">
                {service.title}
              </h1>

              <p className="mt-3 text-white/80 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CONTENT */}
      <section className="px-5 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.5fr_0.8fr] gap-8">
          {/* LEFT */}
          <div className="space-y-8">
            {/* ABOUT */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                About this service
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* INCLUDED */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                What's Included
              </h2>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {service.includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center">
                      <Check size={14} strokeWidth={3} />
                    </div>

                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NOT INCLUDED */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                What's Not Included
              </h2>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {service.notIncludes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                      <X size={14} strokeWidth={3} />
                    </div>

                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sm:p-7">
              <p className="text-sm text-gray-500">Starting Price</p>

              <h2 className="text-4xl font-bold text-[#556B2F] mt-1">
                ₹{service.price}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Final price may depend on service requirements.
              </p>

              <div className="mt-6 rounded-2xl bg-[#F8F6F1] p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Ready to book?
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Complete the details below and continue through WhatsApp.
                </p>
              </div>

              {!showBookingFlow && (
                <button
                  onClick={() => {
                    setShowBookingFlow(true);

                    setTimeout(() => {
                      document.getElementById("terms-section")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }}
                  className="mt-6 w-full bg-[#556B2F] hover:bg-[#475B28] text-white py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={19} />
                  Book This Service
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FLOW */}
      {showBookingFlow && (
        <section className="px-5 pb-16">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* TERMS */}
            <div
              id="terms-section"
              className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8"
            >
              <p className="text-sm text-[#556B2F] font-semibold">STEP 1</p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                DustInTime — Terms & Conditions
              </h2>

              <div className="mt-7 space-y-5">
                {terms.map((term, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#556B2F] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>

                    <p className="text-gray-700 leading-relaxed">{term}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Consent</h3>

                <label className="mt-4 flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 w-5 h-5 accent-[#556B2F]"
                  />

                  <span className="text-gray-700 leading-relaxed">
                    I have read and agree to the DustInTime Terms & Conditions
                    and my selected subscription plan.
                  </span>
                </label>

                <button
                  type="button"
                  onClick={handleAgreeTerms}
                  disabled={!termsAccepted}
                  className={`mt-6 w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold transition ${
                    termsAccepted
                      ? "bg-[#556B2F] text-white hover:bg-[#475B28]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Agree & Continue
                </button>
              </div>
            </div>

            {/* CUSTOMER REGISTRATION */}
            {termsAccepted && (
              <form
                id="customer-registration"
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8"
              >
                <p className="text-sm text-[#556B2F] font-semibold">STEP 2</p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  Customer Registration
                </h2>

                <div className="mt-7 grid sm:grid-cols-2 gap-5">
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                    />
                  </div>

                  {/* AREA */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area / Locality *
                    </label>

                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="Enter area or locality"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                    />
                  </div>

                  {/* APARTMENT */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apartment / Community Name *
                    </label>

                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      placeholder="Enter apartment/community name"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                    />
                  </div>

                  {/* HOUSE NUMBER */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Flat / House No. *
                    </label>

                    <input
                      type="text"
                      name="houseNo"
                      value={formData.houseNo}
                      onChange={handleChange}
                      placeholder="Enter flat or house number"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address{" "}
                      <span className="text-gray-400">(Optional)</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                    />
                  </div>
                </div>

                {/* REGISTRATION CONSENT */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Consent
                  </h3>

                  <label className="mt-4 flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={registrationAccepted}
                      onChange={(e) =>
                        setRegistrationAccepted(e.target.checked)
                      }
                      className="mt-1 w-5 h-5 accent-[#556B2F]"
                    />

                    <span className="text-gray-700 leading-relaxed">
                      I confirm that the information provided is correct and
                      agree to the DustInTime Terms & Conditions.
                    </span>
                  </label>
                </div>

                {/* CONTINUE */}
                <button
                  type="submit"
                  disabled={!registrationAccepted}
                  className={`mt-7 w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-2 ${
                    registrationAccepted
                      ? "bg-[#556B2F] text-white hover:bg-[#475B28]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <MessageCircle size={19} />
                  Continue to WhatsApp
                </button>
              </form>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
