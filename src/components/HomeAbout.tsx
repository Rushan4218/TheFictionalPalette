import React from "react";
import interior1 from "../assets/interior1.jpg";
import salad from "../assets/salad.jpg";

const HomeAbout: React.FC = () => {
  return (
    <section className="my-24 w-full flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-11/12 md:w-auto overflow-clip">
        <img
          src={interior1}
          alt="IMAGE"
          className="z-20 h-[20rem] lg:h-[26rem] xl:h-[30rem] object-cover rounded-lg"
        />
        <div className="z-10 bg-green text-white p-8 md:-ml-4 md:pl-12 lg:p-12 lg:pl-16 flex flex-col gap-4 md:gap-8 md:max-w-[500px] rounded-lg">
          <h1 className="text-4xl font-bold">
            Welcome To The Fictional Palette - where culinary stories unfold
          </h1>
          <h2 className="text-lg lg:text-xl">
            Embark on a gastronomic journey like no other at The Fictional
            Palette, where every dish is a chapter, and every meal is a tale to
            savor.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-11/12 md:w-auto rounded-lg overflow-clip">
        <img
          src={salad}
          alt="IMAGE"
          className="z-20 h-[20rem] lg:h-[26rem] xl:h-[30rem] object-cover rounded-lg"
        />
        <div className="z-10 bg-green text-white p-8 md:-mr-4 md:pr-12 lg:p-12 lg:pr-16 xl:p-18 xl:pr-24 flex flex-col gap-4 md:gap-8 md:max-w-[500px] lg:text-white rounded-lg">
          <h1 className="text-4xl font-bold">
            Cuisine: A Symphony of Imaginary Flavors
          </h1>
          <h2 className="text-lg lg:text-xl">
            Dive into a world of culinary creativity with our electic meny,
            blending flavors from distant realms and imaginary ingredients. From
            whimsical salads to enchanged desserts, our dishes are crafted to
            ignite your taste buds and spark your imagination.
          </h2>
        </div>
      </div>
    </section>
  );
};

export { HomeAbout };
