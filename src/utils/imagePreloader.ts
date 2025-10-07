import { getVinilsByCategory } from "../services/vinilos";

export const preloadImages = (urls: string[]) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Usar en el componente principal para precargar las primeras imágenes
export const preloadFirstImages = async (category: string) => {
  try {
    const data = await getVinilsByCategory(category);
    const firstImages = data.slice(0, 4).map((vinil: { image: string; }) => vinil.image);
    preloadImages(firstImages);
  } catch (error) {
    console.warn('Error precargando imágenes:', error);
  }
};