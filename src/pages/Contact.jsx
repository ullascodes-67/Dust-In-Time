import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* Hero */}

      <section className="pt-28 pb-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EEF5E3] text-[#556B2F] font-medium">
            Contact DIT
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-[#222]">
            Let's Talk
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            Have questions about our subscriptions or need help booking a
            cleaning service? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}

      <section className="px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Phone */}

          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">
              <Phone className="text-[#556B2F]" size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Call Us</h2>

            <p className="mt-2 text-gray-500">
              Speak directly with our support team.
            </p>

            <p className="mt-6 font-semibold text-[#556B2F]">+91 98765 43210</p>
          </div>

          {/* Email */}

          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">
              <Mail className="text-[#556B2F]" size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Email</h2>

            <p className="mt-2 text-gray-500">
              Send us your questions anytime.
            </p>

            <p className="mt-6 font-semibold text-[#556B2F] break-all">
              support@ditcleaning.com
            </p>
          </div>

          {/* Location */}

          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">
              <MapPin className="text-[#556B2F]" size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Location</h2>

            <p className="mt-2 text-gray-500">Visit our office anytime.</p>

            <p className="mt-6 font-semibold text-[#556B2F]">
              Banglore, Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* ===== PART 2 STARTS HERE ===== */}
      {/* Contact Form & Working Hours */}

      <section className="px-5 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-[#222]">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mt-2">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#556B2F]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#556B2F]"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#556B2F]"
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#556B2F]"
              ></textarea>

              <button className="bg-[#556B2F] hover:bg-[#475c29] transition text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Working Hours */}

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-fit">
            <div className="w-14 h-14 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">
              <Clock className="text-[#556B2F]" size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Working Hours</h2>

            <div className="mt-8 space-y-5">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>

                <span className="font-semibold">9 AM - 6 PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>

                <span className="font-semibold">9 AM - 3 PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>

                <span className="text-red-500 font-semibold">Closed</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-[#EEF5E3] p-5">
              <h3 className="font-semibold text-[#556B2F]">
                Need Immediate Help?
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Call us directly for urgent cleaning requests and booking
                assistance.
              </p>

              <button className="mt-5 w-full rounded-xl bg-[#556B2F] py-3 text-white font-semibold hover:bg-[#475c29] transition">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
