import { Home, Check } from "lucide-react";


export default function HomeSelector({
  homes,
  selected,
  setSelected,
}){

  

  return (
    <section className="px-5 mt-8">

      <h2 className="text-2xl font-bold text-gray-900">
        Choose Your Home
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        Pick the size of your apartment
      </p>

      <div className="flex gap-3 overflow-x-auto snap-x no-scrollbar mt-5 pb-2">

        {homes.map((home, index) => {

          const active = selected === index;

          return (

            <button
              key={home.bhk}
              onClick={() => setSelected(index)}
              className={`min-w-[215px] snap-center rounded-3xl p-4 transition-all duration-300 text-left flex-shrink-0 ${
                active
                  ? "bg-[#556B2F] text-white shadow-xl"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >

              <div className="flex justify-between items-start">

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    active
                      ? "bg-white/20"
                      : "bg-[#EEF5E3]"
                  }`}
                >
                  <Home
                    size={22}
                    className={
                      active
                        ? "text-white"
                        : "text-[#556B2F]"
                    }
                  />
                </div>

                {active && (
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Check
                      size={14}
                      className="text-[#556B2F]"
                    />
                  </div>
                )}

              </div>

              <h3 className="text-2xl font-bold mt-4">
                {home.bhk}
              </h3>

              <p
                className={`text-sm mt-1 ${
                  active
                    ? "text-white/80"
                    : "text-gray-500"
                }`}
              >
                {home.area}
              </p>

              <div className="mt-5">

                <p
                  className={`text-xs ${
                    active
                      ? "text-white/70"
                      : "text-gray-500"
                  }`}
                >
                  Starting From
                </p>

                <div className="flex items-end gap-1 mt-1">

                  <h4 className="text-3xl font-extrabold">
                    ₹{home.price}
                  </h4>

                  <span
                    className={`text-xs mb-1 ${
                      active
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    /month
                  </span>

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </section>
  );
}