// import * as React from "react";
import "../styles/Main.css";
import Catalog from "./Catalog";

const Main = () => {
  return (
    <>
      <main className="mainContainer">
        <div className="mainContainer__title">
          <span className="mainContainer__h1">Decohogar</span>
          <span className="mainContainer__h1 vinil">Vinilos</span>
        </div>
      </main>
      <Catalog />
    </>
  );
};
export default Main;
