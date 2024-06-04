import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links_logo">
        <h4>CarWay Purchasing</h4>
      </div>
    <div className="footer_links">
      <div className="footer_links_div">
        <h4>Company</h4>
        <p>Pricing</p>
        <p>Showcase</p>
        <p>Contact</p>
      </div>
      <div className="footer_links_div">
        <h4>Company</h4>
        <p>Terms of services </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer_links_div">
        <h4>Get in touch</h4>
        <p></p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>
     

  </div>
  )
}

export default Footer;