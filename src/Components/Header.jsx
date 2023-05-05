import React from "react";
import Foto from "../images/small-pic.jpeg";

export default function Header() {
  return (
    <div className="header">
      <img src={Foto} alt="minha foto de perfil" className="foto-perfil"/>
    </div>
  )
}