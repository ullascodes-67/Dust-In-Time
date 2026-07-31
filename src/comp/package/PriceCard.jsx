export default function PriceCard({ price }) {
  return (
    <section className="-mt-12 px-5 relative z-20">

      <div className="bg-white rounded-[28px] p-6 shadow-[0_20px_45px_rgba(0,0,0,.12)]">

        <p className="text-gray-500 text-sm">

          Starting From

        </p>

        <div className="flex items-end gap-2 mt-2">

          <h1 className="text-5xl font-black text-[#556B2F]">

            ₹{price}

          </h1>

          <span className="text-gray-500 mb-2">

            /month

          </span>

        </div>

        <div className="mt-5 flex justify-between items-center">

          <div>

            <p className="font-semibold">

              Save ₹2,000

            </p>

            <p className="text-sm text-gray-500">

              Monthly subscription discount

            </p>

          </div>

          <div className="bg-[#EEF5E3] px-4 py-2 rounded-full font-semibold text-[#556B2F]">

            Best Value

          </div>

        </div>

      </div>

    </section>
  );
}