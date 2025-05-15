import bikeImage24 from "@/assets/Banner-image/1398131.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BikeDesign() {
  return (
    <section className="relative w-full h-[56vh] md:h-[80vh]  flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src={bikeImage24}
        alt="MT76 Featured Bike"
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />

      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-between h-full px-6 mx-auto lg:flex-row">
        {/* Left: Title */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl">
            Bike Shop
          </h2>
          <h1 className="mt-4 text-6xl font-extrabold leading-tight md:text-7xl">
            MT76
          </h1>
        </div>

        {/* Right: Offer Section */}
        <div className="max-w-md p-8 mt-10 shadow-lg bg-white/10 backdrop-blur-md rounded-xl lg:mt-0">
          <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">
            For Popular Bikes
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-200">
            <span className="font-bold text-white">Bike Shop</span> is your
            destination for high-quality motorcycles. Get custom rides,
            unbeatable prices, and easy trade-ins.
          </p>
          <h3 className="text-xl font-bold uppercase md:text-2xl">
            Now At{" "}
            <span className="px-2 py-1 text-3xl bg-orange-500 rounded-lg">
              $1250
            </span>
          </h3>

          <Link to="/bikes">
            <button className="flex items-center gap-2 px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-orange-500 rounded-lg hover:bg-orange-600">
              See More <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
