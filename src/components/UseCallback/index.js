import React from 'react';
import P from 'prop-types';
import { useCallback, useState } from 'react';

const Button = React.memo(({ increment }) => {
  console.log('BUTTON - renderizei');

  return <button onClick={() => increment(10)}>PLUS 10</button>;
});

Button.propTypes = {
  increment: P.func,
};

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('PARENT - renderizei');
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button increment={incrementCounter} />
    </div>
  );
};

export default UseCallback;
