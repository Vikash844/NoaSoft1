// import React, { useState } from "react";
// import "./Sidebar.css"; // Ensure this file is correctly imported

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
//   const [isProductsOpen, setIsProductsOpen] = useState(false); // Products dropdown state
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // Services dropdown state

//   return (
//     <>
//       {/* Sidebar Toggle Button */}
//       <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </button>

//       {/* Sidebar Navigation */}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>

//         <nav className="sidebar-nav">
//           <a href="#home">Home</a>

//           {/* Products with Dropdown */}
//           <div className="dropdown">
//             <button 
//               className="dropdown-toggle" 
//               onClick={() => setIsProductsOpen(!isProductsOpen)}
//             >
//               Products 🔽
//             </button>
//             {isProductsOpen && (
//               <div className="dropdown-menu">
//                 <a href="#fixed-asset">Fixed Asset & Depreciation Software</a>
//                 <a href="#inventory">Inventory Management Software</a>
//                 <a href="#crm">CRM Software</a>
//                 <a href="#procurement">Procurement Module</a>
//                 <a href="#requisition">Requisition Module</a>
//                 <a href="#maintenance">Maintenance Software</a>
//               </div>
//             )}
//           </div>

//           <a href="#enquiry">Enquiry</a>
//           <a href="#about">About Us</a>

//           {/* Services with Dropdown */}
//           <div className="dropdown">
//             <button 
//               className="dropdown-toggle" 
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//             >
//               Services 🔽
//             </button>
//             {isServicesOpen && (
//               <div className="dropdown-menu">
//                 <a href="#reconciliation">Fixed Asset Reconciliation</a>
//                 <a href="#verification">Physical Asset Verification & Tagging Services</a>
//               </div>
//             )}
//           </div>

//           <a href="#blog">Blog</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
