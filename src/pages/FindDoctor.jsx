import React from 'react';
import FindDoctorsSection from '../components/FindDoctorsSection';
import Wrapper from '../components/Wrapper';

function FindDoctor() {
  return (
    <Wrapper>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Find A Doctor
            </h5>
            <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
            <h5 className="fw-normal">
              Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum
              takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo
            </h5>
          </div>
          <div className="mx-auto">
            <div className="input-group input-height">
              <select className="form-select border-primary w-25">
                <option selected>Department</option>
                <option value="1">Department 1</option>
                <option value="2">Department 2</option>
                <option value="3">Department 3</option>
              </select>
              <input
                type="text"
                className="form-control border-primary w-50"
                placeholder="Keyword"
              />
              <button className="btn btn-dark border-0 w-25" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <FindDoctorsSection />
    </Wrapper>
  );
}

export default FindDoctor;
