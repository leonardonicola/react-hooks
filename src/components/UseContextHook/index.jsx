import React from 'react';
import { AppContext } from '../../contexts/App';
import Div from './Div'
/* é necessario um objeto para utilizar useContext */
/* utiliza-se o React.createContext() que recebe um Provider (onde o objeto declarado
    anteriormente vai) value={objeto global} */

const index = () => {
  return (
    <AppContext>
        <Div/>
    </AppContext>
  );
};

export default index;
