import React from "react";

type featuredItemType = {
  name: string;
  image: string;
  description: string;
};

const FeaturedItem: React.FC<featuredItemType> = ({
  name,
  image,
  description,
}) => {
  return (
    <div className="flex flex-col max-w-[24rem] rounded-xl overflow-clip">
      <img src={image} alt="IMAGE" className="max-h-[24rem] object-cover"/>
      <div className="bg-darkgreen px-4 py-4 text-light flex-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-lg">{description}</h2>
      </div>
    </div>
  );
};

export { FeaturedItem };
