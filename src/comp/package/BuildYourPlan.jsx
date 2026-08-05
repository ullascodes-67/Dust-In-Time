import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BuildYourPlan() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8F6F1] px-4 pb-22">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#556B2F] via-[#617736] to-[#738A45] shadow-2xl">

          {/* Background Decorations */}

          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-20 w-52 h-52 rounded-full bg-white/10 blur-3xl"></div>

          {/* Content */}

          <div className="relative z-10 p-8 md:p-10">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2">

              <Sparkles
                size={18}
                className="text-yellow-300"
              />

              <span className="text-white text-sm font-semibold">
                New Feature
              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-7 text-4xl md:text-5xl font-black text-white leading-tight">

              Build Your
              <br />
              Own Plan

            </h2>

            {/* Description */}

            <p className="mt-5 text-white/80 leading-7 max-w-xl">

              Every home is different. Create a personalized
              cleaning subscription by selecting only the
              services you actually need.

            </p>

            {/* Features */}

            <div className="mt-8 space-y-4">

              {[
                "Choose only the services you need",
                "Flexible monthly subscription",
                "Modify your plan anytime",
                "Transparent pricing",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="text-green-300"
                  />

                  <span className="text-white">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <button
              onClick={() => navigate("/build-plan")}
              className="mt-10 w-full sm:w-auto bg-white text-[#556B2F] rounded-4xl px-8 py-3 font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >

              View Details

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}