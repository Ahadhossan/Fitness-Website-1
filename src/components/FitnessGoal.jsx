import React from 'react'
import partner1 from "../assets/partner1-zF7vbTNY.png";
import partner2 from "../assets/partner2-0v4I3E4H.png"
import partner3 from "../assets/partner3-1SbtTxdT.png";

const FitnessGoal = () => {
  return (
    <>
      <div className="container-fluid Fitness_Goal">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-md-5 col-lg-5">
              <div className="fitness_col1">
                <h1 className="">970k + More</h1>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="fitness_col2">
                <img
                  src={partner1}
                  alt=""
                  class="img-fluid px-3 py-md-2 py-lg-0"
                />
                <img
                  src={partner2}
                  alt=""
                  class="img-fluid px-3 py-md-2 py-lg-0"
                />
                <img
                  src={partner3}
                  alt=""
                  class="img-fluid px-3 py-md-2 py-lg-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FitnessGoal
