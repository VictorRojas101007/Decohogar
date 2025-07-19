import { useEffect, useState } from "react";
import { searchVinil } from "../services/vinilos";
import V from "../styles/VinilContainer.module.css";
import Skeleton from "./Skeleton";

interface SearchResultsProps {
    searchValue: string;
}

interface Vinil {
    id: string | number;
    name: string;
    image: string;
    description: string;
    price: number | string;
}

const SearchResults = ({ searchValue }: SearchResultsProps) => {
    const [vinils, setVinils] = useState<Vinil[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchValue.trim()) {
            setLoading(true);
            const fetchData = async () => {
                try {
                    const response = await searchVinil(searchValue);
                    setVinils(response);
                } catch (error) {
                    console.error('Error al buscar vinilos:', error);
                    setVinils([]);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        } else {
            setVinils([]);
        }
    }, [searchValue]);

    if (loading) {
        return <Skeleton />;
    }

    if (searchValue.trim() && vinils.length === 0) {
        return (
            <div className={V.notFoundContainer}>
                <div className={V.descriptionContainer}>
                <p className={V.descriptionNotFound}>No se encontraron productos que coincidan con "{searchValue}"</p>
                </div>
            </div>
        );
    }

    return (
        <article className={V.vinilContainer}>
            {vinils.map((vinil) => {
                return (
                    <div className={V.vinilCard} key={vinil.id}>
                        <img className={V.imgVinil} src={vinil.image} alt={vinil.name} />
                        <h2>{vinil.name}</h2>
                        <p>{vinil.description}</p>
                        <p>Precio: {vinil.price}</p>
                    </div>
                )
            })}
        </article>
    );
};

export default SearchResults;