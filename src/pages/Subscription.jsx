import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { useState } from "react";

const terms = [
  "Services will be provided as per the selected subscription plan and schedule.",
  "Customers must provide access to the home at the scheduled service time.",
  "Services not included in the selected plan will be charged separately.",
  "Rescheduling requests must be made in advance and are subject to availability.",
  "Customers are responsible for keeping valuables and fragile items safely stored before service.",
  "Subscription payments, cancellations and refunds are subject to DustInTime’s applicable policies.",
  "By subscribing, you agree to these Terms & Conditions and the details of your selected plan.",
];

export default function Subscription() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const packageType = state?.packageType || "silver";

  const selectedHome = state?.selectedHome || {
    bhk: "2 BHK",
    area: "700 - 1100 sq.ft",
    price: 5599,
  };

  const packageData = {
    silver: {
      title: "Silver Package",
      icon: "🥈",
      color: "bg-gray-100",
      price: selectedHome.price,
    },

    gold: {
      title: "Gold Package",
      icon: "👑",
      color: "bg-[#EEF5E3]",
      price: selectedHome.price,
    },

    custom: {
      title: "Build Your Own Plan",
      icon: "✨",
      color: "bg-[#EEF5E3]",
      price: selectedHome.price,
    },
  };

  const currentPackage =
    packageData[packageType] || packageData.silver;

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [registrationAccepted, setRegistrationAccepted] =
    useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    area: "",
    apartment: "",
    houseNo: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAgreeAndContinue = () => {
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to continue.");
      return;
    }

    setTimeout(() => {
      document
        .getElementById("customer-registration")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    if (!registrationAccepted) {
      alert(
        "Please confirm that the information provided is correct."
      );
      return;
    }

    const {
      fullName,
      phone,
      area,
      apartment,
      houseNo,
      email,
    } = formData;

    // DIT WhatsApp number
    const whatsappNumber = "919110296016";

    const message = `Hi DustInTime 👋

I would like to subscribe to a DIT cleaning plan.

SUBSCRIPTION DETAILS
----------------------
Package: ${currentPackage.title}
Home Size: ${selectedHome.bhk}
Home Area: ${selectedHome.area}
Price: ₹${currentPackage.price}

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
I have read and agree to the DustInTime Terms & Conditions and my selected subscription plan.

I confirm that the information provided is correct and agree to the DustInTime Terms & Conditions.

Please confirm my subscription and let me know the next steps.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-20">

      {/* ================= HERO ================= */}

      <section className="bg-white rounded-b-[35px] shadow-sm px-5 pt-24 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#556B2F] font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="mt-6 text-4xl font-black text-[#222]">
          Complete Your
          <br />
          Subscription
        </h1>

        <p className="mt-3 text-gray-500 leading-7">
          Review your plan, accept the terms and enter
          your details to continue to WhatsApp.
        </p>
      </section>

      {/* ================= PACKAGE ================= */}

      <section className="px-5 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">

          <div className="flex items-center gap-4">

            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${currentPackage.color}`}
            >
              {currentPackage.icon}
            </div>

            <div>
              <h2 className="text-xl font-bold">
                {currentPackage.title}
              </h2>

              <p className="text-gray-500">
                ₹{currentPackage.price}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOME ================= */}

      <section className="px-5 mt-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">

          <div className="flex justify-between items-center gap-4">

            <div>
              <p className="text-gray-500 text-sm">
                Your Home
              </p>

              <div className="flex items-center gap-3 mt-2">

                <Home
                  className="text-[#556B2F]"
                  size={22}
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {selectedHome.bhk}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {selectedHome.area}
                  </p>
                </div>

              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="text-[#556B2F] font-semibold"
            >
              Change
            </button>

          </div>
        </div>
      </section>

      {/* ================= ORDER SUMMARY ================= */}

      <section className="px-5 mt-8">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">
                Package
              </span>

              <span className="font-semibold text-right">
                {currentPackage.title}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">
                Home
              </span>

              <span className="font-semibold text-right">
                {selectedHome.bhk}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">
                Area
              </span>

              <span className="font-semibold text-right">
                {selectedHome.area}
              </span>
            </div>

            <hr />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">
                Price
              </span>

              <span className="text-2xl font-black text-[#556B2F]">
                ₹{currentPackage.price}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TERMS ================= */}

      <section className="px-5 mt-10">

        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">

          <p className="text-sm text-[#556B2F] font-semibold">
            STEP 1
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            DustInTime — Terms & Conditions
          </h2>

          <div className="mt-7 space-y-5">

            {terms.map((term, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >

                <div className="w-8 h-8 rounded-full bg-[#556B2F] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {term}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">

            <h3 className="text-lg font-semibold text-gray-900">
              Consent
            </h3>

            <label className="mt-4 flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) =>
                  setTermsAccepted(e.target.checked)
                }
                className="mt-1 w-5 h-5 accent-[#556B2F]"
              />

              <span className="text-gray-700 leading-relaxed">
                I have read and agree to the DustInTime
                Terms & Conditions and my selected
                subscription plan.
              </span>

            </label>

            <button
              type="button"
              onClick={handleAgreeAndContinue}
              disabled={!termsAccepted}
              className={`mt-6 px-7 py-4 rounded-2xl font-semibold transition ${
                termsAccepted
                  ? "bg-[#556B2F] text-white hover:bg-[#475B28]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Agree & Continue
            </button>

          </div>
        </div>
      </section>

      {/* ================= CUSTOMER REGISTRATION ================= */}

      {termsAccepted && (
        <section
          id="customer-registration"
          className="px-5 mt-8 pb-10"
        >

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8"
          >

            <p className="text-sm text-[#556B2F] font-semibold">
              STEP 2
            </p>

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
                  placeholder="Enter area / locality"
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

              {/* HOUSE NO */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flat / House No. *
                </label>

                <input
                  type="text"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleChange}
                  placeholder="Enter flat / house number"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address{" "}
                  <span className="text-gray-400">
                    (Optional)
                  </span>
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

            {/* CONSENT */}

            <div className="mt-8 pt-6 border-t border-gray-100">

              <h3 className="text-lg font-semibold text-gray-900">
                Consent
              </h3>

              <label className="mt-4 flex items-start gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={registrationAccepted}
                  onChange={(e) =>
                    setRegistrationAccepted(
                      e.target.checked
                    )
                  }
                  className="mt-1 w-5 h-5 accent-[#556B2F]"
                />

                <span className="text-gray-700 leading-relaxed">
                  I confirm that the information provided is
                  correct and agree to the DustInTime Terms &
                  Conditions.
                </span>

              </label>

            </div>

            {/* WHATSAPP BUTTON */}

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
        </section>
      )}

    </div>
  );
}