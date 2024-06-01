import React from "react";
import "../AboutPage/style.css";
import anh1 from "../../assests/image/anh1.jpg";

const AboutPage = () => {
  return (
    <div className="main">
      <header>
        <h1>Giới Thiệu Về Hung Shop</h1>
        <br/>
      </header>
      <section>
        <img src={anh1} style={{ width: "100%", height: "400px" }}/>
      </section>
      <section>
        <h2>Sứ Mệnh Của Chúng Tôi</h2>
        <p>
          Tại Hung Shop, chúng tôi cam kết mang đến cho khách hàng những sản
          phẩm hoa quả tươi ngon, an toàn và bổ dưỡng. Với nguồn gốc rõ ràng từ
          những nông trại uy tín trong và ngoài nước, mỗi loại trái cây được
          chúng tôi lựa chọn cẩn thận, đảm bảo giữ nguyên hương vị tự nhiên và
          giá trị dinh dưỡng.
        </p>
      </section>
      <section>
        <h2>Tầm Nhìn Của Chúng Tôi</h2>
        <p>
          Chúng tôi không chỉ cung cấp hoa quả mà còn hướng đến việc xây dựng
          một lối sống lành mạnh cho mọi gia đình. Với các dịch vụ hỗ trợ tận
          tâm và chính sách ưu đãi hấp dẫn, Hung Shop mong muốn trở thành
          người bạn đồng hành tin cậy trong cuộc sống hàng ngày của bạn.
        </p>
      </section>
      <section>
        <h2>Sản Phẩm Của Chúng Tôi</h2>
        <ul>
          <li>
            <strong>Hoa Quả Nhập Khẩu:</strong> Chúng tôi tự hào mang đến những
            loại trái cây nhập khẩu từ các quốc gia nổi tiếng về nông sản như
            Mỹ, Úc, New Zealand, Nhật Bản và Hàn Quốc.
          </li>
          <li>
            <strong>Hoa Quả Nội Địa:</strong> Được tuyển chọn từ những vùng
            trồng trọt nổi tiếng trong nước, đảm bảo tươi ngon và an toàn cho
            sức khỏe.
          </li>
          <li>
            <strong>Giỏ Quà Trái Cây:</strong> Những giỏ quà trái cây sang trọng
            và đầy ý nghĩa, thích hợp cho mọi dịp đặc biệt.
          </li>
        </ul>
      </section>
      <section>
        <h2>Cam Kết Của Chúng Tôi</h2>
        <ul>
          <li>
            <strong>Chất Lượng Hàng Đầu:</strong> Mỗi sản phẩm đều được kiểm tra
            kỹ lưỡng, đảm bảo đạt tiêu chuẩn chất lượng cao nhất.
          </li>
          <li>
            <strong>Dịch Vụ Chuyên Nghiệp:</strong> Đội ngũ nhân viên nhiệt tình
            và chuyên nghiệp luôn sẵn sàng phục vụ và tư vấn cho bạn.
          </li>
          <li>
            <strong>Giao Hàng Nhanh Chóng:</strong> Dịch vụ giao hàng tiện lợi,
            đảm bảo sản phẩm đến tay bạn trong thời gian ngắn nhất và vẫn giữ
            được độ tươi ngon.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
