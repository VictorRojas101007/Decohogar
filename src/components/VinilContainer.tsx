import { useQuery } from '@tanstack/react-query';
import { getVinilsByCategory } from '../services/vinilos';
import Skeleton from './Skeleton';
import V from '../styles/VinilContainer.module.css';

const VinilContainer = ({ category }: { category: string; }) => {
  const {
    data: vinils = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['vinils', category],
    queryFn: () => getVinilsByCategory(category),
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  });

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error al cargar los vinilos</div>;

  return (
    <section className={V.vinilContainer}>
      {vinils.map((vinil: { id: number; image: string; name: string; description: string; price: string; }) => (
        <article className={V.vinilCard} key={vinil.id}>
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
        </article>
      ))}
    </section>
  );
};
export default VinilContainer;