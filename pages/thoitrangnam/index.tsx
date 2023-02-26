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
      category: "donam",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 80000,
    };
    const price2 = {
      category: "donam",
      sortBy: "price",
      search: "gia2",
      fromPrice: 80000,
      toPrice: 200000,
    };
    const price3 = {
      category: "donam",
      sortBy: "price",
      search: "gia3",
      fromPrice: 200000,
      toPrice: 420000,
    };
    const price4 = {
      category: "donam",
      sortBy: "price",
      search: "gia4",
      fromPrice: 420000,
      toPrice: 10000000,
    };

    const danhmuc1 = {
      category: "donam",
      sortBy: "thun",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "donam",
      sortBy: "so",
      search: "danhmuc2",
    };

    const danhmuc3 = {
      category: "donam",
      sortBy: "khoac",
      search: "danhmuc3",
    };

    const danhmuc4 = {
      category: "donam",
      sortBy: "hoodie",
      search: "danhmuc4",
    };

    const danhmuc5 = {
      category: "donam",
      sortBy: "lon",
      search: "danhmuc5",
    };

    const danhmuc6 = {
      category: "donam",
      sortBy: "quan",
      search: "danhmuc6",
    };

    const danhmuc7 = {
      category: "donam",
      sortBy: "ngu",
      search: "danhmuc7",
    };

    const danhmuc8 = {
      category: "donam",
      sortBy: "doi",
      search: "danhmuc8",
    };

    const danhmuc9 = {
      category: "donam",
      sortBy: "lot",
      search: "danhmuc9",
    };

    const prop = {
      title: "tiki thời trang fashion áo thun nam cotton phông sales off giá rẻ",
      keywords: "tiki thời trang fashion áo thun nam cotton phông sales off giá rẻ",
      description: "tiki làm trang thời trang fashion áo thun nam cotton phông sales off giá rẻ đơn giản easy",
    }

  return (
    <div className="my-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Thời trang nam</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid gap-6 grid-cols-4 w-full lg:w-11/12 mx-auto mt-2">
        <div className="text-xs lg:text-sm md:col-start-1 md:col-end-2 hidden md:block">
          <div className=" bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Danh mục sản phẩm</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc1);
              }}>
              Áo thun nam
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
           Áo sơ mi nam
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
           Áo khoác nam
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc4);
              }}>
              Áo hoodie nam
            </button>

            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc5);
              }}>
              Quần áo nam kích cỡ lớn
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc6);
              }}>
              Quần nam
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc7);
              }}>
             Đồ ngủ
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc8);
              }}>
             Đồ đôi
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc9);
              }}>
             Đồ lót nam
            </button>
          </div>

          <div className="flex flex-col bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Giá</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price1);
              }}
            >
              Dưới 80.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
              80.000 to 200.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              200.000 to 420.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Trên 420.000
            </button>
          </div>
          
          <div className=" bg-white mt-3 rounded-xl p-4 leading-loose">
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
          <div className="bg-white rounded-xl p-2 mt-3">
            <div className="font-medium text-xl">
              <h1 className="mb-3 pt-3">Thời trang nam</h1>
              <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-9 px-1">
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
