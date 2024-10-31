import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="p-10 bg-black">
      <div className="flex justify-center gap-3">
        <a href="https://www.instagram.com/westsideloungebar/" target="blank">
          <FontAwesomeIcon icon={faInstagram} color="white" />{" "}
        </a>
        <a
          href="https://www.facebook.com/p/West-Side-Lounge-Bar-100076218104657/"
          target="blank"
        >
          <FontAwesomeIcon icon={faFacebookF} color="white" />{" "}
        </a>
      </div>
      <div className="flex justify-center text-white mt-3">
        <p>© 2024. FoodDX. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
