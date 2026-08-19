import {
  Bell,
  UserRound,
  House,
  Package,
  CircleHelp,
  Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}

      <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">

        <nav className="relative w-full max-w-7xl h-16 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-lg flex items-center justify-between px-5 md:px-8">

          {/* Left */}

          <div className="flex items-center">

            {/* Empty space for mobile alignment */}

            <div className="w-10 md:hidden"></div>

            {/* Desktop Logo */}

            <div className="hidden md:block">

              <Link to="/">

                <h1 className="text-4xl font-black tracking-tight">

                  <span className="text-[#556B2F]">DI</span>

                  <span className="text-[#B8C98A]">T</span>

                </h1>

              </Link>

            </div>

          </div>

          {/* Mobile Logo */}

          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">

            <Link to="/">

              <h1 className="text-3xl font-black tracking-tight">

                <span className="text-[#556B2F]">DI</span>

                <span className="text-[#B8C98A]">T</span>

              </h1>

            </Link>

          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">

            <Link
              to="/"
              className={`transition ${
                location.pathname === "/"
                  ? "text-[#556B2F]"
                  : "hover:text-[#556B2F]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/packages"
              className={`transition ${
                location.pathname === "/packages"
                  ? "text-[#556B2F]"
                  : "hover:text-[#556B2F]"
              }`}
            >
              Packages
            </Link>

            <Link
              to="/contact"
              className={`transition ${
                location.pathname === "/contact"
                  ? "text-[#556B2F]"
                  : "hover:text-[#556B2F]"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/faq"
              className={`transition ${
                location.pathname === "/faq"
                  ? "text-[#556B2F]"
                  : "hover:text-[#556B2F]"
              }`}
            >
              FAQ
            </Link>

          </div>

          {/* Right */}

          <div className="flex items-center">

            <Link
              to="/profile"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >

              <UserRound className="w-6 h-6 text-[#556B2F]" />

            </Link>

          </div>

        </nav>

      </header>

      {/* ================= MOBILE BOTTOM NAV ================= */}

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50">

        <div className="bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-full px-8 py-3">

          <div className="flex items-center gap-10">

            <Link
              to="/"
              className={`flex flex-col items-center ${
                location.pathname === "/"
                  ? "text-[#556B2F]"
                  : "text-gray-500"
              }`}
            >
              <House size={22} />
              <span className="text-[10px] mt-1">Home</span>
            </Link>

            <Link
              to="/packages"
              className={`flex flex-col items-center ${
                location.pathname === "/packages"
                  ? "text-[#556B2F]"
                  : "text-gray-500"
              }`}
            >
              <Package size={22} />
              <span className="text-[10px] mt-1">Services</span>
            </Link>

            <Link
              to="/faq"
              className={`flex flex-col items-center ${
                location.pathname === "/faq"
                  ? "text-[#556B2F]"
                  : "text-gray-500"
              }`}
            >
              <CircleHelp size={22} />
              <span className="text-[10px] mt-1">FAQ</span>
            </Link>

            <Link
              to="/contact"
              className={`flex flex-col items-center ${
                location.pathname === "/contact"
                  ? "text-[#556B2F]"
                  : "text-gray-500"
              }`}
            >
              <Phone size={22} />
              <span className="text-[10px] mt-1">Contact</span>
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}