import React from 'react';
import TestimonialPic1 from '../assets/images/testimonial-1.jpg';
import TestimonialPic2 from '../assets/images/testimonial-2.jpg';
import TestimonialPic3 from '../assets/images/testimonial-3.jpg';
import SingleTestimonial from './SingleTestimonial';

function Testimonial() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5">
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Testimonial
          </h5>
          <h1 className="display-4">Patients Say About Our Services</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel testimonial-carousel d-flex">
              <SingleTestimonial link={TestimonialPic1} />
              <SingleTestimonial link={TestimonialPic2} />
              <SingleTestimonial link={TestimonialPic3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
