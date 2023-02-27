import axios from "axios";
import { Button, Card, Modal, Rating } from "flowbite-react";
import Link from "next/link";
import React, { memo, useEffect,useLayoutEffect, useRef, useState } from "react";
import { useCart } from "react-use-cart";
import Carousel from "react-multi-carousel";
import { toast } from "react-toastify";
import "react-multi-carousel/lib/styles.css";

function Cothebancungquantam({ prop }: any) {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
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
  }, []);

  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3006/product/all?category=${prop.category}&search=${prop.search}&sortBy=${prop.sortBy}`
        )
        .then((res) => {
          setProducts(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  },[]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <Card className="bg-white w-full lg:w-11/12 mx-auto">
      <div className="flex justify-between">
        <div className="flex contents-start items-center">
          <h5 className="text-base ml-1 md:text-xl font-bold text-gray-900 dark:text-white">
            Có thể bạn đang tìm kiếm
          </h5>
        </div>
      </div>

      <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-margin-40-px"
        >
          {products?.map((product: any) => {
            return (
              <div className="rounded-md border mx-1 border-gray-200 shadow-md bg-white mb-1" key={product?.id}>
                <img
                  onClick={() => {
                    axios
                      .get(
                        `http://localhost:3006/product/${product?.id}`
                      )
                      .then((response) => {
                        setProductDetail(response.data);
                        setModals(!modals);
                      });
                  }}
                  src={product?.image}
                  className="rounded-t-md cursor-pointer w-full h-auto"
                  alt="..."
                />
                <Link href={"/products/" + product?.id}>
                <h5 className="cursor-pointer text-center text-xs lg:mt-3 font-medium text-gray-900 dark:text-white mx-1 mt-2 h-16 lg:h-24 text-ellipsis">
                  {product?.productName.substring(0,70)}
                </h5>
                </Link>
                <div className="flex items-center flex-col justify-between">
                    <p className="text-sm font-bold text-gray-900 dark:text-white my-1">
                      {Intl.NumberFormat().format(product?.price)} đ
                    </p>
                  <Button
                   color="failure"
                   size="xs"
                    className="mb-5 mt-2"
                    onClick={() => {
                      addItem(product);
                      toast("Add product successfully", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        type: toast.TYPE.SUCCESS,
                        className: "toast-message",
                      });
                    }}
                  >
                     Chọn Mua
                  </Button>
                </div>
              </div>
            );
          })}
        </Carousel>

      <Modal
          show={modals}
          position="center"
          onClose={() => {
            setModals(!modals);
          }}
        >
          <Modal.Header>Chi Tiết Sản Phẩm</Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-4 mx-3">
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
                <h3 className="text-lg md:text-2xl font-medium mb-3">
                  {productDetail[0]?.productName}
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
                    {Intl.NumberFormat().format(productDetail[0]?.price)} đ
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-3 mx-3 mt-4">
              <h2 className="font-bold text-sm md:text-base">
                Mô tả sản phẩm:
              </h2>
              <div className="text-sm md:text-base text-justify">
                {productDetail[0]?.content}
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </Card>
  );
}

export default memo(Cothebancungquantam);
