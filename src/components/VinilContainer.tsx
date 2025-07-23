import { useEffect, useState } from "react";
import { getVinils } from "../services/vinilos";
import V from "../styles/VinilContainer.module.css"
import Skeleton from "./Skeleton";

interface VinilContainerProps {
    category: string;
}

interface Vinil {
    id: string | number;
    name: string;
    image: string;
    description: string;
    price: number | string;
}

const VinilContainer = ({category}:VinilContainerProps) => {

const [vinils, setVinils] = useState<Vinil[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getVinils(category);
            setVinils(response);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching vinils:', error);
            setVinils([]);
        }
    };
    fetchData();
}, [category]);

return (

loading ? <Skeleton /> : 
<section className={V.vinilContainer}>
{vinils.map((vinil) =>{
    return (
        <article className={V.vinilCard} key={vinil.id}>
            <img className={V.imgVinil}  src={vinil.image} alt={vinil.name} loading="lazy" decoding="async" />
            <h2>{vinil.name}</h2>
            <p>{vinil.description}</p>
            <p>Precio: {vinil.price}</p>
        </article>
    )
} )}
</section>
)
};
export default VinilContainer;