const pathFile="./public/vinilos.json"

export function searchVinil(searchTerm: string){
    return fetch(pathFile)
    .then((res)=>{
        if (!res.ok) { 
            throw new Error("Error al cargar el archivo JSON"); 
        } 
        return res.json();
    })
    .then((data)=>{
        const filteredVinils = data.vinilos.filter((vinil: { strVinil: string })=>vinil.strVinil.toLowerCase().includes(searchTerm.toLowerCase()))
        return filteredVinils.map((vinil: any) => ({
            id: vinil.idVinil,
            image: vinil.strImg,
            name: vinil.nameVinil,
            description: vinil.strDescription,
            price: "Consultar precio"
        }));
    });
};

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
            .filter((vinil: { category: any; })=>vinil.category===category)
            .map((vinil: any) => ({
                id: vinil.idVinil,
                image: vinil.strImg,
                name: vinil.nameVinil,
                description: vinil.strDescription,
                price: "Consultar precio" // o agregar precio al JSON
            }));
    });
};

