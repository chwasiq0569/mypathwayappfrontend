import React from "react";
import "./onboardingnavbar.css";
import LogoImg from "../../assets/images/Logo.png";
import MobileMenuIcon from "../../assets/icons/mobilemenu.png";

const OnboardingNavbar = () => {
  return (
    <div className="onboardingNavbarContainer">
      <div className="brandLogoContainer">
        <img className="logo" alt="mypathways_logo" src={LogoImg} />
      </div>
      <div className="navItemsContainer">
        <div className="navItem firstItem">Home</div>
        <div className="navItem">Blog</div>
        <div className="mobileMenuIcon">
          <img src={MobileMenuIcon} alt="Mobile_Menu_Icon" />
        </div>
      </div>
    </div>
  );
};

export default OnboardingNavbar;
