import React from "react";
import featuresData from "../featuresData.json";
import { FeaturedItem } from "./FeaturedItem";

const Features: React.FC = () => {
  return (
    <>
    <div className="w-full h-4 bg-pattern"></div>
    <h1 className="text-4xl font-extrabold text-center my-12 text-darkgreen text-stroke">FEATURED ITEMS</h1>
    <div className="flex flex-wrap gap-8 justify-center px-8 my-8">
      {featuresData.featuredItems.map((item) => {
        return (
          <FeaturedItem
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </div>
    </>
  );
};

export { Features };
