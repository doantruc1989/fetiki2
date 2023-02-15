import { Card, Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axiosAll from "../other/axiosAll";

export interface rightPart {
  map(arg0: (rightPart: any) => JSX.Element): import("react").ReactNode;
  id: number,
  image: string,
  category: string,
  path: string,

}

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [rightPart, setRightPart] = useState<rightPart>([] as any);

  useEffect(() => {
    try {
      axiosAll.get("/homepage/hero").then((response) => {
        setRightPart(response.data.pop())
        response.data.pop()
        setSlides(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Card className="bg-gray-200 m-6">
      <div className="grid h-64 gap-4 lg:grid-cols-4 auto-rows-auto">
        <Carousel
          slideInterval={5000}
          className="lg:col-start-1 lg:col-end-4 rounded-3xl"
        >
          {slides ?
          slides.map((newSlide: any) => {
            return (
              <a href={newSlide.path} key={newSlide.id}>
              <img
                className="rounded-3xl md:h-64"
                src={newSlide.image}
                alt={newSlide.name}
                key={newSlide.id}
              />
              </a>
            );

          }) : null}
        </Carousel>
        <Carousel leftControl=" " rightControl=" " indicators={false}>
          {rightPart ? (<a href={rightPart.path}><img className="rounded-3xl md:h-64" src={rightPart.image} alt={rightPart.category} key={rightPart.id}/></a>) : null}
        </Carousel>
      </div>
    </Card>
  );
};

export default Hero;
