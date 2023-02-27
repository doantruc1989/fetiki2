import axios from "axios";
import { Breadcrumb, Button, Label, TextInput } from "flowbite-react";
import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";
import { HiHome, HiPencilAlt } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

function Index() {
  const [users, setUsers] = useState([] as any);
  const [isChangePw, setIsChangePw] = useState(false);
  const [userPw, setUserPw] = useState("");
  const [userPw2, setUserPw2] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [orders, setOrders] = useState([] as any);
  const [editAvt, setEditAvt] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [payment, setPayment] = useState(false);
  const [paynow, setPaynow] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    setValidPw(userPw === userPw2 && userPw !== "");
  }, [userPw, userPw2]);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const id = user.id;
    const config = {
      baseURL: "http://localhost:3006/",
      headers: { Authorization: "Bearer " + user.tokens.accessToken },
    };

    const axiosHeader = axios.create(config);
    axiosHeader.get(`/users/${id}`).then((res) => {
      setUsers(res?.data);
    });
  }, []);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3006/cart/admin/order/${users.id}`)
        .then((res: any) => {
          setOrders(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [users.id, isPaid]);

  const handleChangeAvt = () => {
    try {
      axios
        .patch(`http://localhost:3006/users/${users.id}`, {
          image: avatar || users.image,
        })
        .then((res: any) => {
          if (res.data) {
            toast("Update user avatar successfully", {
              position: toast.POSITION.TOP_RIGHT,
              type: toast.TYPE.SUCCESS,
              className: "toast-message",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePw = () => {
    try {
      axios
        .patch(`http://localhost:3006/users/profile/${users.id}`, {
          password: userPw,
        })
        .then((res: any) => {
          setIsChangePw(!isChangePw);
          if (res.data) {
            toast("Update user password successfully", {
              position: toast.POSITION.TOP_RIGHT,
              type: toast.TYPE.SUCCESS,
              className: "toast-message",
            });
          }
        });
    } catch (error: any) {
      toast(
        `${error?.response.data.message.map((err: any) => {
          err;
        })}. please try again`,
        {
          position: toast.POSITION.TOP_RIGHT,
          type: toast.TYPE.ERROR,
          className: "toast-message",
        }
      );
    }
  };

  const prop = {
    title: "tiki thành viên trang page sales off giá rẻ",
    keywords: "tiki thành viên trang page sales off giá rẻ",
    description:
      "tiki làm trang thành viên trang page sales off giá rẻ đơn giản easy",
  };

  return (
    <div className="w-11/12 mx-auto pb-5">
      <HeadSeo prop={prop} />
      <ToastContainer />
      <Breadcrumb aria-label="Default breadcrumb example" className="py-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>User profile page</Breadcrumb.Item>
      </Breadcrumb>
      <div className="md:grid md:grid-cols-3 gap-5">
        <div className="col-end-0 w-full bg-white rounded-xl pt-2 mb-6">
          <img
            src={users.image}
            alt={users.username}
            className=" w-8/12 md:w-10/12 mx-auto mb-6 mt-3 rounded-lg"
          />
          <a
            onClick={() => {
              setEditAvt(!editAvt);
            }}
            className="flex cursor-pointer mx-auto justify-center text-blue-600 mb-3 items-center"
          >
            <HiPencilAlt className="text-xl" />
            <p className="text-sm">edit avatar</p>
          </a>
          {editAvt ? (
            <div className="flex justify-center items-center gap-1 mb-3">
              <TextInput
                value={avatar}
                placeholder="new link avatar"
                onChange={(e: any) => setAvatar(e.target.value)}
              />
              <Button onClick={handleChangeAvt}>OK</Button>
            </div>
          ) : null}

          <div className="flex flex-col items-center text-center mb-3">
            <h1 className="font-medium">Email:</h1>
            <p>{users.email}</p>
          </div>
          <div className="flex flex-col items-center text-center mb-3">
            <h1 className="font-medium">User name:</h1>
            <p>{users.username}</p>
          </div>
          <div className="flex flex-col items-center text-center mb-3">
            <h1 className="font-medium">Address:</h1>
            <p>{users.address}</p>
          </div>
          <div className="flex flex-col items-center text-center mb-3">
            <div className="flex gap-3 items-center mb-3">
              <h1 className="font-medium">Password:</h1>
              <a
                className="text-sm cursor-pointer text-blue-600"
                onClick={() => setIsChangePw(!isChangePw)}
              >
                Change password
              </a>
            </div>
            {isChangePw === true ? (
              <div className="flex flex-col justify-center gap-3">
                <TextInput
                  value={userPw}
                  placeholder="New Password"
                  onChange={(e) => setUserPw(e.target.value)}
                  type="password"
                />

                <TextInput
                  value={userPw2}
                  placeholder="Retype Password"
                  onChange={(e) => setUserPw2(e.target.value)}
                  type="password"
                />
                <Button disabled={!validPw} onClick={handleChangePw}>
                  OK
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-start-2 col-end-4 w-full bg-white rounded-xl pt-2  mb-6">
          <h1 className="my-3 mx-3 text-center font-medium">
            {users.username + "'s Orders"}
          </h1>
          <div className="p-3">
            {orders[0] ? (
              orders.map((order: any) => {
                return (
                  <div
                    key={order.id}
                    className="relative my-5 p-2 border border-blue-500 rounded-xl"
                  >
                    {order.isPaid === false ? (
                      order.payment === "credit card" ? (
                        <a
                          className="text-blue-600 text-xs cursor-pointer absolute right-2 top-3"
                          onClick={() => {
                            setPayment(true);
                            setPaynow(false);
                            setIsPaid(false);
                            axios.patch(
                              `http://localhost:3006/cart/admin/listorder/${order.id}`,
                              {
                                isPaid: true,
                              }
                            );
                          }}
                        >
                          <div>thanh toán</div>
                        </a>
                      ) : null
                    ) : (
                      <img
                        className="h-7 w-auto absolute right-3"
                        src="/image/dathanhtoan.png"
                        alt=""
                      />
                    )}

                    <div className="flex gap-2 items-center justify-center">
                      <p className="font-medium text-sm">Order number:</p>
                      <p>{order.id}</p>
                    </div>

                    <div className="flex justify-between items-center border-b border-t border-gray-400 my-3 text-sm pl-2 py-3">
                      <div>
                        <p className="font-medium">Địa chỉ giao hàng:</p>
                        <div className="pl-2">
                          <div className="flex gap-1 imtes-center">
                            <p>{order.username}</p>
                            <p>{order.phone}</p>
                          </div>
                          <p>{order.address}</p>
                        </div>
                        <div className="mt-2">
                          <p className="font-medium">Phương thức vận chuyển:</p>
                          <p className="pl-2">
                            {order.trans === "fast" ? (
                              <p>Tiêu chuẩn</p>
                            ) : (
                              <p>Hoả tốc</p>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-end justify-center">
                        <p>{order.createdAt.substring(0, 10)}</p>
                        <p>{order.createdAt.substring(11, 16)}</p>
                      </div>
                    </div>
                    <div className="text-xs p-2">
                      {JSON.parse(order.orderItems).map((item: any) => {
                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between mb-3"
                          >
                            <div className="flex items-center gap-2">
                              <img
                                className="w-10 h-10 my-1"
                                src={item.image}
                                alt=""
                              />
                              <span className="flex items-center gap-2">
                                <span>
                                  {item.productName} {" x "}
                                  <span className="font-medium">
                                    {item.quantity}
                                  </span>
                                </span>
                              </span>
                            </div>
                            <div className="font-medium ml-5">
                              {Intl.NumberFormat().format(item.price) + "đ"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between items-center border-t border-gray-400 pt-2">
                      <p className="font-medium">Tổng Tiền:</p>
                      <p className="text-red-800 font-medium text-xl">
                        {Intl.NumberFormat().format(order.cartTotal)}đ
                      </p>
                    </div>
                    <div className="flex justify-center gap-1 text-xs">
                      <p>Trạng thái:</p>
                      <p className="font-medium text-blue-600">
                        {order.status === 0
                          ? "Chờ xác nhận"
                          : order.status === 1
                          ? "Chờ lấy hàng"
                          : order.status === 2
                          ? "Đang giao"
                          : "Đã giao thành công"}
                      </p>
                    </div>

                    <Transition appear show={payment} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={() => setPayment(!payment)}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500 text-center">
                                    Thanh Toán đơn hàng
                                  </p>
                                </div>

                                <>
                                  <div className="border border-blue-600 rounded-xl p-4 w-full mt-3  mx-auto">
                                    <div className="flex justify-center gap-2">
                                      <img
                                        className="w-auto h-8"
                                        src="/image/footer/ttvisa.jpg"
                                        alt="visa"
                                      />
                                      <img
                                        className="w-auto h-8"
                                        src="/image/footer/ttjcb.png"
                                        alt="visa"
                                      />
                                      <img
                                        className="w-auto h-8"
                                        src="/image/footer/ttmastercard.png"
                                        alt="visa"
                                      />
                                    </div>

                                    <div className="mt-3">
                                      <div className="mb-2 block">
                                        <Label htmlFor="email1" value="Name:" />
                                      </div>
                                      <TextInput
                                        id="email1"
                                        placeholder="Tên chủ thẻ"
                                        required={true}
                                      />
                                    </div>

                                    <div className="mt-3">
                                      <div className="mb-2 block">
                                        <Label
                                          htmlFor="email2"
                                          value="Card number:"
                                        />
                                      </div>
                                      <TextInput
                                        id="email2"
                                        placeholder="Số thẻ"
                                        required={true}
                                      />
                                    </div>

                                    <div className="flex w-full mt-3 gap-5">
                                      <div className="w-full">
                                        <div className="mb-2 block">
                                          <Label
                                            htmlFor="email3"
                                            value="Expiration (mm/yy):"
                                          />
                                        </div>
                                        <TextInput
                                          id="email3"
                                          placeholder="Ngày hết hạn"
                                          required={true}
                                          className="w-full"
                                        />
                                      </div>
                                      <div className="w-full">
                                        <div className="mb-2 block">
                                          <Label
                                            htmlFor="email4"
                                            value="Security Code:"
                                          />
                                        </div>
                                        <TextInput
                                          id="email4"
                                          placeholder="Mã số bí mật"
                                          required={true}
                                          className="w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  {paynow ? (
                                    <div className="flex justify-center mt-3">
                                      <p className="mx-auto mb-3 text-green-500 font-medium text-lg">
                                        Pay successfully!!!
                                      </p>
                                    </div>
                                  ) : null}
                                  <Button
                                    className="my-3 mx-auto"
                                    onClick={(e: any) => {
                                      e.preventDefault();
                                      setPaynow(true);
                                      setIsPaid(true);
                                    }}
                                  >
                                    Pay now
                                  </Button>
                                </>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col gap-5 items-center my-10">
                <p className="text-lg font-medium">Bạn chưa có đơn hàng nào</p>
                <Link className="text-lg text-blue-600" href={"/giatotmoingay"}>
                  Mua sắm ngay thôi nào!
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
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
