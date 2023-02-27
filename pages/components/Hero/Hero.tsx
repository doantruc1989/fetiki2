import axios from "axios";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface rightPart {
  map(arg0: (rightPart: any) => JSX.Element): import("react").ReactNode;
  id: number;
  image: string;
  category: string;
  path: string;
}

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [rightPart, setRightPart] = useState<rightPart>([] as any);

  useEffect(() => {
    try {
      axios
        .get("https://quocson.fatcatweb.top/homepage/hero")
        .then((response) => {
          setRightPart(response.data.pop());
          setSlides(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
      <div className="flex items-center mt-8 bg-[#F5F5FA] rounded-xl">
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
          containerClass="carousel-container w-full"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-margin-40-px"
        >
          {slides
            ? slides.map((newSlide: any) => {
                return (
                  <a href={newSlide.path} key={newSlide.id}>
                    <img
                      className="rounded-xl h-fit lg:h-60"
                      src={newSlide.image}
                      alt={newSlide.name}
                      key={newSlide.id}
                    />
                  </a>
                );
              })
            : null}
        </Carousel>
        <div className="hidden lg:block w-80">
          {rightPart ? (
            <a href={rightPart.path}>
              <img
                className="rounded-xl lg:h-60"
                src={rightPart.image}
                alt={rightPart.category}
                key={rightPart.id}
              />
            </a>
          ) : null}
        </div>
      </div>

  );
};

export default Hero;
