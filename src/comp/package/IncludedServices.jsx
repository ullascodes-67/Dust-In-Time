import {
  Sparkles,
  Droplets,
  Bath,
  Shirt,
  Home,
  ShieldCheck,
} from "lucide-react";

export default function IncludedServices({ isGold }) {
  const services = isGold
    ? [
        {
          title: "Dusting",
          icon: Sparkles,
          color: "bg-yellow-100 text-yellow-600",
        },
        {
          title: "Mopping",
          icon: Home,
          color: "bg-green-100 text-green-700",
        },
        {
          title: "Dishwashing",
          icon: Droplets,
          color: "bg-blue-100 text-blue-600",
        },
        {
          title: "Bathroom",
          icon: Bath,
          color: "bg-cyan-100 text-cyan-700",
        },
        {
          title: "Laundry",
          icon: Shirt,
          color: "bg-pink-100 text-pink-600",
        },
        {
          title: "Priority",
          icon: ShieldCheck,
          color: "bg-[#EEF5E3] text-[#556B2F]",
        },
      ]
    : [
        {
          title: "Dusting",
          icon: Sparkles,
          color: "bg-yellow-100 text-yellow-600",
        },
        {
          title: "Mopping",
          icon: Home,
          color: "bg-green-100 text-green-700",
        },
        {
          title: "Dishwashing",
          icon: Droplets,
          color: "bg-blue-100 text-blue-600",
        },
        {
          title: "Bathroom",
          icon: Bath,
          color: "bg-cyan-100 text-cyan-700",
        },
      ];

  return (
    <section className="px-5 mt-8">

      <h2 className="text-2xl font-bold">
        Included Services
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Everything included in your subscription.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">

        {services.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100"
            >

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}
              >

                <Icon size={24} />

              </div>

              <h3 className="font-semibold text-lg mt-4">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Included every visit
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}