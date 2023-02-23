import Link from "next/link";
import React, { useEffect, useState } from "react";

function Index() {
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    localStorage.removeItem("react-use-cart");
    setIsSuccess(!isSuccess);
  }, []);

  return (
    <div className="text-md md:text-lg text-center font-medium mt-20">
      {isSuccess 
      &&
      <h1 className="font-bold mb-4">Thanh toán thành công!</h1>
      }
      <h2>Chúng tôi sẽ xử lý đơn hàng của bạn trong thời gian sớm nhất.</h2>
      <div>
        Bạn vui lòng xem trạng thái đơn hàng trong trang
        <Link className="text-blue-600" href={"/userpage"}>
          {" profile "}
        </Link>
        của bạn
      </div>
      <h4>Xin cám ơn</h4>
      <p className="mt-6 text-blue-600">
        <Link href="/">Back to Home page</Link>
      </p>
    </div>
  );
}

export default Index;
