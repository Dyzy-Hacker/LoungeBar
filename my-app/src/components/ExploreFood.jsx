import React from "react";
import { shop } from "../constants";

const ExploreFood = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl lg:text-5xl font-quicksand font-bold">
          Explore Our Foods
        </h1>
        <p className="mt-4 text-lg lg:text-xl font-quicksand text-gray-600 text-center">
          At West Side Lounge Bar, we take pride in our delicious food <br />
          offerings, especially our mouthwatering burgers and fluffy pancakes. <br />
          Our burgers are crafted with juicy, high-quality ingredients, served <br />
          with a variety of toppings to satisfy any craving. And don’t miss our <br />
          pancakes—light, airy, and perfect for brunch or a sweet treat any time <br />
          of day. Come explore our menu and indulge in the flavors that keep our <br />
          guests coming back for more! <br />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 justify-items-center">
        {shop.map((item) => (
          <div key={item.id} className="flex flex-col items-start">
            <img
              src={item.image}
              alt=""
              className="w-[250px] h-[260px] object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold">{item.title}</h3>
            <p>{item.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              {item.price}
              <span className="line-through text-gray-500 font-normal ml-2">
                {item.oldPice}
              </span>
            </p>
            <hr className="w-full mt-4" />
            <button className="bg-custom_red text-white shadow-2xl py-3 px-6 mt-6 font-semibold">
              {item.order}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFood;
