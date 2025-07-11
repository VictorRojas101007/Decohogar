import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main type="appContainer" doublespan={true} />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
