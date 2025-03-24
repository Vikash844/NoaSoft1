import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Footer from "./Footer";

const Card = ({ title, content, image, isVisible }) => {
  return (
    <div className={`scroll-card ${isVisible ? "visible" : ""}`}>
      <div className="card-image">
        <img src={image} alt="Feature" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <ul>
          {content.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
        <button className="request-demo-btn">Request Demo</button>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <h3>CONVEY YOUR IDEAS TO</h3>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Company Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <select required>
          <option value="">Select Software</option>
          <option value="Asset Management">Asset Management</option>
          <option value="CRM Software">CRM Software</option>
          <option value="Maintenance Software">Maintenance Software</option>
        </select>
        <input type="email" placeholder="Office Email Address" required />
        <input type="number" placeholder="Number of Employees" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit" className="submit-btn">Submit Now</button>
      </form>
    </div>
  );
};

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is NOASOFT?", answer: "NOASOFT is an advanced asset management software designed to help businesses track and manage their assets efficiently." },
    { question: "How can I request a demo?", answer: "You can request a demo by clicking the 'Request Demo' button on our homepage and filling out the form." },
    { question: "Is NOASOFT compatible with mobile devices?", answer: "Yes, NOASOFT is fully responsive and works seamlessly on mobile, tablets, and desktops." },
    { question: "What industries can use NOASOFT?", answer: "NOASOFT is suitable for schools, businesses, healthcare, and any organization needing asset management solutions." }
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </button>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const cardData = [
    {
      title: "Ultimate Fixed Assets Software",
      content: ["Assets Requisition", "PO Module", "Acquisition Module", "Depreciation Module", "Know More"],
      image: "/assets/image-1.png",
    },
    {
      title: "Physical Verification and Tagging Software",
      content: ["Bar Code/QR Code", "RFID", "Mobile App", "Real-time Verification"],
      image: "/assets/image-2.png",
    },
    {
      title: "Maintenance Software",
      content: ["Preventive Maintenance", "Maintenance Schedule", "Reminder"],
      image: "/assets/image-3.png",
    },
    {
      title: "Noa CRM Software",
      content: ["Assets Requisition", "PO Module", "Acquisition Module", "Depreciation Module"],
      image: "/assets/image-4.png",
    },
  ];

  return (
    <>
      <div className="main-content">
        <div className="hero">
          {/* Hero Section */}
          <div className="hero-content">
            <h1>
              Ultimate <br />
              Asset <br />
              Management Solutions: <br />
              <span className="highlight">NOASOFT</span>
            </h1>
            <div className="hero-description">
              <h3>Gain Full Control Over Your Assets</h3>
              <p>
                Transform Asset Inventory, Tracking, and <br />
                Management With Our Cutting-Edge Solutions. <br />
                Ensure Complete Control Over the Compliance <br />
                Related to Asset Register.
              </p>
            </div>
            <div className="hero-buttons">
              <button className="request-demo-btn">Request Demo</button>
              <button className="play-btn">▶</button>
            </div>
          </div>

          {/* Yellow Circle */}
          <div className="yellow-circle">
          <img
    src={require("../images/3d-female-character-holding-tablet-pointing-pie-chart.png")}
    alt="Hero Character"
    className="hero-image"
  />
          </div>

          {/* Features Section */}
          <div className="features-container">
            <div className="feature-card">
              <div className="icon">📋</div>
              <h3>Mark Attendance Easily</h3>
              <p>Effortless Attendance Simplifying the Process for Seamless Record-keeping</p>
            </div>

            <div className="feature-card">
              <div className="icon">🎒</div>
              <h3>Admission With Easy Steps</h3>
              <p>Simplified Enrollment Streamlined Process for Hassle-Free Admission</p>
            </div>

            <div className="feature-card">
              <div className="icon">📍</div>
              <h3>Real-time School Bus Tracking</h3>
              <p>Effortless Security Real-Time School Bus Tracking for Peace of Mind</p>
            </div>

            <div className="feature-card">
              <div className="icon">📄</div>
              <h3>Save & Share Documents With Staff Members</h3>
              <p>Effortless Secure Your Records & Documents with SchoolAura Drive</p>
            </div>
          </div>
            {/* Stats Section */}
      <div className="stats-container">
        <div className="stat">
          <h2>127<span>+</span></h2>
          <p>SCHOOLS</p>
        </div>
        <div className="stat">
          <h2>75.5k<span>+</span></h2>
          <p>STUDENTS</p>
        </div>
        <div className="stat">
          <h2>24/7<span>+</span></h2>
          <p>OUR SUPPORT</p>
        </div>
        <div className="stat">
          <h2>13<span>+</span></h2>
          <p>STATES</p>
        </div>
      </div>

          {/* Scroll Cards Section */}
          <div className="scroll-cards-container">
            {cardData.map((card, index) => (
              <div ref={(el) => (cardRefs.current[index] = el)} key={index} data-index={index}>
                <Card {...card} isVisible={visibleCards[index]} />
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <FAQ />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
      
      {/* Footer (Moved Outside Hero) */}
      <Footer />
    </>
  );
};

export default Hero;
