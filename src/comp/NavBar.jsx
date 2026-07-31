import { Menu, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
      <nav className="relative w-full max-w-7xl h-16 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-lg flex items-center justify-between px-5 md:px-8">
        {/* Left */}
        <div className="flex items-center">
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Desktop Logo */}
          <div className="hidden md:flex flex-col items-center leading-none">
            <h1 className="text-4xl font-black tracking-tight">
              <span className="text-[#556B2F]">DI</span>
              <span className="text-[#B8C98A]">T</span>
            </h1>
          </div>
        </div>

        {/* Mobile Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <h1 className="text-3xl font-black tracking-tight">
            <span className="text-[#556B2F]">DI</span>
            <span className="text-[#B8C98A]">T</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Packages</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-[#556B2F]" />
          </button>

          <button className="hidden md:block bg-[#556B2F] text-white px-5 py-2 rounded-full font-medium">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}
