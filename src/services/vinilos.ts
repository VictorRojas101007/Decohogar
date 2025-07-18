const pathFile="/vinilos.json" // Cambiar la ruta para que funcione correctamente

export function searchVinil(searchTerm: string){
    return fetch(pathFile)
    .then((res)=>{
        if (!res.ok) { 
            throw new Error("Error al cargar el archivo JSON"); 
        } 
        return res.json();
    })
    .then((data)=>{
        const filteredVinils = data.vinilos.filter((vinil: { strVinil: string; nameVinil: string })=>
            vinil.strVinil.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vinil.nameVinil.toLowerCase().includes(searchTerm.toLowerCase())
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return filteredVinils.map((vinil: any) => ({
            id: vinil.idVinil,
            image: vinil.strImg,
            name: vinil.nameVinil,
            description: vinil.strDescription,
            price: "Consultar precio"
        }));
    });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getVinils(category: any){
    return fetch(pathFile)
    .then((res)=>{
        if (!res.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return res.json();
    })
    .then((data)=>{
        return data.vinilos
            .filter((vinil: { category: string; })=>vinil.category===category)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((vinil: any) => ({
                id: vinil.idVinil,
                image: vinil.strImg,
                name: vinil.nameVinil,
                description: vinil.strDescription,
                price: "Consultar precio"
            }));
    });
};

