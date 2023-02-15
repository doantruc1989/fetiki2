import { Card, Carousel } from "flowbite-react";
import path from "path";
import React, { useEffect, useState } from "react";
import axiosAll from "../other/axiosAll";

const Hero5 = () => {
  const [collections, setCollections] = useState([]);
  const [nextCols, setNextCols] = useState([]);
  useEffect(() => {
    try {
      axiosAll.get("/homepage/bosuutap").then((response) => {
        setCollections(response.data.splice(0, 6));
        response.data.slice(6);
        setNextCols(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Card className="bg-gray-200 mx-6 mb-6">
      <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bộ sưu tập nổi bật
      </h5>
      <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false} indicators={false}>
          <div className="grid gap-1 grid-cols-6">
            {collections.map((collection : any) => {
              return (
                <a href={collection.path} key={collection.id}>

                  <img
                    src={collection.image}
                    alt="..."
                    className="rounded-xl"
                   
                  />
                </a>
              );
            })}
          </div>

          <div className="grid gap-1 grid-cols-6">
            {nextCols.map((nextCol : any) => {
              return (
                <a href={nextCol.path} key={nextCol.id}>
                <img
                  src={nextCol.image}
                  className="rounded-xl"
                  alt="..."
                />
                </a>
              );
            })}
          </div>
        </Carousel>
      </div>
    </Card>
  );
};

export default Hero5;
