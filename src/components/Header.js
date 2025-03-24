import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>NoaSoft</h1>
      </div>

      <nav className="nav">
        <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </Link>
        <Link to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About Us
        </Link>

        {/* Products Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setProductsDropdown(true)}
          onMouseLeave={() => setProductsDropdown(false)}
        >
          <Link to="/products" className="dropbtn">
            Products ▾
          </Link>
          {productsDropdown && (
            <div className="dropdown-content">
              <Link to="/products/fixed-asset">1. Fixed Asset & Depreciation Software</Link>
              <Link to="/products/inventory">2. Inventory Management Software</Link>
              <Link to="/products/crm">3. CRM Software</Link>
              <Link to="/products/procurement">4. Procurement Module</Link>
              <Link to="/products/requisition">5. Requisition Module</Link>
              <Link to="/products/maintenance">6. Maintenance Software</Link>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <Link to="/services" className="dropbtn">
            Services ▾
          </Link>
          {servicesDropdown && (
            <div className="dropdown-content">
              <Link to="/services/fixed-asset-reconciliation">1. Fixed Asset Reconciliation</Link>
              <Link to="/services/physical-asset-verification">2. Physical Asset Verification & Tagging Services</Link>
            </div>
          )}
        </div>

        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="actions">
        <button className="login-btn">Request Demo</button>
        <button className="register-btn">▶</button>
      </div>
    </header>
  );
};

export default Header;
