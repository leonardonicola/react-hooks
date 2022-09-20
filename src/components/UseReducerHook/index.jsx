import React, { useReducer } from 'react';
import globalState from '../../contexts/App/data';

/* useReducer é utilizado geralmente com useContext para
melhor organização de código */

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Chamou muda');
      return { ...state, title: 'Mudou' };
    /* o que eu retornar dessa função é o novo globalState */
  }
  return { ...state };
};

const UseReducerHook = () => {
  /* estrutura parecida com useState */
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda' })}>Click</button>
    </div>
  );
};

export default UseReducerHook;
