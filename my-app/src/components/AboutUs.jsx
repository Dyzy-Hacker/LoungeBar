import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import ourstory from "../assets/images/ourstory.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-[10vh] mb-[10vh]">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center lg:justify-around mt-10 px-4 lg:px-0">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-center lg:text-left text-2xl lg:text-5xl font-quicksand font-bold mb-6 lg:mb-[5vh]">
              We pride ourselves on <br /> making real food from the <br />
              best ingredients.
            </p>
            <p className="text-left lg:text-left text-lg lg:text-xl font-quicksand mb-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Etiam et purus a odio finibus bibendum amet leo.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-custom_red text-white shadow-2xl py-3 px-6 mt-6 font-semibold"
            >
              Learn More
            </motion.button>
          </div>
          <img
            src={about1}
            alt="About"
            className="w-[71vh] h-auto mt-8 lg:mt-0"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:justify-around mt-10 px-3 lg:px-0">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-center lg:text-left text-2xl lg:text-5xl font-quicksand font-bold mb-6 lg:mb-[5vh]">
              We make everything by hand <br /> with the best possible <br />{" "}
              ingredients.
            </p>
            <p className="text-left lg:text-left text-lg lg:text-xl font-quicksand mb-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Etiam et purus a odio finibus bibendum in sit amet leo. <br />
              Mauris feugiat erat tellus.Far far away, behind the word <br />
              mountains, far from the countries Vokalia and Consonantia, <br />
              there live the blind texts.
            </p>
            <p>
              <span>&#10004;</span>
              Etiam sed dolor ac diam volutpat.
            </p>
            <p>
              <span>&#10004;</span>
              Etiam sed dolor ac diam volutpat.
            </p>
            <p>
              <span>&#10004;</span>
              Etiam sed dolor ac diam volutpat.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-custom_red text-white shadow-2xl py-3 px-6 mt-6 sm:mt-5 font-semibold"
            >
              Learn More
            </motion.button>
          </div>
          <img
            src={about2}
            alt="Order food"
            className="w-3/4 lg:w-1/3 h-auto mt-8 lg:mt-0"
          />
        </div>
        <div className="relative flex justify-center mt-10">
          <img src={ourstory} alt="Picture" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Our Story</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
