import { Breadcrumb, Button, TextInput } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";
import { HiHome, HiPencilAlt } from "react-icons/hi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [users, setUsers] = useState([] as any);
  const [isChangePw, setIsChangePw] = useState(false);
  const [userPw, setUserPw] = useState("");
  const [userPw2, setUserPw2] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [editAvt, setEditAvt] = useState(false);
  const [avatar, setAvatar] = useState("");

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
    title: "tiki admin quản trị",
    keywords: "admin tiki quản trị",
    description: "làm trang quản trị admin đơn giản easy",
  };
  return (
    <div>
      <HeadSeo prop={prop} />
      <Breadcrumb aria-label="Default breadcrumb example" className="my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Admin profile page</Breadcrumb.Item>
        <Breadcrumb.Item href="https://tikiadmin-qc4bvc95k-doantruc1989.vercel.app/">
          Admin page
        </Breadcrumb.Item>
      </Breadcrumb>
      <ToastContainer />
      <div className="md:grid md:grid-cols-3 gap-5 mb-6">
        <div className="col-end-0 w-full bg-gray-200 rounded-xl pt-2">
          <img
            src={users.image}
            alt={users.username}
            className="w-8/12 md:w-10/12 mx-auto mb-6 mt-3 rounded-lg"
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
        <div className="col-start-2 col-end-4 w-full bg-gray-200 rounded-xl">
          chưa có ý tưởng để làm
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
