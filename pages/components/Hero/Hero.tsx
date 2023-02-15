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
          response.data.pop();
          setSlides(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Card className="bg-gray-200 my-6 md:ml-6">
      <div className="flex items-center">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this?.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container lg:w-3/4"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={this?.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-margin-40-px"
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
        <div className="hidden lg:block lg:ml-2">
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
    </Card>
  );
};

export default Hero;
