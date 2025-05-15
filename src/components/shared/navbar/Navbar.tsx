import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropdown";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TUser } from "@/types/types";

// brand fro logo
import brand from "@/assets/images/logo/Bike_Shop_Logo-y.png";
//

import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { menuList } from "@/utils/menu";
import { verifyToken } from "@/utils/verifyToken";
import { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
//
const Navbar = () => {
  const token = useAppSelector(selectCurrentToken);

  const cartData = useAppSelector((state: RootState) => state.cart);
  const location = useLocation();
  //
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  //
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleCategoryClick = (category: string) => {
    navigate(`bikes/categorys?query=${category}`);
  };
  //

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  // console.log(cartData,"cartData")
  const isUser = token ? verifyToken(token) : null;
  const CartIcon = (
    <Link
      to="/cart"
      className="relative p-0 text-lg transition-all duration-300 hover:scale-105"
    >
      <MdShoppingBag
        className={header ? "text-black text-3xl" : "text-black text-3xl"}
      />

      <span className="absolute px-1 py-0.5 text-xs text-white font-black rounded-full left-2 top-[10px]">
        {cartData?.items?.length}
      </span>
    </Link>
  );

  //

  return (
    <div>
      <section
        className={
          header
            ? " fixed top-0 z-50 shadow-md py-2 bg-white w-full px-2 lg:px-20"
            : " shadow-sm bg-white text-blck py-4 md:py-2 px-2 lg:px-20"
        }
      >
        <div className="container flex items-center justify-between gap-8 px-4 mx-auto lg:px-0">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="text-3xl font-bold text-white capitalize ">
                <img
                  className={header ? " h-12" : "w-56 rounded-sm"}
                  src={brand}
                  alt="bike shop brand"
                />
              </div>
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <nav className="relative flex-col justify-center hidden w-full gap-2 py-2 text-center md:w-2/4 md:flex">
            {/* top */}
            <div className={header ? "hidden" : ""}>{/* <Filter /> */}</div>
            {/* bottom */}
            <div className="py-1">
              <ul className="flex flex-wrap justify-center py-1 text-base font-semibold uppercase ">
                {menuList.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => setHoveredMenu(item.id)}
                    onMouseLeave={() => setHoveredMenu(null)}
                    className={`inline-block relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                      item.link === location.pathname
                        ? "text-orange-500"
                        : "text-black"
                    } hover:text-orange-500`}
                  >
                    <Link to={item.link}>
                      <span
                        className={`inline-block relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                          item.link === location.pathname
                            ? "text-orange-500"
                            : "text-black"
                        } hover:text-orange-500`}
                      >
                        {item.name}
                      </span>
                    </Link>

                    {item.children && hoveredMenu === item.id && (
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
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
          </nav>

          {/* Right Side - Cart & Login/Profile */}
          <div className="items-center hidden gap-2 md:gap-6 lg:flex">
            <Link to={"/search"} className="">
              <FaSearch />
            </Link>
            {/* Cart */}
            {CartIcon}
            {/* Profile/Login Button with dianamic add user data form data base*/}
            {isUser ? (
              <ProfileDropdown user={isUser as TUser} />
            ) : (
              <Link to="/login">
                <div className="text-xl mt-[1px]">
                  <FaUser />
                </div>
              </Link>
            )}
          </div>

          {/* Mobile Navbar - Drawer */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Link to={"/search"} className="">
                      <FaSearch />
                    </Link>
                    {/* Cart */}
                    {CartIcon}
                    {/* Profile/Login Button with dianamic add user data form data base*/}
                    {isUser ? (
                      <ProfileDropdown user={isUser as TUser} />
                    ) : (
                      <Link to="/login">
                        <div className="text-xl mt-[1px]">
                          <FaUser />
                        </div>
                      </Link>
                    )}
                  </div>
                  <Button
                    className={
                      header
                        ? "hover:bg-white text-white text-xl"
                        : "bg-transparent text-black hover:text-white  text-xl"
                    }
                    size="icon"
                  >
                    <Menu className="size-4" />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-56 "
                        src={brand}
                        alt="bike shop brand"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Menu List */}
                <div className="flex flex-col gap-4 mt-6 mb-6">
                  <ul className="justify-center block gap-2 py-1 text-base font-semibold capitalize ">
                    {menuList.map((item) => (
                      <li
                        key={item.id}
                        onMouseEnter={() => setHoveredMenu(item.id)}
                        onMouseLeave={() => setHoveredMenu(null)}
                        className={`relative px-4 py-2 cursor-pointer transition-colors duration-300 ${
                          item.link === location.pathname
                            ? "bg-orange-600"
                            : "text-white"
                        } hover:text-orange-500 `}
                      >
                        <Link to={item.link}>
                          <span
                            className={`inline-block relativecursor-pointer transition-colors duration-300 ${
                              item.link === location.pathname
                                ? "bg-orange-600 text-[#fff]"
                                : "text-black"
                            } hover:text-orange-500`}
                          >
                            {item.name}
                          </span>
                        </Link>

                        {item.children && hoveredMenu === item.id && (
                          <div className="transition ease-in bg-white decoration-500">
                            <ul className="px-2 py-2 text-left bg-white group-hover:flex">
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
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
