import React from "react";
import home from "../assets/images/home.png";
import shop from "../assets/images/shop.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:justify-around mt-10 px-4 lg:px-0">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-center lg:text-left text-2xl lg:text-5xl font-quicksand font-bold mb-6 lg:mb-[5vh]">
            Order food from <br /> your favourite lounge bar <br /> near you.
          </p>
          <p className="text-left lg:text-left text-lg lg:text-xl font-quicksand mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Etiam et purus a odio finibus bibendum amet leo.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:mt-10 items-center sm:items-start">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex bg-custom_red text-white py-3 px-6 mt-6 sm:mt-0 font-semibold"
            >
              Order Now
              <img src={shop} alt="Order" className="py-1 pl-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black shadow-2xl py-3 px-6 mt-6 sm:mt-0 sm:ml-4 font-semibold"
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <img
          src={home}
          alt="Order food"
          className="w-3/4 lg:w-1/3 h-auto mt-8 lg:mt-0"
        />
      </div>
      <div className="mt-[5vh]">
        <div className="flex items-center justify-around p-[5vh] bg-black w-full h-[15vh]">
          <p className="text-white font-quicksand text-2xl lg:text-4xl font-semibold text-center mb-4 lg:mb-0">
            1298+ <br />
            <span className="text-xs flex justify-center m-1">Savings</span>
          </p>
          <p className="text-white font-quicksand text-2xl lg:text-4xl font-semibold text-center mb-4 lg:mb-0">
            1298+ <br />
            <span className="text-xs flex justify-center m-1">Savings</span>
          </p>
          <p className="text-white font-quicksand text-2xl lg:text-4xl font-semibold text-center mb-4 lg:mb-0">
            1298+ <br />
            <span className="text-xs flex justify-center m-1">Savings</span>
          </p>
          <p className="text-white font-quicksand text-2xl lg:text-4xl font-semibold text-center mb-4 lg:mb-0">
            1298+ <br />
            <span className="text-xs flex justify-center m-1">Savings</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
