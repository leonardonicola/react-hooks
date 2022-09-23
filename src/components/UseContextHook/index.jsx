import React from 'react';
import { AppContext } from '../../contexts/App';
import {H1} from './H1';

/* O H1 está buscando o contexto
e renderizando um elemento do estado global
com o uso do useContext que busca essas informações
pra gente. é necessario envolver o elemento que contem
o estado global com o component que tem o Provider */

const index = () => {
  return (
    <AppContext>
      <H1 />
    </AppContext>
  );
};

export default index;
