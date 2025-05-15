import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function About() {
  const testimonials = [
    {
      quote:
        "Bike Shop delivered my mountain bike in perfect condition within 3 days. Excellent customer service and fast support!",
      name: "Arif Rahman",
    },
    {
      quote:
        "I love their collection and the return process was smooth when I ordered the wrong size. Highly recommended.",
      name: "Nusrat Jahan",
    },
    {
      quote:
        "Hands down the best online bike store in Bangladesh. Their repair team is very professional.",
      name: "Mahmudul Hasan",
    },
  ];

  return (
    <div className="px-4 py-16 bg-white md:px-16">
      <Helmet>
        <title>About - Bike Shop || Online Delivery</title>
      </Helmet>

      {/* Intro Section */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-12 h-1 bg-orange-500" />
          <div className="w-3 h-3 rotate-45 bg-orange-500" />
          <div className="w-12 h-1 bg-orange-500" />
        </div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
          Welcome to Bike Shop — your trusted online destination for
          high-quality bicycles, accessories, and expert repair services
          delivered to your doorstep.
        </p>
      </div>

      {/* Info Sections */}
      <div className="max-w-4xl mx-auto space-y-14">
        <Section title="Our Mission">
          Our mission is to make cycling accessible to everyone through a
          seamless shopping experience, fast delivery, and professional support.
        </Section>

        <Section title="Our Policy">
          <ul className="text-gray-700 list-disc list-inside">
            <li>Authentic products from verified brands.</li>
            <li>7-day return policy for unused items.</li>
            <li>Secure online payment system.</li>
            <li>Delivery within 3–5 business days.</li>
          </ul>
        </Section>

        <Section title="Terms & Conditions">
          <ul className="text-gray-700 list-disc list-inside">
            <li>Inspect upon delivery and report within 24 hours.</li>
            <li>Returns only with valid proof of purchase.</li>
            <li>Brand-specific warranty policies apply.</li>
            <li>Modifications may void warranty coverage.</li>
          </ul>
        </Section>

        <Section title="Overview">
          Bike Shop isn’t just a store — it’s a passionate cycling community.
          With trusted service, quick delivery, and high-quality gear, we’re
          your dedicated biking partner.
        </Section>

        <Section title="Contact Us">
          <ul className="text-gray-700">
            <li>
              <strong>Phone:</strong> +880 1234-567890
            </li>
            <li>
              <strong>Email:</strong> support@bikeshop.com
            </li>
            <li>
              <strong>Address:</strong> 123 Bike Street, Gazipur, Dhaka
            </li>
            <li>
              <strong>Hours:</strong> Sat–Thu, 9:00 AM – 6:00 PM
            </li>
          </ul>
        </Section>
      </div>

      {/* Testimonials */}
      <div className="mt-24">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full p-6 bg-gray-100 rounded-lg shadow-sm">
                <p className="mb-4 italic text-gray-600">“{t.quote}”</p>
                <h4 className="font-semibold text-gray-800">— {t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Why Choose Us */}
      <div className="mt-24">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
          Why Choose Us?
        </h2>
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-12 h-1 bg-orange-500" />
          <div className="w-3 h-3 rotate-45 bg-orange-500" />
          <div className="w-12 h-1 bg-orange-500" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: "🚴",
              title: "Wide Range of Products",
              text: "Everything from bikes to accessories for a great ride.",
            },
            {
              icon: "🛠",
              title: "Expert Repair Services",
              text: "Top-tier technicians to keep your ride smooth.",
            },
            {
              icon: "⭐",
              title: "Customer Satisfaction",
              text: "We go the extra mile for your happiness.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 text-center transition border rounded-lg shadow hover:shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white bg-orange-500 rounded-full">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
