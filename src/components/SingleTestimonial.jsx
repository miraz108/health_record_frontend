import React from 'react';

function SingleTestimonial({ link }) {
  return (
    <div className="testimonial-item text-center mx-4">
      <div className="position-relative mb-5 owl-item">
        <img className="img-fluid rounded-circle mx-auto" src={link} alt="" />
        <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle">
          <i className="fa fa-quote-left fa-2x text-primary" />
        </div>
      </div>
      <p className="fs-4 fw-normal">
        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At
        lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit
        ipsum.
      </p>
      <hr className="w-25 mx-auto" />
      <h3>Patient Name</h3>
      <h6 className="fw-normal text-primary mb-3">Profession</h6>
    </div>
  );
}

export default SingleTestimonial;
