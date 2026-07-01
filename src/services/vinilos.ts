const pathFile = "/vinilos.json";

const normalizeCategory = (value: string = "") =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const optimizeCloudinaryUrl = (originalUrl: string, width = 400, quality = 'auto') => {
  // Extraer el public_id de la URL de Cloudinary
  const urlParts = originalUrl.split('/upload/');
  if (urlParts.length !== 2) return originalUrl;
  
  const [baseUrl, pathWithVersion] = urlParts;
  // Insertar transformaciones después de /upload/
  return `${baseUrl}/upload/w_${width},q_${quality},f_auto,c_fill/${pathWithVersion}`;
};

export const fetchVinilos = async () => {
  const response = await fetch(pathFile);
  if (!response.ok) {
    throw new Error("Error al cargar el archivo JSON");
  }
  return response.json();
};

export const getVinilsByCategory = async (category: string) => {
  const data = await fetchVinilos();
  const normalizedRequestedCategory = normalizeCategory(category);

  return data.vinilos
    .filter((vinil: { category?: string; categories?: string[] }) => {
      const categories = Array.isArray(vinil.categories)
        ? vinil.categories
        : vinil.category
          ? [vinil.category]
          : [];

      return categories.some((vinilCategory) => normalizeCategory(vinilCategory) === normalizedRequestedCategory);
    })
    .map((vinil: { idVinil: number; strImg: string; nameVinil: string; strDescription: string; }) => ({
      id: vinil.idVinil,
      image: optimizeCloudinaryUrl(vinil.strImg, 400),
      imageHD: vinil.strImg,
      name: vinil.nameVinil,
      description: vinil.strDescription,
      price: "Consultar precio"
    }));
};

export const searchVinilos = async (searchTerm: string) => {
  const data = await fetchVinilos();
  const filteredVinils = data.vinilos.filter((vinil: { strVinil: string; nameVinil: string; }) =>
    vinil.strVinil.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
    vinil.nameVinil.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
  return filteredVinils.map((vinil: { idVinil: number; strImg: string; nameVinil: string; strDescription: string; }) => ({
    id: vinil.idVinil,
    image: optimizeCloudinaryUrl(vinil.strImg, 400),
    name: vinil.nameVinil,
    description: vinil.strDescription,
    price: "Consultar precio"
  }));
};