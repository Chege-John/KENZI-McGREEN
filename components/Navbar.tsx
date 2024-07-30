import Image from "next/image";
import logo from "../public/jsm-logo.png";
import MenuIcon from "../public/menu.svg";
import CloseIcon from "../public/close.svg"; // Import the close icon
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 backdrop-filter backdrop-blur-lg border-white/[0.2] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <Image
              src={logo}
              alt="Saas logo"
              style={{ width: "130px", height: "auto" }}
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="text-white" />
            </button>
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a href="#" className="text-white hover:text-opacity-60 transition">
              About
            </a>
            <a href="#" className="text-white hover:text-opacity-60 transition">
              Features
            </a>
            <a href="#" className="text-white hover:text-opacity-60 transition">
              Updates
            </a>
            <a href="#" className="text-white hover:text-opacity-60 transition">
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg text-orange-500 text-bold">
              Get Started
            </button>
          </nav>
          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className={`fixed top-0 right-0 w-full h-full bg-white p-8 backdrop-filter backdrop-blur-lg overflow-y-auto ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 flex flex-col`}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black self-end"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
              <nav className="flex flex-col gap-6 mt-8 flex-grow justify-center">
                <a
                  href="#"
                  className="text-black hover:text-opacity-60 transition"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-black hover:text-opacity-60 transition"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-black hover:text-opacity-60 transition"
                >
                  Updates
                </a>
                <a
                  href="#"
                  className="text-black hover:text-opacity-60 transition"
                >
                  Customers
                </a>
                <button className="bg-black py-2 px-4 rounded-lg text-white">
                  Get Started
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
