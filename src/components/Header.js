// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [productsDropdown, setProductsDropdown] = useState(false);
//   const [servicesDropdown, setServicesDropdown] = useState(false);

//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>NoaSoft</h1>
//       </div>

//       <nav className="nav">
//         <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
//           Home
//         </Link>
//         <Link to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
//           About Us
//         </Link>

//         {/* Products Dropdown */}
//         <div
//           className="dropdown"
//           onMouseEnter={() => setProductsDropdown(true)}
//           onMouseLeave={() => setProductsDropdown(false)}
//         >
//           <Link to="/products" className="dropbtn">
//             Products ▾
//           </Link>
//           {productsDropdown && (
//             <div className="dropdown-content">
//               <Link to="/products/fixed-asset">1. Fixed Asset & Depreciation Software</Link>
//               <Link to="/products/inventory">2. Inventory Management Software</Link>
//               <Link to="/products/crm">3. CRM Software</Link>
//               <Link to="/products/procurement">4. Procurement Module</Link>
//               <Link to="/products/requisition">5. Requisition Module</Link>
//               <Link to="/products/maintenance">6. Maintenance Software</Link>
//             </div>
//           )}
//         </div>

//         {/* Services Dropdown */}
//         <div
//           className="dropdown"
//           onMouseEnter={() => setServicesDropdown(true)}
//           onMouseLeave={() => setServicesDropdown(false)}
//         >
//           <Link to="/services" className="dropbtn">
//             Services ▾
//           </Link>
//           {servicesDropdown && (
//             <div className="dropdown-content">
//               <Link to="/services/fixed-asset-reconciliation">1. Fixed Asset Reconciliation</Link>
//               <Link to="/services/physical-asset-verification">2. Physical Asset Verification & Tagging Services</Link>
//             </div>
//           )}
//         </div>

//         <Link to="/blog">Blog</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <div className="actions">
//         <button className="login-btn">Request Demo</button>
//         <button className="register-btn">▶</button>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  // Close dropdowns & menu when clicking elsewhere
  const closeMenus = () => {
    setProductsDropdown(false);
    setServicesDropdown(false);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>NoaSoft</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenus}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenus}>
          About Us
        </Link>

        {/* Products Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setProductsDropdown(true)}
          onMouseLeave={() => setProductsDropdown(false)}
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/products" className="dropbtn" onClick={(e) => e.preventDefault()}>
            Products ▾
          </Link>
          {productsDropdown && (
            <div className="dropdown-content">
              <Link to="/products/fixed-asset" onClick={closeMenus}>1. Fixed Asset & Depreciation Software</Link>
              <Link to="/products/inventory" onClick={closeMenus}>2. Inventory Management Software</Link>
              <Link to="/products/crm" onClick={closeMenus}>3. CRM Software</Link>
              <Link to="/products/procurement" onClick={closeMenus}>4. Procurement Module</Link>
              <Link to="/products/requisition" onClick={closeMenus}>5. Requisition Module</Link>
              <Link to="/products/maintenance" onClick={closeMenus}>6. Maintenance Software</Link>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/services" className="dropbtn" onClick={(e) => e.preventDefault()}>
            Services ▾
          </Link>
          {servicesDropdown && (
            <div className="dropdown-content">
              <Link to="/services/fixed-asset-reconciliation" onClick={closeMenus}>1. Fixed Asset Reconciliation</Link>
              <Link to="/services/physical-asset-verification" onClick={closeMenus}>2. Physical Asset Verification & Tagging Services</Link>
            </div>
          )}
        </div>

        <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""} onClick={closeMenus}>Blog</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={closeMenus}>Contact</Link>
      </nav>

      <div className="actions">
        <button className="login-btn">Request Demo</button>
        <button className="register-btn">▶</button>
      </div>
    </header>
  );
};

export default Header;

