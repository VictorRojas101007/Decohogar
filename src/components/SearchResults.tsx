
import V from "../styles/VinilContainer.module.css";
import Skeleton from "./Skeleton";

import { useQuery } from '@tanstack/react-query';
import { searchVinilos } from '../services/vinilos';

const SearchResults = ({ searchValue }: SearchResultsProps) => {
  const {
    data: vinils = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['search', searchValue],
    queryFn: () => searchVinilos(searchValue),
    enabled: !!searchValue.trim(), // Solo ejecuta si hay término de búsqueda
    staleTime: 2 * 60 * 1000, // 2 minutos para búsquedas
  });

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error en la búsqueda</div>;
  if (searchValue.trim() && vinils.length === 0) {
    return (
      <div className={V.notFoundContainer}>
        <div className={V.descriptionContainer}>
          <p className={V.descriptionNotFound}>
            No se encontraron productos que coincidan con "{searchValue}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className={V.vinilContainer}>
      {vinils.map((vinil: { id: number; image: string; name: string; description: string; price: string; }) => (
        <div className={V.vinilCard} key={vinil.id}>
          <img 
            className={V.imgVinil} 
            src={vinil.image} 
            alt={vinil.name} 
            loading="lazy" 
            decoding="async" 
          />
          <h2>{vinil.name}</h2>
          <p>{vinil.description}</p>
          <p>Precio: {vinil.price}</p>
        </div>
      ))}
    </article>
  );
};

interface SearchResultsProps {
    searchValue: string;
}

export default SearchResults;