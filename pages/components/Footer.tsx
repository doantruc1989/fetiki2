import { Footer } from "flowbite-react";

const Footera = () => {
  return (
    <Footer bgDark={true}>
      <div className="w-full bg-gray-200 mb-6 p-4">
        <div className="grid w-full grid-cols-2 gap-4 py-2 px-2 md:grid-cols-5 mb-6 ">
          <div>
            <Footer.Title title="Hỗ trợ khách hàng" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">
                Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)
              </Footer.Link>
              <Footer.Link href="#">Các câu hỏi thường gặp</Footer.Link>
              <Footer.Link href="#">Gửi yêu cầu hỗ trợ</Footer.Link>
              <Footer.Link href="#">Hướng dẫn đặt hàng</Footer.Link>
              <Footer.Link href="#">Phương thức vận chuyển</Footer.Link>
              <Footer.Link href="#">Chính sách đổi trả</Footer.Link>
              <Footer.Link href="#">Hướng dẫn trả góp</Footer.Link>
              <Footer.Link href="#">Chính sách hàng nhập khẩu</Footer.Link>
              <Footer.Link href="#">
                Hỗ trợ khách hàng: hotro@tiki.vn
              </Footer.Link>
              <Footer.Link href="#">
                Báo lỗi bảo mật: security@tiki.vn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Về Tiki" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Giới thiệu Tiki</Footer.Link>
              <Footer.Link href="#">Tiki Blog</Footer.Link>
              <Footer.Link href="#">Tuyển dụng</Footer.Link>
              <Footer.Link href="#">Chính sách bảo mật thanh toán</Footer.Link>
              <Footer.Link href="#">
                Chính sách bảo mật thông tin cá nhân
              </Footer.Link>
              <Footer.Link href="#">
                Chính sách giải quyết khiếu nại
              </Footer.Link>
              <Footer.Link href="#">Điều khoản sử dụng</Footer.Link>
              <Footer.Link href="#">Giới thiệu Tiki Xu</Footer.Link>
              <Footer.Link href="#">
                Gửi Astra nhận Xu mua sắm thả ga
              </Footer.Link>
              <Footer.Link href="#">Tiếp thị liên kết cùng Tiki</Footer.Link>
              <Footer.Link href="#">Bán hàng doanh nghiệp</Footer.Link>
              <Footer.Link href="#">Điều kiện vận chuyển</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Hợp tác và liên kết" />
            <Footer.LinkGroup col={true} className="mb-10">
              <Footer.Link href="#">Quy chế hoạt động Sàn GDTMĐT</Footer.Link>
              <Footer.Link href="#">Bán hàng cùng Tiki</Footer.Link>
            </Footer.LinkGroup>
            <Footer.Title title="Chứng nhận bởi" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">
                <div className="flex items-center gap-3">
                  <img src="/image/bocongthuong.png" className="h-10 w-10" alt="..."/>
                  <p>Bộ công thương</p>
                </div>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Phương thức thanh toán" />
            <Footer.LinkGroup col={true} className="mb-10">
              <Footer.Link href="#">
                <div className="grid grid-cols-3 gap-1">
                  <img src="/image/footer/tttiki.png" className="w-10" alt="..."/>
                  <img src="/image/footer/ttvisa.jpg" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttmastercard.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttjcb.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttmoca.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttmomo.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttatm.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttviettel.jpg" className=" w-10" alt="..." />
                  <img src="/image/footer/ttvnpay.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttzalo.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/ttcash.png" className=" w-10" alt="..."/>
                  <img src="/image/footer/tttragop.jpg" className=" w-10" alt="..."/>
                </div>
              </Footer.Link>
            </Footer.LinkGroup>
            <Footer.Title title="Dịch vụ giao hàng" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">
                <img src="/image/footer/tikinow.jpg" className="w-30" alt="..."/>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Kết nối với chúng tôi" />
            <Footer.LinkGroup col={true} className="mb-10">
              <Footer.Link href="#">
                <div className="grid grid-cols-3 gap-1">
                  <img src="/image/footer/facebook.png" className="w-10" alt="..."/>
                  <img src="/image/footer/youtube.png" className="w-10" alt="..." />
                  <img src="/image/footer/zalo.png" className="w-10" alt="..."/>
                </div>
              </Footer.Link>
            </Footer.LinkGroup>

            <Footer.Title title="Tải ứng dụng trên điện thoại" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">
                <div className="grid grid-cols-2">
                  <img src="/image/footer/qrcode.png" className="w-20 h-20" alt="..."/>
                  <div className="grid grid-rows-2">
                    <img src="/image/footer/appstore.png" className="h-10" alt="..."/>
                    <img src="/image/footer/playstore.png" className="h-10" alt="..."/>
                  </div>
                </div>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full border-t border-solid border-gray-400">
          <p className="footertext mt-6">
            Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8,
            phường 12, quận 10, Thành phố Hồ Chí Minh Tiki nhận đặt hàng trực
            tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp
            tại văn phòng hoặc trung tâm xử lý đơn hàng Giấy chứng nhận Đăng ký
            Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí
            Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày
            14/02/2022 © 2022 - Bản quyền của Công ty TNHH Ti Ki
          </p>
        </div>
        <div className="w-full border-t border-solid border-gray-400 mt-6">
          <h2 className="footertext mt-6 font-semibold text-lg">
            Tiki - Thật nhanh, thật chất lượng, thật rẻ
          </h2>
          <h3 className="footertext mt-3 font-medium">Tiki có tất cả</h3>
          <p className="footertext mt-3">
            Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng
            nghìn loại mặt hàng từ Điện thoại smartphone tới Rau củ quả tươi,
            kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn
            một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở
            Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như mua thẻ
            cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.
          </p>
          <h3 className="footertext mt-3 font-medium">
            Khuyến mãi, ưu đãi tràn ngập
          </h3>
          <p className="footertext mt-3">
            Bạn muốn săn giá sốc, Tiki có giá sốc mỗi ngày cho bạn! Bạn là tín
            đồ của các thương hiệu, các cửa hàng Official chính hãng đang chờ
            đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản
            phẩm trong chương trình Freeship+, không giới hạn lượt đặt, tiết
            kiệm thời gian vàng bạc của bạn. Mua thêm gói TikiNOW tiết kiệm để
            nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để
            nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành
            Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, thẻ tín dụng
            Tiki hoàn tiền 15% trên mọi giao dịch (tối đa hoàn 600k/tháng)
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default Footera;
