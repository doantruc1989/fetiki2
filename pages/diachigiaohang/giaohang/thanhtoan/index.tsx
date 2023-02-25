import axios from "axios";
import { Button, Label, Radio, TextInput } from "flowbite-react";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import React, { ReactElement, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CartProvider, useCart } from "react-use-cart";
import HeadSeo from "../../../components/HeadSeo";
import NestedLayout from "../../../components/NestedLayout";

const Index = () => {
  const [users, setUsers] = useState([] as any);
  const [cod, setCod] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [payment, setPayment] = useState("cod");
  const [isPayyed, setIsPayyed] = useState(false);
  const [fee, setFee] = useState(14000);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsPayyed(cod === true || creditCard===true);
  }, [cod, creditCard]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      const user = stored ? JSON.parse(stored) : "";
      const id = user.id;
      const config = {
        baseURL: "https://quocson.fatcatweb.top//",
        headers: { Authorization: "Bearer " + user.tokens.accessToken },
      };

      const axiosHeader = axios.create(config);
      axiosHeader.get(`/users/${id}`).then((res) => {
        setUsers(res?.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { totalItems, items, cartTotal } = useCart();
  
  useEffect(() => {
return setTotal(cartTotal + fee - 14000)

  },[fee])

  console.log(total);

  const prop = {
    title: "tiki payment thanh toán đăng nhập địa chỉ giao hàng",
    keywords: "payment thanh toán tiki đăng nhập địa chỉ giao hàng",
    description:
      "làm trang đăng nhập địa chỉ giao hàng payment thanh toán đơn giản easy",
  };

  return (
    <React.Fragment>
      <HeadSeo prop={prop} />

      <div className="sticky top-0 z-50 w-full mx-auto">
        <nav className="navbar flex items-center justify-between py-5 h-fit px-4">
          <Link href="/">
            <img
              src="/image/logotiki.png"
              className="h-10 md:h-14"
              alt="tiki Logo"
            />
          </Link>
          <ol className="flex items-center w-1/2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <Link href={"/diachigiaohang"}>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                  <span className="mr-2">1</span>
                  Đăng{" "}
                  <span className="hidden sm:inline-flex sm:ml-2">nhập</span>
                </span>
              </Link>
            </li>
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <Link href={"/diachigiaohang/giaohang"}>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                  <span className="mr-2">2</span>
                  Giao{" "}
                  <span className="hidden sm:inline-flex sm:ml-2">hàng</span>
                </span>
              </Link>
            </li>
            <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="mr-2">3</span>
                Thanh{" "}
                <span className="hidden sm:inline-flex sm:ml-2">toán</span>
              </span>
            </li>
          </ol>
          <div>
            <img
              className="hidden md:block"
              src="/image/hotline.png"
              alt="tiki Logo"
            />
          </div>
        </nav>
      </div>

      <div className="grid lg:grid-cols-4 lg:gap-4 w-11/12 mx-auto mt-8 mb-8">
        <div className="lg:col-start-1 lg:col-end-4 mb-4 ">
          <div className="p-2 bg-gray-200 rounded-lg">
            <h1 className="text-base font-medium">Chọn hình thức giao hàng</h1>
            <div className="flex gap-2 justify-between">
              <div className="flex items-center gap-2 mt-3 w-full lg:w-1/2 pl-2 py-1 border border-blue-600 rounded-xl">
                <Radio
                  id="united-state"
                  name="countries"
                  value={fee}
                  defaultChecked={true}
                  onClick={(e: any) => {setFee(14000)}}
                />
                <Label
                  htmlFor="united-state"
                  // className="flex items-center gap-1"
                >
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-yellow-300">FAST</span>
                    <span className="hidden lg:block">Giao Tiết Kiệm</span>
                    <span className="font-bold text-green-500">-14k</span>
                  </div>
                  <div className="flex gap-1 items-center mt-1">
                    <img
                     className="h-7 w-auto"
                    alt="freeship" src="/image/freeship.png" />
                  </div>
                </Label>
              </div>
              <div className="flex items-center gap-2 mt-3 w-full lg:w-1/2 pl-2 py-1 border border-blue-600 rounded-xl">
                <Radio
                  id="united-state"
                  name="countries"
                  value={fee}
                  onClick={(e: any) => {setFee(30000)}}
                />
                <Label
                  htmlFor="united-state"
                  // className="flex items-center gap-1"
                >
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-yellow-300">EXPRESS</span>
                    <span className="hidden lg:block">Giao Hoả Tốc</span>
                    <span className="font-bold text-green-500">-30k</span>
                  </div>
                  <div className="flex gap-1 items-center mt-1">
                    <img
                    className="h-7 w-auto"
                     alt="freeship" src="/image/express.png" />
                  </div>
                </Label>
              </div>
            </div>
            <div className="text-xs border border-blue-600 mt-4 p-2 rounded-xl">
              {items.map((item: any) => {
                return (
                  <div
                    className="flex items-center justify-between mb-3"
                    key={item.id}
                  >
                    <div className="flex items-center gap-1">
                      <img
                        alt="product name"
                        src={item.image}
                        className="w-8 h-8"
                      />
                      <span>
                        <span>{item.productName} x </span>
                        <span className="font-medium">{item.quantity}</span>
                      </span>
                    </div>
                    <div className="font-medium ml-5">
                      {Intl.NumberFormat().format(item.price) + "đ"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-2 bg-gray-200 rounded-lg mt-4">
            <h1 className="text-base font-medium">Chọn hình thức thanh toán</h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-2 mt-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value={payment}
                  onChange={() => {
                    setCod(true);
                    setCreditCard(false)
                    setPayment('cod')
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Thanh toán tiền mặt khi nhận hàng
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value={payment}
                  onChange={() => {
                    setCod(false);
                    setCreditCard(true)
                    setPayment('credit card')
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:fixed lg:right-12 lg:w-1/5">
          <div className="p-2 bg-gray-200 rounded-lg flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <h1>Giao tới</h1>
              <Link
                href="/diachigiaohang/giaohang"
                className="text-blue-700 font-medium cursor-pointer text-xs"
              >
                thay đổi
              </Link>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">{users.username}</span>
              <span>{users.phone}</span>
            </div>
            <div>
              <p className="text-xs">
                <span className="font-medium text-xs text-yellow-400">Nhà</span>{" "}
                {users.address}
              </p>
            </div>
          </div>
          <div className="p-2 bg-gray-200 rounded-lg flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <h1 className="font-medium">Đơn hàng</h1>
              <Link
                href="/cart"
                className="text-blue-700 font-medium cursor-pointer text-xs"
              >
                thay đổi
              </Link>
            </div>
            <div className="flex gap-1">
              <span>bạn có</span>
              <p className="font-medium">{totalItems}</p>
              <span>sản phẩm</span>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="p-2 bg-gray-200 rounded-lg flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Tạm tính</p>
              <p>{Intl.NumberFormat().format(cartTotal)}đ</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Phí vận chuyển</p>
              <p>{Intl.NumberFormat().format(fee)}đ</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Khuyến mại vận chuyển</p>
              <p className="text-green-800 font-medium">-14,000đ</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-400 pt-2">
              <p>Tổng Tiền</p>
              <p className="text-red-800 font-medium text-2xl">
                {Intl.NumberFormat().format(total)}đ
              </p>
            </div>
          </div>
          <Button
            disabled={!isPayyed}
            onClick={(e: any) => {
              axios
                .post(`https://quocson.fatcatweb.top//cart/orderitem`, {
                  userId: users.id,
                  orderItems: JSON.stringify(items),
                  cartTotal: total,
                  address: users.address,
                  phone: users.phone,
                  username: users.username,
                  payment: payment,
                  trans: fee === 14000 ? 'fast' : 'express',
                })
                .then((res: any) => {
                  console.log(res.data);
                });
            }}
            href="/diachigiaohang/giaohang/thanhtoan/thanhcong"
          >
            Đặt hàng
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <NestedLayout>
        <>{page}</>
      </NestedLayout>
    </CartProvider>
  );
};

export default Index;
