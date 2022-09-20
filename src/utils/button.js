import P from 'prop-types';

const Button = ({ increment }) => {
  console.log('BUTTON - renderizei');

  return <button onClick={() => increment(5)}>LOAD MORE</button>;
};

Button.propTypes = {
  increment: P.func,
};

export default Button;
