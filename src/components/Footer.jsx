import React from 'react'
import footerLogo from '../assets/logo_main-48JSqkPZ.png'

const Footer = () => {
  return (
    <>
      <div className="container-fluid Footer pt-5">
        <div className="container pt-sm-5">
          <div className="row gx-0 py-4 footer_row1">
            <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2">
              <div className="footer_col1">
                <h5 className="ft_h5">Company</h5>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Why us </a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2">
              <div className="footer_col1">
                <h5 className="ft_h5">Categories</h5>
                <ul>
                  <li>
                    <a href="#">Basic Yoga</a>
                  </li>
                  <li>
                    <a href="#">Strength Traning</a>
                  </li>
                  <li>
                    <a href="#">Body Building</a>
                  </li>
                  <li>
                    <a href="#">Weigth Loss</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2">
              <div className="footer_col1">
                <h5 className="ft_h5">Help</h5>
                <ul>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 py-sm-4 col-lg-3 py-md-4 py-lg-0">
              <div className="footer_col2">
                <h5 className="ft_h5">Contact Us</h5>
                <div className="row pb-3 Footer_mid_col">
                  <div className="col-1  col-lg-1 Footer_mid_col1">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="col-11  col-lg-11 Footer_mid_col2">
                    <p>+0133169421640</p>
                  </div>
                </div>
                <div className="row pb-3 Footer_mid_col">
                  <div className="col-1  col-lg-1 Footer_mid_col1">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="col-11  col-lg-11 Footer_mid_col2">
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="row pb-3 Footer_mid_col">
                  <div className="col-1  col-lg-1 Footer_mid_col1">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="col-11  col-lg-11 Footer_mid_col2">
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-sm-4 col-lg-3 py-md-4 py-lg-0">
              <div className="footer_col3">
                <h5 className="ft_h5">Subscibe Our Newsletter</h5>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Your Email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      required=""
                    />
                    <button className="" type="submit" id="button-addon2">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
                <p>Never miss an update &amp; news to your email.</p>
              </div>
            </div>
          </div>
          <div className="row gx-0  footer_row2 align-items-md-center align-items-sm-start py-3 py-md-4 py-lg-3">
            <div className="col-md-3 col-sm-6">
              <img src={footerLogo} alt="" className="img-fluid footer_img" />
            </div>
            <div className="col-md-6 col-sm-12 text-center order-sm-3 order-md-2">
              <p>
                 @2024 <span>(Ahad)</span>. All Copyrights reserved.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 py-sm-4 text-md-end text-sm-center order-sm-2 order-md-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
