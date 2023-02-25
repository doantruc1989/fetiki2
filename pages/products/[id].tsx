import { Breadcrumb, Button, Rating } from "flowbite-react";
import React, {
  ReactElement,
  useEffect,
  useState,
} from "react";
import { CartProvider, useCart } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Cothebancungquantam from "../components/Cothebancungquantam";

const Index = () => {
  const [productDetail, setProductDetail] = useState([] as any);
  const router = useRouter();
  const productId = router.query;
  const { addItem } = useCart();
  const [props, setProps] = useState({
    category: 'random',
    sortBy: "price",
    search: "random",
  });

  useEffect(() => {
    try {
      axios.get(`https://quocson.fatcatweb.top//product/${productId.id}`).then((res) => {
        setProductDetail(res.data);
        
      });
    } catch (error) {
      console.log(error);
    }
  }, [productId.id]);

  return (
    <div className="my-5 mx-3">
      <ToastContainer />
      <Breadcrumb aria-label="Default breadcrumb example" className="my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item
          href={"/" + productDetail[0]?.categoryID.path}
          icon={HiOutlineShoppingBag}
          className="capitalize"
        >
          {productDetail[0]?.categoryID.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item className="hidden lg:flex">
          {productDetail[0]?.productName}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-6">
        <div className="grid grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-5">
          <img
            src={productDetail[0]?.image}
            className="w-full h-auto rounded-lg"
            alt="..."
          />
          <div>
            <div className="text-xs mb-3 flex">
              <h5>Thương hiệu: </h5>
              <a href="#" className="text-blue-600 underline ml-2">
                {productDetail[0]?.brand}
              </a>
            </div>
            <h1 className="text-lg md:text-2xl font-medium mb-3">
              {productDetail[0]?.productName}
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
              <h2>{Intl.NumberFormat().format(productDetail[0]?.price)} đ</h2>
            </div>

            <div className=" flex items-center justify-center">
              <Button
                className="mb-5 mt-2"
                onClick={() => {
                  addItem(productDetail[0]);
                  toast("Add product successfully", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    type: toast.TYPE.SUCCESS,
                    className: "toast-message",
                  });
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-3 mx-3 mt-4">
          <h2 className="font-bold text-sm md:text-base">Mô tả sản phẩm:</h2>
          <div className="text-sm md:text-base text-justify">
            {productDetail[0]?.content}
          </div>
        </div>
      </div>
      <Cothebancungquantam prop={props} />
    </div>
  );
};

// export async function getStaticProps({ params }: any) {
//   // const router = useRouter();
//   // const { id } = router.query;
//   const productId = params.id;
//   const res = await axios.get(
//     `https://quocson.fatcatweb.top//product/${productId}`
//   );
//   const productDetail = res.data;
//   return {
//     props: {
//       productDetail,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await axios.get(`https://quocson.fatcatweb.top//product/`);
//   const data = res.data;
//   const paths = data.map((product: any) => {
//     return {
//       params: {
//         id: product.id,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// }

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
