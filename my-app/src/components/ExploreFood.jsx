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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit <br /> amet leo. Mauris feugiat
          erat tellus. Far far away, behind the word mountains, far from the
          countries <br /> Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
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
