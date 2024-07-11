import React from 'react'
import main_image1 from '../assets/main-image1-JGVa53bJ.png'
import main_image2 from "../assets/main-image3-dqYwcZsu.png";

import {Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar'

// Import required modules
import {Autoplay, Scrollbar } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid Hero">
            <div className="container gx-0">
              <div className="row gx-0">
                <div
                  className="col-md-12 col-lg-6 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col1">
                    <h1 className="hero_h1">
                      Build Your Body<span> Transform</span> Your Life
                    </h1>
                    <p>
                      Empower your journey to peak fitness. Build a stronger
                      body and transform your life with our expert guidance and
                      support.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="play_btn">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO3bP49MYRjG4YcIiiUKoiBKf1ZCoZJQKURUvsAmFFrBF5BQKGn0lNtpSUi23ka72ZBQKMhuIytW7CVvcWILEkYmmZn7vdpTzS8nM+c87zNVXdd1XdeNAvtxBqewu1LgEJ7iq1/W8AD7apbhKD74s3btWs0qvPR3nuNYzRKc9m++4C521SzAgtG8wfmadrhtdD/wBAdqWuGO//ex3UkVHGDwGicrOECzgXvYU6EBBiu4VMEBmi08a0+ZFRpg+yP1Teyo0ACDJcxXcIBmEw+xt0IDDFZxOTnAYBGHkwM067iFnakBBss4lxyg+Y7HmEsNMHiLi8kBmm+4mhyg+TTWoazJD9DcSA/wqAcIvwOup38JziX/DF4Z24ef8ADvcKHGzeQFiH4UXk59GVpPfh1eTB2IrKaOxDaTh6JLqWPxtdSDka3ko7GV1MPRjeTj8Vc4UdNEX5ERvyS1kL4mNx+9KNngReyqbIMjeB+7LN3g4G/W5T/j/syvy2/XRlE4i+NRf5jouq7rupoJPwECz3qHmQACegAAAABJRU5ErkJggg=="
                          alt=""
                        />{" "}
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="Hero_col2"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid Hero Hero1">
            <div className="container gx-0">
              <div className="row gx-0 align-items-start">
                <div
                  className="col-md-12 col-lg-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col1 pt-md-4">
                    <h1>
                      Get<span> Healthy </span>Body With the{" "}
                      <span>Perfect</span> Exercises
                    </h1>
                    <p>
                      Discover optimal well-being through tailored exercises.
                      Achieve a healthy body with our expert guidance,
                      personalized routines, and transformative fitness
                      solutions.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="play_btn">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO3bP49MYRjG4YcIiiUKoiBKf1ZCoZJQKURUvsAmFFrBF5BQKGn0lNtpSUi23ka72ZBQKMhuIytW7CVvcWILEkYmmZn7vdpTzS8nM+c87zNVXdd1XdeNAvtxBqewu1LgEJ7iq1/W8AD7apbhKD74s3btWs0qvPR3nuNYzRKc9m++4C521SzAgtG8wfmadrhtdD/wBAdqWuGO//ex3UkVHGDwGicrOECzgXvYU6EBBiu4VMEBmi08a0+ZFRpg+yP1Teyo0ACDJcxXcIBmEw+xt0IDDFZxOTnAYBGHkwM067iFnakBBss4lxyg+Y7HmEsNMHiLi8kBmm+4mhyg+TTWoazJD9DcSA/wqAcIvwOup38JziX/DF4Z24ef8ADvcKHGzeQFiH4UXk59GVpPfh1eTB2IrKaOxDaTh6JLqWPxtdSDka3ko7GV1MPRjeTj8Vc4UdNEX5ERvyS1kL4mNx+9KNngReyqbIMjeB+7LN3g4G/W5T/j/syvy2/XRlE4i+NRf5jouq7rupoJPwECz3qHmQACegAAAABJRU5ErkJggg=="
                          alt=""
                        />{" "}
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6 aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col2">
                    <img src={main_image1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid Hero2">
            <div className="container gx-0">
              <div class="row gx-0 align-md-items-end">
                <div
                  className="col-md-12 col-lg-6 order-md-2 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col1 pt-md-5">
                    <h1>
                      Unlocked Your <span>Body</span> &amp; <span>Mind</span> In
                      Prefect Balance
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate et similique quae iure.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="play_btn">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO3bP49MYRjG4YcIiiUKoiBKf1ZCoZJQKURUvsAmFFrBF5BQKGn0lNtpSUi23ka72ZBQKMhuIytW7CVvcWILEkYmmZn7vdpTzS8nM+c87zNVXdd1XdeNAvtxBqewu1LgEJ7iq1/W8AD7apbhKD74s3btWs0qvPR3nuNYzRKc9m++4C521SzAgtG8wfmadrhtdD/wBAdqWuGO//ex3UkVHGDwGicrOECzgXvYU6EBBiu4VMEBmi08a0+ZFRpg+yP1Teyo0ACDJcxXcIBmEw+xt0IDDFZxOTnAYBGHkwM067iFnakBBss4lxyg+Y7HmEsNMHiLi8kBmm+4mhyg+TTWoazJD9DcSA/wqAcIvwOup38JziX/DF4Z24ef8ADvcKHGzeQFiH4UXk59GVpPfh1eTB2IrKaOxDaTh6JLqWPxtdSDka3ko7GV1MPRjeTj8Vc4UdNEX5ERvyS1kL4mNx+9KNngReyqbIMjeB+7LN3g4G/W5T/j/syvy2/XRlE4i+NRf5jouq7rupoJPwECz3qHmQACegAAAABJRU5ErkJggg=="
                          alt=""
                        />{" "}
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6 order-md-1 aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero2_col2">
                    <img src={main_image2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero
