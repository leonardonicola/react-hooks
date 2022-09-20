import {createContext} from 'react';
import P from 'prop-types'
import globalState from './data';

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};

AppContext.propTypes = {
  children: P.node
}