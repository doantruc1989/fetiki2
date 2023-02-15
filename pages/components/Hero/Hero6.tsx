import { Button, Card, Modal, Rating } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Hero6 = () => {
  const { addItem } = useCart();
  const [products, setProducts] = useState([] as any);
  const [page, setPage] = useState(2);
  const [value, setValue] = useState("danhchoban");
  const [category, setCategory] = useState("dochoi");
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
      axios.get(`https://quocson.fatcatweb.top/product`).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadMore = () => {
    try {
      axios.get(`https://quocson.fatcatweb.top/product?page=${page}`).then((response) => {
        setProducts([...products, ...response.data]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const danhchoban = () => {
    try {
      axios
        .get(`https://quocson.fatcatweb.top/product/all?search=${value}&category=${category}`)
        .then((res) => {
          setProducts(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="bg-gray-200 my-6 md:ml-6">
      <ToastContainer />
      <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Gợi ý hôm nay
      </h5>
      <div className="hidden md:flex md:flex-wrap content-around justify-between">
        <Card className={"cursor-pointer w-1/6 h-auto hover "}>
          <button
            className="flex flex-col items-center"
            onClick={() => {
              setPage(1);
             
              setCategory("dochoi");
              setValue("danhchoban");
              danhchoban();
            }}
          >
            <img
              className="mb-3 h-11 w-11 rounded-full shadow-lg"
              src="image/danhchoban.png"
              alt="Bonnie image"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dành cho bạn
            </p>
          </button>
        </Card>

        <Card className={"cursor-pointer w-1/6 h-auto hover "}>
          <button
            className="flex flex-col items-center"
            onClick={() => {
              setPage(1);
          
              setCategory("dienthoai");
              setValue("dichvuso");
              danhchoban();
            }}
          >
            <img
              className="mb-3 h-11 w-11 rounded-full shadow-lg"
              src="image/dichvuso.png"
              alt="Bonnie image"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dịch vụ số
            </p>
          </button>
        </Card>
        <Card className="cursor-pointer w-1/6 h-auto hover">
          <button
            className="flex flex-col items-center"
            onClick={() => {
              setPage(1);
              setCategory("donu");
              setValue("dealsieuhot");
              danhchoban();
            }}
          >
            <img
              className="mb-3 h-11 w-11 rounded-full shadow-lg"
              src="image/dealsieuhot.png"
              alt="Bonnie image"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Deal siêu hot
            </p>
          </button>
        </Card>
        <Card className="cursor-pointer w-1/6 h-auto hover">
          <button
            className="flex flex-col items-center"
            onClick={() => {
              setPage(1);
              setCategory("giaynu");
              setValue("revodoi");
              danhchoban();
            }}
          >
            <img
              className="mb-3 h-11 w-11 rounded-full shadow-lg"
              src="image/revodoi.png"
              alt="Bonnie image"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Rẻ vô đối
            </p>
          </button>
        </Card>
        <Card className="cursor-pointer w-1/6 h-auto hover">
          <button
            className="flex flex-col items-center"
            onClick={() => {
              setPage(1);
              setCategory("donam");
              setValue("thoitrang");
              danhchoban();
            }}
          >
            <img
              className="mb-3 h-11 w-11 rounded-full shadow-lg"
              src="image/thoitrang.png"
              alt="Bonnie image"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Thời trang
            </p>
          </button>
        </Card>
        <Card className="cursor-pointer w-1/6 h-auto hover">
          <button className="flex flex-col items-center"
          onClick={() => {
            setPage(1);
            setCategory("diengiadung");
            setValue("trending");
            danhchoban();
          }}>
            <img
              className="mb-3 h-11 w-11 rounded-full shadow-lg"
              src="image/trending.png"
              alt="Bonnie image"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trending
            </p>
          </button>
        </Card>
      </div>
      {/* <div className=" flex flex-wrap content-around justify-between"> */}
      <div className="grid xl:grid-cols-6 gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product : any) => {
          return (
            <div className="rounded-lg bg-white mb-4" key={product?.id}>
              <img
                onClick={() => {
                  axios.get(`https://quocson.fatcatweb.top/product/${product?.id}`).then((response) => {
                    setProductDetail(response.data);
                    setModals(!modals);
                  });
                }}
                src={product?.image}
                className="rounded-t-lg cursor-pointer w-full h-fit"
                alt="..."
              />
              <a
                onClick={() => {
                  axios.get(`https://quocson.fatcatweb.top/product/${product?.id}`).then((response) => {
                    setProductDetail(response.data);
                    setModals(!modals);
                  });
                }}
              >
                <h5 className="cursor-pointer text-sm sm:text-xs font-semibold text-gray-900 dark:text-white mx-1 mt-3 h-24 text-ellipsis mb-4">
                  {product?.productName}
                </h5>
              </a>
              <div className="flex items-center flex-col justify-between">
                <p className="text-sm font-bold text-gray-900 dark:text-white my-1">
                  {Intl.NumberFormat().format(product?.price)} đ
                </p>
                <Button
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
                  Add to cart
                </Button>
              </div>
            </div>
          );
        })}
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
                  <h2>{Intl.NumberFormat().format(productDetail?.price)} đ</h2>
                </div>

                {/* <Button
                  className="mb-5 justify-self-center mt-4"
                  onClick={() => {
                    addItem(productDetail)
                    toast("Add product successfully", {
                      position: toast.POSITION.BOTTOM_RIGHT,
                      type: toast.TYPE.SUCCESS,
                      className: 'toast-message'
                  })
                  }}
                >
                  Add to cart
                </Button> */}
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
      <Button
        className="w-fit flex self-center"
        onClick={() => {
          setPage(page + 1);
          loadMore();
        }}
      >
        Load more
      </Button>
    </Card>
  );
};

export default Hero6;
