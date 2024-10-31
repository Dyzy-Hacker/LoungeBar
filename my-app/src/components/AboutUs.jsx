import React from "react";
import burger2 from "../assets/images/burger2.jpg";
import pancake1 from "../assets/images/pancake1.jpg";
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
              West Side Lounge Bar, we believe in the power of fresh, homemade
              <br />
              ingredients. Our commitment to quality means that every dish is
              <br />
              crafted with care and love, using only the finest ingredients.
              <br />
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
            src={pancake1}
            alt="About"
            className="w-[75%] lg:w-[30%] h-auto mt-8 lg:mt-0 rounded-2xl"
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
              Experience the difference of homemade food at West Side Lounge{" "}
              <br />
              Bar. Visit us at the west side of Vevcani or call us to reserve
              <br />
              your table or place an order. Indulge in flavors that feel just
              <br />
              like home!
              <br />
            </p>
            <p>
              <span>&#10004;</span>
              Homemade Goodness: From our rich sauces to our hand-crafted tacos,
              every item on the menu is made from scratch.
            </p>
            <p>
              <span>&#10004;</span>
              Locally Sourced Ingredients: We prioritize fresh, local produce to
              bring you vibrant flavors in every bite.
            </p>
            <p>
              <span>&#10004;</span>
              Culinary Passion: Our chefs pour their hearts into creating
              delicious dishes that will leave you craving more.
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
            src={burger2}
            alt="Order food"
            className="w-[75%] lg:w-[30%] h-auto mt-8 lg:mt-0 rounded-2xl"
          />
        </div>
        <div className="relative flex justify-center mt-10">
          <img src={ourstory} alt="Picture" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl">
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
