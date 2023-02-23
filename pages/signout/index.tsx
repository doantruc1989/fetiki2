import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeadSeo from "../components/HeadSeo";

function Index() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      const user = stored ? JSON.parse(stored) : "";
      const config = {
        baseURL: "http://localhost:3006/",
        headers: { Authorization: "Bearer " + user.tokens.accessToken },
      };
      const axiosHeader = axios.create(config);
      axiosHeader.get("/auth/logout").then((res) => {
        console.log("res ", res.data.response);
        localStorage.removeItem("user");
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const prop = {
    title: "tiki thoát signout đăng ký đăng nhập sales off giá rẻ",
    keywords: "tiki thoát signout đăng ký đăng nhập sales off giá rẻ",
    description: "tiki làm trang thoát signout đăng ký đăng nhập sales off giá rẻ đơn giản easy",
  }

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <HeadSeo prop={prop}/>
      <p className="text-md">Signout successfully</p>
      <Link href="/" className="font-medium text-blue-700 text-md mt-4">
        Back to Home page
      </Link>
    </div>
  );
}

export default Index;
