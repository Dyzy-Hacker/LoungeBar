import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Import the specific icon

const Footer = () => {
  return (
    <div className="p-10 bg-black">
      <div className="flex justify-center gap-3">
        <FontAwesomeIcon icon={faFacebookF} color="white" />{" "}
        <FontAwesomeIcon icon={faInstagram} color="white" />{" "}
      </div>
      <div className="flex justify-center text-white mt-3">
        <p>© 2024. FoodDX. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
