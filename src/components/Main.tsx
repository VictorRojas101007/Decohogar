// import * as React from "react";

import clsx from 'clsx';
import S from "../styles/Main.module.css"

interface MainProps {
  type: string;
  doublespan?: boolean;
  category?: string;
}

const Main = ({ type, doublespan=false, category}:MainProps) => {
const mainClassname= clsx(S.mainContainer, S[type])

  return (
    <>
      <main className={mainClassname}>
        {doublespan ? <div className={S.mainContainer__title}>
          <span className={S.mainContainer__h1}>Decohogar</span>
          <span className={clsx(S.mainContainer__h1, S.vinil)}>Vinilos</span> </div> : <div className={S.containerTitle}> <span className={clsx(S.mainContainer__h1, S.h1__alone)}>{category}</span></div>
        }
      </main>
    </>
  );
};
export default Main;
