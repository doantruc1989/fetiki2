import {
  Button,
  Card,
  Carousel,
  Modal,
  Progress,
  Rating,
} from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "react-use-cart";
import CountdownComp from "../Countdown";
import axiosAll from "../other/axiosAll";

const Hero3 = () => {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);
  const [modals, setModals] = useState(false);
  const [productDetail, setProductDetail] = useState([] as any);
  const clickref: any = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (!clickref.current?.contains(e.target)) {
        setModals(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);

  useEffect(() => {
    try {
      axiosAll.get("/product/all?search=random").then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axiosAll.get("/product/all?search=random").then((res) => {
        setProducts2(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axiosAll.get("/product/all?search=random").then((res) => {
        setProducts3(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Card className="bg-gray-200 mx-6 mb-6">
      <ToastContainer />
      <div className="flex justify-between">
        <div className="flex contents-start items-center">
          <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Giá sốc hôm nay
          </h5>
          <CountdownComp />
        </div>

        <Link
          href="/giatotmoingay"
          className="flex text-blue-700 flex-wrap items-center"
        >
          <div className="text-base md:text-xl font-bold tracking-tight dark:text-white">
            Xem thêm{" "}
          </div>
          <HiChevronRight className="text-xl md:text-3xl" />
        </Link>
      </div>

      <div className="gap-4 h-80 2xl:h-96">
        <Carousel slide={true} indicators={false}
        >
          <div className="grid h-auto grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 2xl:h-96">
            {products.map((product : any) => {
              return (
                <div className="rounded-lg bg-white mb-4 relative" key={product?.id}>
                  <img
                    onClick={() => {
                      axiosAll
                        .get(`/product/${product?.id}`)
                        .then((response) => {
                          setProductDetail(response.data);
                          setModals(!modals);
                        });
                    }}
                    src={product?.image}
                    className="rounded-t-lg cursor-pointer w-fit h-fit relative"
                    alt="..."
                  /> 
                             <p className="absolute top-4 text-xs left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                      -{Math.floor(Math.random() * 80)}%
                    </p>
                  <div className="flex items-center flex-col justify-between">
                    <p className="text-sm md:my-3 font-bold text-gray-900 dark:text-white">
                      {Intl.NumberFormat().format(product?.price)} đ
                    </p>
                    <Button
                      className="w-fit mb-3"
                      onClick={() => {
                        addItem(product);
                        toast("Add product successfully", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                          type: toast.TYPE.SUCCESS,
                          className: "toast-message",
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                    <Progress
                      className="mt-2 mb-5 text-xs"
                      progress={Math.floor(Math.random() * 100)}
                      size="lg"
                      color="red"
                      label={"Đã bán" + " " + Math.floor(Math.random() * 100)}
                      labelPosition="outside"
                    />
                  </div>
                </div>
              );
            })}

          </div>
          <div className="grid h-auto grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 2xl:h-96">
            {products2.map((product: any) => {
              return (
                <div className="rounded-lg bg-white mb-4 relative" key={product?.id}>
                  <img
                    onClick={() => {
                      axiosAll
                        .get(`/product/${product?.id}`)
                        .then((response) => {
                          setProductDetail(response.data);
                          setModals(!modals);
                        });
                    }}
                    src={product?.image}
                    className="rounded-t-lg cursor-pointer w-fit h-fit relative"
                    alt="..."
                  /> 
                             <p className="absolute top-4 text-xs left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                      -{Math.floor(Math.random() * 80)}%
                    </p>
                  <div className="flex items-center flex-col justify-between">
                    <p className="text-sm md:my-3 font-bold text-gray-900 dark:text-white">
                      {Intl.NumberFormat().format(product?.price)} đ
                    </p>
                    <Button
                      className="w-fit mb-3"
                      onClick={() => {
                        addItem(product);
                        toast("Add product successfully", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                          type: toast.TYPE.SUCCESS,
                          className: "toast-message",
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                    <Progress
                      className="mt-2 mb-5 text-xs"
                      progress={Math.floor(Math.random() * 100)}
                      size="lg"
                      color="red"
                      label={"Đã bán" + " " + Math.floor(Math.random() * 100)}
                      labelPosition="outside"
                    />
                  </div>
                </div>
              );
            })}
            
          </div>

          <div className="grid h-auto grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 2xl:h-96">
            {products3.map((product: any) => {
              return (
                <div className="rounded-lg bg-white mb-4 relative" key={product?.id}>
                  <img
                    onClick={() => {
                      axiosAll
                        .get(`/product/${product?.id}`)
                        .then((response) => {
                          setProductDetail(response.data);
                          setModals(!modals);
                        });
                    }}
                    src={product?.image}
                    className="rounded-t-lg cursor-pointer w-fit h-fit relative"
                    alt="..."
                  /> 
                             <p className="absolute top-4 text-xs left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                      -{Math.floor(Math.random() * 80)}%
                    </p>
                  <div className="flex items-center flex-col justify-between">
                    <p className="text-sm md:my-3 font-bold text-gray-900 dark:text-white">
                      {Intl.NumberFormat().format(product?.price)} đ
                    </p>
                    <Button
                      className="w-fit mb-3"
                      onClick={() => {
                        addItem(product);
                        toast("Add product successfully", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                          type: toast.TYPE.SUCCESS,
                          className: "toast-message",
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                    <Progress
                      className="mt-2 mb-5 text-xs"
                      progress={Math.floor(Math.random() * 100)}
                      size="lg"
                      color="red"
                      label={"Đã bán" + " " + Math.floor(Math.random() * 100)}
                      labelPosition="outside"
                    />
                  </div>
                </div>
              );
            })}
            
          </div>
        </Carousel>
        <Modal
              show={modals}
              position="center"
              onClose={() => {
                setModals(!modals);
              }}
            >
              <Modal.Header>Product Details</Modal.Header>
              <Modal.Body>
                <div className="grid grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-4 mx-3">
                  <img
                    src={productDetail?.image}
                    className="w-80 h-fit rounded-lg"
                    alt="..."
                  />
                  <div>
                    <div className="text-xs mb-3 flex">
                      <h5>Thương hiệu: </h5>
                      <a href="#" className="text-blue-600 underline ml-2">
                        {productDetail?.brand}
                      </a>
                    </div>
                    <h3 className="text-lg md:text-2xl font-medium mb-3">
                      {productDetail?.productName}
                    </h3>
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
                      <h2>
                        {Intl.NumberFormat().format(productDetail?.price)} đ
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-md p-3 mx-3 mt-4">
                  <h2 className="font-bold text-sm md:text-base">
                    Mô tả sản phẩm:
                  </h2>
                  <div className="text-sm md:text-base text-justify">
                    {productDetail?.content}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
      </div>
    </Card>
  );
};

export default Hero3;
