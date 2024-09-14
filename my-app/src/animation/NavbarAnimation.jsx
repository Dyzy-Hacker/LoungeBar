import React from "react";
import { motion } from "framer-motion";

const NavbarAnimation = ({ isToggled }) => {
  const items = ["Home", "About Us", "Explore Foods", "Reviews", "FAQ"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.3,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.ul
      initial="hidden"
      animate={isToggled ? "visible" : "hidden"}
      exit="hidden"
      variants={navList}
      className="space-y-2"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 cursor-pointer"
          variants={navItem}
        >
          {item}
        </motion.li>
      ))}
      <motion.div
        className="bg-custom_red text-white font-quicksand font-semibold pt-2 pb-2 pr-3 pl-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isToggled ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>1800 789 123</p>
      </motion.div>
    </motion.ul>
  );
};

export default NavbarAnimation;
