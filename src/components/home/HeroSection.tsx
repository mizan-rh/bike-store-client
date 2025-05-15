import heroImg from "@/assets/image/hero-26.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container flex flex-col items-center justify-between gap-16 px-6 mx-auto lg:px-16 lg:flex-row">
        {/* Left Content */}
        <div className="w-full space-y-6 lg:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Ride with <span className="text-orange-500">Precision</span>
            <br />
            Rule the Road
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            Discover cutting-edge performance and sleek design with our latest
            collection of premium bikes. Built to thrill, made to last. Welcome
            to the future of riding with{" "}
            <span className="font-semibold text-gray-800">BikeStore</span>.
          </p>
          <Link to="/bikes">
            <button className="flex items-center gap-2 px-6 py-3 mt-4 font-semibold text-white transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
              Explore Bikes <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 group">
          <div className="relative overflow-hidden transition-all duration-300 shadow-xl rounded-2xl hover:shadow-2xl">
            <img
              src={heroImg}
              alt="Hero Bike"
              className="object-cover w-full h-full max-h-[500px] transform group-hover:scale-105 transition duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
