import { Card, Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axiosAll from "../other/axiosAll";

const Hero2 = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    try {
      axiosAll.get("/homepage/chinhhang").then((response) => {
        setBrands(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Card className="bg-gray-200 mx-6 mb-6">
      <div className="flex items-center content-center ">
        <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">
          Thương Hiệu Chính Hãng
        </h5>
        <img className="w-22 h-6" src="/image/official.png" alt="..."/>
      </div>
      <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          slide={false}
          indicators={false}
          leftControl=" "
          rightControl=" "
        >
          <div className="grid gap-1 grid-cols-6">
            {brands ?
              brands.map((brand: any) => {
                return (
                  <img
                  src={brand.image}
                  className="rounded-xl"
                  alt={brand.name}
                  key={brand.id}
                />
                )
              }) :null
            }
          </div>
        </Carousel>
      </div>
    </Card>
  );
};

export default Hero2;
