import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Explore Foods", href: "#", current: false },
    { name: "Reviews", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                      className="text-sm font-quicksand text-black font-bold"
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
        {isOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div>
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className="block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
              <div className="bg-custom_red text-white font-quicksand font-semibold pt-2 pb-2 pr-3 pl-3">
                <p>1800 789 123</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
