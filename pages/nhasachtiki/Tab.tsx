import { Tabs } from "flowbite-react";
import React from "react";
import ListProductdetail from "../components/ListProductdetail";

const Tab = () => {
  const phobien = {
    category: "sach",
    sortBy: "price",
    search: "phobien",
  };
  const asc = {
    category: "sach",
    sortBy: "price",
    search: "asc",
  };
  const desc = {
    category: "sach",
    sortBy: "price",
    search: "desc",
  };
  return (
    <div className="bg-gray-200 rounded-xl">
      <div className="mt-3">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active={true} title="Phổ biến">
            <ListProductdetail prop={phobien}/>
          </Tabs.Item>
          <Tabs.Item title="Bán chạy"><ListProductdetail prop={asc}/></Tabs.Item>
          <Tabs.Item title="Hàng mới"><ListProductdetail prop={phobien}/></Tabs.Item>
          <Tabs.Item title="Giá thấp đến cao"><ListProductdetail prop={asc}/></Tabs.Item>
          <Tabs.Item title="Giá cao đến thấp"><ListProductdetail prop={desc}/></Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default Tab;
