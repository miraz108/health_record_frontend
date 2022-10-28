import React from 'react';

function SingleDoctor({ name, designation, picture }) {
  return (
    <div className="col-lg-6 team-item">
      <div className="row g-0 bg-light rounded overflow-hidden">
        <div className="col-12 col-sm-5 h-100">
          <img className="img-fluid h-100 img-cover" src={picture} alt="doctor" />
        </div>
        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
          <div className="mt-auto p-4">
            <h3>{name}</h3>
            <h6 className="fw-normal fst-italic text-primary mb-4">{designation}</h6>
            <p className="m-0">
              Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor
            </p>
          </div>
          <div className="d-flex mt-auto border-top p-4">
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
              href="https://www.facebook.com/ashikurakash0"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
              href="https://www.facebook.com/ashikurakash0"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-circle"
              href="https://www.facebook.com/ashikurakash0"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDoctor;
