import { useEffect, useState } from "react";
import { getVinils } from "../services/vinilos";
import V from "../styles/VinilContainer.module.css"

interface VinilContainerProps {
    category: string;
}

// Define la interfaz para el objeto vinyl
interface Vinil {
    id: string | number;
    name: string;
    image: string;
    description: string;
    price: number | string;
}

const VinilContainer = ({category}:VinilContainerProps) => {

// Tipar el estado con la interfaz Vinil
const [vinils, setVinils] = useState<Vinil[]>([]);

useEffect(() => {
    const fetchData = async () => {
        const response = await getVinils(category);
        setVinils(response);
    };
    fetchData();
}, [category]);

return (
<article className={V.vinilContainer}>

{vinils.map((vinil) =>{
    return (
        <div className={V.vinilCard} key={vinil.id}>
            <img className={V.imgVinil}  src={vinil.image} alt={vinil.name} />
            <h2>{vinil.name}</h2>
            <p>{vinil.description}</p>
            <p>Precio: {vinil.price}</p>
        </div>
    )
} )}

</article>
)
};
export default VinilContainer;