import React from "react";
import test1 from "../assets/test1-WX10fSA3.jpg";
import test2 from "../assets/test2-l2o90d0E.jpg";
import test3 from "../assets/test3-o6ZUmE9C.jpg";
import test_partner from "../assets/test_partner-M0CNOteu.png";
import test_icon from "../assets/test_icon-gq86hih5.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// Import required modules
import { EffectCreative } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid testimonial pb-md-5 pb-lg-0">
        <div className="container">
          <div className="row gx-0">
            <div
              className="col-md-12 py-md-5 py-lg-0 col-lg-7 aos-init"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="testimonial_col1 pe-md-5 me-md-5">
                <h1 className="main_heading ">
                  What Our Happy Clients Say About Us{" "}
                </h1>
                <p className="py-4">
                  Explore testimonials from our delighted clients. Discover
                  firsthand accounts of exceptional service, transformative
                  experiences, and the positive impact our offerings have made
                  on their lives. Your success story awaits.
                </p>
                <div className="row pt-2 align-items-center">
                  <div className="col-md-5">
                    <div className="test_images">
                      <img
                        src={test1}
                        alt=""
                        className="img-fluid"
                      />
                      <img
                        src={test2}
                        alt=""
                        className="img-fluid test_images1"
                      />
                      <img
                        src={test1}
                        alt=""
                        className="img-fluid test_images2"
                      />
                      <img
                        src={test3}
                        alt=""
                        className="img-fluid test_images3"
                      />
                      <img
                        src={test_icon}
                        alt=""
                        className="img-fluid test_images3"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 gx-0">
                    <p className="test_p3">
                      <i className="fa-solid fa-star"></i> 4.9 (450 Reviews)
                    </p>
                  </div>
                </div>
                <img
                  src={test_partner}
                  alt=""
                  className="img-fluid py-4"
                />
              </div>
            </div>
            <div
              className="col-md-12 pb-md-5 pb-lg-0 col-lg-5 aos-init"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="testimonial_col2">
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  modules={[EffectCreative]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-4 col-md-3 col-lg-4 text-center">
                            <img src={test1} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8 col-md-9 col-lg-8">
                            <h5>MuscleMagnet55</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                          </div>
                        </div>
                        <div className="stars py-3 py-md-4 py-lg-3">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2">
                          Fantastic gym website! Easy navigation, diverse
                          workouts, and a personal tracker keep me on track.
                          Excellent customer support. Thanks for making fitness
                          enjoyable and hassle-free!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-4 col-md-3 col-lg-4 text-center">
                            <img src={test2} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8 col-md-9 col-lg-8">
                            <h5>MuscleMagnet55</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                          </div>
                        </div>
                        <div className="stars py-3 py-md-4 py-lg-3">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2">
                          Fantastic gym website! Easy navigation, diverse
                          workouts, and a personal tracker keep me on track.
                          Excellent customer support. Thanks for making fitness
                          enjoyable and hassle-free!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-4 col-md-3 col-lg-4 text-center">
                            <img src={test3} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8 col-md-9 col-lg-8">
                            <h5>MuscleMagnet55</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                          </div>
                        </div>
                        <div className="stars py-3 py-md-4 py-lg-3">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2">
                          Fantastic gym website! Easy navigation, diverse
                          workouts, and a personal tracker keep me on track.
                          Excellent customer support. Thanks for making fitness
                          enjoyable and hassle-free!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial
