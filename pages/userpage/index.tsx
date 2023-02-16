import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";

function Index() {
  const [users, setUsers] = useState([] as any);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const id = user.id;
    const config = {
      baseURL: "https://quocson.fatcatweb.top/",
      headers: { Authorization: "Bearer " + user.tokens.accessToken },
    };

    const axiosHeader = axios.create(config);
    axiosHeader.get(`/users/${id}`).then((res) => {
      setUsers(res?.data);
    });
  }, []);

  const prop = {
    title: "tiki thành viên trang page sales off giá rẻ",
    keywords: "tiki thành viên trang page sales off giá rẻ",
    description: "tiki làm trang thành viên trang page sales off giá rẻ đơn giản easy",
  }

  return (
    <div className="w-11/12 mx-auto my-10">
      <HeadSeo prop={prop}/>
      <div className="grid grid-cols-3 gap-2">
        <div>chào</div>
        <div className="col-start-2 col-end-3">bạn</div>
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
