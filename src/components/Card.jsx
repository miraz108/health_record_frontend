import React from 'react';

function Card({ title, icon }) {
  return (
    <div className="col-lg-4 col-md-6 my-4">
      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
        <div className="service-icon mb-4">
          <i className={icon} />
        </div>
        <h4 className="mb-3">{title}</h4>
        <p className="m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <a className="btn btn-lg btn-primary rounded-pill" href="./">
          <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default Card;
