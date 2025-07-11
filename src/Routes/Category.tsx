import Header from "../components/Header"
import Main from "../components/Main"
import VinilContainer from "../components/VinilContainer";

interface CategoryProps {
    category: string;
}
const Category = ({category}:CategoryProps) => {
    return (
        <>
            <Header />
            <Main type="sectionContainer" category={category} />
            <VinilContainer category={category} />
        </>
    )
}
export default Category