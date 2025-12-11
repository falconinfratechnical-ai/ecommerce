import React, { useState } from "react";
import { FaCogs, FaBoxOpen, FaShieldAlt, FaUserCog, FaTimes } from "react-icons/fa";
import "../styles/ServiceSupport.css";

const serviceDetails = {
  Maintenance: [
    "Preventive & corrective maintenance",
    "Recommended schedule (weekly/monthly/yearly)",
    "Cleaning, lubrication, inspections",
    "Request service via phone/email",
  ],
  "Spare Parts": [
    "Original or compatible parts",
    "Warranty on parts",
    "Ordering process & delivery",
    "Cost estimate or quote option",
  ],
  Warranty: [
    "Duration of warranty",
    "Coverage: parts & labor",
    "How to claim warranty",
    "Documentation required",
  ],
  "Technician Visits": [
    "Scope of visits: repair, training, maintenance",
    "Schedule & response time",
    "Charges (if applicable)",
    "Technician credentials & safety measures",
  ],
};

const ServiceSupport = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState("");

  const openModal = (service) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const services = [
    { name: "Maintenance", icon: <FaCogs /> },
    { name: "Spare Parts", icon: <FaBoxOpen /> },
    { name: "Warranty", icon: <FaShieldAlt /> },
    { name: "Technician Visits", icon: <FaUserCog /> },
  ];

  return (
    <section className="service-support">
      <h2 className="service-title">Service & Support</h2>
      <p className="service-subtitle">
        Professional support for every machine you purchase
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-card"
            onClick={() => openModal(service.name)}
          >
            <div className="icon">{service.icon}</div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3>{currentService}</h3>
            <ul>
              {serviceDetails[currentService].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSupport;
