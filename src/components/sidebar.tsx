import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./logo";
import { cn } from "../lib/utils";
import { useCategoryModal } from "../store/use-category-modal";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    {
      href: "/home",
      label: "TRANG CHỦ",
      active: location.pathname === "/home",
    },
    {
      href: "/kham-pha",
      label: "KHÁM PHÁ",
      active: location.pathname === "/kham-pha",
    },
    {
      href: "/gioi-thieu",
      label: "GIỚI THIỆU",
      active: location.pathname === "/gioi-thieu",
    },
    {
      href: "/gia-ve",
      label: "GIÁ VÉ",
      active: location.pathname === "/gia-ve",
    },
    {
      href: "/su-kien",
      label: "SỰ KIỆN",
      active: location.pathname === "/su-kien",
    },
  ];

  const isCategoryRoute = location.pathname === "/category";

  const handleClick = () => {
    if (isCategoryRoute) {
      navigate("/home");
    } else {
      navigate("/category");
    }
  };

  return (
    <div className="bg-[#259E58] text-white h-screen w-64 flex flex-col p-4">
      <div className="px-8 mx-auto mb-10 pt-2">
        <button
          onClick={handleClick}
          className="bg-white size-16 rounded-full flex items-center justify-center"
        >
          {isCategoryRoute ? (
            <img src="/icons/xmark-large-close.png" />
          ) : (
            <img src="/icons/xmark-large.png" />
          )}
        </button>
      </div>
      <div className="px-3">
        <nav>
          <ul className="space-y-4 font-bangers text-[32px]">
            {routes.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "block py-2 px-4 hover:text-[#005F33]",
                    item.active && "text-[#005F33] underline"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-auto">
        <div className="flex justify-center h-auto">
          <Logo />
        </div>
        <div className="h-[1px] bg-white w-[150px] my-8 mx-auto" />
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebookSquare size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <RiInstagramFill size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
