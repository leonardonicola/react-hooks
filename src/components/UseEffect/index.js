import React from 'react';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('button clicked');
};

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  //executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //executa 1x
  useEffect(() => {
    console.log('componentDidMount');

    //componentWillUnmount - limpeza
    return () => {
      document.querySelector('button')?.removeEventListener('click', eventFn);
    };
  }, []);

  //executa toda vez que a dependência atualiza
  useEffect(() => {
    console.log('Contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default UseEffect;
