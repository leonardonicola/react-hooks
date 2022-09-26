import { createContext } from 'react';

export const GlobalContext = createContext();

const globalState = {
  title: 'A título que tem contexto',
  counter: 0,
};

/* GlobalContext vira um component que recebe um estado
(na flag Provider) que pode ser utilizado por qualquer componente. */

export const AppContext = ({ children }) => {
  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};

