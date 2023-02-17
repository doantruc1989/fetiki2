import { Breadcrumb, Carousel } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";

function Index() {
  const prop = {
    title: "tiki voucher mã săn mỗi ngày everyday sales off giá rẻ",
    keywords: "tiki voucher mã săn mỗi ngày everyday sales off giá rẻ",
    description: "tiki làm trang voucher mã săn mỗi ngày everyday sales off giá rẻ đơn giản easy",
  }
  return (
    <div className="w-9/12 mx-auto mb-5 mt-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Mã giảm giá</Breadcrumb.Item>
      </Breadcrumb>
      <img
        src="/image/other/magiamgia.png"
        alt="magiamgia"
        className="mx-auto"
      />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-5">
        <Carousel>
          <img src="/image/other/magiamgia1.png" alt="magiamgia1" />
          <img src="/image/other/magiamgia2.png" alt="magiamgia2" />
          <img src="/image/other/magiamgia3.png" alt="magiamgia3" />
        </Carousel>
      </div>
      <img
        src="/image/other/thanhvienastra.png"
        alt="thanhvienastra"
        className="mx-auto"
      />
      <img
        src="/image/other/hoivienastra.png"
        alt="hoivienastra"
        className="mx-auto"
      />
      <img
        src="/image/other/diemthuongsinhloi.png"
        alt="diemthuongsinhloi"
        className="mx-auto"
      />
      <img
        src="/image/other/bangastra.png"
        alt="bangastra"
        className="mx-auto"
      />
      <img
        src="/image/other/coupondocquyen.png"
        alt="coupondocquyen"
        className="mx-auto"
      />
      <img
        src="/image/other/goihoivienastra.png"
        alt="goihoivienastra"
        className="mx-auto"
      />
      <img
        src="/image/other/danhgiasanpham.png"
        alt="danhgiasanpham"
        className="mx-auto"
      />
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
