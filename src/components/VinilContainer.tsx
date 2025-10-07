import { useQuery } from '@tanstack/react-query';
import { getVinilsByCategory } from '../services/vinilos';
import Skeleton from './Skeleton';
import OptimizedImage from './OptimizedImage';
import V from '../styles/VinilContainer.module.css';

const VinilContainer = ({ category }: { category: string; }) => {
  const {
    data: vinils = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['vinils', category],
    queryFn: () => getVinilsByCategory(category),
    staleTime: 10 * 60 * 1000, // Aumentado a 10 minutos
    gcTime: 30 * 60 * 1000, // Aumentado a 30 minutos
  });

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error al cargar los vinilos</div>;

  return (
    <section className={V.vinilContainer}>
      {vinils.map((vinil: { 
        id: number; 
        image: string; 
        name: string; 
        description: string; 
        price: string; 
      }) => (
        <article className={V.vinilCard} key={vinil.id}>
          <OptimizedImage
            src={vinil.image}
            alt={vinil.name}
            className={V.imgVinil}
            width={400}
            height={300}
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