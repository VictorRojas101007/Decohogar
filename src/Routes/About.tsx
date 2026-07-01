import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import "../styles/About.css";

const About = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue.trim() ? (
        <>
          <SearchResults searchValue={searchValue} />
          <Footer />
        </>
      ) : (
        <>
          <section className="about-main-container">
            <div className="about-container">
              <div className="about-hero">
                <div className="about-hero__content">
                  <p className="about-eyebrow">Decoración con identidad</p>
                  <h1 className="about-title">Sobre Decohogar</h1>
                  <p className="about-description">
                    Creamos vinilos decorativos personalizados que transforman espacios
                    con calidez, estilo y personalidad. Cada diseño está pensado para que
                    tu hogar se sienta único, acogedor y lleno de carácter.
                  </p>
                  <div className="about-actions">
                    <NavLink to="/" className="about-btn about-btn--primary">
                      Ver productos
                    </NavLink>
                    <a
                      href="https://wa.me/51937026299"
                      target="_blank"
                      rel="noreferrer"
                      className="about-btn about-btn--secondary"
                    >
                      Hablemos por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="about-hero__card">
                  <h2>¿Qué nos mueve?</h2>
                  <p>
                    Nos encanta convertir ideas simples en ambientes especiales,
                    cuidando cada detalle para que cada vinilo se convierta en parte de tu historia.
                  </p>
                  <ul className="about-list">
                    <li>Diseños exclusivos y personalizados</li>
                    <li>Materiales de calidad para durar</li>
                    <li>Atención cercana y asesoramiento</li>
                  </ul>
                </div>
              </div>

              <div className="about-grid">
                <article className="about-card">
                  <h3>Nuestra misión</h3>
                  <p>
                    Hacer que cada rincón de tu hogar refleje tu estilo, con soluciones decorativas
                    funcionales, bonitas y memorables.
                  </p>
                </article>

                <article className="about-card">
                  <h3>Nuestra visión</h3>
                  <p>
                    Ser una marca reconocida por la creatividad, la calidad y la calidez que transmiten
                    nuestros diseños en cada proyecto.
                  </p>
                </article>

                <article className="about-card">
                  <h3>Por qué elegirnos</h3>
                  <p>
                    Combinamos estética, personalización y un servicio humano para que tu experiencia sea
                    sencilla y agradable desde el primer contacto.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default About;
