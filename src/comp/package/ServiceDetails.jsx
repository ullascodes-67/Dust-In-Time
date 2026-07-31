import {
  CalendarDays,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ServiceDetails() {
  const details = [
    {
      icon: CalendarDays,
      title: "6 Days / Week",
      subtitle: "Regular scheduled visits",
    },
    {
      icon: Clock3,
      title: "1 – 1.5 Hours",
      subtitle: "Average cleaning duration",
    },
    {
      icon: ShieldCheck,
      title: "Verified Staff",
      subtitle: "Background verified professionals",
    },
    {
      icon: Sparkles,
      title: "Eco Friendly",
      subtitle: "Safe cleaning products",
    },
  ];

  return (
    <section className="px-5 mt-8">

      <h2 className="text-2xl font-bold">
        Service Details
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        What you can expect every visit
      </p>

      <div className="mt-5 space-y-4">

        {details.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center gap-4"
            >

              <div className="w-12 h-12 rounded-2xl bg-[#EEF5E3] flex items-center justify-center">

                <Icon
                  className="text-[#556B2F]"
                  size={24}
                />

              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-lg">

                  {item.title}

                </h3>

                <p className="text-sm text-gray-500">

                  {item.subtitle}

                </p>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}