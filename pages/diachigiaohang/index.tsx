import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Footera from "../components/Footer";
import Nav2 from "../components/Nav2";
import Login from "../login";
import router from "next/router";

const Index = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    if (user) {
      setLogged(true);
    }
  }, []);

  return (
    <>
      {/* {logged ? (router.push('/diachigiaohang/giaohang')) : 
    ( */}
      <Login />
      {/* // )} */}
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Nav2 />
      <>{page}</>
      <Footera />
    </CartProvider>
  );
};

export default Index;
