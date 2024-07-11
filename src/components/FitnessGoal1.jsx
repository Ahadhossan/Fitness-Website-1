import React from 'react'
import fitness1 from '../assets/fitness1-5ZkARyP1.jpeg'
import iconFit from '../assets/FitnessGoal1.png'

const FitnessGoal1 = () => {
  return (
    <>
      <div className="container-fluid Fitness_Goal1">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div
              className="col-md-5 col-lg-6 aos-init"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="fitness_col3">
                <img src={fitness1} alt="" className="img-fluid" />
                <div className="popup">
                  <img
                    src={iconFit}
                    alt=""
                  />
                  <h6 className="fw-bold">Professional Trainer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="fitness_col4">
                <h1
                  className="main_heading aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  Get Ready To Reach Your Fitness Goals
                </h1>
                <div
                  className="pt-3 pb-4 aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in-out"
                >
                  <p>
                    Ditch the excuses, grab your motivation backpack! "Get Ready
                    To Reach Your Fitness Goals" isn't just a title, it's a
                    battle cry. This guide is your personal trainer,
                    cheerleader, and goal-crushing buddy rolled into one. We'll
                    break down your aspirations into bite-sized.
                  </p>
                  <p>
                    Get ready to conquer your doubts, rewrite your limits, and
                    finally claim the healthier, happier you!
                  </p>
                </div>
                <button
                  className="btn1 btn0 aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  data-aos-easing="ease-in-out"
                >
                  Free Trial Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FitnessGoal1
