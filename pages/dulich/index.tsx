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
      category: "dulich",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 750000,
    };
    const price2 = {
      category: "dulich",
      sortBy: "price",
      search: "gia2",
      fromPrice: 750000,
      toPrice: 1900000,
    };
    const price3 = {
      category: "dulich",
      sortBy: "price",
      search: "gia3",
      fromPrice: 1900000,
      toPrice: 3000000,
    };
    const price4 = {
      category: "dulich",
      sortBy: "price",
      search: "gia4",
      fromPrice: 3000000,
      toPrice: 10000000,
    };

    const danhmuc1 = {
      category: "dulich",
      sortBy: "tour",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "dulich",
      sortBy: "voucher",
      search: "danhmuc2",
    };

    const danhmuc3 = {
      category: "dulich",
      sortBy: "san",
      search: "danhmuc3",
    };

    const prop = {
      title: "tiki voucher du lịch travel hè",
      keywords: "tiki voucher du lịch travel hè",
      description: "tiki làm trang voucher du lịch travel hè đơn giản easy",
    }

  return (
    <div className="my-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Voucher Du lịch</Breadcrumb.Item>
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
              Đi theo Tour
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
            Voucher đặc biệt
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
            Trọn gói
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
              Dưới 750.000
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
              750.000 to 1.900.000
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              1.900.000 to 3.000.000
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Trên 3.000.000
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
              <h1 className="mb-3 pt-3">Voucher Du lịch</h1>
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
