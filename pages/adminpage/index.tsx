import { Breadcrumb } from 'flowbite-react'
import React, { ReactElement } from 'react'
import { CartProvider } from 'react-use-cart'
import HeadSeo from '../components/HeadSeo'
import Layout from '../components/Layout'
import { HiHome } from "react-icons/hi";

function Index() {
  const prop = {
    title: "tiki admin quản trị",
    keywords: "admin tiki quản trị",
    description: "làm trang quản trị admin đơn giản easy",
  }
  return (
    <div>
      <HeadSeo prop={prop}/>
      <Breadcrumb aria-label="Default breadcrumb example" className="my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Admin profile page
        </Breadcrumb.Item>
        <Breadcrumb.Item
        href='#'
        >
          Admin page
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
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

export default Index