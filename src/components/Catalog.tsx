import "../styles/Catalog.css";

interface CatalogItem {
  img: string;
  title: string;
  description: string;
  id: string;
}

const Catalog = () => {
  const catalogItems: CatalogItem[] = [
    {
      img: "https://drive.google.com/thumbnail?id=1fq-NV2HPgaPwqkarOj71JQqKFZg9PcU9&sz=w1000",
      title: "NIÑAS",
      description:
        "Personaliza el espacio de las niñas con vinilos decorativos únicos y adaptables a sus gustos, desde cuentos de hadas hasta colores vibrantes. ¡Las posibilidades son infinitas!",
      id: "Catalogirl",
    },
    {
      img: "https://drive.google.com/thumbnail?id=1fP6jMrW5tvSraYocLaNwCWxC5zVwjBck&sz=w1000",
      title: "NIÑOS",
      description:
        "Decora tu hogar con vinilos personalizados para los más pequeños, reflejando sus gustos, intereses y personalidades. ¡De cuentos mágicos a colores vibrantes, las opciones no tienen límites!",
      id: "Catalogboy",
    },
    {
      img: "https://drive.google.com/thumbnail?id=1y_KNMOm2hWfCiRqRfMF0_9i2wGCHL4-N&sz=w1000",
      title: "HOGAR",
      description:
        "Renueva tus paredes con vinilos decorativos únicos, reflejando tu estilo y creatividad. Transforma cualquier rincón de tu hogar con un toque moderno, cálido y personalizado.",
      id: "Cataloghome",
    },
    {
      img: "https://drive.google.com/thumbnail?id=1MElyHIDhwIiLTz-uX-bd4U--pVYbCdaP&sz=w1000",
      title: "FOTOMURALES",
      description:
        "Transforma tus paredes con fotomurales personalizados y de alta calidad que reflejan tu estilo. Crea espacios modernos, cálidos y únicos, ya sea en casa, oficina o local comercial.",
      id: "Catalogfotomural",
    },
  ];
  return (
    <section className="CatalogContainer">
      {catalogItems.map((item, index) => (
        <article key={index} className="CatalogContainer__article">
          <div className="CatalogContainer-text">
            <h3 id={item.id} className="CatalogContainer-text__h3">
              {item.title}
            </h3>
            <p className="CatalogContainer-text__p">{item.description}</p>
            <button className="CatalogContainer-text__button">Catálogo</button>
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
