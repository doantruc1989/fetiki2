import React from "react";
import Nav from "./Nav";
import Footera from "./Footer";
import HeadSeo from "./HeadSeo";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const prop = {
    title: "tiki trang chủ home page tìm kiếm sản phẩm sales off giá rẻ",
    keywords: "tiki trang chủ home page tìm kiếm sản phẩm sales off giá rẻ",
    description: "tiki làm trang trang chủ home page tìm kiếm sản phẩm sales off giá rẻ đơn giản easy",
  }
  return (
    <React.Fragment>
      <HeadSeo prop={prop}/>
      <Nav />
        <main className=" w-full md:w-11/12 mx-auto">{children}</main>
      <Footera />
    </React.Fragment>
  );
};

export default Layout;
