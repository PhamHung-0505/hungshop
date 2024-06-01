import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../FooterComponent/style.css";

const FooterComponent = () => {
  return (
    <div>
      <div class="containe text-center">
        <div class="row">
          <div class="col one">
            <h3>Chính sách</h3>
            <ul>
              <li>Chính sách bảo mật thông tin</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách vận chuyển</li>
              <li>Câu hỏi thường gặp</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div class="col two">
            <h3>Hỗ trợ</h3>
            <ul>
              <li>Hướng dẫn mua hàng</li>
              <li>Chăm sóc khách hàng</li>
            </ul>
          </div>
          <div class="col three">
            <h3>HUNG SHOP</h3>
            <ul>
              <li>Đại học Thăng Long</li>
              <li>Hotline: 1999 9999</li>
            </ul>
          </div>
          <div>
            <p>Copyright © 2024 HungShop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
