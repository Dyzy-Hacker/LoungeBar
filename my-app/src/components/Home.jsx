import React from "react";
import shop1 from "../assets/images/shop1.png";
import burger1 from "../assets/images/burger1.jpg";
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
            Step into a world of taste and relaxation at West Side Lounge <br />
            Bar.Indulge your cravings with our delectable menu! From our gourmet<br />
            burgers, crafted with fresh, high-quality ingredients, to our<br />
            irresistibly fluffy pancakes.Ordering is a breeze, so treat yourself<br />
            to a delicious meal that will keep you coming back for more. Join us<br />
            and experience food that delights in every bite!<br />
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:mt-10 items-center sm:items-start">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex bg-custom_red text-white py-3 px-6 mt-6 sm:mt-0 font-semibold"
            >
              Order Now
              <img src={shop1} alt="Order" className="py-1 pl-2" />
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
          src={burger1}
          alt="Order food"
          className="w-[75%] lg:w-[30%] h-auto mt-8 lg:mt-0 rounded-2xl"
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
