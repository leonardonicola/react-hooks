import Button from '../../utils/button'
import React, { useCallback, useState } from 'react';

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

/* useCallback é utilizado para salvar funções que não mudam */

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('PARENT - renderizei');
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button increment={incrementCounter}/>
    </div>
  );
};

export default UseCallback;
