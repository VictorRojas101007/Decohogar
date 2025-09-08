const pathFile = "/vinilos.json";

export const fetchVinilos = async () => {
  const response = await fetch(pathFile);
  if (!response.ok) {
    throw new Error("Error al cargar el archivo JSON");
  }
  return response.json();
};

export const getVinilsByCategory = async (category: string) => {
  const data = await fetchVinilos();
  return data.vinilos
    .filter((vinil: { category: string; }) => vinil.category === category)
    .map((vinil: { idVinil: number; strImg: string; nameVinil: string; strDescription: string; }) => ({
      id: vinil.idVinil,
      image: vinil.strImg,
      name: vinil.nameVinil,
      description: vinil.strDescription,
      price: "Consultar precio"
    }));
};

export const searchVinilos = async (searchTerm: string) => {
  const data = await fetchVinilos();
  const filteredVinils = data.vinilos.filter((vinil: { strVinil: string; nameVinil: string; }) =>
    vinil.strVinil.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vinil.nameVinil.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredVinils.map((vinil: { idVinil: number; strImg: string; nameVinil: string; strDescription: string; }) => ({
    id: vinil.idVinil,
    image: vinil.strImg,
    name: vinil.nameVinil,
    description: vinil.strDescription,
    price: "Consultar precio"
  }));
};