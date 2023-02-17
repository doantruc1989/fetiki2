import { Breadcrumb, Button, Table } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Layout from "../components/Layout";
import {
  HiChevronLeft,
  HiChevronRight,
  HiHome,
} from "react-icons/hi";
import Link from "next/link";
import HeadSeo from "../components/HeadSeo";


const Index = () => {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();
    const prop = {
      title: "tiki cart giỏ hàng",
      keywords: "cart tiki giỏ hàng",
      description: "làm trang giỏ hàng cart đơn giản easy",
    }
  return (
    <div className="w-full">
      <HeadSeo prop={prop}/>
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-2xl font-medium flex justify-center py-6 mb-6">
            Giỏ hàng
          </h1>
      {totalUniqueItems > 0 ? (

          <div className="grid lg:grid-cols-4 w-full gap-4 mb-10">
            <div className="lg:col-start-1 lg:col-end-4 w-11/12 mx-auto mb-6">
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell>Tất cả</Table.HeadCell>
                  <Table.HeadCell className="hidden lg:block">
                    Tên sản phẩm
                  </Table.HeadCell>
                  <Table.HeadCell>Đơn giá</Table.HeadCell>
                  <Table.HeadCell>Số lượng</Table.HeadCell>
                  <Table.HeadCell>
                    <p className="sr-only">Edit</p>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {items.map((item : any) => {
                    return (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                        <Table.Cell className="px-0 py-0">
                          <img src={item.image} className="w-14 h-14" alt=".."/>
                        </Table.Cell>
                        <Table.Cell className="flex-col self-center content-center hidden w-96 lg:flex text-xs font-medium text-gray-900 dark:text-white">
                          {item.productName}
                        </Table.Cell>
                        <Table.Cell className="w-40 font-medium text-xs">
                          {Intl.NumberFormat().format(item.price)} đ
                        </Table.Cell>
                        <Table.Cell className="flex w-20 items-center content-start justify-start pt-10">
                          <button
                            className="font-medium text-2xl px-1"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity! - 1)
                            }
                          >
                            <HiChevronLeft />
                          </button>
                          <input
                            value={item.quantity}
                            className="w-5 flex content-center pl-1 justify-center"
                          />
                          <button
                            className="font-medium text-2xl px-1"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity! + 1)
                            }
                          >
                            <HiChevronRight />
                          </button>
                        </Table.Cell>
                        <Table.Cell className="w-20">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-lg rounded-full bg-red-500 px-2 pb-0.5 text-white"
                          >
                            &times;
                          </button>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </div>
            <div className="lg:fixed lg:right-14 lg:top-21 lg:w-1/5 lg:z-50 w-full">
              <div className="bg-gray-200 rounded-xl h-fit p-4">
                <div className="flex justify-between mb-4">
                  <h3>Tạm tính</h3>
                  <div>{Intl.NumberFormat().format(cartTotal)} đ</div>
                </div>
                <div className="flex justify-between border-b border-solid border-black divide-y-8">
                  <h3>Giảm giá</h3>
                  <div>0 đ</div>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <h3 className="font-medium">Tổng tiền</h3>
                  <div className="text-red-700 text-xl md:text-2xl font-medium">
                    {Intl.NumberFormat().format(cartTotal)} đ
                  </div>
                </div>
              </div>
              <Link href="/diachigiaohang">
              <Button
                className="justify-self-center mt-4 w-full"
              >
                Thanh toán ({totalUniqueItems})
              </Button>
              </Link>
            </div>
          </div>
      ) : (
        <div className="flex justify-center font-medium text-lg mb-8 pt-20">
          Bạn chưa chọn sản phẩm nào
        </div>
      )}
    </div>
  );
};

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
