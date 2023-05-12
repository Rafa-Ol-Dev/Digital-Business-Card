import React from "react";
import Foto from "../images/foto.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Foto} alt="minha foto de apresentação" className="foto-perfil"/>
    </div>
  )
}