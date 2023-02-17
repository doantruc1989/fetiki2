import { Breadcrumb, Rating } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";

const Index = ({ productDetail }: any) => {
  return (
    <div className="my-5">
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products" icon={HiOutlineShoppingBag}>Sản phẩm</Breadcrumb.Item>
        <Breadcrumb.Item>{productDetail?.brand}</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <div className="grid grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-5 mx-3">
          <img
            src={productDetail?.image}
            className="w-full h-auto rounded-lg"
            alt="..."
          />
          <div>
            <div className="text-xs mb-3 flex">
              <h5>Thương hiệu: </h5>
              <a href="#" className="text-blue-600 underline ml-2">
                {productDetail?.brand}
              </a>
            </div>
            <h1 className="text-lg md:text-2xl font-medium mb-3">
              {productDetail?.productName}
            </h1>
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white mr-4">
                    4.95
                  </p>

                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    73 reviews
                  </a>
                </Rating>
              </div>
              <h5 className="text-sm">Đã bán 1453</h5>
            </div>

            <div className="bg-gray-100 font-bold rounded-md p-4 my-4 text-red-700 text-xl md:text-3xl">
              <h2>{Intl.NumberFormat().format(productDetail?.price)} đ</h2>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-3 mx-3 mt-4">
          <h2 className="font-bold text-sm md:text-base">Mô tả sản phẩm:</h2>
          <div className="text-sm md:text-base text-justify">
            {productDetail?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  // const router = useRouter();
  // const { id } = router.query;
  const productId = params.id;
  const res = await axios.get(`https://quocson.fatcatweb.top/product/${productId}`);
  const productDetail = res.data;

  return {
    props: {
      productDetail,
    },
  };
}

export async function getStaticPaths() {
  const res = await axios.get(`https://quocson.fatcatweb.top/product/`);
  const data = res.data;
  const paths = data.map((product: any) => {
    return {
      params: { 
        id: product.id,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
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
