import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import anh1 from "../../assests/image/anh1.jpg";
import anh2 from "../../assests/image/anh2.jpg";
import tao from "../../assests/image/tao.jpg";
import dao from "../../assests/image/dao.jpg";

const CarouselExample = () => {
  return (
    <div>
      <div id="slide" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#slide"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#slide"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#slide"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#slide"
            data-bs-slide-to="3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={anh1}
              alt="slide 1"
              className="d-block"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={anh2}
              alt="slide 2"
              className="d-block"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={tao}
              alt="slide 3"
              className="d-block"
              style={{ width: "100%", height: "400px"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src={dao}
              alt="slide 4"
              className="d-block"
              style={{ width: "100%", height: "400px"}}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slide"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slide"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default CarouselExample;
