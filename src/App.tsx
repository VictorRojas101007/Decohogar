import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import Catalog from "./components/Catalog";
import { useState } from "react";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="app-container">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue.trim() ? <> <SearchResults searchValue={searchValue} /> <Footer/> </>: <> <Main type="appContainer" doublespan={true} />
      <Catalog />
      <Footer /> </>}
      
    </div>
  );
}

export default App;
