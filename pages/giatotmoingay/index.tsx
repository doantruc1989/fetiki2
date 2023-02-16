import { Tabs } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import ListProductgiatot from "../components/ListProductgiatot";

function Index() {
  const phobien = {
    category: "dienthoai",
    sortBy: "price",
    search: "phobien",
    path: "/dienthoaimaytinhbang"
  };
  const asc = {
    category: "diengiadung",
    sortBy: "price",
    search: "asc",
    path: "/diengiadung"
  };
  const desc = {
    category: "sach",
    sortBy: "price",
    search: "desc",
    path: "/nhasachtiki"
  };
  const phobien2 = {
    category: "donam",
    sortBy: "price",
    search: "phobien",
    path: "/thoitrangnam"
  };
  const asc2 = {
    category: "donu",
    sortBy: "price",
    search: "asc",
    path: "/thoitrangnu"
  };
  const desc2 = {
    category: "giaynu",
    sortBy: "price",
    search: "desc",
    path: "/giaydepnu"
  };
  return (
    <div className="mb-5">
      <img
        className="mx-auto pt-5"
        src="/image/other/giatotmoingay.png"
        alt="giatotmoingay"
      />
      <div className="w-full md:w-11/12 mx-auto">
        <div className="mt-3">
          <Tabs.Group aria-label="Tabs with underline" style="underline"
          className="flex justify-evenly"
          >
            <Tabs.Item active={true} title="Điện thoại - máy tính bảng">
              <div className="bg-gray-200 rounded-xl pt-3">
                <ListProductgiatot prop={phobien} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Điện gia dụng">
            <div className="bg-gray-200 rounded-xl pt-3">
              <ListProductgiatot prop={asc} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Nhà sách tiki">
            <div className="bg-gray-200 rounded-xl pt-3">
              <ListProductgiatot prop={desc} />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

      <div className="w-full md:w-11/12 mx-auto">
        <div className="mt-3">
          <Tabs.Group aria-label="Tabs with underline" style="underline"
          className="flex justify-evenly"
          >
            <Tabs.Item active={true} title="Đồ nam" >
              <div className="bg-gray-200 rounded-xl pt-3">
                <ListProductgiatot prop={phobien2} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Đồ nữ">
            <div className="bg-gray-200 rounded-xl pt-3">
              <ListProductgiatot prop={asc2} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Giày nữ">
            <div className="bg-gray-200 rounded-xl pt-3">
              <ListProductgiatot prop={desc2} />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

    </div>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Layout>
        <>{page}</>
      </Layout>
    </CartProvider>
  );
};

export default Index;
