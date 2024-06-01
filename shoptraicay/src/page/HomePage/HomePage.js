import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import "../HomePage/style.css";
import "bootstrap/dist/css/bootstrap.css";

const HomePage = () => {
  return (
    <div>
      <SliderComponent />
      <h2 class="cmt text-center">3 LÝ DO MUA HOA QUẢ TẠI HUNGSHOP</h2>
      <div class="row">
        <div class="col-4 text-center">
          <img
            class="hvr-grow"
            src="https://hoaquafuji.com/storage/app/media/t1_5.png"
            alt="HOA QUẢ TƯƠI SẠCH"
          />
          <h3 class="text-primary">HOA QUẢ TƯƠI SẠCH</h3>
          <p class="d-none d-lg-block">
            Quy trình nhập hàng, vận chuyển, bảo quản chuyên nghiệp.
          </p>
        </div>

        <div class="col-4 text-center">
          <img
            class="hvr-grow"
            src="https://hoaquafuji.com/storage/app/media/t1_4.png"
            alt="ĐỔI TRẢ MIỄN PHÍ"
          />
          <h3 class="text-primary">ĐỔI TRẢ MIỄN PHÍ</h3>
          <p class="d-none d-lg-block">
            Đổi trả miễn phí trong 24h khi khách hàng không hài lòng
          </p>
        </div>

        <div class="col-4 text-center">
          <img
            class="hvr-grow"
            src="https://hoaquafuji.com/storage/app/media/t1_3.png"
            alt="GIÁ CẢ CẠNH TRANH"
          />
          <h3 class="text-primary">GIÁ CẢ CẠNH TRANH</h3>
          <p class="d-none d-lg-block">
            Fuji Fruit luôn đặt lợi ích cho người tiêu dùng lên hàng đầu.
          </p>
        </div>
      </div>

      <div class="horiz">
        <hr />
      </div>

      <div class="intro">
        <h2>GIỚI THIỆU CHUNG</h2>
        <p>
          Với tôn chỉ “Mang đến cho khách hàng không chỉ là những sản phẩm trái
          cây an toàn, chất lượng cao, mà kèm theo đó là những dịch vụ tiện ích
          thân thiện. ”Công ty CP xuất nhập khẩu Fuji” - đơn vị chuyên nhập khẩu
          các loại trái cây cao cấp từ các nước trên thế giới đang từng bước
          phát triển và chiếm được lòng tin của người tiêu dùng Việt Nam. Hiện
          tại, công ty có hệ thống các cửa hàng mang thương hiệu Hoa quả sạch
          Fuji được phân bố rộng khắp trên địa bàn các tỉnh phía Bắc phục vụ đủ
          nhu cầu cho mọi khách hàng. Bằng những nỗ lực không ngừng theo thời
          gian, hệ thống Hoa quả sạch Fuji từng ngày hoàn thiện hơn về tất cả
          mọi mặt.
        </p>
      </div>

      <div class="horiz">
        <hr />
      </div>

      <div>
        <h2 class="product">DANH MỤC SẢN PHẨM</h2>
        <section class="section-products">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" class="single-product">
                  <div class="part-1">
                    <ul>
                      <li>
                        <a href="">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Đào</h3>
                    <h4 class="product-old-price">100000 VND</h4>
                    <h4 class="product-price">90000 VND</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-2" class="single-product">
                  <div class="part-1">
                    <span class="discount">15% off</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-3" class="single-product">
                  <div class="part-1">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-old-price">$79.99</h4>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-4" class="single-product">
                  <div class="part-1">
                    <span class="new">new</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" class="single-product">
                  <div class="part-1">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-old-price">$79.99</h4>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-2" class="single-product">
                  <div class="part-1">
                    <span class="discount">15% off</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-3" class="single-product">
                  <div class="part-1">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-old-price">$79.99</h4>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-4" class="single-product">
                  <div class="part-1">
                    <span class="new">new</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="part-2">
                    <h3 class="product-title">Here Product Title</h3>
                    <h4 class="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
