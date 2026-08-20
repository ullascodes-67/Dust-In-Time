import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      question: "How do I book a cleaning service?",
      answer:
        "Choose your preferred package, select your home size, and complete your subscription from the Package Details page.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes. You can cancel your subscription before the next billing cycle.",
    },
    {
      question: "What's included in the Silver Package?",
      answer:
        "Silver includes dusting, sweeping, mopping, dishwashing and organizing.",
    },
    {
      question: "What's included in the Gold Package?",
      answer:
        "Gold includes everything in Silver plus bathroom cleaning, laundry, flexible scheduling and priority support.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No. Our professionals bring the required cleaning supplies and equipment.",
    },
    {
      question: "Are your staff background verified?",
      answer:
        "Yes. Every DIT professional is verified and trained before joining.",
    },
    {
      question: "Can I change my cleaning schedule?",
      answer:
        "Yes. You can reschedule your cleaning according to availability.",
    },
    {
      question: "How do I contact DIT support?",
      answer:
        "You can call us, email us or visit the Contact page from the navigation menu.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F6F1] pt-28 pb-25 px-5">

      <div className="max-w-4xl mx-auto">

        {/* Hero */}

        <div className="text-center">

          <span className="inline-block bg-[#EEF5E3] text-[#556B2F] px-4 py-2 rounded-full font-medium">

            Help Center

          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-black text-[#222]">

            Frequently Asked Questions

          </h1>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-7">

            Search for common questions about our subscriptions,
            bookings and cleaning services.

          </p>

        </div>

        {/* Search */}

        <div className="relative mt-10">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search a question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white rounded-2xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-[#556B2F] transition"
          />

        </div>

        {/* ===== PART 2 STARTS HERE ===== */}
        {/* FAQ List */}

<div className="mt-10 space-y-4">

  {filteredFaqs.length === 0 && (

    <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">

      <h3 className="text-xl font-semibold text-gray-700">
        No Results Found
      </h3>

      <p className="mt-2 text-gray-500">
        Try searching with different keywords.
      </p>

    </div>

  )}

  {filteredFaqs.map((faq, index) => (

    <div
      key={index}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
    >

      <button
        onClick={() =>
          setOpen(open === index ? null : index)
        }
        className="w-full flex justify-between items-center p-5 text-left"
      >

        <h3 className="font-semibold text-lg text-[#222]">

          {faq.question}

        </h3>

        {open === index ? (

          <ChevronUp className="text-[#556B2F]" />

        ) : (

          <ChevronDown className="text-[#556B2F]" />

        )}

      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open === index
            ? "max-h-40"
            : "max-h-0"
        }`}
      >

        <p className="px-5 pb-5 text-gray-600 leading-7">

          {faq.answer}

        </p>

      </div>

    </div>

  ))}

</div>

{/* Contact Card */}

<div className="mt-16 rounded-3xl bg-[#556B2F] text-white p-10 text-center">

  <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto">

    <MessageCircle size={30} />

  </div>

  <h2 className="mt-6 text-3xl font-bold">

    Still Have Questions?

  </h2>

  <p className="mt-4 text-white/80 max-w-lg mx-auto leading-7">

    Couldn't find what you were looking for?
    Our support team is always ready to help.

  </p>

  <button
    onClick={() => navigate("/contact")}
    className="mt-8 bg-white text-[#556B2F] font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition"
  >

    Contact Us

  </button>

</div>

</div>

</div>

);
}
