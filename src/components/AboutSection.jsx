import React from 'react';
import laptop from '../assets/images/laptop.jpg';

function AboutSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src={laptop} alt="about us" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                About Us
              </h5>
              <h1 className="display-4">
                Best Medical Record saving app/website Yourself and Your Family
              </h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, Miraz
              essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
