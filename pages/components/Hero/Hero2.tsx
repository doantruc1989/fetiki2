import axios from "axios";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero2 = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top/homepage/chinhhang").then((response) => {
        setBrands(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <Card className="mt-6 bg-white rounded-lg">
      <div className="flex items-center content-center gap-3">
        <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white ml-1">
          Thương Hiệu Chính Hãng
        </h5>
        <img className="w-22 h-6" src="/image/official.png" alt="..." />
      </div>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-margin-40-px"
      >
        {brands
          ? brands.map((brand: any) => {
              return (
                <div className="border border-gray-200 rounded-md mx-1" key={brand.id}>
                <img
                  src={brand.image}
                  className='w-full h-auto rounded-md'
                  alt={brand.name}
                  
                />
                </div>
              );
            })
          : null}
      </Carousel>
    </Card>
  );
};

export default Hero2;
