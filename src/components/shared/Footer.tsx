import brand from "@/assets/images/logo/Bike_Shop_Logo-y-w.png";
import { menuList } from "@/utils/menu";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Item } from "@radix-ui/react-dropdown-menu";
export default function Footer() {
  return (
    <footer className="px-4 py-6 font-semibold text-white bg-stone-900 md:px-20">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="grid gap-6">
            <div className="brand">
              <img className="w-48 rounded-md " src={brand} alt="" />
            </div>
            <p className="text-base text-gray-400">
              We are passionate about providing top-quality bikes and
              accessories to our customers. Visit us for the best riding
              experience.
            </p>
            <div className="flex mt-4 space-x-4 text-gray-400">
              <a
                href="https://www.facebook.com/a.r.tonmoy.103298"
                target="_blank"
                className="duration-300 hover:text-orange-600"
              >
                {" "}
                <FaFacebookF className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/+8801994361085"
                target="_blank"
                className="duration-300 hover:text-orange-600"
              >
                {" "}
                <FaWhatsapp className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6"
                target="_blank"
                className="duration-300 hover:text-orange-600"
              >
                {" "}
                <FaLinkedinIn className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="px-4">
            <ul className="space-y-1 text-xs text-white uppercase">
              {menuList.map((item) => (
                <li
                  key={item.id}
                  className={` relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                    item.link === location.pathname
                      ? "text-orange-500"
                      : "text-white"
                  } hover:text-orange-500`}
                >
                  <Link to={item.link}>
                    <span
                      className={`inline-block relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                        item.link === location.pathname
                          ? "text-orange-500"
                          : "text-white"
                      } hover:text-orange-500`}
                    >
                      {item.name}
                    </span>
                  </Link>

                  {/* {item.children === item.id && (
                    <div className="absolute left-0 z-40 py-3 transition ease-in bg-white top-8 decoration-500">
                      <ul className="grid grid-cols-2 gap-4 p-6 text-left bg-white group-hover:flex w-96">
                        {item.children.map((child, index) => (
                          <li key={index}>
                            <button
                              onClick={() =>
                                handleCategoryClick(child.category)
                              }
                              className="text-gray-700 transition-colors duration-200 hover:text-orange-500 whitespace-nowrap"
                            >
                              {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="px-4">
            <h3 className="mb-4 text-xl font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="px-4">
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <ul className="text-base text-gray-400">
              <li className="mb-2">Dhaka, Bangladesh</li>
              <li className="mb-2">Phone: (+880) 01994361085</li>
              <li>
                Email:{" "}
                <a href="mailto:info@bikeshop.com" className="hover:text-white">
                  bikeShop25@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-8 text-base text-center border-t border-gray-700 text-zinc-200">
          &copy; {new Date().getFullYear()} Bike Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
