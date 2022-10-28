import React from 'react';
import Card from './Card';

function ServicesSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5">
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Services
          </h5>
          <h1 className="display-4">Excellent Medical Services</h1>
        </div>
        <div className="row g-5">
          <Card title="Emergency Care" icon="fa fa-2x fa-user-md text-white" />
          <Card title="Operation & Surgery" icon="fa fa-2x fa-procedures text-white" />
          <Card title="Outdoor Checkup" icon="fa fa-2x fa-stethoscope text-white" />
          <Card title="Ambulance Service" icon="fa fa-2x fa-ambulance text-white" />
          <Card title="Medicine & Pharmacy" icon="fa fa-2x fa-pills text-white" />
          <Card title="Blood Testing" icon="fa fa-2x fa-microscope text-white" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
