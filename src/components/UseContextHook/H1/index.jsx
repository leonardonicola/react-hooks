import {useContext} from 'react'
import { GlobalContext } from '../../../contexts/App';
const H1 = () => {
    const theContext = useContext(GlobalContext);
    return <h1>{theContext.title}</h1>;
  };
export default H1