import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}

const Footer = ({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={`panel footer-content ${className}`}>
      <div className="contact">
        <div className="contact-item">
          <p className="contact-title">Partnership.</p>
          <p className="contact-detail">looctziee@gmail.com</p>
        </div>
        <div className="contact-item">
          <p className="contact-title">Recruiting.</p>
          <p className="contact-detail">looctziee@gmail.com</p>
        </div>
        <div className="contact-item">
          <p className="contact-title">Learn more.</p>
          <p className="contact-detail">Learn more about us</p>
        </div>
      </div>
      <div className="slogan-title">
        <p>Let's</p>
        <p>Make the world</p>
        <p>Together.</p>
      </div>
    </div>
  );
};

export default Footer;
