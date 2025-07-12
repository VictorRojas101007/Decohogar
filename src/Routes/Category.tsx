import { useState } from "react";
import Header from "../components/Header"
import Main from "../components/Main"
import VinilContainer from "../components/VinilContainer";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";

interface CategoryProps {
    category: string;
}
const Category = ({category}:CategoryProps) => {
      const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            {searchValue.trim() ? <> <SearchResults searchValue={searchValue} /> <Footer/> </> :   <>
            <Main type="sectionContainer" category={category} />
            <VinilContainer category={category} />
            <Footer />
            </>}
          
        </>
    )
}
export default Category