import {createContext} from 'react';

export interface SkillProps{
    data : SKILL[];
}

export interface SKILL
  {
    id : number, 
    title : string, 
    image : string, 
    desc01 : string, 
    desc02 : string,
    desc03 : string
};
const MyContext = createContext<SKILL[]>([]);
//초기값
export default MyContext;