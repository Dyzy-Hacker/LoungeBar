import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import NavbarAnimation from "../animation/NavbarAnimation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Explore Foods", href: "#", current: false },
    { name: "Reviews", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
  ];

  return (
    <div>
      <nav className="bg-white">
        <div className="mx-auto max-w-[173vh] px-2 sm:px-6 lg:px-8">
          {/* <div className="flex-1 mx-auto"> */}

          <div className="relative flex h-16 items-center justify-between">
            {/* Logo on the left side */}
            <div className="flex items-center justify-start">
              <img alt="Logo" src={logo} className="h-[6vh] w-[6vh]" />
              <p className="font-quicksand text-black font-bold text-3xl pl-5">
                West Side
              </p>
            </div>

            {/* Menu button for mobile view */}
            <div className="absolute inset-y-0 left-[40vh] flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation links on the right side */}
            <div className="hidden sm:flex sm:items-center sm:ml-auto">
              <div className="flex space-x-4 items-center">
                {navigation.map((item) => (
                  <div>
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-quicksand text-black font-extrabold"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                <div className="bg-custom_red text-white font-quicksand font-semibold pt-2 pb-2 pr-6 pl-6">
                  <p>1800 789 123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sm:hidden"
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="hidden"
            >
              <NavbarAnimation isToggled={isOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
