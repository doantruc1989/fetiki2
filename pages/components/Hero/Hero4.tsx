import { Card, Carousel } from "flowbite-react";
import React from "react";


const Hero4 = () => {
  return (
    <Card className="bg-gray-200 my-6 md:ml-6">
      <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Thương Hiệu Sale Tết
      </h5>
      <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false} indicators={false}>
          <div className="grid gap-1 grid-cols-3">
            <div className="grid gap-1 grid-cols-2">
              <img
                src="image/sale1.png"
                className="rounded-xl sm:h-64 xl:h-80 2xl:h-96"
                alt="..."
              />
              <div className="grid grid-row-2">
                <img
                  src="image/sale2.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
                <img
                  src="image/sale3.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
              </div>
            </div>
            <div className="grid gap-1 grid-cols-2">
              <img
                src="image/sale4.png"
                className="rounded-xl sm:h-64 xl:h-80 2xl:h-96"
                alt="..."
              />
              <div className="grid grid-row-2">
                <img
                  src="image/sale5.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
                <img
                  src="image/sale6.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
              </div>
            </div>
            <div className="grid gap-1 grid-cols-2">
              <img
                src="image/sale7.png"
                className="rounded-xl sm:h-64 xl:h-80 2xl:h-96"
                alt="..."
              />
              <div className="grid grid-row-2">
                <img
                  src="image/sale8.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
                <img
                  src="image/sale9.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div className="grid gap-1 grid-cols-3">
            <div className="grid gap-1 grid-cols-2">
              <img
                src="image/sale10.png"
                className="rounded-xl sm:h-64 xl:h-80 2xl:h-96"
                alt="..."
              />
              <div className="grid grid-row-2">
                <img
                  src="image/sale11.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
                <img
                  src="image/sale12.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
              </div>
            </div>
            <div className="grid gap-1 grid-cols-2">
              <img
                src="image/sale13.png"
                className="rounded-xl sm:h-64 xl:h-80 2xl:h-96"
                alt="..."
              />
              <div className="grid grid-row-2">
                <img
                  src="image/sale14.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
                <img
                  src="image/sale15.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
              </div>
            </div>
            <div className="grid gap-1 grid-cols-2">
              <img
                src="image/sale16.png"
                className="rounded-xl sm:h-64 xl:h-80 2xl:h-96"
                alt="..."
              />
              <div className="grid grid-row-2">
                <img
                  src="image/sale17.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
                <img
                  src="image/sale18.png"
                  className="rounded-xl sm:h-32 xl:h-40 2xl:h-48"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Card>
  );
};

export default Hero4;
