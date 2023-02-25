import axios from "axios";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero2 = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top//homepage/chinhhang").then((response) => {
        setBrands(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Card className="bg-gray-200 my-6 md:ml-6">
      <div className="flex items-center content-center ">
        <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">
          Thương Hiệu Chính Hãng
        </h5>
        <img className="w-22 h-6" src="/image/official.png" alt="..."/>
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
          itemClass="carousel-item-margin-40-px"
        >
            {brands ?
              brands.map((brand: any) => {
                return (
                  <img
                  src={brand.image}
                  className="rounded-xl w-11/12 mx-auto"
                  alt={brand.name}
                  key={brand.id}
                />
                )
              }) :null
            }
        </Carousel>
    </Card>
  );
};

export default Hero2;
