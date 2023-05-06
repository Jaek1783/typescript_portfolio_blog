import {createContext} from 'react';
type SKILL = {id : number, title : string, image : string};
const MyContext = createContext<SKILL[]>([]);
//초기값
export default MyContext;