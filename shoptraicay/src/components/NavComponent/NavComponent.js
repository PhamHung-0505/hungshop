import React from "react";
import "../NavComponent/stylenav.css";

const NavComponent = () => {
  return (
    <div id="nav">
        <ul class="nav">
            <li>
                <a class="nav-link active" aria-current="page" href="home">Trang Chủ</a>
            </li>
            {/* <li>
                <a class="nav-link" href="product">Sản Phẩm</a>
            </li> */}
            <li>
                <a class="nav-link" href="about">Về Chúng Tôi</a>
            </li>
        </ul>
    </div>
  );
};

export default NavComponent;