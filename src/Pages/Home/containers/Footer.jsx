import React from 'react'
import { Outlet, Link } from "react-router-dom";
import footerLogo from '../../../assets/logo.png'
import './footer.css'
function Footer() {
  return (
    <div className="footer-main">
        <div className="footer-listArea">
            <div className="footer-logo">
                <img src={footerLogo} alt="" />
            </div>
            <div className="footer-list">
                <div><Link to="signin">Support Center</Link> </div>
                <div><Link to="signin">Invoicing</Link> </div>
                <div><Link to="signin">Contract</Link> </div>
                <div><Link to="signin">Careers</Link> </div>
                <div><Link to="signin">Blog</Link> </div>
                <div><Link to="signin">FAQs</Link> </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © 2024 Nouman. All Rights Reseved.</p>
        </div>
        <Outlet />
    </div>
  )
}

export default Footer
