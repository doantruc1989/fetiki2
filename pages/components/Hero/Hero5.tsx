import axios from "axios";
import { Card } from "flowbite-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";

const Hero5 = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top/homepage/bosuutap").then((response) => {
        setCollections(response.data);

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
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Card className="bg-gray-200 my-6 md:ml-6">
      <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bộ sưu tập nổi bật
      </h5>

        <Carousel 
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-margin-40-px"
        >
            {collections.map((collection : any) => {
              return (
                <a href={collection.path} key={collection.id}>

                  <img
                    src={collection.image}
                    alt="..."
                    className="rounded-xl w-11/12 mx-auto"
                   
                  />
                </a>
              );
            })}
        </Carousel>
    </Card>
  );
};

export default Hero5;
