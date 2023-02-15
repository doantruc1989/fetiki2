import { Carousel } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiPuzzle } from "react-icons/hi";
import Dongtienhero from "../components/Dongtienhero";
import { ToastContainer } from "react-toastify";

function Index() {

  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
            <ToastContainer />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000} indicators={true}>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe1.png" alt="napthe1" />
            <img src="/image/other/napthe2.png" alt="napthe2" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe3.png" alt="napthe3" />
            <img src="/image/other/napthe4.png" alt="napthe4" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe5.png" alt="napthe5" />
            <img src="/image/other/napthe6.png" alt="napthe6" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe7.png" alt="napthe7" />
            <img src="/image/other/napthe8.png" alt="napthe8" />
          </div>
        </Carousel>
      </div>
      <div className="mb-5">
        <div className="bg-gray-200 rounded-md mb-1 flex justify-center md:justify-start items-center gap-2 p-2">
          <HiPuzzle className="text-2xl text-green-500" />
          <h2 className="text-lg font-medium">Dịch vụ tiện ích</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

        <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Thanh toán hóa đơn</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/dien.png"
                  alt="dien"
                />
                <p>Điện</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/thanhtoankhoanvay.png"
                  alt="thanhtoankhoanvay"
                />
                <p>Thanh toán</p>
                <p>khoản vay</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/nuoc.png"
                  alt="nuoc"
                />
                <p>Nước</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Nạp điện thoại và game</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/naptiendienthoai.png"
                  alt="naptiendienthoai"
                />
                <p>Nạp tiền</p>
                <p>điện thoại</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/thedienthoai.png"
                  alt="thedienthoai"
                />
                <p>Thẻ điện thoại</p>
                
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/thegame.png"
                  alt="thegame"
                />
                <p>Thẻ game</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Vũ Trụ Bảo Hiểm Số</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/baohiemtiki360.png"
                  alt="baohiemtiki360"
                />
                <p>Bảo hiểm</p>
                <p>Tiki 360</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/baohiemxemay.png"
                  alt="baohiemxemay"
                />
                <p>Bảo hiểm</p>
                <p>xe máy</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/baohiemotobatbuoc.png"
                  alt="baohiemotobatbuoc"
                />
                <p>Bảo hiểm</p>
                <p>oto bắt buộc</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/bhdulichliberty.png"
                  alt="bhdulichliberty"
                />
                <p>BH du lịch</p>
                <p>Liberty</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Voucher</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/vouchervip.png"
                  alt="vouchervip"
                />
                <p>Voucher VIP</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/dulichkhachsan.png"
                  alt="dulichkhachsan"
                />
                <p>Du Lịch - </p>
                <p>Khách sạn</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/nhahanganuong.png"
                  alt="nhahanganuong"
                />
                <p>Nhà Hàng Ăn</p>
                <p>Uống</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/khoahoc.png"
                  alt="khoahoc"
                />
                <p>Khoá Học</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Sự kiện và giải trí</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/muavetaiticketbox.png"
                  alt="muavetaiticketbox"
                />
                <p>Mua vé tại</p>
                <p>Ticketbox</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/vevuichoigiaitri.png"
                  alt="vevuichoigiaitri"
                />
                <p>Vé Vui Chơi</p>
                <p>Giải Trí</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Phiếu Quà Tặng & TikiXu</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/phieuquatang.png"
                  alt="phieuquatang"
                />
                <p>Phiếu quà</p>
                <p> tặng</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/tikixu.png"
                  alt="tikixu"
                />
                <p>Top-up TikiXU</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <img
        className="mb-10"
        src="/image/dongtien/uudaidanhchoban.png"
        alt="uudaidanhchoban"
      />

<Dongtienhero />

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
