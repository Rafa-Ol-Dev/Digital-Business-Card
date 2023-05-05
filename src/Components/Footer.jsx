import React from "react";
import Face from "../images/face-icon.png";
import Insta from "../images/insta-icon.png";
import GitHub from "../images/hub-icon.png";

export default function Footer() {
  return (
    <footer className="rodape">
      <a href="#">
        <img src={Face} alt="Facebook" />
      </a>
      <a href="#">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="#">
        <img src={GitHub} alt="GitHub" />
      </a>
    </footer>
  );
}
