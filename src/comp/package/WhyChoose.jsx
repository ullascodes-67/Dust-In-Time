import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Staff",
      desc: "Professionally trained & background verified.",
    },
    {
      icon: Clock3,
      title: "Always On Time",
      desc: "Scheduled visits with timely arrival.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Guaranteed",
      desc: "Consistent cleaning every single visit.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "We're always here whenever you need us.",
    },
  ];

  return (
    <section className="px-5 mt-8 ">

      <h2 className="text-2xl font-bold text-gray-900">
        Why Customers Love DIT
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Premium service with complete peace of mind.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">

        {features.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
            >

              <div className="w-12 h-12 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">

                <Icon
                  size={22}
                  className="text-[#556B2F]"
                />

              </div>

              <h3 className="font-semibold mt-4">

                {item.title}

              </h3>

              <p className="text-xs text-gray-500 mt-2 leading-5">

                {item.desc}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}