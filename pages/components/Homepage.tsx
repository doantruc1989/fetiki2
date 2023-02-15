import axios from "axios";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import Hero3 from "./Hero/Hero3";
import Hero4 from "./Hero/Hero4";
import Hero5 from "./Hero/Hero5";
import Hero6 from "./Hero/Hero6";

const Homepage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top/listcategory").then((response) => {
        setItems(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="flex ml-2">
      <div className="w-fit hidden md:block mt-2">
        <Sidebar
          // className=" md:sticky md:left-0"
          aria-label="Sidebar with logo branding example"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup className="bg-gray-200 rounded-lg">
              {items
                ? items.map((item: any) => {
                    return (
                      <Sidebar.Item href={item.path} key={item.id}>
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-lg shadow-lg mr-2"
                            src={item.image}
                            alt={item.category}
                          />
                          <p className="capitalize text-sm font-medium">
                            {item.category}
                          </p>
                        </div>
                      </Sidebar.Item>
                    );
                  })
                : null}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-full md:w-9/12 mx-auto">
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
      </div>
    </div>
  );
};

export default Homepage;
