import React from "react";
import { Col, Row } from "antd";
import { Input } from "antd";
import "../HeaderComponent/stylehead.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const { Search } = Input;

const HeaderComponent = () => {
  return (
    <div>
      <Row id="Row">
        <Col id="ThuongHieu" span={7}>
          HUNG SHOP
        </Col>
        <Col span={10}>
          <Search
            placeholder="Tìm kiếm"
            enterButton="Tìm kiếm"
            size="large"
          ></Search>
        </Col>
        <Col id="head-left" span={7} style={{ display: "flex", gap: "50px" }}>
          <div></div>
          <div id="login">
            <i class="bi bi-people"></i>
            <span>Đăng nhập/Đăng ký</span>
            <div>
              <span>Tài Khoản</span>
            </div>
          </div>
          <div id="cart">
            <i class="bi bi-cart"></i>
            <span>Giỏ hàng</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderComponent;
