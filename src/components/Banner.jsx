import React from 'react';

function Banner() {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Welcome To Miraz HR
            </h5>
            <h1 className="display-1 text-white mb-md-4">
              Best Health record website in Bangladesh
            </h1>
            <div className="pt-2">
              <a href="doctorlist.html" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">
                Find Doctor
              </a>
              <a
                href="appointment.html"
                className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
              >
                Appoinment
              </a>
              <a
                href="Upload Prescrieption.html"
                className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
              >
                Upload document
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
