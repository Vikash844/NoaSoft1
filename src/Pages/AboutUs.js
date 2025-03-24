import React from "react";
import "./AboutUs.css";
import Footer from "../components/Footer";
//import playStoreImage from "../assets/google-play-badge.png"; // Add Play Store image to assets
//import schoolAuraImage from "../assets/school-aura-mockup.png"; // Add SchoolAura mockup image

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>ABOUT <span className="highlight">ERP NOASOFT</span></h1>
        <div className="buttons">
          <button className="request-demo-btn">Request Demo</button>
          <button className="play-btn">▶</button>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">Home • About</div>

      {/* About Us Content */}
      <div className="about-content">
        <h2>WHAT IS ERP NOASOFT</h2>
        <p>
          We are a dedicated software development company with a passion for delivering 
          cutting-edge solutions that drive business success. Our team is focused on 
          creating robust, scalable, and customized software that meets the evolving needs 
          of modern businesses.
        </p>
        <p>
          With years of experience in the industry, we offer a comprehensive range of 
          software products and services designed to streamline operations, improve 
          efficiency, and maximize growth potential.
        </p>
        <br/>
        <h2>Our Core Offerings</h2>
        <ul>
          <li><strong>Fixed Asset & Depreciation Software:</strong> Efficiently manage your assets, automate depreciation processes, and ensure compliance with financial reporting requirements.</li> <br/>
          
          <li><strong>CRM Software:</strong> Build stronger customer relationships, optimize sales pipelines, and improve customer satisfaction with our intuitive CRM tools. Keep proper track of sales and enhance your revenue with <b>NOASOFT CRM</b>.</li> <br/>

          <li><strong>Maintenance Software:</strong> Schedule and track maintenance tasks, reduce downtime, and enhance operational efficiency with automated reminders.</li> <br/>

          <li><strong>Inventory Software:</strong> Manage inventory efficiently, track stock levels in real time, and streamline procurement and distribution processes.</li> <br/>

          <li><strong>Procurement Module:</strong> Improve supplier collaboration, optimize procurement workflows, and ensure cost-effective purchasing.</li> <br/>
        </ul>
        <br/>
        <h2>Customized Software Solutions</h2>
        <p>
          Understanding that no two businesses are the same, we also offer <b>tailored software solutions</b> 
          to meet your unique requirements. Whether you need a specialized module, an integration with existing 
          systems, or a completely bespoke software solution, we work closely with you to design and implement 
          the perfect solution for your business.
        </p>
        <br/>
        <h2>Physical Asset Verification & Tagging Services</h2>
        <p>
          Alongside our robust software solutions, we offer <b>Physical Asset Verification and Tagging Services</b> 
          to ensure your assets are accurately tracked, recorded, and verified. Using RFID and barcode-based solutions, 
          we help businesses improve accuracy and efficiency while ensuring compliance during audits.
        </p>
        <br/>
        <h2>Our Approach</h2>
        <p>
          Our approach is built on collaboration, integrity, and innovation. We take the time to understand your 
          business objectives and deliver solutions that exceed expectations. We are here to support you at every 
          step, helping you optimize processes, reduce costs, and achieve sustainable growth through technology.
        </p>
      </div>

      {/* SchoolAura App Section */}
      <div className="school-aura-section">
        <div className="school-aura-content">
          <h2>
            ERP <span className="highlight">NOASOFT.</span> Mobile Application available on <br />
            Google Play Store <span className="highlight">For Customer</span>
          </h2>
          <p>Download app for <strong>FREE</strong></p>
          {/* <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={playStoreImage} alt="Get it on Google Play" className="play-store-btn" />
          </a> */}
          <p className="availability-note">Currently available in Bharat</p>
        </div>
        {/* <div className="school-aura-image">
          <img src={schoolAuraImage} alt="SchoolAura Mobile App" />
        </div> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
