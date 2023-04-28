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
        {id : 1, title : 'web-publishing-project', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : 'hard.png'},
        {id : 2, title : 'javascript-project', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : 'javascript.gif'},
        {id : 3, title : 'react-project', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : 'salad.png'},
        
    ];
