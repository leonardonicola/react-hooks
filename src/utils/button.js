import P from 'prop-types';

const Button = ({ increment }) => {
  console.log('BUTTON - renderizei');

  return <button onClick={() => increment(10)}>PLUS 10</button>;
};

Button.propTypes = {
  increment: P.func,
};

export default Button;
