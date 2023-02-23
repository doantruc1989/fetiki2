import axios from "axios";
import { Breadcrumb, Button, TextInput } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [users, setUsers] = useState([] as any);
  const [isChangePw, setIsChangePw] = useState(false);
  const [userPw, setUserPw] = useState("");
  const [userPw2, setUserPw2] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [orders, setOrders] = useState([] as any);

  useEffect(() => {
    setValidPw(userPw === userPw2);
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
  }, [users]);

  // useEffect(() => {
  //   const
  // },[orders])

  const handleChangePw = () => {
    try {
      axios
        .patch(`http://localhost:3006/users/profile/${users.id}`, {
          password: userPw,
        })
        .then((res: any) => {
          setIsChangePw(!isChangePw);
          if (res.data) {
            console.log(res.data);
            toast("Update user password successfully", {
              position: toast.POSITION.TOP_RIGHT,
              type: toast.TYPE.SUCCESS,
              className: "toast-message",
            });
          }
        });
    } catch (error: any) {
      console.log(error);
    }
  };

  const prop = {
    title: "tiki thành viên trang page sales off giá rẻ",
    keywords: "tiki thành viên trang page sales off giá rẻ",
    description:
      "tiki làm trang thành viên trang page sales off giá rẻ đơn giản easy",
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <HeadSeo prop={prop} />
      <ToastContainer />
      <Breadcrumb aria-label="Default breadcrumb example" className="my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>User profile page</Breadcrumb.Item>
      </Breadcrumb>
      <div className="md:grid md:grid-cols-3 gap-5">
        <div className="col-end-0 w-full bg-gray-200 rounded-xl pt-2">
          <img
            src={users.image}
            alt={users.username}
            className="w-8/12 md:w-10/12 mx-auto mb-6 mt-3 rounded-lg"
          />

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
                className="text-xs cursor-pointer text-blue-600"
                onClick={() => setIsChangePw(!isChangePw)}
              >
                Change password
              </a>
            </div>
            {isChangePw === true ? (
              <div className="flex flex-col justify-center gap-3">
                <TextInput
                  value={userPw}
                  onChange={(e) => setUserPw(e.target.value)}
                  type="password"
                />

                <TextInput
                  value={userPw2}
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
        <div className="col-start-2 col-end-4 w-full bg-gray-200 rounded-xl">
          <h1 className="my-3 mx-3 text-center font-medium">
            {users.username}'s Orders
          </h1>
          <div className="p-3">
            {orders.map((order: any) => {
              return (
                <div key={order.id} className="my-5 p-2 border border-blue-500 rounded-xl">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="font-medium text-sm">Order number:</p>
                    <p>{order.id}</p>
                  </div>
                  <div className="text-xs p-2">
                    {JSON.parse(order.orderItems).map((item: any) => {
                      return (
                        <div key={item.id} className="flex items-center justify-between">
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
                    <p className="font-medium">đã giao hàng</p>
                  </div>
                </div>
              );
            })}
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
