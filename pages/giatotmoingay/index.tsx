import { Breadcrumb, Tabs } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";
import ListProductgiatot from "../components/ListProductgiatot";
import { HiHome } from "react-icons/hi";

function Index() {
  const phobien = {
    category: "dienthoai",
    sortBy: "price",
    search: "phobien",
    route: "dienthoaimaytinhbang",
  };
  const asc = {
    category: "diengiadung",
    sortBy: "price",
    search: "asc",
    route: "diengiadung",
  };
  const desc = {
    category: "sach",
    sortBy: "price",
    search: "desc",
    route: "nhasachtiki",
  };
  const phobien2 = {
    category: "donam",
    sortBy: "price",
    search: "phobien",
    route: "thoitrangnam",
  };
  const asc2 = {
    category: "donu",
    sortBy: "price",
    search: "asc",
    route: "thoitrangnu",
  };
  const desc2 = {
    category: "giaynu",
    sortBy: "price",
    search: "desc",
    route: "giaydepnu",
  };

  const prop = {
    title: "tiki giá rẻ cheap fast low price sales off giảm giá",
    keywords: "tiki giá rẻ cheap fast low price sales off giảm giá",
    description: "tiki làm trang giá rẻ cheap fast low price sales off giảm giá đơn giản easy",
  }

  return (
    <div className="mb-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Giá tốt mỗi ngày</Breadcrumb.Item>
      </Breadcrumb>
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
