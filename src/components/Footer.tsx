// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import facebook from "../assets/svg/socialMedia/facebook.svg";
import instagram from "../assets/svg/socialMedia/instagram.svg";
import whatsapp from "../assets/svg/socialMedia/whatsapp.svg";
import DecohogarLogo from "../assets/svg/search.svg";
import "../styles/Footer.css"; // Asegúrate de crear este archivo CSS

const Footer = () => {
  return (
    <footer>
      <img src={DecohogarLogo} alt="" height="100px" width="100px" />
      <div className="dividerHorizontal"></div>
      <div className="footerLinks">
        <div className="FooterContactUs Footer-width">
          <h3>Contáctanos</h3>
          <ul className="Footer_ul">
            <li className="FooterContactUs__li">
              Email: decohogarvinilos15@gmail.com
            </li>
            <li className="FooterContactUs__li">Whatsapp 1: +51 937 026 299</li>
            <li className="FooterContactUs__li">Whatsapp 2: +51 949 368 488</li>
            <li className="FooterContactUs__li">
              Horario de atención: Lunes a Sábados todo el día
            </li>
          </ul>
        </div>
        <div className="FooterAboutUs Footer-width">
          <h3>Sobre Nosotros</h3>
          <ul className="Footer_ul">
            <li className="FooterAboutUs__li">Condiciones de compra</li>
            <li className="FooterAboutUs__li">Quienes Somos</li>
            <li className="FooterAboutUs__li">Misión</li>
          </ul>
        </div>
        <div className="FooterAboutProducts Footer-width">
          <h3>Sobre los Produtos</h3>
          <ul className="Footer_ul">
            <li className="FooterAboutProducts__li">Materiales</li>
            <li className="FooterAboutProducts__li">Instalación</li>
            <li className="FooterAboutProducts__li">Preguntas Frecuentes</li>
          </ul>
        </div>
        <div className="FooterSocialMedia Footer-width">
          <a href="">
            <img src={whatsapp} width="30px" alt="" />
          </a>
          <a href="https://www.instagram.com/decohogar_vinilos" target="_blank" rel="noopener noreferrer">
            <img src={instagram} width="30px" alt="" />
          </a>
          <a href="https://www.facebook.com/decohogarvinilos" target="_blank" rel="noopener noreferrer">
            <img src={facebook} width="30px" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
