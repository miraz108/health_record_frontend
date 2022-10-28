import React from 'react';
import { Link } from 'react-router-dom';

function Wrapper({ children }) {
  return (
    <>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href="/">
                  <i className="bi bi-telephone me-2" />
                  +8801313596620
                </a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href="/">
                  <i className="bi bi-envelope me-2" />
                  mirazcse108@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="https://www.facebook.com/miraz.mahfu/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-body px-2" href="https://www.facebook.com/miraz.mahfu/">
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-body px-2" href="https://www.facebook.com/miraz.mahfu/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-body px-2" href="https://www.facebook.com/miraz.mahfu/">
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-body ps-2" href="https://www.facebook.com/miraz.mahfu/">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <Link to="/" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <i className="fa fa-clinic-medical me-2" />
                Miraz HR
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Service
                </Link>
                <Link to="/appointment" className="nav-item nav-link">
                  Appoinment
                </Link>
                <Link to="/finddoctor" className="nav-item nav-link">
                  Find Doctor
                </Link>
                <Link to="/findmedicine" className="nav-item nav-link">
                  Find Medicine
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {children}

      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Get In Touch
              </h4>
              <p className="mb-4">Md Mahfuzur Rahman Miraz </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary me-3" />
                Port City InterNational University
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3" />
                mirazcse108@gmail.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary me-3" />
                +8801313596620
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Newsletter
              </h4>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    placeholder="Your Email Address"
                  />
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
              <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="https://www.facebook.com/miraz.mahfu/"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="https://www.facebook.com/miraz.mahfu/"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="https://www.facebook.com/miraz.mahfu/"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                  href="https://www.facebook.com/miraz.mahfu/"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{' '}
                <a className="text-primary" href="/">
                  Md. Mahfuzur Rahman Miraz
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by{' '}
                <a className="text-primary" href="https://www.facebook.com/miraz.mahfu/">
                  Md. Mahfuzur Rahman Miraz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

export default Wrapper;
