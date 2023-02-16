import { Breadcrumb, Carousel, Tabs } from "flowbite-react";
import React, { ReactElement, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import Tab from "./Tab";
import TabSearch from "./TabSearch";
import HeadSeo from "../components/HeadSeo";


const Index = () => {
    const [searchs, setSearchs] = useState({});
    const [changeTab, setChangeTab] = useState(false);

    const price1 = {
      category: "diengiadung",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 1500000,
    };
    const price2 = {
      category: "diengiadung",
      sortBy: "price",
      search: "gia2",
      fromPrice: 1500000,
      toPrice: 4000000,
    };
    const price3 = {
      category: "diengiadung",
      sortBy: "price",
      search: "gia3",
      fromPrice: 4000000,
      toPrice: 7000000,
    };
    const price4 = {
      category: "diengiadung",
      sortBy: "price",
      search: "gia4",
      fromPrice: 7000000,
      toPrice: 100000000,
    };

    const danhmuc1 = {
      category: "diengiadung",
      sortBy: "da",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "diengiadung",
      sortBy: "hut",
      search: "danhmuc2",
    };

    const prop = {
      title: "tiki electronic điện gia dụng máy hút bụi",
      keywords: "electronic điện gia dụng tiki máy hút bụi",
      description: "làm trang electronic điện gia dụng đơn giản easy máy hút bụi",
    }
  return (
    <div className="my-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Điện Gia Dụng</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid gap-6 grid-cols-4 w-11/12 mx-auto mt-5">
        <div className="text-xs lg:text-sm md:col-start-1 md:col-end-2 hidden md:block">
          <div className=" bg-gray-200 mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Danh mục sản phẩm</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc1);
              }}>
              Đồ dùng nhà bếp
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
          Thiết bị gia đình
            </button>
            
          </div>

          <div className="flex flex-col bg-gray-200 mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Giá</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price1);
              }}
            >
              Dưới 1.500.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
              1.500.000 to 4.000.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              4.000.000 to 7.000.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Trên 7.000.000
            </button>
          </div>
          
          <div className=" bg-gray-200 text-xs mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Dịch vụ</h2>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Giao Siêu Tốc 2H
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Thưởng thêm Astra
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Freeship không giới hạn
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Trả góp 0%
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Giảm sâu
              </label>
            </div>
          </div>
        </div>
        <div className="col-start-1 md:col-start-2 col-end-5 ">
          <div className="bg-gray-200 rounded-xl">
            <div className="mx-3 mt-3 font-medium text-xl">
              <h1 className="mb-3 pt-3">Điện Gia Dụng</h1>
              <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96 pb-3 px-3">
                <Carousel
                  slide={true}
                  indicators={false}
                  leftControl=" "
                  rightControl=" "
                >
                  <img
                    src="image/dienthoai/banner1.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner2.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner3.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner4.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                </Carousel>
              </div>
            </div>
          </div>
        {!changeTab ? <Tab /> : <TabSearch prop={searchs}/>}
        </div>
      </div>
    </div>
  );
};

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
