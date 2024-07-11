import React from 'react'
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.png'
import offer3 from '../assets/offer3.png'
import offer4 from '../assets/offer4.png'

const BestOffers = () => {
  return (
    <>
      <div className="container-fluid BestOffers">
        <div className="container">
          <div className="row gx-0 py-4 align-items-center">
            <div className="col-md-7 col-lg-7">
              <h1 className="main_heading pe-md-5 pe-lg-5 me-lg-5">
                The best Programs We Offers For You
              </h1>
            </div>
            <div className="col-md-5 col-lg-5">
              <p>
                Stop searching, start thriving! We've handpicked programs just
                for you. Unlock your potential, from fitness feats to career
                climbs. Let's make magic happen!
              </p>
            </div>
          </div>
          <div className="row gx-0 py-4">
            <div
              className="col-md-6 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bestoffer_col1">
                <img src={offer1} alt="" className="img-fluid pb-3" />
                <h4>Strength Training</h4>
                <p>
                  Unlock your potential with a dynamic strength training program
                  for lasting fitness gains.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <div className="bestoffer_col1">
                <img src={offer2} alt="" className="img-fluid pb-3" />
                <h4>Basic Yoga</h4>
                <p>
                  Discover serenity and flexibility through this foundational,
                  beginner-friendly yoga.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <div className="bestoffer_col1">
                <img src={offer3} alt="" className="img-fluid pb-3" />
                <h4>Body Building</h4>
                <p>
                  Transform your physique with a comprehensive bodybuilding
                  regimen strength, size, and definition.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="bestoffer_col1">
                <img src={offer4} alt="" className="img-fluid pb-3" />
                <h4>Weight Loss</h4>
                <p>
                  Achieve sustainable weight loss through a balanced approach,
                  combining nutrition, and mindfulness.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestOffers
