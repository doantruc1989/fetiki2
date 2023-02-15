import { Carousel } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";

function Index() {
  return (
    <div className="w-9/12 mx-auto mb-5 mt-5">
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
