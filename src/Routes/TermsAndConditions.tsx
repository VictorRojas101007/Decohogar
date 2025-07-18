import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import "../styles/TermsAndConditions.css";

const TermsAndConditions = () => {
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
                    <section className="terms-main-container">
                        <div className="terms-container">
                            <h2 className="terms-title">Términos y Condiciones</h2>
                            
                            <div className="terms-content">
                                <div className="terms-section">
                                    <h3 className="terms-subtitle">1. Información General</h3>
                                    <p>Bienvenido a Decohogar, tu tienda especializada en vinilos decorativos personalizados. Al utilizar nuestros servicios, aceptas cumplir con estos términos y condiciones.</p>
                                </div>

                                <div className="terms-section">
                                    <h3 className="terms-subtitle">2. Productos y Servicios</h3>
                                    <p>Ofrecemos vinilos decorativos personalizados para diferentes espacios:</p>
                                    <ul className="terms-list">
                                        <li>Vinilos para habitaciones de niñas</li>
                                        <li>Vinilos para habitaciones de niños</li>
                                        <li>Vinilos decorativos para el hogar</li>
                                        <li>Fotomurales personalizados</li>
                                    </ul>
                                </div>

                                <div className="terms-section">
                                    <h3 className="terms-subtitle">3. Precios y Pagos</h3>
                                    <p>Todos nuestros productos tienen precio bajo consulta. Los precios pueden variar según el tamaño, diseño y complejidad del vinil solicitado. Nos pondremos en contacto contigo para proporcionarte un presupuesto personalizado.</p>
                                </div>

                                <div className="terms-section">
                                    <h3 className="terms-subtitle">4. Proceso de Pedido</h3>
                                    <p>Para realizar un pedido:</p>
                                    <ul className="terms-list">
                                        <li>Contacta con nosotros a través de nuestros canales de comunicación</li>
                                        <li>Proporciona las especificaciones de tu vinil (tamaño, diseño, ubicación)</li>
                                        <li>Recibirás un presupuesto personalizado</li>
                                        <li>Una vez confirmado, procederemos con la producción</li>
                                    </ul>
                                </div>

                                <div className="terms-section">
                                    <h3 className="terms-subtitle">5. Política de Privacidad</h3>
                                    <p>Respetamos tu privacidad y protegemos tus datos personales. La información que nos proporcionas se utiliza únicamente para procesar tu pedido y mejorar nuestros servicios.</p>
                                </div>

                                <div className="terms-section">
                                    <h3 className="terms-subtitle">6. Derechos de Autor</h3>
                                    <p>Todos los diseños y contenidos de este sitio web están protegidos por derechos de autor. No está permitida la reproducción sin autorización expresa.</p>
                                </div>

                                <div className="terms-section">
                                    <h3 className="terms-subtitle">7. Contacto</h3>
                                    <p>Para cualquier consulta sobre estos términos y condiciones, puedes contactarnos a través de nuestros canales de atención al cliente.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            )}
        </>
    );
};

export default TermsAndConditions;