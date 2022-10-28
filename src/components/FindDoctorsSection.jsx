import React from 'react';
import akash from '../assets/images/akash.jpg';
import rabbi from '../assets/images/rabbi.jpg';
import rakib from '../assets/images/rakib.jpg';
import sakib from '../assets/images/sakib.jpg';
import thafsi from '../assets/images/team-2.jpg';
import miraz from '../assets/images/team-3.jpg';
import SingleDoctor from './SingleDoctor';

function FindDoctorsSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <SingleDoctor name="Rakibul Islam" designation="Cardiology Specialist" picture={rakib} />
          <SingleDoctor name="Sakibul Islam" designation="Cardiology Specialist" picture={sakib} />
          <SingleDoctor name="Mahfuz Miraz" designation="Cardiology Specialist" picture={miraz} />
          <SingleDoctor
            name="Md Fajlay Rabby"
            designation="Cardiology Specialist"
            picture={rabbi}
          />
          <SingleDoctor name="Dr. Thafsi" designation="Cardiology Specialist" picture={thafsi} />
          <SingleDoctor
            name="Ashikur Rahman Akash"
            designation="Cardiology Specialist"
            picture={akash}
          />
          <div className="col-12 text-center">
            <button className="btn btn-primary py-3 px-5" type="button">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDoctorsSection;
