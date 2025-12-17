import React from 'react'
import "../styles/AboutUs.css";
import sir from "../assets/sir.png";
import ServiceSupport from './ServiceSupport';

function AboutUs() {

    window.scrollTo(0, 0);
  return (
    <div className="about-container">

      {/* Banner Section */}
      <div className="products-banner">
        <h1 className="products-heading">About Us</h1>
        <h3 className="products-subtitle">
         One of India's fastest-growing Food Processing Machines, Machineries & tools brands.
        </h3>
      </div>

      <div className="about-content">
        <p>MMShoppe is dedicated to empowering businesses, farmers, and food-processing units with innovative machinery solutions that enhance efficiency, productivity, and long-term sustainability. Established with a mission to make high-quality equipment accessible to everyone, MMShoppe is rapidly emerging as a trusted ecommerce destination for premium food equipment and industrial machinery.</p>
        <p>
          We understand the challenges faced by small and medium-scale enterprises, food manufacturers, and agricultural operators. Our goal is to bridge the gap between innovation and affordability by offering machinery that is reliable, easy to use, and tailored to real operational needs. Through a strong online presence and a seamless shopping experience, we strive to ensure that customers across India can efficiently access the tools and technology they require.
        </p>
        <p>
          At the heart of MMShoppe lies a strong foundation of self-reliance, hard work, sustainability, innovation, collaboration, inclusion, and 5-star service. These values guide every product we offer and every customer interaction we make. We are committed to building long-term relationships with our customers and partners, contributing to a future where modern mechanized solutions benefit communities and the environment.
        </p>
        <p>
          As a specialized ecommerce platform, MMShoppe offers a wide and expanding range of machinery, with a strong focus on food equipment and food-processing machines such as grinders, mixers, slicers, dough machines, ovens, sealing machines, dehydrators, and commercial kitchen tools. Along with this, we also cater to agricultural and industrial machinery requirements to support diverse operational needs.
        </p>
        <p>📌
          We take pride in delivering equipment that is innovative, reliable, and built to perform. Our products are designed to be efficient, durable, and easy to maintain—helping businesses achieve consistent, high-quality results.

          At MMShoppe, we are committed to providing exceptional service, fast support, and a hassle-free buying experience. As we continue to grow, our promise remains the same:
          to be your trusted partner for all food equipment and machinery needs.</p>
      </div>
      {/* Mission / Vision Section */}
      <div className="mv-section">
        <div className="mv-card">
          <h2>Our Mission</h2>
          <p>
            Creating awareness and accessibility of affordable farm machines and building
            strong service networks to increase farmer comfort and create sustainable growth.
          </p>
        </div>
        <div className="mv-card">
          <h2>Our Vision</h2>
          <p>
            To empower agriculture through innovative mechanized solutions.
          </p>
        </div>
      </div>

      <div className="info-section1">
  <div className="info-right1">
    <img src={sir} alt="Our Mission" className="info-image1" />
  </div>

  <div className="info-left1">
    <h2>Leadership at the Helm</h2>
    <h3 className="lead-small">
      Our platform is driven by the visionary leadership of <br />
      Shri. N. A. Muhammed Kutty (Mammuty) Chairman, CCIMSME
    </h3>

    <p>
      Under the guidance of Shri. N. A. Muhammed Kutty, our e-commerce venture
      has become a trusted destination for customers seeking quality products
      and seamless online shopping experiences. With a passion for innovation
      and a deep understanding of the digital marketplace, mammuty has steered
      the company toward creating a user-friendly, reliable, and scalable
      platform. As a digital entrepreneur and technology enthusiast, he brings a
      wealth of experience in e-commerce strategy, customer experience, and
      supply chain optimization.
      <br />
      <br />
      Chief Patron & Director: Vidyabharathi Group of Institutions
      <br />
      Managing Director: Falcon Infrastructures Ltd.
    </p>

    <p>
      “To provide customers with a seamless shopping experience, deliver
      top-quality products, and expand our brand to reach every corner of the
      globe.”
    </p>

    <button className="read-more">
      <a href="https://mammuty.me/" target="_blank" rel="noopener noreferrer">
        READ MORE
      </a>
    </button>
  </div>
</div>





      {/* Core Values Section */}
      <h2 className="cv-title">Core Values</h2>
      <p className="cv-subtext">As a team, we share a set of values that guide our work and relationships.</p>

      <div className="core-values">
        <div className="cv-card">
          <h3>Self Reliance</h3>
          <p>Empowering individuals to take ownership of their work and growth.</p>
        </div>

        <div className="cv-card">
          <h3>Hard Work</h3>
          <p>We value dedication and excellence in everything we do.</p>
        </div>

        <div className="cv-card">
          <h3>Sustainability</h3>
          <p>Committed to protecting the environment through sustainable practices.</p>
        </div>

        <div className="cv-card">
          <h3>Innovation</h3>
          <p>Embracing new ideas and technologies to stay ahead.</p>
        </div>

        <div className="cv-card">
          <h3>Collaboration</h3>
          <p>Promoting teamwork, communication, and shared goals.</p>
        </div>

        <div className="cv-card">
          <h3>Inclusion</h3>
          <p>Creating a diverse, respectful, and inclusive environment.</p>
        </div>

        <div className="cv-card">
          <h3>5-Star Service</h3>
          <p>Going above and beyond to support our customers.</p>
        </div>
      </div>

<div>
      <ServiceSupport />
</div>
    </div>
  );
}

export default AboutUs;
