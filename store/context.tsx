// Define the context
import {createContext} from 'react';

export type projectType = {
    id : number,
    title : string, 
    desc : string, 
    image : string
}

type ProjectList = projectType[];

const MyContext = createContext<ProjectList | null >(null);

export default MyContext;

export const Projects : projectType[] = [
        {id : 1, title : 'project01', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : '/images/project/hard.png'},
        {id : 2, title : 'project02', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : '/images/project/salad.png'},
        {id : 3, title : 'project03', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : '/images/project/javascript.gif'},
    ];
