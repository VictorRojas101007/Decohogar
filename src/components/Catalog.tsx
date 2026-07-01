import { NavLink } from "react-router-dom";
import "../styles/Catalog.css";

interface CatalogItem {
  img: string;
  title: string;
  description: string;
  id: string;
  path?: string;
}

const Catalog = () => {
  const catalogItems: CatalogItem[] = [
    {
      img: "https://drive.google.com/thumbnail?id=1fq-NV2HPgaPwqkarOj71JQqKFZg9PcU9&sz=w1000",
      title: "Los más vendidos",
      description:
        "Descubre nuestra selección de vinilos más populares, ideales para transformar cualquier espacio en un lugar único y personalizado.",
      id: "Cataloghot",
      path: "/los-más-vendidos"
    },
    {
      img: "https://drive.google.com/thumbnail?id=1fq-NV2HPgaPwqkarOj71JQqKFZg9PcU9&sz=w1000",
      title: "niñas",
      description:
        "Personaliza el espacio de las niñas con vinilos decorativos únicos y adaptables a sus gustos, desde cuentos de hadas hasta colores vibrantes. ¡Las posibilidades son infinitas!",
      id: "Catalogirl",
      path: "/niñas"
    },
    {
      img: "https://drive.google.com/thumbnail?id=1fP6jMrW5tvSraYocLaNwCWxC5zVwjBck&sz=w1000",
      title: "niños",
      description:
        "Decora tu hogar con vinilos personalizados para los más pequeños, reflejando sus gustos, intereses y personalidades. ¡De cuentos mágicos a colores vibrantes, las opciones no tienen límites!",
      id: "Catalogboy",
      path: "/niños"
    },
    {
      img: "https://drive.google.com/thumbnail?id=1y_KNMOm2hWfCiRqRfMF0_9i2wGCHL4-N&sz=w1000",
      title: "hogar",
      description:
        "Renueva tus paredes con vinilos decorativos únicos, reflejando tu estilo y creatividad. Transforma cualquier rincón de tu hogar con un toque moderno, cálido y personalizado.",
      id: "Cataloghome",
      path: "/hogar"
    },
    {
      img: "https://drive.google.com/thumbnail?id=1MElyHIDhwIiLTz-uX-bd4U--pVYbCdaP&sz=w1000",
      title: "fotomurales",
      description:
        "Transforma tus paredes con fotomurales personalizados y de alta calidad que reflejan tu estilo. Crea espacios modernos, cálidos y únicos, ya sea en casa, oficina o local comercial.",
      id: "Catalogfotomural",
      path: "/fotomurales"
    },
  ];
  return (
    <section className="CatalogContainer">
      {catalogItems.map((item, index) => (
        <article key={index} className="CatalogContainer__article">
          <div className="CatalogContainer-text">
            <h3 id={item.id} className="CatalogContainer-text__h3">
              {(item.title).toUpperCase()}
            </h3>
            <p className="CatalogContainer-text__p">{item.description}</p>
            <NavLink to={item.path || "/"} className="CatalogContainer-text__button">Catálogo</NavLink>
          </div>
          <div className="CatalogContainer-Containerimg">
            <img className="CatalogContainer-img" src={item.img} alt="" />
          </div>
        </article>
      ))}
    </section>
  );
};
export default Catalog;
