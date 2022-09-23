import {useContext} from 'react'
import { GlobalContext } from '../../../contexts/App';
export const H1 = () => {
    const theContext = useContext(GlobalContext);
    return (
        <h1>{theContext.title}</h1>
    );
  };


/* esse componente está buscando o estado global do context
no caso, a propriedade title */
