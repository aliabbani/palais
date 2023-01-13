import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../index.css";
import Carousel from "react-grid-carousel";

const Lepalais = () => {
  return (
    <div>
      <NavBar />
      <div className="appz">
        <div className="app-header">
          <div>le palais page</div>
          <div>
            <Carousel cols={4} rows={1} gap={10} loop>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=579&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://plus.unsplash.com/premium_photo-1671209881232-40bcdd0ba886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1552083974-186346191183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://plus.unsplash.com/premium_photo-1669160075657-559f4db75914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lepalais;
