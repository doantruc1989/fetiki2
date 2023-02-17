import { Card } from "flowbite-react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero4 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 2,
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
      <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Thương Hiệu Sale Tết
      </h5>
      <div className="">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-margin-40-px"
        >
          <div className="grid gap-1 grid-cols-2 mr-1 mx-auto">
            <img
              src="image/sale1.png"
              className="rounded-xl"
              alt="..."
            />
            <div className="grid grid-row-2 gap-1">
              <img
                src="image/sale2.png"
                className="rounded-xl"
                alt="..."
              />
              <img
                src="image/sale3.png"
                className="rounded-xl"
                alt="..."
              />
            </div>
          </div>

          <div className="grid gap-1 grid-cols-2 mr-1 mx-auto">
            <img
              src="image/sale4.png"
              className="rounded-xl"
              alt="..."
            />
            <div className="grid grid-row-2 gap-1">
              <img
                src="image/sale5.png"
                className="rounded-xl"
                alt="..."
              />
              <img
                src="image/sale6.png"
                className="rounded-xl"
                alt="..."
              />
            </div>
          </div>

          <div className="grid gap-1 grid-cols-2 mr-1 mx-auto">
            <img
              src="image/sale7.png"
              className="rounded-xl"
              alt="..."
            />
            <div className="grid grid-row-2 gap-1">
              <img
                src="image/sale8.png"
                className="rounded-xl"
                alt="..."
              />
              <img
                src="image/sale9.png"
                className="rounded-xl"
                alt="..."
              />
            </div>
          </div>

          <div className="grid gap-1 grid-cols-2 mr-1 mx-auto">
            <img
              src="image/sale10.png"
              className="rounded-xl"
              alt="..."
            />
            <div className="grid grid-row-2 gap-1">
              <img
                src="image/sale11.png"
                className="rounded-xl"
                alt="..."
              />
              <img
                src="image/sale12.png"
                className="rounded-xl"
                alt="..."
              />
            </div>
          </div>

          <div className="grid gap-1 grid-cols-2 mr-1 mx-auto">
            <img
              src="image/sale13.png"
              className="rounded-xl"
              alt="..."
            />
            <div className="grid grid-row-2 gap-1">
              <img
                src="image/sale14.png"
                className="rounded-xl"
                alt="..."
              />
              <img
                src="image/sale15.png"
                className="rounded-xl"
                alt="..."
              />
            </div>
          </div>

          <div className="grid gap-1 grid-cols-2 mr-1 mx-auto">
            <img
              src="image/sale16.png"
              className="rounded-xl"
              alt="..."
            />
            <div className="grid grid-row-2 gap-1">
              <img
                src="image/sale17.png"
                className="rounded-xl"
                alt="..."
              />
              <img
                src="image/sale18.png"
                className="rounded-xl"
                alt="..."
              />
            </div>
          </div>

        </Carousel>
      </div>
    </Card>
  );
};

export default Hero4;
