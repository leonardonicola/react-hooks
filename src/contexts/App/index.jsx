import { createContext } from 'react';
import P from 'prop-types';
import globalState from './data';

export const GlobalContext = createContext();

/* GlobalContext vira um component que recebe um estado
(na flag Provider) que pode ser utilizado por qualquer componente. */

export const AppContext = ({ children }) => {
  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};
