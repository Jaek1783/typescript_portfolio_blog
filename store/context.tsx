// Define the context
import {createContext} from 'react';

export type projectType = {
    title : string, 
    titleDesc:string,
    date:string
    desc : string,
    desc2 : string, 
    address : string,
    image : string,
    isFeatured: boolean
}

type ProjectList = projectType[];

const MyContext = createContext<ProjectList | null >(null);

export default MyContext;

